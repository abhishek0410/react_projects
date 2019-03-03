import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";
class SongList extends Component {
  renderList() {
    return this.props.songs.map(song => (
      <div className="content">
        <div className="item">
          {song.title}

          <button
            className="ui button primary"
            onClick={() => this.props.selectSong(song)}
          >
            Select
          </button>
        </div>
      </div>
    ));
  }

  render() {
    // console.log("SongList -Render method ", this.props);
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  // console.log("mapStateToProps-SongList.js -the state is ", state);
  return { songs: state.songReducer };
};

export default connect(
  mapStateToProps,
  { selectSong: selectSong }
)(SongList);
