const createProject = project => {
  return (dispatch, getState) => {
    dispatch({ type: "CREATE_PROJECT", project });
  };
};

export { createProject };
