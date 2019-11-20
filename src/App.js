import React from "react";
import Radar from "./Radar/Radar";
import TreeMap from "./TreeMap/TreeMap";
import "./App.css";

const App = () => (
  <div className="rows">
    <Radar />
    <div>
      <TreeMap />
      <TreeMap />
    </div>
  </div>
);

export default App;
