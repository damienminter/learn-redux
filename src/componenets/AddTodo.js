import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoAction, selectTodoAction } from "../redux/actions";
import { v4 as uuidv4 } from "uuid";

const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const dispatchTodo = useDispatch();

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
    dispatchTodo(addTodoAction(newTodo));
    dispatchTodo(selectTodoAction(newTodo));
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
