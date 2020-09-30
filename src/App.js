import React from "react";
import "./App.css";
import AddTodo from "./componenets/AddTodo";
import DisplayTodo from "./componenets/DisplayTodo";
// import Header from "./componenets/Header";
// import ListTodo from "./componenets/ListTodo";
import ListTodo2 from "./componenets/ListTodo2";
import { connect } from "react-redux";

function App({ todo, todos }) {
  return (
    <div className="App">
      {/* <Header /> */}
      <DisplayTodo todo={todo} />
      <AddTodo />
      <div className="container">
        {/* <ListTodo todos={todos} todo={todo} /> */}
        <ListTodo2 todos={todos} todo={todo} />
      </div>
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
