import { useState } from "react";

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add a new todo..."
        style={{ padding: "8px", marginRight: "8px" }}
      />
      <button type="submit" style={{ padding: "8px 12px", cursor: "pointer" }}>
        Add Todo
      </button>
    </form>
  );
}

export default TodoForm;
