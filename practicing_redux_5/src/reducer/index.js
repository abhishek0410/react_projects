import { combineReducers } from "redux";

const Reducer_counters = () => {
  const counter_list = [
    { id: "1", count: 0 },
    { id: "2", count: 0 },
    { id: "3", count: 0 },
    { id: "4", count: 0 }
  ];

  return counter_list;
};

const Reducer_selected_counter_Increment = (
  counter_selected = null,
  action
) => {
  if (action.type === "Incremement_the_counter") {
    console.log("Increment reducer called with  ", action);
    return action.payLoad;
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
  Reducer_counters: Reducer_counters,
  Reducer_selected_counter_Increment: Reducer_selected_counter_Increment,
  Reducer_selected_counter_Delete: Reducer_selected_counter_Delete
});
