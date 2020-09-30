import React from "react";
// import { connect } from "react-redux";

export const DisplayTodo = ({ todo }) => {
  // const { todo } = props;
  console.log(todo.name);
  return (
    <div>
      {todo && (
        <div className="active-card">
          <h2>Active Todo</h2>
          <h2 className="red">{todo.name}</h2>
        </div>
      )}
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     todo: state.todo,
//   };
// };

export default DisplayTodo;
