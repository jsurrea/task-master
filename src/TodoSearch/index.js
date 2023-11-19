import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoSearch.css";

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);
  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search within your tasks..."
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
      />
      <span className="search-icon">&#128269;</span>
    </div>
  );
}

export { TodoSearch };
