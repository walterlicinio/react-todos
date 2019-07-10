import React, { Component } from "react";
import PropTypes from "prop-types";

export default class TodoItem extends Component {
  getTodoStyle = () => {
    return {
      background: this.props.todo.completed ? "#dfd" : "#ffe",
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    };
  };

  render() {
    const { id, title } = this.props.todo;

    return (
      //   <div className="btn-secondary">
      //     <p style={this.getTodoStyle()}>
      //       <input
      //         type="checkbox"
      //         onChange={this.props.markComplete.bind(this, id)}
      //       />{" "}
      //       {title}
      //     </p>
      // </div>
      <div
        className="btn-ternary btn-lg"
        style={this.getTodoStyle()}
        onClick={this.props.markComplete.bind(this, id)}
      >
        <p>
          {title}

          <button
            onClick={this.props.delTodo.bind(this, id)}
            style={btnStyle}
          />
        </p>
      </div>
    );
  }
}

const btnStyle = {
  background: "#ffaaaa",
  color: "#fff",
  border: "none",
  padding: "15px 15px ",
  float: "right",
  borderRadius: "50%",
  cursor: "pointer"
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};
