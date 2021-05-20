import React, { useState } from 'react';

function initCount() {
  console.log("initialize");
  return 0;
}

export default function Counter() {
  const [count, setCount] = useState(initCount);

  return (
    <div>
      <h1>This component is a counter that increments or decrements by 1</h1>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
      <h2>{count}</h2>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
    </div>
  )
};
