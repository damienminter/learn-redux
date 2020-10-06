import React from "react";
import "./App.css";
import AddTodo from "./componenets/AddTodo";
import DisplayTodo from "./componenets/DisplayTodo";
import Header from "./componenets/Header";
import ListTodo from "./componenets/ListTodo";
import { initialState } from "./context/data";

export const TodoContext = React.createContext(initialState);

export function App() {
  return (
    <div className="App">
      <TodoContext.Provider value={initialState}>
        <Header />
        <DisplayTodo />
        <AddTodo />
        <div className="container">
          <ListTodo />
        </div>
      </TodoContext.Provider>
    </div>
  );
}

export default App;
