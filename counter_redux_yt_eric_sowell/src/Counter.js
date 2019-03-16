import React from "react";
import { connect } from "react-redux";
import handleIncrement from "./action";
const Counter = props => {
  console.log("The props for this component are ", props);

  return (
    <div>
      <p>Count :{props.reducer.count} </p>
      <button onClick={props.handleIncrement}>Increment</button>
    </div>
  );
};

const mapStateToProps = state => {
  console.log(
    " We have the following props in Counter-mapStateToProps ",
    state
  );
  return state;
};

export default connect(
  mapStateToProps,
  {
    handleIncrement: handleIncrement
  }
)(Counter);
