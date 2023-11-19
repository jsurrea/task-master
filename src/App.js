import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { TodoCreate } from "./TodoCreate";

import "./App.css";

const defaultItem = [
  { text: "Complete morning workout 🏋️‍♂️", completed: true },
  { text: "Write project proposal 📝", completed: false },
  { text: "Grocery shopping 🛒", completed: false },
  { text: "Learn a new recipe 👩‍🍳", completed: false },
  { text: "Take a hike nearby 🌳", completed: false },
  { text: "Read a chapter of a book 📖", completed: false },
  { text: "Plan weekend activities 🗓️", completed: false },
  { text: "Organize workspace 🗄️", completed: false },
  { text: "Call a friend or family member 📞", completed: false },
  { text: "Watch a documentary 📺", completed: false },
];

function useLocalStorage() {
  let parsedItem = localStorage.getItem("TaskMaster_V1");
  parsedItem = parsedItem ? JSON.parse(parsedItem) : defaultItem;

  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    localStorage.setItem("TaskMaster_V1", JSON.stringify(newItem));
    setItem(newItem);
  };

  return [item, saveItem];
}

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
