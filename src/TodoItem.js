import "./TodoItem.css";

function TodoItem({ text, completed, onToggle, onDelete }) {
  const todoItemClasses = `todo-item ${completed ? "completed" : ""}`;
  return (
    <li className={todoItemClasses}>
      <span className="icon" onClick={onToggle}>
        ✅
      </span>
      <p className="description">{text}</p>
      <span className="icon" onClick={onDelete}>
        ❌
      </span>
    </li>
  );
}

export { TodoItem };
