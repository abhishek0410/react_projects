import authReducer from "./authReducer";
import projectReducer from "./projectReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  authReducer: authReducer,
  projectReducer: projectReducer,
  firestoreReducer: firestoreReducer,
  firebaseReducer: firebaseReducer //
});

export default rootReducer;
