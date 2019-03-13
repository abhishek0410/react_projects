import React, { Component } from "react";

import "./App.css";
import MovieList from "./components/MovieList";
import MovieSelected from "./components/MovieSelected";
import axios from "axios";

class App extends Component {
  state = {
    movieList: [],
    currentIdselected: ""
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
      console.log("Connecting to API on the net ", response.data[3]);
      this.setState({ movieList: response.data.slice(0, 7) });
    });
  }

  handleOnclick = id => {
    this.setState({ currentIdselected: id });
  };
  render() {
    return (
      <div className="ui container grid">
        <div className="ui row">
          <div className="column eight wide">
            <MovieList
              movieList={this.state.movieList}
              handleOnclick={this.handleOnclick}
            />
            <MovieSelected
              movieList={this.state.movieList}
              id={this.state.currentIdselected}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
