import React from "react";
import FormWithValidation from "./FormWithValidation";

const HandlingFormsInReact_14 = () => {
  return (
    <div className="content">
      <h1>HandlingFormsInReact_14</h1>
      <div>
        <ol>
          <li>Create a counter list app using useState.</li>
          <li>Explain why React state updates asynchronously.</li>
        </ol>
      </div>
      <div>
        <h2>Task 1 - Create a counter list app using useState.</h2>
        <FormWithValidation />
        <hr class="rounded"></hr>
      </div>
    </div>
  );
};

export default HandlingFormsInReact_14;
