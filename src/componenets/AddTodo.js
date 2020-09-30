import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodoAction } from "../redux";
import { v4 as uuidv4 } from "uuid";

const AddTodo = (props) => {
  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTodoAction({
      id: uuidv4(),
      name: todo,
      complete: false,
    });
    setTodo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="todo"
        placeholder="Add your todo"
        value={todo}
        onChange={handleChange}
      ></input>
      <button type="submit">Add</button>
    </form>
  );
};

export default connect(null, { addTodoAction })(AddTodo);
