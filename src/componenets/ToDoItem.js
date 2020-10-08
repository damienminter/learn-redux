import React, { useContext } from "react";
import { TodoContext } from "../App";
// import {
//   selectTodoAction,
//   deleteTodoAction,
//   toggleTodoAction,
// } from "../redux/actions";
// import { useDispatch } from "react-redux";

export const ToDoItem = (props) => {
  const { todo } = props;
  const context = useContext(TodoContext);
  // const dispatchTodo = useDispatch();

  const selectTodo = (todo) => {
    context.todoDispatch({ type: "SELECT_TODO", payload: todo });
    // dispatchTodo(selectTodoAction(todo));
  };

  const deleteTodo = (todoId) => {
    context.todoDispatch({ type: "DELETE_TODO", payload: todoId });
    // dispatchTodo(deleteTodoAction(todoId));
  };

  const toggleTodo = (todoId) => {
    context.todoDispatch({ type: "TOGGLE_TODO", payload: todoId });
    // dispatchTodo(toggleTodoAction(todoId));
  };

  return (
    <div className="list-todo" onClick={selectTodo.bind(null, todo)}>
      <div className="todo-body">
        <div className={todo.complete ? "complete" : null}>{todo.name}</div>
      </div>
      <div className="todo-footer">
        <div>
          <button
            className="completeBtn"
            onClick={toggleTodo.bind(null, todo.id)}
          >
            Done
          </button>
        </div>
        <div>
          <button
            className="deleteBtn"
            onClick={deleteTodo.bind(null, todo.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToDoItem;
