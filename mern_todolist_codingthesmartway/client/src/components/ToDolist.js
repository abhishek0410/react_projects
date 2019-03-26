import React, { Component } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

class TodoList extends Component {
  state = {
    todolist: []
  };

  componentDidMount() {
    const todolist = axios.get("http://localhost:5000/todos/").then(res => {
      // console.log("We got the following data from the server ", res.data);
      this.setState({ todolist: res.data });
    });
  }

  handleOnDelete = todoItem => {
    // const todoItemInquestion = this.state.todolist.find(todoListItem => {
    //   return todoListItem._id === id;
    // });
    console.log(todoItem);
    axios
      .put("http://localhost:5000/delete/" + todoItem._id)
      .then(() => this.componentDidMount());

    // axios.get("http://localhost:5000/todos/").then(res => {
    //   console.log("rerendering again");
    //   this.setState({ todolist: res.data });
    // });
  };
  render() {
    return (
      <div>
        <h3>TodoList </h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Description</th>

              <th>Responsible</th>
              <th>Priority</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.todolist.map(todoItem => (
              <tr>
                <td>{todoItem.todo_description}</td>
                <td>{todoItem.todo_responsible}</td>
                <td>{todoItem.todo_priority}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => {
                      this.handleOnDelete(todoItem);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TodoList;
