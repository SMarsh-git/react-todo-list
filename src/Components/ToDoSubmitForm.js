import { useState } from "react";

export const ToDoSubmitForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (submit) => {
    submit.preventDefault();
  ///  if (value === "")                    COMMENTED OUT FOR TESTING PRUPOSES
  ///    return value;                      COMMENTED OUT FOR TESTING PRUPOSES
      addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          value={value}
          onChange={(newValue) => setValue(newValue.target.value)}
          placeholder="   Write your task here." />
      </div>
      <button type="submit">Add Me</button>
    </form>
  );
};