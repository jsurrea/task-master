import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css";

function TodoForm() {
  const { setOpenModal, addTodo } = React.useContext(TodoContext);
  const [newTodo, setNewTodo] = React.useState("");

  const onSubmit = (event) => event.preventDefault();

  const onCancel = (event) => {
    setOpenModal(false);
  };

  const onAdd = (event) => {
    if (newTodo.trim() !== "") addTodo(newTodo.trim());
    setOpenModal(false);
  };

  const onChange = (event) => {
    setNewTodo(event.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>What do you need to do?</label>
        <textarea
          placeholder="Study for my exam 📚✏️"
          value={newTodo}
          onChange={onChange}
        />
        <div className="button-container">
          <button type="button" className="button-add" onClick={onAdd}>
            Add
          </button>
          <button type="button" className="button-cancel" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
}

export { TodoForm };
