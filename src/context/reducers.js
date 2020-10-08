import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, SELECT_TODO } from "./constants";

export default function reducer(state, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [action.payload, ...state.todos],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, complete: !todo.complete }
            : todo
        ),
      };
    case SELECT_TODO:
      return {
        ...state,
        todo: action.payload,
      };
    default:
      return state;
  }
}
