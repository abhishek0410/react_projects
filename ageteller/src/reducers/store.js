const intialState = {
  newDate: ""
};

const dobReducer = (state = intialState, action) => {
  switch (action.type) {
    case "DOB_submitted":
      console.log(" In src/reducers/store.js : DOB_submitted");
      state = action.payload;
      break;
    default:
      state = intialState;
  }
  return state;
};

export default dobReducer;
