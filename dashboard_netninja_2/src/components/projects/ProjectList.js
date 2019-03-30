import React from "react";
import ProjectSummary from "./ProjectSummary";

import { Link } from "react-router-dom";
const ProjectList = props => {
  const { projects } = props;
  //   console.log(
  //     "In src/components/projects/ProjectList.js , the props are ",
  //     props
  //   );
  return (
    <div className="project-list section">
      {projects &&
        projects.map(project => {
          return (
            <Link to={"/project" + project.id}>
              <ProjectSummary key={project.id} project={project} />
            </Link>
          );
        })}
    </div>
    //<h1>ProjectList</h1>
  );
};

export default ProjectList;
