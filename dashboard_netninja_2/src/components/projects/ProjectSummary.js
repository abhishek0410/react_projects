import React from "react";

const ProjectSummary = props => {
  // console.log(
  //   "In src/components/projects/ProjectSummary.js , the props are ",
  //   props
  // );
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title"> {props.project.title}</span>
        <p>{props.project.title}</p>
        <p className="grey-text">3rd September</p>
      </div>
    </div>
  );
};

export default ProjectSummary;
