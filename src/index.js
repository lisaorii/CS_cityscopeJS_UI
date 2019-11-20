import React from "react";
import ReactDOM from "react-dom";
import Radar from "./Radar/Radar";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<Radar />, document.getElementById("root"));
serviceWorker.unregister();
