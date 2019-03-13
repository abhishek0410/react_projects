import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Toone mere jaana ", duration: "4:30" },
    { title: "kabhi aw haqiraq", duration: "5:30" },
    { title: "kahani mohabbat ki ", duration: "6:30" },
    { title: "I want it that way ", duration: "1:46" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  //   console.log("selectedSongReducer called");

  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songsReducer: songsReducer,
  selectedSongReducer: selectedSongReducer
});
