import React, { useReducer } from "react";
import "./App.css";
import AddTodo from "./componenets/AddTodo";
import DisplayTodo from "./componenets/DisplayTodo";
import Header from "./componenets/Header";
import ListTodo from "./componenets/ListTodo";
import { initialState } from "./context/data";

import reducer from "./context/reducers";

export const TodoContext = React.createContext();

export function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <TodoContext.Provider
        value={{
          state: state,
          todoDispatch: dispatch,
        }}
      >
        <Header />
        <DisplayTodo />
        <AddTodo />
        <div className="container">
          <ListTodo />
        </div>
      </TodoContext.Provider>
    </div>
  );
}

export default App;
