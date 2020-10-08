import React, { useReducer } from "react";
import { initialState } from "./data";
import reducer from "./reducers";

export const TodoContext = React.createContext();

export function Context(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <TodoContext.Provider
      value={{
        state: state,
        todoDispatch: dispatch,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

export default Context;
