import React, { useState } from "react";

function ChildComponent({
  user,
  greeting,
  showDetails,
  onSendMessage,
  onUpdateName,
}) {
  const [inputValue, setInputValue] = useState("");

  const handleSendClick = () => {
    // Calling parent function with data
    onSendMessage(inputValue);
    setInputValue("");
  };

  const handleUpdateName = () => {
    const newName = prompt("Enter new name:", user.name);
    if (newName) {
      onUpdateName(newName); // Calling parent to update data
    }
  };

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

      {/* Child-to-parent communication examples */}
      <div className="child-actions">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type a message to parent"
        />
        <button onClick={handleSendClick}>Send to Parent</button>

        <button onClick={handleUpdateName} style={{ marginTop: "10px" }}>
          Change User Name
        </button>
      </div>
    </div>
  );
}

export default ChildComponent;
