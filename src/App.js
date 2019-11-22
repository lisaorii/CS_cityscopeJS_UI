import React from "react";
import TreeMap from "./TreeMap/TreeMap";
import SunburstWithTooltips from "./Sunburst/Sunburst";
import "./App.css";
import CityIO from "./cityIO/cityIO";

const App = () => (
  <div className="rows">
    <CityIO />
    <div>
      <TreeMap />
      <SunburstWithTooltips />
    </div>
  </div>
);

export default App;
