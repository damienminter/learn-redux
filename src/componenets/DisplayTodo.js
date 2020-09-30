import React from "react";

export const DisplayTodo = ({ todo }) => {
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
