import React, { useContext } from "react";
import ToDoItem from "./ToDoItem";
import { TodoContext } from "../App";

export const ListTodo = () => {
  const context = useContext(TodoContext);
  const todos = context.todos;
  return (
    <div>
      {todos && todos.map((todo) => <ToDoItem key={todo.id} todo={todo} />)}
    </div>
  );
};

export default ListTodo;
