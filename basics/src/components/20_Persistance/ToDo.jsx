import { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import SearchAndFilter from "./SearchAndFilter";

// Helper function to load all persisted state
const loadPersistedState = () => {
  try {
    const savedState = localStorage.getItem("todoAppState");
    if (savedState) {
      return JSON.parse(savedState);
    }
  } catch (error) {
    console.error("Failed to parse state from localStorage", error);
  }
  return {
    todos: [],
    searchTerm: "",
    filter: "all",
  };
};

function ToDo() {
  const [state, setState] = useState(loadPersistedState());
  const { todos, searchTerm, filter } = state;

  // Save all state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("todoAppState", JSON.stringify(state));
  }, [state]);

  // Helper to update state
  const updateState = (newState) => {
    setState((prev) => ({ ...prev, ...newState }));
  };

  const addTodo = (text) => {
    updateState({
      todos: [
        ...todos,
        {
          id: Date.now(),
          text,
          completed: false,
        },
      ],
    });
  };

  const toggleTodo = (id) => {
    updateState({
      todos: todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    });
  };

  const deleteTodo = (id) => {
    updateState({
      todos: todos.filter((todo) => todo.id !== id),
    });
  };

  const updateTodo = (id, newText) => {
    updateState({
      todos: todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      ),
    });
  };

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
        onSetSearchTerm={(value) => updateState({ searchTerm: value })}
        onFilter={filter}
        onSetFilter={(value) => updateState({ filter: value })}
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
