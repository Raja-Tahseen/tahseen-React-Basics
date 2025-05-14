import React, { useState } from "react";
import "./ComprehensiveForm.css";

function ComprehensiveForm() {
  // State for all form fields
  const [formData, setFormData] = useState({
    textInput: "",
    emailInput: "",
    passwordInput: "",
    numberInput: "",
    dateInput: "",
    timeInput: "",
    datetimeLocalInput: "",
    monthInput: "",
    weekInput: "",
    searchInput: "",
    telInput: "",
    urlInput: "",
    colorInput: "#000000",
    rangeInput: 50,
    fileInput: null,
    checkboxInput: false,
    radioInput: "option1",
    selectInput: "",
    multipleSelectInput: [],
    textareaInput: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : type === "file"
          ? files[0]
          : type === "select-multiple"
          ? Array.from(e.target.selectedOptions, (option) => option.value)
          : value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Form Data logged in console.");
  };

  return (
    <div className="form-container">
      <h1>Comprehensive React Form</h1>
      <form onSubmit={handleSubmit}>
        {/* Text Input */}
        <div className="form-group">
          <label htmlFor="textInput">Text Input:</label>
          <input
            type="text"
            id="textInput"
            name="textInput"
            value={formData.textInput}
            onChange={handleChange}
            placeholder="Enter text"
          />
        </div>

        {/* Email Input */}
        <div className="form-group">
          <label htmlFor="emailInput">Email Input:</label>
          <input
            type="email"
            id="emailInput"
            name="emailInput"
            value={formData.emailInput}
            onChange={handleChange}
            placeholder="Enter email"
          />
        </div>

        {/* Password Input */}
        <div className="form-group">
          <label htmlFor="passwordInput">Password Input:</label>
          <input
            type="password"
            id="passwordInput"
            name="passwordInput"
            value={formData.passwordInput}
            onChange={handleChange}
            placeholder="Enter password"
          />
        </div>

        {/* Number Input */}
        <div className="form-group">
          <label htmlFor="numberInput">Number Input:</label>
          <input
            type="number"
            id="numberInput"
            name="numberInput"
            value={formData.numberInput}
            onChange={handleChange}
            placeholder="Enter number"
            min="0"
            max="100"
            step="1"
          />
        </div>

        {/* Date Input */}
        <div className="form-group">
          <label htmlFor="dateInput">Date Input:</label>
          <input
            type="date"
            id="dateInput"
            name="dateInput"
            value={formData.dateInput}
            onChange={handleChange}
          />
        </div>

        {/* Time Input */}
        <div className="form-group">
          <label htmlFor="timeInput">Time Input:</label>
          <input
            type="time"
            id="timeInput"
            name="timeInput"
            value={formData.timeInput}
            onChange={handleChange}
          />
        </div>

        {/* Datetime-Local Input */}
        <div className="form-group">
          <label htmlFor="datetimeLocalInput">Datetime-Local Input:</label>
          <input
            type="datetime-local"
            id="datetimeLocalInput"
            name="datetimeLocalInput"
            value={formData.datetimeLocalInput}
            onChange={handleChange}
          />
        </div>

        {/* Month Input */}
        <div className="form-group">
          <label htmlFor="monthInput">Month Input:</label>
          <input
            type="month"
            id="monthInput"
            name="monthInput"
            value={formData.monthInput}
            onChange={handleChange}
          />
        </div>

        {/* Week Input */}
        <div className="form-group">
          <label htmlFor="weekInput">Week Input:</label>
          <input
            type="week"
            id="weekInput"
            name="weekInput"
            value={formData.weekInput}
            onChange={handleChange}
          />
        </div>

        {/* Search Input */}
        <div className="form-group">
          <label htmlFor="searchInput">Search Input:</label>
          <input
            type="search"
            id="searchInput"
            name="searchInput"
            value={formData.searchInput}
            onChange={handleChange}
            placeholder="Search..."
          />
        </div>

        {/* Tel Input */}
        <div className="form-group">
          <label htmlFor="telInput">Telephone Input:</label>
          <input
            type="tel"
            id="telInput"
            name="telInput"
            value={formData.telInput}
            onChange={handleChange}
            placeholder="Enter phone number"
          />
        </div>

        {/* URL Input */}
        <div className="form-group">
          <label htmlFor="urlInput">URL Input:</label>
          <input
            type="url"
            id="urlInput"
            name="urlInput"
            value={formData.urlInput}
            onChange={handleChange}
            placeholder="Enter URL"
          />
        </div>

        {/* Color Input */}
        <div className="form-group">
          <label htmlFor="colorInput">Color Input:</label>
          <input
            type="color"
            id="colorInput"
            name="colorInput"
            value={formData.colorInput}
            onChange={handleChange}
          />
        </div>

        {/* Range Input */}
        <div className="form-group">
          <label htmlFor="rangeInput">Range Input: {formData.rangeInput}</label>
          <input
            type="range"
            id="rangeInput"
            name="rangeInput"
            value={formData.rangeInput}
            onChange={handleChange}
            min="0"
            max="100"
          />
        </div>

        {/* File Input */}
        <div className="form-group">
          <label htmlFor="fileInput">File Input:</label>
          <input
            type="file"
            id="fileInput"
            name="fileInput"
            onChange={handleChange}
          />
          {formData.fileInput && (
            <p>Selected file: {formData.fileInput.name}</p>
          )}
        </div>

        {/* Checkbox Input */}
        <div className="form-group checkbox">
          <label htmlFor="checkboxInput">
            <input
              type="checkbox"
              id="checkboxInput"
              name="checkboxInput"
              checked={formData.checkboxInput}
              onChange={handleChange}
            />
            Checkbox Input
          </label>
        </div>

        {/* Radio Inputs */}
        <div className="form-group">
          <p>Radio Inputs:</p>
          <label>
            <input
              type="radio"
              name="radioInput"
              value="option1"
              checked={formData.radioInput === "option1"}
              onChange={handleChange}
            />
            Option 1
          </label>
          <label>
            <input
              type="radio"
              name="radioInput"
              value="option2"
              checked={formData.radioInput === "option2"}
              onChange={handleChange}
            />
            Option 2
          </label>
          <label>
            <input
              type="radio"
              name="radioInput"
              value="option3"
              checked={formData.radioInput === "option3"}
              onChange={handleChange}
            />
            Option 3
          </label>
        </div>

        {/* Select Input */}
        <div className="form-group">
          <label htmlFor="selectInput">Select Input:</label>
          <select
            id="selectInput"
            name="selectInput"
            value={formData.selectInput}
            onChange={handleChange}
          >
            <option value="">Select an option</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>

        {/* Multiple Select Input */}
        <div className="form-group">
          <label htmlFor="multipleSelectInput">Multiple Select Input:</label>
          <select
            id="multipleSelectInput"
            name="multipleSelectInput"
            multiple
            value={formData.multipleSelectInput}
            onChange={handleChange}
            size="3"
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
          </select>
          <p>Selected: {formData.multipleSelectInput.join(", ")}</p>
        </div>

        {/* Textarea Input */}
        <div className="form-group">
          <label htmlFor="textareaInput">Textarea Input:</label>
          <textarea
            id="textareaInput"
            name="textareaInput"
            value={formData.textareaInput}
            onChange={handleChange}
            rows="4"
            placeholder="Enter multiline text"
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-btn">
          Submit Form
        </button>
      </form>
    </div>
  );
}

export default ComprehensiveForm;
