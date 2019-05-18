import React from 'react';
import { ResponsiveLine } from '@nivo/line';
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const data = [
  {
    "id": "japan",
    "color": "hsl(255, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 15
      },
      {
        "x": "helicopter",
        "y": 10
      },
      {
        "x": "boat",
        "y": 131
      },
      {
        "x": "train",
        "y": 50
      },
      {
        "x": "subway",
        "y": 254
      },
      {
        "x": "bus",
        "y": 139
      },
      {
        "x": "car",
        "y": 170
      },
      {
        "x": "moto",
        "y": 128
      },
      {
        "x": "bicycle",
        "y": 195
      },
      {
        "x": "horse",
        "y": 150
      },
      {
        "x": "skateboard",
        "y": 271
      },
      {
        "x": "others",
        "y": 57
      }
    ]
  },
  {
    "id": "france",
    "color": "hsl(333, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 249
      },
      {
        "x": "helicopter",
        "y": 12
      },
      {
        "x": "boat",
        "y": 86
      },
      {
        "x": "train",
        "y": 229
      },
      {
        "x": "subway",
        "y": 127
      },
      {
        "x": "bus",
        "y": 272
      },
      {
        "x": "car",
        "y": 127
      },
      {
        "x": "moto",
        "y": 60
      },
      {
        "x": "bicycle",
        "y": 27
      },
      {
        "x": "horse",
        "y": 277
      },
      {
        "x": "skateboard",
        "y": 229
      },
      {
        "x": "others",
        "y": 232
      }
    ]
  },
  {
    "id": "us",
    "color": "hsl(185, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 298
      },
      {
        "x": "helicopter",
        "y": 17
      },
      {
        "x": "boat",
        "y": 177
      },
      {
        "x": "train",
        "y": 282
      },
      {
        "x": "subway",
        "y": 225
      },
      {
        "x": "bus",
        "y": 65
      },
      {
        "x": "car",
        "y": 244
      },
      {
        "x": "moto",
        "y": 105
      },
      {
        "x": "bicycle",
        "y": 48
      },
      {
        "x": "horse",
        "y": 20
      },
      {
        "x": "skateboard",
        "y": 118
      },
      {
        "x": "others",
        "y": 299
      }
    ]
  },
  {
    "id": "germany",
    "color": "hsl(73, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 223
      },
      {
        "x": "helicopter",
        "y": 93
      },
      {
        "x": "boat",
        "y": 123
      },
      {
        "x": "train",
        "y": 121
      },
      {
        "x": "subway",
        "y": 49
      },
      {
        "x": "bus",
        "y": 184
      },
      {
        "x": "car",
        "y": 60
      },
      {
        "x": "moto",
        "y": 60
      },
      {
        "x": "bicycle",
        "y": 97
      },
      {
        "x": "horse",
        "y": 274
      },
      {
        "x": "skateboard",
        "y": 240
      },
      {
        "x": "others",
        "y": 220
      }
    ]
  },
  {
    "id": "norway",
    "color": "hsl(208, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 248
      },
      {
        "x": "helicopter",
        "y": 7
      },
      {
        "x": "boat",
        "y": 251
      },
      {
        "x": "train",
        "y": 67
      },
      {
        "x": "subway",
        "y": 184
      },
      {
        "x": "bus",
        "y": 195
      },
      {
        "x": "car",
        "y": 90
      },
      {
        "x": "moto",
        "y": 7
      },
      {
        "x": "bicycle",
        "y": 19
      },
      {
        "x": "horse",
        "y": 48
      },
      {
        "x": "skateboard",
        "y": 42
      },
      {
        "x": "others",
        "y": 294
      }
    ]
  }
];

class StockChart extends React.Component {
  render() {
    return (
      MyResponsiveLine = ({ data /* see data tab */ }) => (
        <ResponsiveLine
          data={data}
          margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
          xScale={{ type: 'point' }}
          yScale={{ type: 'linear', stacked: true, min: 'auto', max: 'auto' }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle'
          }}
          axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
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
        />
      )
    )
  }
};

export default StockChart;