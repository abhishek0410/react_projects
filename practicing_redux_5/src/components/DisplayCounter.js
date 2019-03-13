//Will fetch the data from reducer
import { connect } from "react-redux";
import React, { Component } from "react";
import {
  increment_the_counter_action,
  delete_the_counter_action
} from "../action";
import Actions from "../action";
class DisplayCounter extends Component {
  render() {
    return this.props.Reducer_counters.map(counter => {
      return (
        <div key={counter.id}>
          <span className="badge badge-primary">{counter.count}</span>
          <button
            onClick={() => this.props.increment_the_counter_action(counter)}
            className="btn btn-success"
          >
            Increment
          </button>
          <button
            onClick={() => this.props.delete_the_counter_action(counter)}
            className="btn btn-danger"
          >
            Delete
          </button>
        </div>
      );
    });
  }
}

const mapStateToProps = state => {
  return { Reducer_counters: state.Reducer_counters };
};

export default connect(
  mapStateToProps,
  {
    increment_the_counter_action: increment_the_counter_action,
    delete_the_counter_action: delete_the_counter_action
  }
)(DisplayCounter);
