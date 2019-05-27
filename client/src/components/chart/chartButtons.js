import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './chart.css';

const ChartButton = (props) => {
  return (
    <div className="chart-buttons" >
      <Button size="small" className="stock-symbol-btn" onClick={() => console.log(`clicked ${props.symbol}`)} >
        {props.symbol}
      </Button>
    </div>
  )
};

export default ChartButton;

// export function StockButtonList({ children }) {
//   return <ul className="list-group">{children}</ul>;
// }

// // RecipeListItem renders a bootstrap list item containing data from the recipe api call
// export function StockButton({ props }) {
//   return (
//     <li className="list-group-item">
//       <div className="chart-buttons" >
//         <Button className="stock-symbol-btn">{props.symbol}</Button>
//       </div>
//     </li>
//   );
// }
