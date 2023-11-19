function TodoCounter({ total, completed }) {
  return (
    <h1>
      You have completed {completed} out of {total} TODOs
    </h1>
  );
}

export { TodoCounter };
