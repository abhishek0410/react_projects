import { combineReducers } from "redux";

const intialState = [
  { id: "1", count: 0 },
  { id: "2", count: 0 },
  { id: "3", count: 0 },
  { id: "4", count: 0 }
];

const Reducer_currentCounterList = (state = intialState) => {
  // console.log("we are in the Reducer_currentCounterList");
  return state;
};

const Reducer_selected_counter_Increment = (state = intialState, action) => {
  // console.log("We are in the Reducer_selected_counter_Increment");

  if (action.type === "Incremement_the_counter") {
    //console.log("Increment reducer called with  ", action);

    //return action.payLoad;
    const new_intialState = state.map(counter => {});

    return Object.assign({}, state, {});
  }

  return null;
};

const Reducer_selected_counter_Delete = (counter = null, action) => {
  if (action.type === "Delete_the_Counter") {
    console.log("Delete reducer called with ", action);
  }
  return counter;
};

export default combineReducers({
  Reducer_currentCounterList: Reducer_currentCounterList,
  Reducer_selected_counter_Increment: Reducer_selected_counter_Increment,
  Reducer_selected_counter_Delete: Reducer_selected_counter_Delete
});
