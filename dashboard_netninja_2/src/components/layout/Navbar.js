import React from "react";

import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";

const Navbar = props => {
  console.log("In src/components/layout/Navbar.js :the props are ", props);

  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link className="brand-log" to="/">
          Abhi@shek for this space
        </Link>
        <SignedInLinks />
        <SignedOutLinks />
      </div>
    </nav>
  );
};

const mapStateToProps = state => {
  return {
    store: state
  };
};
export default connect(mapStateToProps)(Navbar);
