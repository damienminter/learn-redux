import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { TodoContext } from "../App";

const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const context = useContext(TodoContext);

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim() === "") return;
    const newTodo = {
      id: uuidv4(),
      name: todo,
      complete: false,
    };
    context.todoDispatch({ type: "ADD_TODO", payload: newTodo });
    context.todoDispatch({ type: "SELECT_TODO", payload: newTodo });
    setTodo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="add-item">
        <input
          type="text"
          name="todo"
          placeholder="Add your todo"
          value={todo}
          onChange={handleChange}
          autoComplete="off"
        ></input>
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default AddTodo;
