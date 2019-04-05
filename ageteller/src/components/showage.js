import React, { Component } from "react";
import { connect } from "react-redux";
class Showage extends Component {
  state = {};
  render() {
    console.log("Inside the component showage");
    return <h1>{this.props.storeReducer.age}</h1>;
  }
}
const mapStateToProps = state => {
  return {
    storeReducer: state
  };
};

export default connect(mapStateToProps)(Showage);
