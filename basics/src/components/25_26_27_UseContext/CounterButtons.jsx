import React from "react";
import { useCounter } from "./CounterContext";
import { useTheme } from "./ThemeContext";

const CounterButtons = () => {
  const { increment, decrement } = useCounter();
  const { theme } = useTheme();

  return (
    <div className={`counter-buttons ${theme}`}>
      <button className={`counter-button ${theme}`} onClick={increment}>
        Increment
      </button>
      <button className={`counter-button ${theme}`} onClick={decrement}>
        Decrement
      </button>
    </div>
  );
};

export default CounterButtons;
