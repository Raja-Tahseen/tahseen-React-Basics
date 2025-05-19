import { useState } from "react";
function TodoForm({ onAddTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) {
      alert("ToDo input field is empty. Please enter a task.");
      return;
    }
    onAddTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todoInput" className="input-style-label">
        Task:
      </label>
      <input
        type="text"
        name="todoInput"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add a new todo..."
        className="input-style"
      />
      <button type="submit" className="input-btn">
        Add Todo
      </button>
    </form>
  );
}

export default TodoForm;
