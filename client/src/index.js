import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import Prediction from "./pages/Prediction/Prediction"

ReactDOM.render(<Prediction company={'googl'}/>, document.getElementById("root"));
registerServiceWorker();
