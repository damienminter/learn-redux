import React from "react";
// import { selectTodoAction } from "../redux";
// import { connect } from "react-redux";

import ToDoItem from "./ToDoItem";

export const ListTodo2 = (props) => {
  const { todos } = props;

  // const selectTodo = (todo) => {
  //   props.selectTodoAction(todo);
  // };

  // onClick={selectTodo.bind(null, todo)}

  return (
    <div>
      {todos && todos.map((todo) => <ToDoItem key={todo.id} todo={todo} />)}
    </div>
  );
};

export default ListTodo2;

// connect(null, { selectTodoAction })

// {todos &&
//   todos.map((todo) => {
//     return <ToDoItem todo={todo} key={todo.id} />;
//   })}
