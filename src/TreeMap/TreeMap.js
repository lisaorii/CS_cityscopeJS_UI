import React from "react";
import { Treemap } from "react-vis";
import DataButton from "../dataButton";

function _getRandomData(total) {
  const totalLeaves = total || Math.random() * 20;
  const leaves = [];
  for (let i = 0; i < totalLeaves; i++) {
    leaves.push({
      name: total ? total : String(Math.random()).slice(0, 3),
      size: Math.random() * 1000,
      color: Math.random(),
      style: {
        border: "thin solid white"
      }
    });
  }

  let res = {
    title: "",
    color: 1,
    children: leaves
  };
  return res;
}

export default class TreeMap extends React.Component {
  state = {
    hoveredNode: false,
    treemapData: _getRandomData(20),
    useCirclePacking: false
  };

  render() {
    const { hoveredNode, useCirclePacking } = this.state;
    const treeProps = {
      animation: {
        damping: 1,
        stiffness: 200
      },
      data: this.state.treemapData,
      onLeafMouseOver: x => this.setState({ hoveredNode: x }),
      onLeafMouseOut: () => this.setState({ hoveredNode: false }),
      onLeafClick: () => this.setState({ treemapData: _getRandomData() }),
      height: 300,
      mode: this.state.useCirclePacking ? "circlePack" : "squarify",
      getLabel: x => x.name,
      width: 350
    };
    return (
      <div className="dynamic-treemap-example">
        <DataButton
          onClick={() => this.setState({ useCirclePacking: !useCirclePacking })}
          buttonContent={"TOGGLE CIRCLE PACK"}
        />
        <Treemap {...treeProps} />
        click above to the update data
        {hoveredNode && hoveredNode.value}
      </div>
    );
  }
}
