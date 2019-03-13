import React, { Component } from "react";

import "./App.css";
import DisplayCounters from "./DisplayCounter";

class App extends Component {
  render() {
    return (
      <div className="App">
        <DisplayCounters />
      </div>
    );
  }
}

export default App;
