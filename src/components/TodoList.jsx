import React from "react";
import TodoCard from "./TodoCard";

export default function TodoList() {
  let todos = [
    "Go to the Gym",
    "Eat some food and vegies",
    "Pick up the Kids from School",
  ];
  return (
    <ul className="main">
      {todos.map((todo, index) => {
        return (
          <TodoCard key={index}>
            <p>{todo}</p>
          </TodoCard>
        );
      })}
    </ul>
  );
}
