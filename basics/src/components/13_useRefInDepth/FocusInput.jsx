import React, { useRef, useEffect } from "react";

function FocusInput() {
  // Create a ref for the input element
  const inputRef = useRef(null);

  // Focus the input when the component mounts
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div>
      <h2>Auto-focus Input Example</h2>
      <input type="text" placeholder="Will not be auto-focus" />
      <input
        ref={inputRef}
        type="text"
        placeholder="This input will auto-focus"
      />
    </div>
  );
}

export default FocusInput;
