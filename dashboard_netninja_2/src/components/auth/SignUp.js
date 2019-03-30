import React, { Component } from "react";
import { connect } from "react-redux";
import { authSignUpActionCreater } from "components/store/actions/authActionCreater.js";

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: ""
  };

  handleOnSubmit = e => {
    // console.log("Inside the handleOnSubmit");
    e.preventDefault();
    this.props.authSignUpActionCreater(this.state);
  };

  handleonChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleOnSubmit}>
          <h5 className="grey-text text-darken-3">SignUp</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input onChange={this.handleonChange} type="email" id="email" />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              onChange={this.handleonChange}
              type="password"
              id="password"
            />
          </div>
          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input
              onChange={this.handleonChange}
              type="firstName"
              id="firstName"
            />
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input
              onChange={this.handleonChange}
              type="lastName"
              id="lastName"
            />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
          </div>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    authSignUpActionCreater: newUser =>
      dispatch(authSignUpActionCreater(newUser))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(SignUp);
