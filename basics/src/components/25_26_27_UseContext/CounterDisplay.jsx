import React from "react";
import { useCounter } from "./CounterContext";
import { useTheme } from "./ThemeContext";

const CounterDisplay = () => {
  const { count } = useCounter();
  const { theme } = useTheme();

  return (
    <div className={`counter-display ${theme}`}>
      <h2>Current Count: {count}</h2>
    </div>
  );
};

export default CounterDisplay;
