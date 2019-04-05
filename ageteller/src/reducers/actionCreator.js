const actionCreator = state => {
  //console.log("Handle Submit actionCreator clicked and state is : ", state);
  return {
    type: "DOB_submitted",
    payload: state
  };
};

export default actionCreator;
