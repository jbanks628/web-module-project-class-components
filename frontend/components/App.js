import React from "react";
import TodoList from "./TodoList";
import Form from "./Form";

export default class App extends React.Component {
  state = {
    list: [
      {
        task: "Make bed",
        id: 1,
        completed: false,
      },
      {
        task: "Do dishes",
        id: 2,
        completed: false,
      },
    ],
  };
  handleAddClick = (evt) => {
    this.setState({
      ...this.state,
    });
  };
  handleClearClick = (evt) => {
    const newTodo = this.state.list.filter((item) => {
      return !item.completed;
    });
    this.setState({
      ...this.state,
      completed: newTodo,
    });
  };
  render() {
    return (
      <div>
        <h1>Todo List App</h1>
        <Form />
        <TodoList task={this.state} />
        <button onClick={this.handleAddClick}>Add task</button>
        <button onClick={this.handleClearClick}>Clear Completed</button>
      </div>
    );
  }
}
