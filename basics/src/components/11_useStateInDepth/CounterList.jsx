import { useState } from "react";

function CounterList() {
  const [counters, setCounters] = useState([{ id: 1, value: 0 }]);

  const addCounter = () => {
    const newId =
      counters.length > 0 ? Math.max(...counters.map((c) => c.id)) + 1 : 1;
    setCounters([...counters, { id: newId, value: 0 }]);
  };

  const increment = (id) => {
    setCounters(
      counters.map((counter) =>
        counter.id === id ? { ...counter, value: counter.value + 1 } : counter
      )
    );
  };

  const decrement = (id) => {
    setCounters(
      counters.map((counter) =>
        counter.id === id ? { ...counter, value: counter.value - 1 } : counter
      )
    );
  };

  const removeCounter = (id) => {
    setCounters(counters.filter((counter) => counter.id !== id));
  };

  return (
    <div>
      <h1>Counter List</h1>
      <button onClick={addCounter}>Add Counter</button>
      <div>
        {counters.map((counter) => (
          <div
            key={counter.id}
            style={{
              margin: "10px",
              padding: "10px",
              border: "1px solid #ccc",
            }}
          >
            <button onClick={() => decrement(counter.id)}>-</button>
            <span style={{ margin: "0 10px" }}>{counter.value}</span>
            <button onClick={() => increment(counter.id)}>+</button>
            <button
              onClick={() => removeCounter(counter.id)}
              style={{ marginLeft: "10px", color: "red" }}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CounterList;
