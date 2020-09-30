import React from "react";
import "./App.css";
import AddTodo from "./componenets/AddTodo";
import DisplayTodo from "./componenets/DisplayTodo";
// import Header from "./componenets/Header";
import ListTodo from "./componenets/ListTodo";
import { connect } from "react-redux";

function App({ todo, todos }) {
  return (
    <div className="App">
      {/* <Header /> */}
      <DisplayTodo todo={todo} />
      <AddTodo />
      <ListTodo todos={todos} todo={todo} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    todo: state.todo,
  };
};

export default connect(mapStateToProps)(App);
