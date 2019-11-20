import React, { Component } from "react";
import { CircularGridLines, RadarChart } from "react-vis";
import DataButton from "../dataButton";
import "../../node_modules/react-vis/dist/style.css";
import "./Radar.css";

const DOMAIN = [
  { name: "amazing city", domain: [0, 1] },
  { name: "validated innovation", domain: [0, 1] },
  { name: "predicted urban happiness", domain: [0, 1] },
  { name: "mix-use in heaven", domain: [0, 1] },
  { name: "cool buildings", domain: [0, 1] },
  { name: "fun crime levels", domain: [0, 1] },
  { name: "success to all", domain: [0, 1] },
  { name: "happy agents", domain: [0, 1] },
  { name: "parking for all", domain: [0, 1] },
  { name: "yes we no", domain: [0, 1] }
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
                opacity: 0,
                fontWeight: 500,
                fill: "white"
              },
              strokeWidth: 0.1
            },
            labels: {
              textAnchor: "middle",
              fontSize: 10,
              fontWeight: "bolder",
              fill: "white"
            }
          }}
          margin={{
            left: 100,
            top: 100,
            bottom: 100,
            right: 100
          }}
          width={500}
          height={500}
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
        <DataButton
          onClick={() => this.setState({ data: generateData() })}
          buttonContent={"UPDATE DATA"}
        />
      </div>
    );
  }
}
