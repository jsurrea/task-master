import React from "react";
import { useLocalStorage } from "./useLocalStorage";
import { AppUI } from "./AppUI";

import "./App.css";

function App() {
  const [todos, setTodos] = useLocalStorage();
  const [searchValue, setSearchValue] = React.useState("");

  // Sort parsedTodos such that items with completed=true come first
  todos.sort((a, b) =>
    a.completed === b.completed ? 0 : a.completed ? 1 : -1
  );

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchValue.toLowerCase())
  );

  const toggleTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    if (newTodos[todoIndex].completed) {
      newTodos.splice(todoIndex, 1);
      newTodos.unshift(todos[todoIndex]);
      newTodos[0].completed = false;
    } else {
      newTodos.splice(todoIndex, 1);
      newTodos.push(todos[todoIndex]);
      newTodos[todos.length - 1].completed = true;
    }
    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

  return (
    <AppUI
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      toggleTodo={toggleTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
