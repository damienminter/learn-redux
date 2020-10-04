import { initialState } from "./data";
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, SELECT_TODO } from "./constants";

// Reducers
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [action.payload, ...state.todos],
      };
    case DELETE_TODO:
      console.log(action.payload);
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case TOGGLE_TODO:
      console.log("reducer fired");
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
