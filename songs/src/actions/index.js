//Action creatkr
export const selectSong = song => {
  //Return action
  console.log(
    "Hello world ,selectSong reducers- .js and the song name is ",
    typeof song
  );
  return {
    type: "SONG_SELECTED",
    payload: song
  };
};
