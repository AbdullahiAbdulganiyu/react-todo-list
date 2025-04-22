import React, { useEffect, useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  function persistData(newList) {
    localStorage.setItem("todos", JSON.stringify({ todos: newList }));
  }

  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo];
    persistData(newTodoList);
    setTodos(newTodoList);
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index;
    });
    persistData(newTodoList);
    setTodos(newTodoList);
  }

  function handleEditTodo(index) {
    const todoToBeEdited = todos[index];
    setNewTodo(todoToBeEdited);
    handleDeleteTodo(index);
  }

  useEffect(() => {
    if (!localStorage) return;

    let localTodos = localStorage.getItem("todos");
    if (!localTodos) return;
    localTodos = JSON.parse(localTodos).todos;
    setNewTodo(localTodos);
  }, []);
  return (
    <>
      <TodoInput
        newTodo={newTodo}
        setNewTodo={setNewTodo}
        handleAddTodos={handleAddTodos}
      />
      <TodoList
        todos={todos}
        handleDeleteTodo={handleDeleteTodo}
        handleEditTodo={handleEditTodo}
      />
    </>
  );
}

export default App;
