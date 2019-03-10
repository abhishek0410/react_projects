import React, { Component } from "react";

import "./App.css";
import axios from "axios";

class App extends Component {
  state = {
    data: ""
  };

  componentDidMount() {
    console.log("In the component Did mount");
    axios.get(`http://localhost:4000`).then(res => {
      const data = res.data;
      console.log("In the axios.get() ", res);
      this.setState({ data });
    });
  }

  render() {
    console.log("In the render method ", this.state.data);
    return (
      <div className="App">
        <h1>{this.state.data}</h1>
      </div>
    );
  }
}

export default App;
