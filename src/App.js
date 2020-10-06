import React from "react";
import "./App.css";
import AddTodo from "./componenets/AddTodo";
import DisplayTodo from "./componenets/DisplayTodo";
import Header from "./componenets/Header";
import ListTodo from "./componenets/ListTodo";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

// Get initial state from redux data
const initialState = {
  todos: [
    {
      id: uuidv4(),
      name: "dummy todo 1",
      complete: false,
    },
    {
      id: uuidv4(),
      name: "dummy todo 2",
      complete: false,
    },
    {
      id: uuidv4(),
      name: "dummy todo 3",
      complete: true,
    },
  ],
  todo: { id: uuidv4(), name: "UseContext", complete: false },
};
console.log(initialState.todo);

// Create context and wrap App compontents in context provider and set value = initial state
export const TodoContext = React.createContext(initialState);

export function App() {
  const todos = useSelector((state) => state.todos);
  // const todo = useSelector((state) => state.todo);
  return (
    <div className="App">
      <TodoContext.Provider value={initialState}>
        <Header />
        <DisplayTodo />
        <AddTodo />
        <div className="container">
          <ListTodo todos={todos} />
        </div>
      </TodoContext.Provider>
    </div>
  );
}

export default App;
