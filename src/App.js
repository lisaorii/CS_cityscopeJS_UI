import React from "react";
import Radar from "./Radar/Radar";
import TreeMap from "./TreeMap/TreeMap";
import SunburstWithTooltips from "./Sunburst/Sunburst";
import "./App.css";

const App = () => (
  <div className="rows">
    <Radar />
    <div>
      <TreeMap />
      <SunburstWithTooltips />
    </div>
  </div>
);

export default App;
