import React, { useContext } from "react";
import { TodoContext } from "../context/Context";
import {
  selectTodoAction,
  deleteTodoAction,
  toggleTodoAction,
} from "../context/actions";

export const ToDoItem = (props) => {
  const { todo } = props;
  const context = useContext(TodoContext);

  const selectTodo = (todo) => {
    context.todoDispatch(selectTodoAction(todo));
  };

  const deleteTodo = (todoId) => {
    context.todoDispatch(deleteTodoAction(todoId));
  };

  const toggleTodo = (todoId) => {
    context.todoDispatch(toggleTodoAction(todoId));
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
