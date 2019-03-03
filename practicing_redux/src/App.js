import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import SongList from "./components/SongList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SongList />
      </div>
    );
  }
}

export default App;
