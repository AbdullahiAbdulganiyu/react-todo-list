import React, { useState } from "react";

export default function TodoInput() {
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
      <button>Add</button>
    </header>
  );
}
