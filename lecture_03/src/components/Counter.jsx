import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((count) => count + 1);
  };

  const handleDecrement = () => {
    setCount((count) => count - 1);
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>Increment</button>

      <button onClick={handleDecrement}>Increment</button>
    </>
  );
};

export default Counter;
