import React, { useState } from "react";

export default function TodoInput(props) {
  const { handleAddTodos, newTodo, setNewTodo } = props;

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
      <button
        onClick={() => {
          handleAddTodos(newTodo);
          setNewTodo("");
        }}
      >
        Add
      </button>
    </header>
  );
}
