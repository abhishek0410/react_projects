const songSelectAction = song => {
  console.log("The selected song is ", song);

  return {
    type: "SONG_SELECTED",
    payload: song
  };
};
export default songSelectAction;
