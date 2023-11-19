import "./TodoSearch.css";

function TodoSearch({ searchValue, setSearchValue }) {
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
