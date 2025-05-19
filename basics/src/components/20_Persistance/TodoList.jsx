import { useState } from "react";

function TodoList({ todos, onToggleTodo, onDeleteTodo, onUpdateTodo }) {
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  const startEditing = (todo) => {
    setEditingId(todo.id);
    setEditText(todo.text);
  };

  const saveEdit = (id) => {
    if (editText.trim()) {
      onUpdateTodo(id, editText);
    }
    setEditingId(null);
  };

  const cancelEdit = () => {
    setEditingId(null);
  };

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {todos.map((todo) => (
        <li
          key={todo.id}
          style={{
            margin: "8px 0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {editingId === todo.id ? (
            <>
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
              <button onClick={() => saveEdit(todo.id)}>Save</button>
              <button onClick={cancelEdit}>Cancel</button>
            </>
          ) : (
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                flexGrow: 1,
                textAlign: "left",
                marginRight: "10px",
              }}
              onClick={() => onToggleTodo(todo.id)}
            >
              {todo.text}
            </span>
          )}
          <button onClick={() => startEditing(todo)}>Edit</button>
          <button onClick={() => onDeleteTodo(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
