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