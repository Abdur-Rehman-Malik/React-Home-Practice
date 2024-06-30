import { useState } from "react";
const Counter = () => {
  const [count, setcount] = useState(0);
  const handleIncrement = () => {
    setcount(count + 1);
  };
  const handleDeccrement = () => {
    if (count > 0) setcount(count - 1);
  };
  return (
    <div>
      <p>{count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDeccrement}>Decrement</button>
    </div>
  );
};
export default Counter;
