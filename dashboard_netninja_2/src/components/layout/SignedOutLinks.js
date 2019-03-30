import React from "react";
import { NavLink } from "react-router-dom";
import { authSignOutActionCreater } from "components/store/actions/authActionCreater.js";

import { connect } from "react-redux";

const SignedOutLinks = props => {
  console.log("In components/layout/SignedOutLinks.js :Props are : ", props);

  return (
    <ul className="right">
      {props.store.firebaseReducer.auth.email ? null : (
        <li>
          <NavLink to="/signup">SignUp</NavLink>
        </li>
      )}
      {/* <li>
        <NavLink to="/signup">SignUp</NavLink>
      </li> */}
      <li>
        <NavLink onClick={props.authSignOutActionCreater} to="/logout">
          LogOut
        </NavLink>
      </li>
    </ul>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    authSignOutActionCreater: () => dispatch(authSignOutActionCreater())
  };
};

const mapStateToProps = state => {
  return {
    store: state
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignedOutLinks);
