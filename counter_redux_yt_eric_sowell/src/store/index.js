import { combineReducers } from "redux";

const initialState = {
  count: 4
};

const reducer = (state = initialState, action) => {
  //console.log("Reducer running ", action);
  if (action.type === "HandleIncrement") {
    //console.log("I am here ", state.count + 1);
    //console.log("The new state.count is ", state);
    return Object.assign({}, state, { count: state.count + 1 });
    //return state;
  }
  return state;
};

export default combineReducers({
  reducer: reducer
});
