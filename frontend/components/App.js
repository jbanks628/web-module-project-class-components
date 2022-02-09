import React from "react";
import TodoList from "./TodoList";
import Form from "./Form";

export default class App extends React.Component {
  state = {
    list: [
      {
        name: "Organize Garage",
        id: 1528817077286, // could look different, you could use a timestamp to generate it
        completed: false,
      },
      {
        name: "Bake Cookies",
        id: 1528817084358,
        completed: false,
      },
    ],
    textInput: "",
    error: "",
  };
  handleAddClick = () => {
    this.setState({
      ...this.state,
    });
  };
  handleClearClick = () => {
    const newTodo = this.state.list.filter((item) => {
      return !item.completed;
    });
    this.setState({
      ...this.state,
      completed: newTodo,
    });
  };
  render() {
    console.log(this.state);
    return (
      <div>
        <h1>Todo List App</h1>
        <TodoList task={this.state} />
        <Form textInput={this.state.textInput} />
        <button onClick={this.handleClearClick}>Clear Completed</button>
      </div>
    );
  }
}
