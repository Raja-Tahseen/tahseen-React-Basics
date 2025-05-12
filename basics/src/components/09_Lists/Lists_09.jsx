import React from "react";
import UserList from "./UserList";
import UserListWithSearch from "./UserListWithSearch";

const Lists_09 = () => {
  return (
    <div className="content">
      <h1>Lists_09</h1>
      <div>
        <ol>
          <li>Render a list of users dynamically in React.</li>
          <li>Explain why keys are important in React lists.</li>
          <li>Implement a search feature that filters a list.</li>
        </ol>
      </div>
      <div>
        <h2>Task 1 - Render a list of users dynamically in React.</h2>
        <UserList />
        <hr class="rounded"></hr>
      </div>
      <div>
        <h2>Task 2 - Implement a search feature that filters a list.</h2>
        <UserListWithSearch />
        <hr class="rounded"></hr>
      </div>
    </div>
  );
};

export default Lists_09;
