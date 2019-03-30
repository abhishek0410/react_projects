import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "components/layout/Navbar";
import Dashboard from "components/dashboard/Dashboard";
import SignUp from "components/auth/SignUp";
import Newproject from "components/projects/Newproject";
import ProjectDetails from "components/projects/ProjectDetails";
import SignIn from "components/auth/SignIn";

import "./App.css";

class App extends Component {
  render() {
    //const {projects} = this.props;

    //  console.log("In the App.js and the props are : ", this.props);
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />

            <Route path="/signup" component={SignUp} />
            <Route path="/newproject" component={Newproject} />
            <Route path="/project/:id" component={ProjectDetails} />
            <Route path="/signin" component={SignIn} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
