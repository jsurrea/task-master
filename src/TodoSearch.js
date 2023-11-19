import "./TodoSearch.css";

function TodoSearch() {
  return (
    <div class="search-container">
      <input
        type="text"
        class="search-input"
        placeholder="Search within your tasks..."
      />
      <span class="search-icon">&#128269;</span>
    </div>
  );
}

export { TodoSearch };
