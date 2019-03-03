import { combineReducers } from "redux";

const songsReducer = () => {
  // console.log("In songsReducer");
  return [
    { title: "No Scrubs", duration: "4:05" },
    { title: "Macarena", duration: "2:30" },
    { title: "All Star", duration: "3:15" },
    { title: "I want it that way ", duration: "1:45" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  // console.log("In selectedSongReducer");
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songReducer: songsReducer,
  selectedSongReducer: selectedSongReducer
});
