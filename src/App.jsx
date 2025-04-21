import React from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  let todos = [
    "Go to the Gym",
    "Eat some food and vegies",
    "Pick up the Kids from School",
  ];
  return (
    <>
      <TodoInput />
      <TodoList todos={todos} />
    </>
  );
}

export default App;
