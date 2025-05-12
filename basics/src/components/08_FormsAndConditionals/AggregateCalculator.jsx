import React, { useState } from "react";

function AggregateCalculator() {
  const [formData, setFormData] = useState({
    matricMarks: "",
    fscMarks: "",
  });

  const [aggregate, setAggregate] = useState(null);
  const [isEligible, setIsEligible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const calculateAggregate = (e) => {
    e.preventDefault();

    // Convert marks to numbers
    const matric = parseFloat(formData.matricMarks);
    const fsc = parseFloat(formData.fscMarks);

    console.log("matric:" + matric * 0.3 + "-- Fsc:" + fsc * 0.7);

    // Calculate aggregate (30% matric + 70% fsc)
    const calculatedAggregate = matric * 0.3 + fsc * 0.7;
    setAggregate(calculatedAggregate.toFixed(2));

    // Check eligibility
    setIsEligible(calculatedAggregate > 80);
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "20px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "5px",
      }}
    >
      <h2>Aggregate Calculator</h2>
      <form onSubmit={calculateAggregate}>
        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="matricMarks"
            style={{ display: "block", marginBottom: "5px" }}
          >
            Matric Marks (%):
          </label>
          <input
            type="number"
            id="matricMarks"
            name="matricMarks"
            value={formData.matricMarks}
            onChange={handleChange}
            min="0"
            max="100"
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="fscMarks"
            style={{ display: "block", marginBottom: "5px" }}
          >
            FSC Marks (%):
          </label>
          <input
            type="number"
            id="fscMarks"
            name="fscMarks"
            value={formData.fscMarks}
            onChange={handleChange}
            min="0"
            max="100"
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <button
          type="submit"
          style={{
            padding: "10px 15px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Calculate Aggregate
        </button>
      </form>

      {aggregate !== null && (
        <div style={{ marginTop: "20px" }}>
          <h3>Result:</h3>
          <p>Your aggregate is: {aggregate}%</p>
          <p
            style={{ color: isEligible ? "green" : "red", fontWeight: "bold" }}
          >
            {isEligible ? "Eligible" : "Ineligible"}
          </p>
        </div>
      )}
    </div>
  );
}

export default AggregateCalculator;
