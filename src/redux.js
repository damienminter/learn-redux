import { createStore } from "redux";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  todos: [
    {
      id: uuidv4(),
      name: "dummy todo 1",
      complete: false,
    },
    {
      id: uuidv4(),
      name: "dummy todo 2",
      complete: false,
    },
    {
      id: uuidv4(),
      name: "dummy todo 3",
      complete: true,
    },
  ],
  todo: {},
};

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Reducers
export function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [action.payload, ...state.todos],
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo !== action.payload),
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, complete: !todo.complete }
            : todo
        ),
      };
    case "SELECT_TODO":
      console.log("reducer working");
      return {
        ...state,
        todo: action.payload,
      };
    default:
      return state;
  }
}

// Actions
export const addTodoAction = (todo) => {
  return {
    type: "ADD_TODO",
    payload: todo,
  };
};

export const deleteTodoAction = (todoId) => {
  return {
    type: "DELETE_TODO",
    payload: todoId,
  };
};

export const toggleTodoAction = (todoId) => {
  return {
    type: "TOGGLE_TODO",
    payload: todoId,
  };
};

export const selectTodoAction = (todo) => {
  console.log("action fired");
  // console.log(todo);
  return {
    type: "SELECT_TODO",
    payload: todo,
  };
};
