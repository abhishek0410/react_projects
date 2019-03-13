import React, { Component } from "react";
import { connect } from "react-redux";

import { selectSongAction } from "../actions";

class SongList extends Component {
  renderList() {
    return this.props.songsReducer.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSongAction(song)}
            >
              Select
            </button>
          </div>

          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    console.log("Inside the render method ", this.props);
    //return <h1>Testing</h1>;
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  console.log("In the mapStateToprops and the state is ", state);
  //console.log("In map stateToprops ", state.songsReducer);
  return { songsReducer: state.songsReducer };
  //return "Map state to props returns nothing";
};

export default connect(
  mapStateToProps,
  { selectSongAction: selectSongAction }
)(SongList);
