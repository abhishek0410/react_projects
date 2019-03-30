import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
const SignedInLinks = props => {
  console.log("In components/layout/SignedInLinks.js :Props are : ", props);
  return (
    <ul className="right">
      <li>
        {" "}
        <NavLink to="/newproject">New Project</NavLink>
      </li>
      <li>
        <NavLink to="/signin">
          {props.store.firebaseReducer.auth.email ? "Abhi" : "Sign In"}
        </NavLink>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating pink lighten-1">
          NN
        </NavLink>
      </li>
    </ul>
  );
};

const mapStateToProps = state => {
  return {
    store: state
  };
};

export default connect(mapStateToProps)(SignedInLinks);
