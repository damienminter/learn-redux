import React from "react";
import ToDoItem from "./ToDoItem";

export const ListTodo = (props) => {
  const { todos } = props;

  return (
    <div>
      {todos && todos.map((todo) => <ToDoItem key={todo.id} todo={todo} />)}
    </div>
  );
};

export default ListTodo;
