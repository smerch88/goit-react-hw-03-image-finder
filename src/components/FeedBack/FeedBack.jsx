import React, { Component } from "react";
import PropTypes from "proptypes";

import Statistics from "./Statistics";
import FeedbackOptions from "./FeedbackOptions";
import Notification from "./Notification";

export default class FeedBack extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addRating = (e) => {
    const feedbackRating = e.target.id;
    this.setState((prevState) => ({
      [feedbackRating]: ++prevState[feedbackRating],
    }));
  };

  countTotalFeedback = ({ good, neutral, bad }) => good + neutral + bad;

  countPositiveFeedbackPercentage = ({ good, neutral, bad }) =>
    ((good * 100) / (good + neutral + bad)).toFixed(0);

  render() {
    return (
      <div>
        <h1>Please leave feedback</h1>
        <FeedbackOptions
          onLeaveFeedback={this.addRating}
          options={this.state}
        />
        {this.countTotalFeedback(this.state) === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback(this.state)}
            positivePercentage={this.countPositiveFeedbackPercentage(
              this.state
            )}
          />
        )}
      </div>
    );
  }
}

FeedBack.protoTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};
