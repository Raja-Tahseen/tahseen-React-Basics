import React, { useState } from "react";

import "./App.css";
import ChildComponent from "./ChildComponent";

const App = () => {
  const [counter, setCounter] = useState(5);
  //let counter = 0;
  console.log("render", counter);
  const handleClick1 = () => {
    setCounter(counter + 1);
    //counter++;
    console.log(counter);
  };

  const handleClick2 = () => {
    setCounter(counter - 1);
    //counter--;
    console.log(counter);
  };

  // Data to be passed to the child component
  const userData = {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
    isAdmin: true,
    hobbies: ["Reading", "Hiking", "Coding"],
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "300%",
          position: "absolute",
          width: "100%",
          height: "100%",
          top: "-15%",
        }}
      >
        Counter App
        <div
          style={{
            fontSize: "120%",
            position: "relative",
            top: "10vh",
          }}
        >
          {counter}
        </div>
        <div className="buttons">
          <button
            style={{
              fontSize: "60%",
              position: "relative",
              top: "20vh",
              marginRight: "5px",
              backgroundColor: "green",
              borderRadius: "8%",
              color: "white",
            }}
            onClick={handleClick1}
          >
            Increment
          </button>
          <button
            style={{
              fontSize: "60%",
              position: "relative",
              top: "20vh",
              marginLeft: "5px",
              backgroundColor: "red",
              borderRadius: "8%",
              color: "white",
            }}
            onClick={handleClick2}
          >
            Decrement
          </button>
        </div>
      </div>
      <br></br>
      <div>
        <ChildComponent
          user={userData}
          greeting="Hello from parent!"
          showDetails={true}
        />
      </div>
    </div>
  );
};

export default App;
