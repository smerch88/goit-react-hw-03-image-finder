import React, { Component } from "react";
import PropTypes from "prop-types";

export default class FeedbackOptions extends Component {
  render() {
    const { onLeaveFeedback, options } = this.props;
    return (
      <>
        <ul>
          {Object.keys(options).map((key) => (
            <li key={key}>
              <button id={key} onClick={onLeaveFeedback}>
                {key}
              </button>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.objectOf(PropTypes.number),
};
