import Todos from "./components/Todos";

import React, { Component } from "react";

export default class App extends Component {
  state = {
    todos: [
      { id: 1, title: "Take out the trash", completed: false },
      { id: 2, title: "Wash the car", completed: false },
      { id: 3, title: "Cut the grass", completed: false }
    ]
  };

  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(x => {
        if (x.id === id) {
          x.completed = !x.completed;
        }
        return x;
      })
    });
  };

  delTodo = id => {
    const todosFiltered = this.state.todos.filter(x => x.id !== id);

    this.setState({
      todos: todosFiltered
    });
  };

  render() {
    return (
      <div
        className="App"
        style={{
          backgroundColor: "#e4e4e4",
          display: "flex",
          justifyContent: "center"
        }}
      >
        <div className="col-md-8" style={itemStyle}>
          <br />
          <h1>Minima-list</h1>
          <nav>A minimalistic todo-list application.</nav>
          <hr />
          <Todos
            todos={this.state.todos}
            markComplete={this.markComplete}
            delTodo={this.delTodo}
          />
        </div>
      </div>
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
