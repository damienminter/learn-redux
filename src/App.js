import React from "react";
import "./App.css";
import AddTodo from "./componenets/AddTodo";
import DisplayTodo from "./componenets/DisplayTodo";
import Header from "./componenets/Header";
import ListTodo from "./componenets/ListTodo";
import { useSelector } from "react-redux";

function App() {
  const todos = useSelector((state) => state.todos);
  const todo = useSelector((state) => state.todo);

  return (
    <div className="App">
      <Header />
      <DisplayTodo todo={todo} />
      <AddTodo />
      <div className="container">
        <ListTodo todos={todos} />
      </div>
    </div>
  );
}

export default App;
