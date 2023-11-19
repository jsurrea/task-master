import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoCounter.css";

function TodoCounter() {
  const { totalTodos, completedTodos, loading, error } =
    React.useContext(TodoContext);
  return (
    <h2>
      Completed {!loading && !error ? completedTodos : 0} out of{" "}
      {!loading && !error ? totalTodos : 0}
    </h2>
  );
}

export { TodoCounter };
