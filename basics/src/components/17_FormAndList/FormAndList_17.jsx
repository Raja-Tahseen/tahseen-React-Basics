import React from "react";
import ToDo from "./ToDo";

const FormAndList_17 = () => {
  return (
    <div className="content">
      <h1>FormAndList_17</h1>
      <div>
        <ol>
          <li>Create a counter list app using useState.</li>
          <li>Explain why React state updates asynchronously.</li>
        </ol>
      </div>
      <div>
        <h2>Task 1 - Create a counter list app using useState.</h2>
        <ToDo />
        <hr class="rounded"></hr>
      </div>
    </div>
  );
};

export default FormAndList_17;
