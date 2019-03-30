import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
const ProjectDetails = props => {
  console.log(
    "props.store.firestoreReducer.ordered.projects: ",
    props.store.firestoreReducer.ordered.projects
  );

  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project title </span>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    store: state
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects" }])
)(ProjectDetails);
