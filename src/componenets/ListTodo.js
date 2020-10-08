import React, { useContext } from "react";
import ToDoItem from "./ToDoItem";
// import { TodoContext } from "../App";
import { TodoContext } from "../context/Context";

export const ListTodo = () => {
  const context = useContext(TodoContext);
  const todos = context.state.todos;
  console.log(todos);
  return (
    <div>
      {todos && todos.map((todo) => <ToDoItem key={todo.id} todo={todo} />)}
    </div>
  );
};

export default ListTodo;
