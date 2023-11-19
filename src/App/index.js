import React from "react";
import { useLocalStorage } from "./useLocalStorage";
import { AppUI } from "./AppUI";

import "./App.css";

const defaultTodos = [
  { text: "Complete morning workout 🏋️‍♂️", completed: false },
  { text: "Write project proposal 📝", completed: false },
  { text: "Grocery shopping 🛒", completed: false },
  { text: "Learn a new recipe 👩‍🍳", completed: false },
  { text: "Take a hike nearby 🌳", completed: false },
  { text: "Read a chapter of a book 📖", completed: false },
  { text: "Plan weekend activities 🗓️", completed: false },
  { text: "Organize workspace 🗄️", completed: false },
  { text: "Call a family member 📞", completed: false },
  { text: "Watch a documentary 📺", completed: false },
];

function App() {
  const {
    item: todos,
    saveItem: setTodos,
    loading,
    error,
  } = useLocalStorage("TaskMaster_ToDos_V1", defaultTodos);
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
      loading={loading}
      error={error}
    />
  );
}

export default App;
