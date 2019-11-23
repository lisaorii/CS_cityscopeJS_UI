import ScaleLoader from "react-spinners/ScaleLoader";
import { css } from "@emotion/core";
import React, { Component } from "react";

class Loader extends Component {
  render = () => (
    <ScaleLoader
      css={css`
        position: fixed;
        bottom: 5em;
      `}
      sizeUnit={"px"}
      height={20}
      width={20}
      radius={2}
      color={"white"}
      loading={this.props.loading}
    />
  );
}

export default Loader;
