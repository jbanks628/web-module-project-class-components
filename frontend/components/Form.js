import React from "react";

export default class Form extends React.Component {
  onChange = (evt) => {
    const { value, id } = evt.target;
    this.setState({
      ...this.state,
      [id]: value,
    });
  };
  render() {
    return (
      <form>
        <input
          onChange={this.onChange}
          value={this.props.textInput}
          placeholder="add task"
          name="todo"
          type="text"
        />
        <input type="submit" placeholder="Add" />
      </form>
    );
  }
}
