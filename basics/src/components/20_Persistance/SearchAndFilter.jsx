function SearchAndFilter({
  onSearchTerm,
  onSetSearchTerm,
  onFilter,
  onSetFilter,
}) {
  return (
    <div className="search-filter">
      <input
        type="text"
        placeholder="Search todos..."
        value={onSearchTerm}
        onChange={(e) => onSetSearchTerm(e.target.value)}
      />

      <div className="filter-options">
        <button
          className={onFilter === "all" ? "active" : ""}
          onClick={() => onSetFilter("all")}
        >
          All
        </button>
        <button
          className={onFilter === "active" ? "active" : ""}
          onClick={() => onSetFilter("active")}
        >
          Active
        </button>
        <button
          className={onFilter === "completed" ? "active" : ""}
          onClick={() => onSetFilter("completed")}
        >
          Completed
        </button>
      </div>
    </div>
  );
}

export default SearchAndFilter;
