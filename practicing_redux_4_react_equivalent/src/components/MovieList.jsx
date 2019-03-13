import React, { Component } from "react";

class MovieList extends Component {
  // state = {
  //   movieList: []
  // };

  // componentDidMount() {
  //   axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
  //     console.log("Connecting to API on the net ", response.data[3]);
  //     this.setState({ movieList: response.data.slice(0, 7) });
  //   });
  // }

  render() {
    return this.props.movieList.map(movieList => (
      <div className="ui divided list" key={movieList.id}>
        <div className="item">
          <div className="right floated content">
            <div className="content">{movieList.id}</div>
            <button
              onClick={() => this.props.handleOnclick(movieList.id)}
              className="ui button primary"
            >
              Select
            </button>
          </div>
        </div>
      </div>
    ));
  }
}

export default MovieList;

// {props.state.movielist.map((movieItem)=>(
//   <div className="item">
//   <div className="right floated content">
//     <button className="ui button primary">Select</button>
//   </div>
// </div>
//  )) }
