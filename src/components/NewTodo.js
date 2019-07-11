import React, { Component } from "react";

export default class NewTodo extends Component {
  state = {
    title: ""
  };

  onChange = e => this.setState({ title: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    this.props.newTodo(this.state.title);
    this.setState({ title: "" });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
        <input
          type="text"
          name="title"
          placeholder="Add item to list"
          style={{ flex: 10, padding: "20px" }}
          value={this.state.title}
          onChange={this.onChange}
        />
        <input
          type="submit"
          value="Submit"
          className="btn-lg"
          style={{ flex: 1 }}
        />
      </form>
    );
  }
}
