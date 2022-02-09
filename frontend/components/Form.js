import React from "react";
import axios from "axios";

const initialForm = {
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
  onSubmit = (evt) => {
    evt.preventDefault();
    const payloadToSend = { text: this.state.textInput };
    console.log(`here`);
    axios
      .post("http://localhost:9000/api/todos", payloadToSend)
      .then((res) => {
        debugger;
        this.setState({ ...this.state, list: res.data.name });
      })
      .catch((err) => {
        const apiErr = err.response.data.message;
        this.setState({ ...this.state, error: apiErr });
      });
  };
  render() {
    return (
      <form onSubmit={this.onSubmit}>
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
