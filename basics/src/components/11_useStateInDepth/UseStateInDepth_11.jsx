import React from "react";
import CounterList from "./CounterList";

const useStateInDepth_11 = () => {
  return (
    <div className="content">
      <h1>useStateInDepth_11</h1>
      <div>
        <ol>
          <li>Create a counter list app using useState.</li>
          <li>Explain why React state updates asynchronously.</li>
        </ol>
      </div>
      <div>
        <h2>Task 1 - Create a counter list app using useState.</h2>
        <CounterList />
        <hr class="rounded"></hr>
      </div>
    </div>
  );
};

export default useStateInDepth_11;
