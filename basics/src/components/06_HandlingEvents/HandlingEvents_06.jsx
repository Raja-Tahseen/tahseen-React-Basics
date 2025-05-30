import React from "react";
import MessageUpdater from "./MessageUpdater";
import SimpleForm from "./SimpleForm";

const HandlingEvents_06 = () => {
  return (
    <div className="content">
      <h1>HandlingEvents_06</h1>
      <ol>
        <li>Create a button that updates a message when clicked.</li>
        <li>Implement a simple form with an input field and submit button.</li>
        <li>
          Explain how event handling differs between React and vanilla
          JavaScript.
        </li>
      </ol>
      <div>
        <h2>Task 1 - Create a button that updates a message when clicked.</h2>
        <MessageUpdater />
      </div>
      <hr class="rounded"></hr>
      <div>
        <h2>
          Task 2 - Implement a simple form with an input field and submit
          button.
        </h2>
        <SimpleForm />
      </div>
      <hr class="rounded"></hr>
    </div>
  );
};

export default HandlingEvents_06;
