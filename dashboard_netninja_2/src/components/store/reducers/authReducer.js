import { Redirect } from "react-router";
import React from "react";
const initialState = {
  authError: null
};

const authReducer = (state = initialState, action) => {
  switch (
    action.type //This is irrelevant here and is written here just to test if this reducer is called here .
  ) {
    case "LOGIN_ERROR":
      console.log(
        "In the src/components/reducers/authReducer.js  : Login FAILED"
      );
      return {
        ...state,
        authError: "Login Fail"
      };
    case "LOGIN_SUCCESS":
      <Redirect to="/" />;
    // return {
    //   ...state,
    //   authError: null
    // };
    case "SIGNOUT_SUCCESS":
      console.log(
        "In the src/components/reducers/authReducer.js  : SIGNOUT_SUCCESS"
      );
      return {
        ...state,
        authError: null
      };
    case "SIGNUP_SUCCESS":
      console.log("signup success");
      return {
        ...state,
        authError: null
      };
    case "SIGNUP_ERROR":
      console.log("signup error");
      return {
        ...state,
        authError: null
      };
    default:
      return state;
  }
};

export default authReducer;
