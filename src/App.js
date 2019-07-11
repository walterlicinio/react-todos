import { BrowserRouter as Router, Route } from "react-router-dom";

import Todos from "./components/Todos";
import React, { Component } from "react";
import NewTodo from "./components/NewTodo";
import About from "./components/pages/About";

const uuidv1 = require("uuid/v1");

export default class App extends Component {
  state = {
    todos: [
      { id: 1, title: "Take out the trash", completed: false },
      { id: 2, title: "Wash the car", completed: false },
      { id: 3, title: "Cut the grass", completed: false }
    ]
  };

  markComplete = id => {
    this.setState(state => ({
      todos: state.todos.map(x => {
        if (x.id === id) {
          x.completed = !x.completed;
        }
        return x;
      })
    }));
  };

  delTodo = id => {
    this.setState(state => ({
      todos: state.todos.filter(x => x.id !== id)
    }));
  };

  newTodo = title => {
    const newTodo = {
      id: uuidv1(),
      title,
      completed: false
    };
    console.log(newTodo.id);
    this.setState(state => ({
      todos: [...this.state.todos, newTodo]
    }));
  };

  render() {
    return (
      <Router>
        <div
          className="App"
          style={{
            backgroundColor: "#e4e4e4",
            display: "flex",
            justifyContent: "center"
          }}
        >
          <div className="col-md-12" style={itemStyle}>
            <br />
            <a href="/">
              <img
                style={{ alignItems: "center", width: "120px" }}
                src={require("./prayer.svg")}
                alt="Minima-List"
              />
            </a>
            <h1>Minima-list</h1>
            <hr />

            <Route
              exact
              path="/"
              render={props => (
                <React.Fragment>
                  <nav>
                    A minimalistic todo-list application.{" "}
                    <a href="/about">About</a>.
                  </nav>
                  <hr />
                  <NewTodo newTodo={this.newTodo} />{" "}
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    delTodo={this.delTodo}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

//Style
const itemStyle = {
  backgroundColor: "#f4f4f4",
  color: "#555",
  height: "100vh",
  padding: "0px",
  textAlign: "center"
};
