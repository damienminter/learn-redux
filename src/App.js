import React from "react";
import "./App.css";
import AddTodo from "./componenets/AddTodo";
import DisplayTodo from "./componenets/DisplayTodo";
import Header from "./componenets/Header";
import ListTodo from "./componenets/ListTodo";

export function App() {
  return (
    <div className="App">
      <Header />
      <DisplayTodo />
      <AddTodo />
      <div className="container">
        <ListTodo />
      </div>
    </div>
  );
}

export default App;
