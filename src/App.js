import React, { Component } from "react";
import { CircularGridLines, RadarChart } from "react-vis";
import DataButton from "./dataButton";
import "../node_modules/react-vis/dist/style.css";

const DOMAIN = [
  { name: "amazing city", domain: [0, 1] },
  { name: "validated innovation", domain: [0, 1] },
  { name: "predicted urban happiness", domain: [0, 1] },
  { name: "mix-use from heaven", domain: [0, 1] },
  { name: "cool buildings", domain: [0, 1] },
  { name: "fun crime levels", domain: [0, 1] },
  { name: "success to all", domain: [0, 1] },
  { name: "happy agents", domain: [0, 1] },
  { name: "parking for all", domain: [0, 1] },
  { name: "yes", domain: [0, 1] }
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
    data: generateData()
  };

  render() {
    const { data } = this.state;
    return (
      <div className="centered-and-flexed">
        <RadarChart
          animation
          data={data}
          domains={DOMAIN}
          style={{
            polygons: {
              fillOpacity: 0.2,
              strokeWidth: 2
            },
            axes: {
              text: {
                opacity: 0.5
              }
            },
            labels: {
              textAnchor: "middle",
              fontSize: 15
            }
          }}
          margin={{
            left: 200,
            top: 200,
            bottom: 200,
            right: 200
          }}
          width={700}
          height={700}
        >
          <CircularGridLines
            tickValues={[...new Array(10)].map((v, i) => i / 10 - 1)}
          />
        </RadarChart>
        <DataButton
          onClick={() => this.setState({ data: generateData() })}
          buttonContent={"UPDATE DATA"}
        />
      </div>
    );
  }
}
