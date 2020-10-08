import React, { useContext } from "react";
import { TodoContext } from "../context/Context";

export const DisplayTodo = () => {
  const context = useContext(TodoContext);
  const todo = context.state.todo;
  return (
    <>
      {todo && (
        <div className="active-card">
          <h2>Active Todo</h2>
          <h2 className="red">{todo.name}</h2>
        </div>
      )}
    </>
  );
};

export default DisplayTodo;
