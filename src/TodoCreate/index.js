import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoCreate.css";

function TodoCreate() {
  const { setOpenModal } = React.useContext(TodoContext);
  return (
    <button className="create" onClick={() => setOpenModal((state) => !state)}>
      +
    </button>
  );
}

export { TodoCreate };
