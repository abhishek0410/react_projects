import React, { Component } from "react";
import { authSignInActionCreater } from "components/store/actions/authActionCreater.js";
import { Redirect } from "react-router";
import { connect } from "react-redux";
class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };

  handleonChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleonSubmit = event => {
    event.preventDefault();
    //console.log("In src/components/auth/SignIn.js handleonSubmit function");
    this.props.authSignInActionCreater(this.state);
  };
  render() {
    console.log(
      "In src/components/auth/SignIn.js ,the props are :",
      this.props
    );

    return (
      <div>
        {this.props.store.firebaseReducer.auth.email ? (
          <Redirect to="/" />
        ) : (
          <div className="contianer">
            <form onSubmit={this.handleonSubmit} className="white">
              <h5 className="grey-text text-darken-3">Sign In</h5>
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
                <button className="btnpink lighten-1 z-depth-0">Login</button>
                {/* Rendering the error message on login ,below :  */}
                <div className="red-text center">
                  {this.props.store.authReducer.authError ? (
                    <p> {this.props.store.authReducer.authError}</p>
                  ) : null}
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    authSignInActionCreater: credentials =>
      dispatch(authSignInActionCreater(credentials))
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
)(SignIn);
