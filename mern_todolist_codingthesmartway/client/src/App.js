import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Todolist from "./components/ToDolist";

import CreateTodo from "./components/CreateTodo";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" />
            <Link to="/" className="navbar-brand">
              MERN-STACT Todo App
            </Link>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <Link to="/todos" className="nav-link">
                    Todos
                  </Link>
                </li>
                <li className="nav-item active">
                  <Link to="/create" className="nav-link">
                    Create
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          <Route path="/todos" exact component={Todolist} />
          <Route path="/create" component={CreateTodo} />
        </div>
      </Router>
    );
  }
}

export default App;
