import React, { Component } from "react";

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    firstname: "",
    lastname: ""
  };

  handleonSubmit = e => {
    e.preventDefault();
  };

  handleonChange = e => {
    console.log("We are in the handleonChange and the event is : ", e);
    this.setState({ [e.target.id]: e.target.value });
  };
  render() {
    // console.log(
    //   "We are in the /src/components/auth/SignUp.js and the props are : ",
    //   this.props
    // );

    return (
      <div className="container">
        <form onSubmit={this.handleonSubmit}>
          <h5 className="grey-text text-darken-3">Sign Up</h5>
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
          <div className="input-field ">
            <label htmlFor="firstname">First Name</label>
            <input type="text" id="firstname" onChange={this.handleonChange} />
          </div>
          <div className="input-field ">
            <label htmlFor="lastname">Last Name</label>
            <input type="text" id="lastname" onChange={this.handleonChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
