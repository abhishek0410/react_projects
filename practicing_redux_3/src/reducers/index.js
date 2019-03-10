import { combineReducers } from "redux";
const songListReducer = () => {
  return [
    { song_name: "sandese aatein hai", movie_name: "LOC kargil" },
    { song_name: "aankhon mein tera hi chehra", movie_name: "Aryans" },
    { song_name: "kabhi ae haqiqat-e-munta", movie_name: "Alama Iqbal" },
    { song_name: "Maahi ve", movie_name: "kal ho na ho" }
  ];
};

const songSelectReducer = action => {
  return action.payload;
};

export default combineReducers({
  songListReducer: songListReducer
  //   songSelectReducer: songSelectReducer
});
