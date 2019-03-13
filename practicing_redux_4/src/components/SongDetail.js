import React, { Component } from "react";
import { connect } from "react-redux";

const SongDetail = props => {
  console.log("Props of SongDetail ", props);
  return <div>Song Detail</div>;
};

const mapStateToProps = state => {
  //console.log("mapStateToProps of songDetails ");
  return { selectedSongReducer: state.selectedSongReducer };
};

export default connect(mapStateToProps)(SongDetail);
