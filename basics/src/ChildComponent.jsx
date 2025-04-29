import React from "react";

function ChildComponent(props) {
  // Destructure the props for easier access : Destructuring is a JavaScript feature (introduced in ES6) that allows you to unpack values from objects or arrays into distinct variables.
  const { user, greeting, showDetails } = props;

  return (
    <div className="child-component">
      <h2>Child Component</h2>
      <p>{greeting}</p>

      <div className="user-info">
        <h3>User Information:</h3>
        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>

        {showDetails && (
          <>
            <p>Email: {user.email}</p>
            <p>Admin: {user.isAdmin ? "Yes" : "No"}</p>
            <p>Hobbies: {user.hobbies.join(", ")}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default ChildComponent;
