import React from "react";
import { CounterProvider } from "./CounterContext";
import { ThemeProvider } from "./ThemeContext";
import CounterDisplay from "./CounterDisplay";
import CounterButtons from "./CounterButtons";
import ThemeToggle from "./ThemeToggle";

const UseContext_25_26_27 = () => {
  return (
    <div className="content">
      <h1>UseContext_25_26_27</h1>
      <div>
        <ol>
          <li>
            Why do we need Context API in React? Create and consume context
            provider and consumer with counter as an example.
          </li>
          <li>Implement a theme toggle using global context.</li>
          <li>Build an authentication flow using Context API.</li>
        </ol>
      </div>
      <div>
        <h2>
          Task 1 - Create and consume context provider and consumer with counter
          as an example.
        </h2>
        <ThemeProvider>
          <CounterProvider>
            <h1>Counter App with Context</h1>
            <ThemeToggle />
            <CounterDisplay />
            <CounterButtons />
          </CounterProvider>
        </ThemeProvider>
        <hr className="rounded"></hr>
      </div>
    </div>
  );
};

export default UseContext_25_26_27;
