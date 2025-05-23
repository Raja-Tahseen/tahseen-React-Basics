## 1. Why do we need Context API in React?

The Context API in React solves the problem of "prop drilling" - passing props through multiple levels of components just to get data to a deeply nested component. It provides a way to share values (like state, functions, or any data) between components without explicitly passing props through every level of the component tree.

**When to Use Context API:**

- When you have global data that many components need (like theme, user authentication, or language preferences)

- When passing props through many intermediate components becomes cumbersome

- When you need to share state between components that aren't directly connected in the tree

## 2. Create and consume context provider and consumer with counter as an example.

Here's a complete example of creating and consuming a context for a counter:

**1. Create the Context:**

```jsx
// CounterContext.jsx
import React, { createContext, useState, useContext } from "react";

// Create a context with a default value
const CounterContext = createContext();

// Create a provider component
export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);

  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
};

// Custom hook for consuming the context
export const useCounter = () => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error("useCounter must be used within a CounterProvider");
  }
  return context;
};
```

**2. Wrap Your App with the Provider:**

```jsx
// App.js
import React from "react";
import { CounterProvider } from "./CounterContext";
import CounterDisplay from "./CounterDisplay";
import CounterButtons from "./CounterButtons";

function App() {
  return (
    <CounterProvider>
      <div className="App">
        <h1>Counter App with Context</h1>
        <CounterDisplay />
        <CounterButtons />
      </div>
    </CounterProvider>
  );
}

export default App;
```

**3. Create Components that Consume the Context:**

```jsx
// CounterDisplay.js
import React from "react";
import { useCounter } from "./CounterContext";

const CounterDisplay = () => {
  const { count } = useCounter();

  return (
    <div>
      <h2>Current Count: {count}</h2>
    </div>
  );
};

export default CounterDisplay;
```

```jsx
// CounterButtons.js
import React from "react";
import { useCounter } from "./CounterContext";

const CounterButtons = () => {
  const { increment, decrement } = useCounter();

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default CounterButtons;
```

## How This Works:

**1. Context Creation:** We create a context using createContext()

**2. Provider Component:** The CounterProvider component manages the state and provides it to all children

**3. Custom Hook:** useCounter hook makes it easy to consume the context in any component

**4. Consumption:** Components like CounterDisplay and CounterButtons can access the count state and functions without prop drilling

This pattern keeps your state management clean and makes it easy to share state across your component tree without passing props through many levels.
