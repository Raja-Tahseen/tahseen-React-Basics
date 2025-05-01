import React, { useState, useRef } from "react";

function UserRegistration() {
  // State for controlled inputs
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  // Ref for uncontrolled input
  const newsletterRef = useRef(null);

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation (conditional rendering trigger)
    if (!username || !password) {
      setError("Please fill in all required fields");
      return;
    }

    // Access uncontrolled input value
    const newsletterSubscribed = newsletterRef.current.checked;

    // Form processing logic would go here
    setSubmitted(true);
    setError("");
  };

  // Conditional rendering based on submission status
  if (submitted) {
    return (
      <div>
        <h2>Welcome, {username}!</h2>
        <p>
          Newsletter subscribed: {newsletterRef.current?.checked ? "Yes" : "No"}
        </p>
        <button onClick={() => setSubmitted(false)}>Reset Form</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>User Registration</h2>

      {/* Error message (conditional rendering) */}
      {error && <div className="error">{error}</div>}

      {/* Controlled input for username */}
      <div>
        <label>
          Username*:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
      </div>

      {/* Controlled input for password */}
      <div>
        <label>
          Password*:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </div>

      {/* Uncontrolled input for newsletter */}
      <div>
        <label>
          <input type="checkbox" ref={newsletterRef} />
          Subscribe to newsletter
        </label>
      </div>

      <button type="submit">Register</button>
    </form>
  );
}

export default UserRegistration;
