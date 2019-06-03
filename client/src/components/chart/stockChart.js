import React, { Component } from 'react';
import { ResponsiveLine } from '@nivo/line';
import API from '.././utils/API';
import ChartButton from './chartButtons';
import Button from '@material-ui/core/Button';

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

class StockChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allData: [],
      // stockBtns: this.props.stockBtns,
      stockBtns: this.props.stockBtns,
      // dummy data to create the graph structure while waiting for the api request
      userStocks: this.props.userStocks,
      historicData: this.props.historicData
    }
  }


  componentDidMount() {
    console.log("stockBtns", this.state.stockBtns)
    console.log("historicData", this.state.historicData)
    // var stockSymbols = []
    // var stockArray = []
    // let temp;
    // this.state.userStocks.forEach(function(el) {
    //   stockSymbols.push(el.ticker)
      

    //   API.loadMultipleQuotes({ temp }).then(res => 
    //     this.setState({
    //       data: res.data,
    //       stockBtns: stockArray,
    //       allData: res.data
    //     }))
    // })
    // const userId = this.props.userId
    // var temp;

    // API.getQuotes({UserId: userId}).then(res => 
    //   // console.log(res.data),
    //   res.data.forEach(function(item) {
    //   stockSymbols.push(item.stock)
    //   stockArray.push({symbol:item.stock})
    //   console.log("item.stock: ", item.stock)
    //   })
    //   ).then(res => {
    //   temp = stockSymbols.toString()
    
        // })
  };

  // click event for stock chart buttons - will display the data for whichever stocks are chosen
  ChartButtonClick = (button) => {
    console.log(`click! ${button}`);
    API.loadSingleQuote({ symbol: button })
      .then(res => {
        console.log(res.data)
        this.setState({
          data: res.data,
        })
        // console.log(res.data)
      });
  };

  AllButtonClick = () => {
    // API.loadSingleQuote( this.state.stockBtns )
    //   .then(res => {
    //     console.log(res.data)
    //     this.setState({
    //       data: res.data
    //     })
    //     // console.log(res.data)
    //   });
    this.setState({data: this.state.allData})
  };

  render() {
    return (
      // <div style={{ height: '400px', width: '600px' }}>
      //   <h1>Chart</h1>
      //   {this.state && this.state.historicData.length > -1 && <ResponsiveLine
      //     data={this.state.historicData}
      //     margin={{ top: 50, right: 110, bottom: 80, left: 60 }}
      //     xScale={{ type: 'point' }}
      //     yScale={{ type: 'linear', stacked: false, min: 'auto', max: 'auto' }}
      //     axisTop={null}
      //     axisRight={null}
      //     axisBottom={{
      //       orient: 'bottom',
      //       tickSize: 0,
      //       tickPadding: 0,
      //       tickRotation: 90,
      //       legend: '',
      //       legendOffset: 50,
      //       legendPosition: 'middle'
      //     }}
      //     axisLeft={{
      //       orient: 'left',
      //       tickSize: 5,
      //       tickPadding: 5,
      //       tickRotation: 0,
      //       legend: 'price',
      //       legendOffset: -40,
      //       legendPosition: 'middle'
      //     }}
      //     colors={{ scheme: 'nivo' }}
      //     pointSize={10}
      //     pointColor={{ theme: 'background' }}
      //     pointBorderWidth={2}
      //     pointBorderColor={{ from: 'serieColor' }}
      //     pointLabel="y"
      //     pointLabelYOffset={-12}
      //     useMesh={true}
      //     legends={[
      //       {
      //         anchor: 'bottom-right',
      //         direction: 'column',
      //         justify: false,
      //         translateX: 100,
      //         translateY: 0,
      //         itemsSpacing: 0,
      //         itemDirection: 'left-to-right',
      //         itemWidth: 80,
      //         itemHeight: 20,
      //         itemOpacity: 0.75,
      //         symbolSize: 12,
      //         symbolShape: 'circle',
      //         symbolBorderColor: 'rgba(0, 0, 0, .5)',
      //         effects: [
      //           {
      //             on: 'hover',
      //             style: {
      //               itemBackground: 'rgba(0, 0, 0, .03)',
      //               itemOpacity: 1
      //             }
      //           }
      //         ]
      //       }
      //     ]}
      //   />}
      //   <Button onClick={() => this.AllButtonClick()} >All</Button>
        <div className='chart-buttons'>
          {this.state.stockBtns.map(button => (
            <ChartButton
              key={button.symbol + 111}
              symbol={button.symbol}
              ChartButtonClick={this.ChartButtonClick}
            />
          ))}
        </div>
      // </div>
    )
  }
};

export default StockChart;