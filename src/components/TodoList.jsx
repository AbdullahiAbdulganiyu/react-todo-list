import React from "react";

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
          <li className="todoItem" key={index}>
            {todo}
          </li>
        );
      })}
    </ul>
  );
}
