## 1. What is Redux in React?

Redux is a predictable state management library for JavaScript applications, commonly used with React (though it can work with other frameworks like Angular or Vue). It helps manage the global state of an application in a single centralized store, making state changes transparent and easier to debug.

**Core Concepts of Redux:**

**1. Store** – A single JavaScript object that holds the entire application state.

**2. Actions** – Plain objects that describe what happened `(e.g., { type: 'ADD_TODO', payload: 'Learn Redux' })`.

**3. Reducers** – Pure functions that take the current state and an action, then return a new state.

**4. Dispatch** – A method to send actions to the Redux store to update the state.

## 2. Why Do We Need Redux?.

Redux is useful when:

**1. State becomes hard to manage** – When multiple components need access to the same state, prop drilling (passing props through many layers) becomes messy.

**2. State updates are complex**– Redux provides a structured way to handle state changes via actions and reducers.

**3. Debugging is easier** – Since state changes are logged, you can track how and why the state changed (using Redux DevTools).

**4. Server-side state caching** – Redux makes it easier to persist and rehydrate state (e.g., after a page refresh).

**5. Middleware support** – Redux allows middleware (like redux-thunk or redux-saga) for handling async operations (API calls, etc.).

## When NOT to Use Redux?

1. Small apps where React's built-in `useState or useReducer` is sufficient.

2. When component-level state is enough.

3. If the app doesn’t involve complex state sharing.

**Example: Redux in React**

```jsx
// 1. Define an action
const addTodo = (text) => ({ type: "ADD_TODO", payload: text });

// 2. Create a reducer
const todosReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { text: action.payload, completed: false }];
    default:
      return state;
  }
};

// 3. Create a Redux store
import { createStore } from "redux";
const store = createStore(todosReducer);

// 4. Dispatch an action
store.dispatch(addTodo("Learn Redux"));

// 5. Get the current state
console.log(store.getState()); // [{ text: "Learn Redux", completed: false }]
```

**Modern Redux (Redux Toolkit)**
Instead of writing Redux manually, Redux Toolkit (RTK) simplifies the process:

```jsx
import { createSlice, configureStore } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({ text: action.payload, completed: false });
    },
  },
});

const store = configureStore({ reducer: todosSlice.reducer });
store.dispatch(todosSlice.actions.addTodo("Learn Redux"));
```

Redux helps manage global state in a predictable way, avoiding prop drilling and simplifying debugging. However, for simpler apps, React Context API or Zustand might be better alternatives.

---

## 3. Redux Flow Explained (Action → Reducer → Store → Component)

Redux follows a **strict unidirectional data flow** to manage state predictably. Here’s how it works step-by-step:

**1. Action**

- **What?** An action is a plain JavaScript object that describes what happened in the app.
- **Structure:**

```jsx
{
  type: 'ACTION_TYPE',  // Required (e.g., 'ADD_TODO')
  payload: data         // Optional (e.g., todo text)
}
```

- **Example:**

```jsx
const addTodo = (text) => ({
  type: "ADD_TODO",
  payload: text,
});
```

- **Triggered by:**
- User interactions (e.g., button click).
- API responses.
- Other app events.

**2. Reducer**

- **What?** A pure function that takes the **current state + action,** and returns the **new state**.
- **Rules:**
- Never mutate state directly (use immutability!).
- No side effects (e.g., API calls in reducers).
  **Example**

```jsx
const todosReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { text: action.payload, completed: false }];
    default:
      return state; // Return unchanged state for unknown actions
  }
};
```

- **Example:**

```jsx
const addTodo = (text) => ({
  type: "ADD_TODO",
  payload: text,
});
```

**3. Store**

- **What?** The single source of truth that holds the app’s state.
- **Rules:**
- Holds the state **(store.getState())**.
- Allows dispatching actions **(store.dispatch(action))**.
- Runs reducers to update state.
- Notifies subscribers (e.g., React components) when state changes.

**Created via**

```jsx
import { createStore } from "redux";
const store = createStore(todosReducer);
```

**4. Component (UI Layer)**
**- How Components Interact with Redux:**

1. **Read State:** Components subscribe to the store to access state.

```jsx
const todos = store.getState(); // Get current state
```

2. **Dispatch Actions:** Components trigger state changes by dispatching actions.

```jsx
store.dispatch(addTodo("Learn Redux")); // Update state
```

3. **Re-render on Changes:** Components re-render when the Redux state updates.

---

### Full Redux Flow Example

1. **User clicks "Add Todo" button** in a React component.
2. **Component dispatches an action:**

```jsx
store.dispatch({ type: "ADD_TODO", payload: "Learn Redux" });
```

3. **Redux calls the reducer** with the current state + action.

```jsx
const newState = todosReducer(previousState, action);
```

4. **Store updates** its state and notifies **subscribed components.**
5. **React components re-render** with the new state.

---

## Visual Flow

```jsx
Component → (Dispatches) → Action → (Handled by) → Reducer → (Updates) → Store → (Notifies) → Component
```

**Key Takeaways**

- **Unidirectional Flow:** Actions → Reducers → Store → UI (no reverse flow).
- **Immutable Updates:** Reducers must not mutate state.
- **Centralized State:** The store is the single source of truth.

## Modern Redux (Redux Toolkit Simplified Flow)

With Redux Toolkit, the flow is the same, but with less boilerplate:

```jsx
// 1. Create a slice (auto-generates actions + reducers)
const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload); // Immer handles immutability
    },
  },
});

// 2. Dispatch auto-generated action
dispatch(todosSlice.actions.addTodo("Learn Redux"));
```
