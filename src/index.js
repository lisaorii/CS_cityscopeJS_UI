import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

var ghpages = require("gh-pages");
ghpages.publish("build", function(err) {});

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
