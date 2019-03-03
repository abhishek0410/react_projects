//Creating an Action , should be a button click or something

export const selectSong = song => {
  console.log("In the function selectSong ", song);
  return {
    type: "SONG_SELECTED",
    payload: song
  };
};
