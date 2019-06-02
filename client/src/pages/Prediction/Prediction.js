import React, { Component } from "react";
import { Link, BrowserRouter as Router } from 'react-router-dom';

import { FormControl, InputLabel, Input } from '@material-ui/core/';


import Header from "../../components/header";
import { processData } from './helpers';
import { generateNextDayPrediction } from './helpers';
import { minMaxScaler } from './helpers';
import { minMaxInverseScaler } from './helpers';
// import { print } from './helpers';
import  Plot  from './plot';
import * as tf from "@tensorflow/tfjs";
import fetch from 'node-fetch';
import moment from 'moment';



const epochs = 100;
const timePortion = 7;

class Predict extends Component {
    constructor(props) {
        super(props);

        this.state = {
            trainYInverse: [],
            predictedXInverse: {
                data: []
            },
            labels: []
        }
    }

    componentDidMount(){
        let self = this;
        let url = `https://api.iextrading.com/1.0/stock/${this.props.company}/chart/1y`
        fetch(url)
        .then(res => res.json())
        .then(function(data) {
            // alert('data')
            self.setState({labels: data.map((val) => { return val['date'];}) })

            processData(data, timePortion).then(function (result) {

                // Crate the set for stock price prediction for the next day
                let nextDayPrediction = generateNextDayPrediction(result.originalData, result.timePortion);
                // Get the last date from the data set
                let predictDate = (new Date(self.state.labels[self.state.labels.length-1] + 'T00:00:00.000')).addDays(1);
    
                // Build the Convolutional Tensorflow model
                self.buildCnn(result).then(function (built) {
                    
                    // Transform the data to tensor data
                    // Reshape the data in neural network input format [number_of_samples, timePortion, 1];
                    let tensorData = {
                        tensorTrainX: tf.tensor1d(built.data.trainX).reshape([built.data.size, built.data.timePortion, 1]),
                        tensorTrainY: tf.tensor1d(built.data.trainY)
                    };
                    // Rember the min and max in order to revert (min-max scaler) the scaled data later 
                    let max = built.data.max;
                    let min = built.data.min;
                    
                    // Train the model using the tensor data
                    // Repeat multiple epochs so the error rate is smaller (better fit for the data)
                    self.cnn(built.model, tensorData, epochs).then(function (model) {
                        
                        // Predict for the same train data
                        // We gonna show the both (original, predicted) sets on the graph 
                        // so we can see how well our model fits the data
                        var predictedX = model.predict(tensorData.tensorTrainX);
                        
                        // Scale the next day features
                        let nextDayPredictionScaled = minMaxScaler(nextDayPrediction, min, max);
                        // Transform to tensor data
                        let tensorNextDayPrediction = tf.tensor1d(nextDayPredictionScaled.data).reshape([1, built.data.timePortion, 1]);
                        // Predict the next day stock price
                        let predictedValue = model.predict(tensorNextDayPrediction);
                        
                        // Get the predicted data for the train set
                        predictedValue.data().then(function (predValue) {
                            // Revert the scaled features, so we get the real values
                            let inversePredictedValue = minMaxInverseScaler(predValue, min, max);
    
                            // Get the next day predicted value
                            predictedX.data().then(function (pred) {
                                // Revert the scaled feature
                                self.setState({predictedXInverse: minMaxInverseScaler(pred, min, max)});
    
                                // Convert Float32Array to regular Array, so we can add additional value
                                this.state.predictedXInverse.data = Array.prototype.slice.call(this.state.predictedXInverse.data);
                                // Add the next day predicted stock price so it's showed on the graph
                                this.state.predictedXInverse.data[this.state.predictedXInverse.data.length] = inversePredictedValue.data[0];
    
                                // Revert the scaled labels from the trainY (original), 
                                // so we can compare them with the predicted one
                                self.setState({trainYInverse: minMaxInverseScaler(built.data.trainY, min, max)});
    
                                // Plot the original (trainY) and predicted values for the same features set (trainX)

                            });
                        });
                        
                    });
                    
                });
                
            });

        })
    }

    cnn(model, data, epochs) {
        console.log("MODEL SUMMARY: ")
        model.summary();

        return new Promise(function (resolve, reject) {
            try {
                // Optimize using adam (adaptive moment estimation) algorithm
                model.compile({ optimizer: 'adam', loss: 'meanSquaredError' });

                // Train the model
                model.fit(data.tensorTrainX, data.tensorTrainY, {
                    epochs: epochs
                }).then(function (result) {
                    /*for (let i = result.epoch.length-1; i < result.epoch.length; ++i) {
                        print("Loss after Epoch " + i + " : " + result.history.loss[i]);
                    }*/
                    // print("Loss after last Epoch (" + result.epoch.length + ") is: " + result.history.loss[result.epoch.length-1]);
                    resolve(model);
                })
            }
            catch (ex) {
                reject(ex);
            }
        });
    }

    buildCnn(data) {
        return new Promise(function (resolve, reject) {
    
            // Linear (sequential) stack of layers
            const model = tf.sequential();
    
            // Define input layer
            model.add(tf.layers.inputLayer({
                inputShape: [7, 1],
            }));
    
            // Add the first convolutional layer
            model.add(tf.layers.conv1d({
                kernelSize: 2,
                filters: 128,
                strides: 1,
                use_bias: true,
                activation: 'relu',
                kernelInitializer: 'VarianceScaling'
            }));
    
            // Add the Average Pooling layer
            model.add(tf.layers.averagePooling1d({
                poolSize: [2],
                strides: [1]
            }));
    
            // Add the second convolutional layer
            model.add(tf.layers.conv1d({
                kernelSize: 2,
                filters: 64,
                strides: 1,
                use_bias: true,
                activation: 'relu',
                kernelInitializer: 'VarianceScaling'
            }));
    
            // Add the Average Pooling layer
            model.add(tf.layers.averagePooling1d({
                poolSize: [2],
                strides: [1]
            }));
    
            // Add Flatten layer, reshape input to (number of samples, number of features)
            model.add(tf.layers.flatten({
    
            }));
    
            // Add Dense layer, 
            model.add(tf.layers.dense({
                units: 1,
                kernelInitializer: 'VarianceScaling',
                activation: 'linear'
            }));
    
            return resolve({
                'model': model,
                'data': data
            });
        });
    }

    render() {
        return(
            <div>
                <Header />
                <Plot
                    data1 = {this.state.trainYInverse.data}
                    data2 = {this.state.predictedXInverse.data}
                    label = {this.state.labels} />
            </div>
        );
    }
}

export default Predict;
