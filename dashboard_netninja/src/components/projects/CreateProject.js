import React, { Component } from "react";
import { createProject } from "H:/react_projects/dashboard_netninja/src/store/actions/projectActions";
import { connect } from "react-redux";
class CreateProject extends Component {
  state = {
    title: "",
    content: ""
  };

  handleonSubmit = e => {
    e.preventDefault();
    this.props.createProject(this.state);
    console.log(this.state);
  };

  handleonChange = e => {
    //  console.log("We are in the handleonChange and the event is : ", e);
    this.setState({ [e.target.id]: e.target.value });
  };
  render() {
    // console.log(
    //   "We are in the /src/components/auth/CreateProject.js and the props are : ",
    //   this.props
    // );

    return (
      <div className="container">
        <form onSubmit={this.handleonSubmit}>
          <h5 className="grey-text text-darken-3">Project Information</h5>
          <div className="input-field ">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleonChange} />
          </div>
          <div className="input-field ">
            <label htmlFor="content">Project Content</label>
            <textarea
              id="content"
              className="materialize-textarea"
              onChange={this.handleonChange}
            />
          </div>

          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Create</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createProject: project => dispatch(createProject(project))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CreateProject);
