import "./TodoItem.css";

function TodoItem({ text, completed }) {
  const todoItemClasses = `todo-item ${completed ? "completed" : ""}`;
  return (
    <li className={todoItemClasses}>
      <span className="icon">✅</span>
      <p className="description">{text}</p>
      <span className="icon">❌</span>
    </li>
  );
}

export { TodoItem };
