import React, { Component } from "react";
import { Link, BrowserRouter as Router } from 'react-router-dom';
import "./Login.css";
import { FormControl, InputLabel, Input } from '@material-ui/core/';
import axios from 'axios';
import Header from '../header'
import { conv2dDerFilter } from "@tensorflow/tfjs";

let model = tf.sequential();
let epochs = 100;
let timePortion = 7;
let url = 'https://api.iextrading.com/1.0/stock/%company%/chart/1y'

const processData = function (data, timePortion) {
    return new Promise(function (resolve, reject) {
        let trainX = [], trainY = [], size = data.length;

        let features = [];
        for (let i = 0; i < size; i++) {
            features.push(data[i]['close']);
        }

        // Scale the values
        var scaledData = minMaxScaler(features, getMin(features), getMax(features));
        let scaledFeatures = scaledData.data;
     
        try {
            // Create the train sets
            for (let i = timePortion; i < size; i++) {

                for (let j = (i - timePortion); j < i; j++) {
                    trainX.push(scaledFeatures[j]);
                }

                trainY.push(scaledFeatures[i]);
            }

        } catch (ex) {
            resolve(ex);
            console.log(ex);
        }

        return resolve({
            size: (size - timePortion),
            timePortion: timePortion,
            trainX: trainX,
            trainY: trainY,
            min: scaledData.min,
            max: scaledData.max,
            originalData: features,
        })
    });
};


/*
    This will take the last timePortion days from the data
    and they will be used to predict the next day stock price
*/
const generateNextDayPrediction = function (data, timePortion) {
    let size = data.length;
    let features = [];

    for (let i = (size - timePortion); i < size; i++) {
        features.push(data[i]);
    }
    
    return features;
}

/*
    Scaling feature using min-max normalization.
    All values will be between 0 and 1
*/
const minMaxScaler = function (data, min, max) {

    let scaledData = data.map(function (value) {
        return (value - min) / (max - min);
    });
    
    return {
        data: scaledData,
        min: min,
        max: max
    }
}


/*
    Revert min-max normalization and get the real values
*/
const minMaxInverseScaler = function (data, min, max) {

    let scaledData = data.map(function (value) {
        return value * (max - min) + min;
    });

    return {
        data: scaledData,
        min: min,
        max: max
    }
}


/*
    Get min value from array
*/
const getMin = function (data) {
    return Math.min(...data);
} 


/*
    Get max value from array
*/
const getMax = function (data) {
    return Math.max(...data);
} 


/*
    Adds days to given date
*/
Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}


/*
    Add text in the html view
*/
const print = function (text) {
    let el = document.getElementsByClassName('cnn')[0];
    let elem = document.createElement('h5');
    elem.innerHTML = text;
    el.append(elem);
    el.append(document.createElement('br'))
    console.log(text)
};


/*
    Clear the html view
*/
const clearPrint = function () {
    let el = document.getElementsByClassName('cnn')[0];
    el.innerHTML = "";
}

class Prediction extends Component {
    constructor (props) {

    }
    cnn = function (model, data, epochs) {
        console.log("MODEL SUMMARY: ")
        model.summary()

        return new Promise(function(resolve, reject) {
            try {
                //Optimize using adam
                model.compile({ optimizer: 'adam', loss: "meanSquaredError" });

                model.fit(data.tensorTrainX, data.tensorTrainY, {
                    epochs: epochs
                }).then(function(result) {
                    print("Loss after last Epoch (" + result.epoch.length + ") is: " + result.history.loss[result.epoch.length-1]);
                    resolve(model);
                })
            }
            catch(ex) {
                reject(ex)
            }
        })
    }

    buildCNN = function(data) {
        return new Promise(function(resolve, reject) {
            

            //Define input layer
            model.add(tf.layers.inputLayer({
                inputShape: [7, 1]
            }));

            // Add Avg. Pooling layer
            model.add(tf.layers.conv1d({
                kernalSize: 2, 
                filters: 128,
                strides: 1,
                use_bias: true, 
                activation: 'relu',
                kernelInitializer: 'VarianceScaling'
            }));

            // Add teh second convolutional layer
            model.add(tf.layers.conv1d({
                kernalSize: 2, 
                filters: 64, 
                strides: 1, 
                use_bias: true,
                activation: 'relu',
                kernalInitializer: 'VarianceScaling'
            }));

            // Add the avg Pooling Layer
            model.add(tf.layers.averagePooling1d({
                poolSize: [2],
                strides: [1]
            }))

            // Add Flatten layer, reshape input to (number of samples, number of features)
            model.add(tf.layers.flatten({

            }))

            // Add Dense layer
            model.add(tf.layers.dense({
                units: 1, 
                kernelInitializer: 'VarianceScaling',
                activation: 'linear'
            }));

            return resolve({
                'model': model,
                'data': data
            })

        })
    }

    render() {
        return(
            <div>

            </div>
        );
    }

}