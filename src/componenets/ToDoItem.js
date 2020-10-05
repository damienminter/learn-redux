import React from "react";
import {
  selectTodoAction,
  deleteTodoAction,
  toggleTodoAction,
} from "../redux/actions";
import { useDispatch } from "react-redux";

export const ToDoItem = (props) => {
  const { todo } = props;

  const selectTodo = (todo) => {
    useDispatch(selectTodoAction(todo));
  };

  const deleteTodo = (todoId) => {
    useDispatch(deleteTodoAction(todoId));
  };

  const toggleTodo = (todoId) => {
    useDispatch(toggleTodoAction(todoId));
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
