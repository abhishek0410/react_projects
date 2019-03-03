import { createStore } from "redux";

const intialState = {
  count: 3
};

const reducer = (state = intialState, action) => {
  return state;
};
const store = createStore(reducer);

export default store;
