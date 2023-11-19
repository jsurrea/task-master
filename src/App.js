import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { TodoCreate } from "./TodoCreate";

import "./App.css";

const defaultTodos = [
  { text: "Complete morning workout 🏋️‍♂️", completed: true },
  { text: "Write project proposal 📝", completed: false },
  { text: "Grocery shopping 🛒", completed: false },
  { text: "Learn a new recipe 👩‍🍳", completed: false },
  { text: "Take a hike in a nearby nature reserve 🌳", completed: false },
  { text: "Read a chapter of a book 📖", completed: false },
  { text: "Plan weekend activities 🗓️", completed: false },
  { text: "Organize workspace 🗄️", completed: false },
  { text: "Call a friend or family member 📞", completed: false },
  { text: "Watch a documentary 📺", completed: false },
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchValue.toLowerCase())
  );

  const toggleTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

  return (
    <>
      <h1>Task Master</h1>

      <TodoCounter completed={completedTodos} total={totalTodos} />

      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onToggle={() => toggleTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <TodoCreate />
    </>
  );
}

export default App;
