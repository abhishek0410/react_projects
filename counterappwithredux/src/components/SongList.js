import React, { Component } from "react";
import { connect } from "react-redux";
class SongList extends Component {
  render() {
    return (
      <div>
        <h1>Hello world , this is a SongList Component</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {};

export default connect(mapStateToProps);
