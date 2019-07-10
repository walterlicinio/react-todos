import React, { Component } from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

export default class Todos extends Component {
  render() {
    return this.props.todos.map(x => (
      <TodoItem
        key={x.id}
        todo={x}
        markComplete={this.props.markComplete}
        delTodo={this.props.delTodo}
      />
    ));
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired
};
