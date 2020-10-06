import React from "react";
import "./App.css";
import AddTodo from "./componenets/AddTodo";
import DisplayTodo from "./componenets/DisplayTodo";
import Header from "./componenets/Header";
import ListTodo from "./componenets/ListTodo";
import { useSelector } from "react-redux";
import { initialState } from "./context/data";

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
