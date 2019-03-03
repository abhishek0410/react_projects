import React, { Component } from "react";
import { connect } from "react-redux";

class Counter extends Component {
  render() {
    return (
      <div>
        <h1>I am a counter</h1>
        <p>Count: {this.props.count}</p>
        <button>increment</button>
      </div>
    );
  }
}

// const Counter = props => {
//   // console.log("In the counter functional component");
//   return (
//     <div>
//       <h1>I am a counter</h1>
//       <p>Count: {props.count}</p>
//       <button>increment</button>
//     </div>
//   );
// };

const mapStateToProps = state => {
  console.log(state);
  return {
    count: state.count
  };
};
//export default Counter;
export default connect(mapStateToProps)(Counter);
