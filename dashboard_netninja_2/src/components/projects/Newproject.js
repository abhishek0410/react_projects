import React, { Component } from "react";
import createProjectAction from "components/store/actions/createProjectAction";
import { connect } from "react-redux";
class Newproject extends Component {
  state = {
    title: "",
    content: ""
  };

  handleonChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleonSubmit = e => {
    e.preventDefault();

    //Call the createProjectAction
    this.props.createProjectAction(this.state);
  };
  render() {
    console.log(
      "In src/components/projects/Newproject.js and the props are :",
      this.props
    );
    return (
      <div className="container">
        <form onSubmit={this.handleonSubmit}>
          <h5 className="grey-text text-darken-3">Project Information</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleonChange} />
          </div>
          <div className="input-field">
            <label htmlFor="content">Project Content</label>
            <textarea
              id="content"
              className="materialize-textarea"
              onChange={this.handleonChange}
            />
          </div>
          <div className="input-field">
            <button className="btn pink lighte-1 z-depth-0">Create</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createProjectAction: project => dispatch(createProjectAction(project))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Newproject);
