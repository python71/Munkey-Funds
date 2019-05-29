/*
    Plot two arrays of data using Chart.js lib
*/
// export function plotData(data1, data2, label = null) {


    import React, { Component } from 'react'
    import Chart from "chart.js";
    // import classes from "./LineGraph.module.css";
    
    export default class Plot extends Component {
        constructor(props) {
            super(props);
        }

        chartRef = React.createRef();
        
        componentDidMount() {
            var N = this.props.label ? this.props.label : [...Array(Math.max(this.props.data1.length, this.props.data2.length)).keys()];
            const myChartRef = this.chartRef.current.getContext("2d");
            
            new Chart(myChartRef, {
                type: 'line',
                data: {
                    labels: N,
                    datasets: [{
                        label: 'Predicted',
                        fill: false,
                        backgroundColor: 'red',
                        borderColor: 'red',
                        data: this.props.data2,
                    }, {
                        label: 'Actual',
                        backgroundColor: 'blue',
                        borderColor: 'blue',
                        data: this.props.data1,
                        fill: false,
                    }]
                },
                options: {
                    responsive: true,
                    title: {
                        display: true,
                        text: 'Stock Price Prediction'
                    },
                    tooltips: {
                        mode: 'index',
                        intersect: false,
                    },
                    hover: {
                        mode: 'nearest',
                        intersect: true
                    },
                    scales: {
                        xAxes: [{
                            display: true,
                            scaleLabel: {
                                display: true,
                                labelString: 'Date'
                            }
                        }],
                        yAxes: [{
                            display: true,
                            scaleLabel: {
                                display: true,
                                labelString: 'Stock Value'
                            }
                        }]
                    }
                }
        
            });
        }
        render() {
            return (
                <div>
                    <canvas
                        id="myChart"
                        ref={this.chartRef}
                    />
                </div>
            )
        }
    }


// }    
