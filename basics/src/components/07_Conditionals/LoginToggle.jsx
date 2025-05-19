import React, { useState } from "react";

const LoginToggle = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleToggle = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div>
      <h1>Login / Logout Toggle</h1>
      <p>
        {isLoggedIn
          ? "Welcome back! You are now logged in."
          : "Please log in to access your account."}
      </p>
      <button
        onClick={handleToggle}
        style={{
          padding: "8px 16px",
          backgroundColor: isLoggedIn ? "#f44336" : "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        {isLoggedIn ? "Logout" : "Log In"}
      </button>
      <p style={{ marginTop: "10px", fontStyle: "italic" }}>
        Status: {isLoggedIn ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default LoginToggle;
