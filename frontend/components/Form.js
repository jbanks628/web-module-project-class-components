import React from "react";

const initialForm = {
  textInput: "",
};

export default class Form extends React.Component {
  state = initialForm;

  onChange = (evt) => {
    const { value, id } = evt.target;
    console.log(value, id);
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
          value={this.state.textInput}
          placeholder="add task"
          // name="todo"
          type="text"
          id="textInput"
        />
        <input type="submit" placeholder="Add" />
      </form>
    );
  }
}
