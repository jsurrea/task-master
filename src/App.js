import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { TodoCreate } from "./TodoCreate";

import "./App.css";

const defaultTodos = [
  { text: "Tarea 1", completed: true },
  { text: "Tarea 2", completed: false },
  { text: "Tarea 3", completed: true },
  { text: "Tarea 4", completed: false },
  { text: "Tarea 5", completed: false },
  { text: "Tarea 6", completed: false },
  { text: "Tarea 7", completed: false },
  { text: "Tarea 8", completed: false },
  { text: "Tarea 9", completed: false },
  { text: "Tarea 10", completed: false },
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  console.log(searchValue);

  return (
    <>
      <h1>Task Master</h1>

      <TodoCounter completed={completedTodos} total={totalTodos} />

      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {defaultTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <TodoCreate />
    </>
  );
}

export default App;
