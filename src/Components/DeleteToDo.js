import React from "react";

export const DeleteToDo = ({ todo, index, deleteTodo }) => {
  return (
    <div>
      <p class="note">
        {todo.text}
      </p>     
        <button class="deleteButton" onClick={() => deleteTodo(index)} >Delete Me</button>
    </div>
  );
};