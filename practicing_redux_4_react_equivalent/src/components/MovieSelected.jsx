import React, { Component } from "react";

class MovieSelected extends Component {
  state = {};

  render() {
    const movie_selected = this.props.movieList.find(movie => {
      return movie.id === this.props.id;
    });
    console.log(movie_selected);
    return null;
  }
}

export default MovieSelected;
