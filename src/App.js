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
  { text: "Tarea 4", completed: false },
  { text: "Tarea 4", completed: false },
  { text: "Tarea 4", completed: false },
  { text: "Tarea 4", completed: false },
  { text: "Tarea 4", completed: false },
  { text: "Tarea 4", completed: false },
];

function App() {
  return (
    <>
      <h1>Task Master</h1>

      <TodoCounter completed={16} total={25} />

      <TodoSearch />

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
