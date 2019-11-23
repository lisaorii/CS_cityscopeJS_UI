import React from "react";
import PropTypes from "prop-types";

function DataButton(props) {
  const { buttonContent, onClick } = props;
  return (
    <button className="showcase-button" onClick={onClick}>
      {buttonContent}
    </button>
  );
}

DataButton.propTypes = {
  buttonContent: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default DataButton;
