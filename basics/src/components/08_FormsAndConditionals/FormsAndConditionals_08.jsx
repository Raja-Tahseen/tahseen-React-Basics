import React from "react";
import AggregateCalculator from "./AggregateCalculator";

const FormsAndConditionals_08 = () => {
  return (
    <div className="content">
      <h1>FormsAndConditionals_08</h1>
      <div>
        <h2>
          Task 1 - 1. Create a simple form in React that takes Matric and FSC
          marks and create aggregate. If user scores more than 80, display the
          message 'Eligible' else display 'Ineligible'
        </h2>
        <AggregateCalculator />
      </div>
      <hr class="rounded"></hr>
    </div>
  );
};

export default FormsAndConditionals_08;
