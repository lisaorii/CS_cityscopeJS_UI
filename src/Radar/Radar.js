import React, { Component } from "react";
import { CircularGridLines, RadarChart } from "react-vis";
import "../../node_modules/react-vis/dist/style.css";
import "./Radar.css";

const domainRange = [0, 1];
const DOMAIN = [
  { name: "amazing city", domain: domainRange },
  { name: "validated innovation", domain: domainRange },
  { name: "predicted urban happiness", domain: domainRange },
  { name: "mix-use in heaven", domain: domainRange },
  { name: "cool buildings", domain: domainRange },
  { name: "fun crime levels", domain: domainRange },
  { name: "success to all", domain: domainRange },
  { name: "happy agents", domain: domainRange },
  { name: "parking bliss", domain: domainRange },
  { name: "deep swarm chains", domain: domainRange }
];

let comparedData = {};
for (let i in DOMAIN) {
  comparedData[DOMAIN[i].name] = Math.random() * DOMAIN[i].domain[1];
}

function generateData() {
  let data = {};
  for (let i in DOMAIN) {
    data[DOMAIN[i].name] = Math.random() * DOMAIN[i].domain[1];
  }
  return [data, comparedData];
}

export default class AnimatedRadar extends Component {
  state = {
    data: generateData(),
    colorRange: ["#fc03ec", "#79C7E3"]
  };

  render() {
    const { data, colorRange } = this.state;
    return (
      <div className="Radar">
        <div className="rows">
          <h1>Radar™</h1>
          <div className="radarText">
            This is my radar. There are many like it, but this one is mine. It
            is my life. I must master it as I must master my life. Without me my
            radar is useless. Without my radar, I am useless. I must fire my
            radar true. I must radar better than the enemy who is trying to
            barchart me. I must radar him before he barchart me. I will. My
            radar and I know that what counts in science is not the indicators
            we measure, the noise of our burst, or the smoke we make. We know
            that it is the parameters that count. We will radar.
          </div>
        </div>

        <RadarChart
          onValueMouseOver={() => {
            this.setState({ data: generateData() });
          }}
          animation
          data={data}
          domains={DOMAIN}
          colorRange={colorRange}
          style={{
            polygons: {
              fillOpacity: 0.2,
              strokeWidth: 2
            },
            axes: {
              text: {
                opacity: 0,
                fontWeight: 500,
                fill: "white"
              },
              strokeWidth: 0.1
            },
            labels: {
              textAnchor: "middle",
              fontSize: 10,
              fontWeight: "100",
              fill: "white"
            }
          }}
          margin={{
            left: 100,
            top: 100,
            bottom: 100,
            right: 100
          }}
          width={450}
          height={450}
        >
          <CircularGridLines
            style={{
              fill: "white",
              fillOpacity: 0.1,
              backgroundColor: "#fff",
              opacity: 0.5,
              stroke: "#333333"
            }}
            tickValues={[...new Array(10)].map((v, i) => i / 10 - 1)}
          />
        </RadarChart>
      </div>
    );
  }
}
