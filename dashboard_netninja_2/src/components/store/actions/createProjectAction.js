const createProjectAction = project => {
  console.log(
    "Inside components/store/actions/createProjectAction.js getState is "
  );
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const profile = "Abhishek";
    const authorId = "Singh";
    firestore
      .collection("projects")
      .add({
        ...project,
        authorFirstName: profile,

        authorId: authorId,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: "CREATE_PROJECT_SUCCESS" });
      })
      .catch(err => {
        dispatch({ type: "CREATE_PROJECT_ERROR" }, err);
      });
  };
  // dispatch({ type: "CREATE_PROJECT", project });
};

export default createProjectAction;
