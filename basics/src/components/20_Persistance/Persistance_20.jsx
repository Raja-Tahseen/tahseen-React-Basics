import React from "react";
import ToDo from "./ToDo";

const Persistance_20 = () => {
  return (
    <div className="content">
      <h1>Persistance_20</h1>
      <div>
        <ol>
          <li>Persist todos on page refresh using localstorage.</li>
        </ol>
      </div>
      <div>
        <h2>Task 1 - Persist todos on page refresh using localstorage.</h2>
        <ToDo />
        <hr className="rounded"></hr>
      </div>
    </div>
  );
};

export default Persistance_20;
