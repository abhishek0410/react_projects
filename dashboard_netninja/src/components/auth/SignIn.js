import React, { Component } from "react";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };

  handleonSubmit = e => {
    e.preventDefault();
  };

  handleonChange = e => {
    console.log("We are in the handleonChange and the event is : ", e);
    this.setState({ [e.target.id]: e.target.value });
  };
  render() {
    console.log(
      "We are in the /src/components/auth/SignIn.js and the props are : ",
      this.props
    );

    return (
      <div className="container">
        <form onSubmit={this.handleonSubmit}>
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <div className="input-field ">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleonChange} />
          </div>
          <div className="input-field ">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={this.handleonChange}
            />
          </div>

          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Login</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
