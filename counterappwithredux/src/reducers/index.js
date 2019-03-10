import { combineReducers } from "redux";

const counterReducer = () => {
  counters = [
    { counter_name: "Counter 1", counter_value: 1 },
    { counter_name: "Counter 2", counter_value: 2 },
    { counter_name: "Counter 3", counter_value: 3 }
  ];
};

const onClickReducer = counter => {};

export default combineReducers({
  counterReducer: counterReducer,
  onClickReducer: onClickReducer
});
