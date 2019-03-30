import React, { Component } from "react";
import Notifications from "./Notification";
import ProjectList from "components/projects/ProjectList";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router";

import { connect } from "react-redux";

class Dashboard extends Component {
  render() {
    console.log(
      "In src/components/dashboard/Dashboard.js : The props are :",
      this.props.store
    );
    return (
      <div>
        {this.props.store.firebaseReducer.auth.email ? (
          <div className="dashboard container">
            <div className="row">
              <div className="col s12 m6">
                <ProjectList
                  projects={this.props.store.firestoreReducer.ordered.projects}
                />
              </div>
              <div className="col s12 m5 offset-m1">
                <Notifications />
              </div>
            </div>
          </div>
        ) : (
          <Redirect to="/signin" />
        )}
      </div>

      // <div className="dashboard container">
      //   <div className="row">
      //     <div className="col s12 m6">
      //       <ProjectList
      //         projects={this.props.store.firestoreReducer.ordered.projects}
      //       />
      //     </div>
      //   </div>
      // </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    store: state
  };
};

//export default connectY(mapStateToProps)(Dashboard);

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects" }])
)(Dashboard);
