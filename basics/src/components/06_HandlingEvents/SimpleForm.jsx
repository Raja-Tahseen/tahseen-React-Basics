import React, { useState } from "react";

function SimpleForm() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Your Input Value is : ${inputValue}`);
    setInputValue("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Enter your Name"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SimpleForm;
