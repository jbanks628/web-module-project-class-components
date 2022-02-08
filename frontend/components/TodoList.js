import React from "react";
import Todo from "./Todo";
export default class TodoList extends React.Component {
  render() {
    return (
      <div>
        {this.props.task.list.map((item) => {
          return <Todo key={item.id} item={item} />;
        })}
      </div>
    );
  }
}
