//Acts as the cental database :
//Here it has 2 departments primarily :
//1.) Songlist 2.)SelectedSong/CurrentSong
import React, { Component } from "react";
import { combineReducers } from "redux";

const SonglistReducer = () => {
  return [
    { title: "No Scrubs", duration: "4:05" },
    { title: "Macarena", duration: "2:30" },
    { title: "All Star", duration: "3:15" },
    { title: "I want it that way ", duration: "1:45" }
  ];
};

const SelectedSongReducer = (SelectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return SelectedSong;
};

export default combineReducers({
  SonglistReducer: SonglistReducer,
  SelectedSong: SelectedSongReducer
});
