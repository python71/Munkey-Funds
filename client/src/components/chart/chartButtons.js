import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

const ChartButtons = (props) => {
  return (
    <div className="chart-buttons" >
      <Button className="stock-symbol-btn">{props.symbol}</Button>
    </div>
  )

};

export default ChartButtons;
