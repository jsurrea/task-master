import "./TodoList.css";

function TodoList({ children }) {
  return <ul className="scrollable-content">{children}</ul>;
}

export { TodoList };
