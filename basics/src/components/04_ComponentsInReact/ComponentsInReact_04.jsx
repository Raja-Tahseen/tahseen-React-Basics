import React from "react";
import { useSearchParams } from "react-router-dom";

const ComponentsInReact_04 = () => {
  const [params] = useSearchParams();
  const name = params.get("name");
  return (
    <div className="content">
      <h1>ComponentsInReact_04</h1>
      <ol>
        <li>Create a simple functional component that displays a greeting.</li>
        <li>Pass props to a component and render dynamic data.</li>
        <li>
          Explain the difference between a function and a functional component.
        </li>
      </ol>
      <h1>Task 2</h1>
      <p>Hello, {name}! Welcome to React.</p>
    </div>
  );
};

export default ComponentsInReact_04;
