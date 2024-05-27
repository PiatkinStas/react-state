import React from 'react';
import { useState } from 'react';

const Counter = () => {
  // Инициализируем состояние с начальным значением 0
  const [count, setCount] = useState(0);

  function inc() {
    return count + 2;
  }
  function dec() {
    return count - 2;
  }
  return (
    <div>
      <p>Current count: {count}</p>
      <button onClick={() => setCount(inc())}>Increment</button>
      <button onClick={() => setCount(dec())}>Decrement</button>
    </div>
  );
};

export default Counter;
