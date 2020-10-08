import React, { useState, useReducer, useContext } from "react";
// import { useDispatch } from "react-redux";
// import { addTodoAction, selectTodoAction } from "../redux/actions";
import { v4 as uuidv4 } from "uuid";

// Import initial state from data
// import { initialState } from "../context/data";
import { TodoContext } from "../App";
import { initialState } from "../context/data";

// Create Reducer (can get from Redux reducers)
// function reducer(state = initialState, action) {
function reducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      console.log("ACTION: add todo fired");
      return {
        ...state,
        todos: [action.payload, ...state.todos],
      };
    case "SELECT_TODO":
      return {
        ...state,
        todo: action.payload,
      };
    default:
      return state;
  }
}

const AddTodo = () => {
  const [todo, setTodo] = useState("");
  // Add useReducer hook
  const context = useContext(TodoContext);
  const [state, dispatch] = useReducer(reducer, initialState);
  // const dispatchTodo = useDispatch();

  const handleChange = (e) => {
    setTodo(e.target.value);
    // console.log("HANDLE CHANGE" + state.todos);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim() === "") return;
    const newTodo = {
      id: uuidv4(),
      name: todo,
      complete: false,
    };
    dispatch({ type: "ADD_TODO", payload: newTodo });
    // dispatchTodo(addTodoAction(newTodo));
    // dispatchTodo(selectTodoAction(newTodo));
    setTodo("");
    console.log("HANDLE SUBMIT" + state.todos);
  };

  console.log("context");
  console.log(context);

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
