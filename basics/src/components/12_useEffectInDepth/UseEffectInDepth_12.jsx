import React from "react";
import DataFetcher from "./DataFetcher";

const UseEffectInDepth_12 = () => {
  return (
    <div className="content">
      <h1>UseEffectInDepth_12</h1>
      <div>
        <ol>
          <li>Fetch and display data from an API using React.</li>
          <li>Explain why useEffect runs twice in React Strict Mode.</li>
        </ol>
      </div>
      <div>
        <h2>Task 1 - Fetch and display data from an API using React.</h2>
        <DataFetcher />
        <hr class="rounded"></hr>
      </div>
    </div>
  );
};

export default UseEffectInDepth_12;
