import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import SearchAndFilter from "./SearchAndFilter";

function ToDo() {
  const [todos, setTodos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all"); // 'all', 'active', 'completed'

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id, newText) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  // Filter and search logic
  const filteredTodos = todos.filter((todo) => {
    const matchesSearch = todo.text
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesFilter =
      filter === "all" ||
      (filter === "completed" && todo.completed) ||
      (filter === "active" && !todo.completed);

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="app">
      <h1>Todo List</h1>
      <SearchAndFilter
        onSearchTerm={searchTerm}
        onSetSearchTerm={setSearchTerm}
        onFilter={filter}
        onSetFilter={setFilter}
      />
      <TodoForm onAddTodo={addTodo} />
      <TodoList
        todos={filteredTodos}
        onToggleTodo={toggleTodo}
        onDeleteTodo={deleteTodo}
        onUpdateTodo={updateTodo}
      />
    </div>
  );
}

export default ToDo;
