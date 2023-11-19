import "./TodoCounter.css";

function TodoCounter({ total, completed }) {
  return (
    <h2>
      Completed {completed} out of {total}
    </h2>
  );
}

export { TodoCounter };
