import React, { Component } from "react";

class CreateTodo extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    todo_description: "",
    todo_responsible: "",
    todo_priority: "",
    todo_completed: false
  };

  handleOnChange = e => {
    if (e.currentTarget.id === "description") {
      this.setState({ todo_description: e.currentTarget.value });
    } else if (e.currentTarget.id === "responsible") {
      this.setState({ todo_responsible: e.currentTarget.value });
    } else if (e.currentTarget.id === "priorityLow") {
      console.log("priorityLow radio button clicked");
      this.setState({ todo_priority: "Low" });
    } else if (e.currentTarget.id === "priorityMedium") {
      this.setState({ todo_priority: "Medium" });
    } else if (e.currentTarget.id === "priorityHigh") {
      this.setState({ todo_priority: "High" });
    }
    //else if (e.currentTarget.id === "CreateToDoButton") {

    // }

    //    console.log("Someone is typing something");
  };

  handleOnSubmit = e => {
    e.preventDefault();
    console.log(
      "Description : ",
      this.state.todo_description,
      " Responsible  : ",
      this.state.todo_responsible,
      "Priority :",
      this.state.todo_priority
    );
  };
  render() {
    return (
      <div style={{ marginTop: 20 }}>
        <h3>Create New Todo</h3>
        <form onSubmit={this.handleOnSubmit}>
          <div className="form-group">
            <label>Description :</label>
            <input
              type="text"
              id="description"
              className="form-control"
              value={this.state.todo_description}
              onChange={this.handleOnChange}
            />
          </div>

          <div className="form-group">
            <label>Responsible :</label>
            <input
              type="text"
              id="responsible"
              className="form-control"
              value={this.state.todo_responsible}
              onChange={this.handleOnChange}
            />
          </div>

          <div className="form-group">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityLow"
                checked={this.state.todo_priority === "Low"}
                onChange={this.handleOnChange}
              />
              <label className="form-check-label">Low</label>
            </div>
          </div>

          <div className="form-group">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityMedium"
                checked={this.state.todo_priority === "Medium"}
                onChange={this.handleOnChange}
              />
              <label className="form-check-label">Medium</label>
            </div>
          </div>

          <div className="form-group">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOp tions"
                id="priorityHigh"
                checked={this.state.todo_priority === "High"}
                onChange={this.handleOnChange}
              />
              <label className="form-check-label">High</label>
            </div>
          </div>
          <div className="form-group">
            <input
              type="Submit"
              id="CreateToDoButton"
              value="CreateToDo"
              className="btn btn-primary"
              // onSubmit={this.handleOnSubmit}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default CreateTodo;
