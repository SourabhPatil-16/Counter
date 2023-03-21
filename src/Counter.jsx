import React, { useState } from 'react';
import './style.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 2);
  }

  function decrement() {
    if (count <= 0) {
      setCount(0);
    } else {
      setCount(count - 2);
    }
  }

  return (
    <div className="main">
      <h2>{count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

export default Counter;
