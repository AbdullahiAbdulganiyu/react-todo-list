import React, { useState } from "react";

export default function TodoInput(props) {
  const { handleAddTodos } = props;
  const [newTodo, setNewTodo] = useState("");

  function handleNewTodo(e) {
    setNewTodo(e.target.value);
  }

  return (
    <header>
      <input
        type="text"
        placeholder="Enter todo..."
        value={newTodo}
        onChange={handleNewTodo}
      />
      <button onClick={handleAddTodos}>Add</button>
    </header>
  );
}
