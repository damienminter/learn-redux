import React from "react";
import "./App.css";
import AddTodo from "./componenets/AddTodo";
import DisplayTodo from "./componenets/DisplayTodo";
import Header from "./componenets/Header";
import ListTodo from "./componenets/ListTodo";
import Context from "./context/Context";

export function App() {
  return (
    <div className="App">
      <Context>
        <Header />
        <DisplayTodo />
        <AddTodo />
        <div className="container">
          <ListTodo />
        </div>
      </Context>
    </div>
  );
}

export default App;
