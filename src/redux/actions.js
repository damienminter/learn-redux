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
  console.log("action fired");
  return {
    type: "TOGGLE_TODO",
    payload: todoId,
  };
};

export const selectTodoAction = (todo) => {
  return {
    type: "SELECT_TODO",
    payload: todo,
  };
};
