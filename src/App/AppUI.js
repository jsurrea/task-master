import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodoCreate } from "../TodoCreate";
import { TodosLoading } from "../TodosLoading";
import { TodosError } from "../TodosError";
import { TodosEmpty } from "../TodosEmpty";

function AppUI({
  completedTodos,
  totalTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  toggleTodo,
  deleteTodo,
  loading,
  error,
}) {
  return (
    <>
      <h1>Task Master</h1>

      <TodoCounter
        completed={!loading && !error ? completedTodos : 0}
        total={!loading && !error ? totalTodos : 0}
      />

      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {loading && <TodosLoading />}
        {error && <TodosError />}
        {!loading && searchedTodos.length === 0 && <TodosEmpty />}

        {!loading &&
          !error &&
          searchedTodos.map((todo) => (
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

export { AppUI };
