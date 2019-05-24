import React, { Component } from 'react';
import { ResponsiveLine } from '@nivo/line';
import API from './utils/API';
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
// const data = [
//   {
//     "id": "japan",
//     // "color": "hsl(255, 70%, 50%)",
//     "data": [
//       {
//         "x": "plane",
//         "y": 15
//       },
//       {
//         "x": "helicopter",
//         "y": 10
//       },
//       {
//         "x": "boat",
//         "y": 131
//       },
//       {
//         "x": "train",
//         "y": 50
//       },
//       {
//         "x": "subway",
//         "y": 254
//       },
//       {
//         "x": "bus",
//         "y": 139
//       },
//       {
//         "x": "car",
//         "y": 170
//       },
//       {
//         "x": "moto",
//         "y": 128
//       },
//       {
//         "x": "bicycle",
//         "y": 195
//       },
//       {
//         "x": "horse",
//         "y": 150
//       },
//       {
//         "x": "skateboard",
//         "y": 271
//       },
//       {
//         "x": "others",
//         "y": 57
//       }
//     ]
//   }
// ];


class StockChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // dummy data to create the graph structure while waiting for the api request
      data: [
        {
          "id": "stock",
          // "color": "hsl(255, 70%, 50%)",
          "data": [
            {
              "x": "a",
              "y": 1
            },
            {
              "x": "b",
              "y": 1
            },
            {
              "x": "c",
              "y": 1
            },
            {
              "x": "d",
              "y": 1
            },
            {
              "x": "e",
              "y": 1
            },
            {
              "x": "f",
              "y": 1
            },
            {
              "x": "g",
              "y": 1
            },
            {
              "x": "h",
              "y": 1
            },
            {
              "x": "i",
              "y": 1
            },
            {
              "x": "j",
              "y": 1
            },
            {
              "x": "k",
              "y": 1
            },
            {
              "x": "l",
              "y": 2
            }
          ]
        }
      ]
    }
  }


  componentDidMount() {
    API.loadMultipleQuotes({ symbol: "aapl" })
      .then(res => {
        console.log(res.data)
        this.setState({
          data: res.data
        })
        // console.log(res.data)
      });
  };

  render() {
    return (
      <div style={{ height: '400px', width: '600px' }}>
        <h1>Chart</h1>
        {this.state && this.state.data.length > -1 && <ResponsiveLine
          data={this.state.data}
          margin={{ top: 50, right: 110, bottom: 80, left: 60 }}
          xScale={{ type: 'point' }}
          yScale={{ type: 'linear', stacked: true, min: 'auto', max: 'auto' }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            orient: 'bottom',
            tickSize: 0,
            tickPadding: 0,
            tickRotation: 90,
            legend: '',
            legendOffset: 70,
            legendPosition: 'middle'
          }}
          axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'price',
            legendOffset: -40,
            legendPosition: 'middle'
          }}
          colors={{ scheme: 'nivo' }}
          pointSize={10}
          pointColor={{ theme: 'background' }}
          pointBorderWidth={2}
          pointBorderColor={{ from: 'serieColor' }}
          pointLabel="y"
          pointLabelYOffset={-12}
          useMesh={true}
          legends={[
            {
              anchor: 'bottom-right',
              direction: 'column',
              justify: false,
              translateX: 100,
              translateY: 0,
              itemsSpacing: 0,
              itemDirection: 'left-to-right',
              itemWidth: 80,
              itemHeight: 20,
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: 'circle',
              symbolBorderColor: 'rgba(0, 0, 0, .5)',
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemBackground: 'rgba(0, 0, 0, .03)',
                    itemOpacity: 1
                  }
                }
              ]
            }
          ]}
        />}
        {/* {this.renderGraph()} */}
      </div>
    )
  }
  // renderGraph() {
  //   console.log(this.state.data)
  //   return 
  // }
};

export default StockChart;