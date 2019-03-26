import React from "react";

const ProjectDetails = props => {
  // console.log(
  //   "We are in /src/proje3cts/ProjectDetails and the props are ",
  //   props
  // );
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title -{id}</span>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
            asperiores velit ipsa unde fugit, esse modi molestias quis,
            reiciendis, quasi consequuntur commodi provident vel labore dolorum
            soluta! Expedita, consequatur explicabo.
          </p>
        </div>
        <div className="card-action gret lighten-4 grey-text">
          <div>Posted by net Ninja</div>
          <div>2nd September 2 am </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
