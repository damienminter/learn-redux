import React from "react";
import { selectTodoAction } from "../redux";
import { connect } from "react-redux";

// import ToDoItem from "./ToDoItem";

export const ListTodo = (props) => {
  const { todos } = props;

  const selectTodo = (todo) => {
    props.selectTodoAction(todo);
  };

  // onClick={selectTodo.bind(null, todo)}

  return (
    <div>
      {todos &&
        todos.map((todo) => (
          <li
            className="list-todo"
            key={todo.id}
            onClick={selectTodo.bind(null, todo)}
          >
            <span>{todo.name}</span>
          </li>
        ))}
    </div>
  );
};

export default connect(null, { selectTodoAction })(ListTodo);

// {todos &&
//   todos.map((todo) => {
//     return <ToDoItem todo={todo} key={todo.id} />;
//   })}
