import React, { Component } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import "./App.css";
import { connect } from "react-redux";
import actionCreator from "reducers/actionCreator";
import Showage from "components/showage";
class App extends Component {
  state = {
    age: "",
    name: ""
  };

  handleonChange = e => {
    // console.log("Inside handleOnchange ", e.currentTarget.id);
    //console.log("Inside handleOnchange ", this.state);

    this.setState({ [e.currentTarget.id]: e.currentTarget.value });
  };

  handleOnSubmit = e => {
    e.preventDefault();
    console.log("Inside handleOnSubmit");

    this.props.handle_onClick_Submit(this.state);
  };

  render() {
    //console.log("In src/components/App.js and the props are  ", this.props);

    return (
      <div className="App">
        <h2>Input your BirthDay</h2>
        <Form>
          <FormControl id="age" onChange={this.handleonChange} type="number" />
          {""}
          <FormControl id="name" onChange={this.handleonChange} type="string" />
          {""}
          <Button onClick={this.handleOnSubmit}>Submit</Button>
        </Form>
        <Showage />
      </div>
    );
  }
}

const mapStateToProps = state => {
  //console.log("In src/components/App.js and the state is  ", state);

  return {
    dobReducer: "Hello code_word"
  };
};

const mapDispatchToProps = dispatch => {
  //console.log("In src/components/App.js and the dispatch is  ", dispatch);
  // return {
  //   handleSubmit: () => dispatch(actionCreator)
  // };

  return {
    handle_onClick_Submit: some_value => dispatch(actionCreator(some_value))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
