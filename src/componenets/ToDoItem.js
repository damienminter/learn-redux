import React from "react";
import { selectTodoAction } from "../redux";
import { connect } from "react-redux";

export const ToDoItem = (props) => {
  console.log(props);

  const { todo } = props;

  const selectTodo = (todo) => {
    props.selectTodoAction(todo);
  };

  return (
    <li className="list-todo" onClick={selectTodo.bind(null, todo)}>
      <span>{todo.name}</span>
    </li>
  );
};

export default connect(null, { selectTodoAction })(ToDoItem);
