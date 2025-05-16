import { useState } from "react";

const MessageUpdater = () => {
  const [message, setMessage] = useState("Click the button");

  const handleClick = () => {
    setMessage("Button was clicked");
  };

  return (
    <div>
      <p>{message}</p>
      <button onClick={handleClick}>Click the button</button>
    </div>
  );
};

export default MessageUpdater;
