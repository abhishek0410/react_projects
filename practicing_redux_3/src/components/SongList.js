import React, { Component } from "react";
import { connect } from "react-redux";
import songSelectAction from "../actions";

class SongList extends Component {
  render() {
    console.log("In the SongList");
    return this.props.songs.map(song => (
      <div className="content">
        <div className="item">
          {song.song_name}
          <button
            className="ui button primary"
            onClick={() => this.props.songSelectAction(song)}
          >
            SELECT
          </button>
        </div>
      </div>
    ));
  }
}

const mapStateToProps = state => {
  return {
    songs: state.songListReducer
  };
};

export default connect(
  mapStateToProps,

  { songSelectAction: songSelectAction }
)(SongList);
