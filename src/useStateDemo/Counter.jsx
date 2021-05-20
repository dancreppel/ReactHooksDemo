import React, { useState } from 'react';

function initCount() {
  console.log("initialize");
  return 0;
}

export default function Counter() {
  const [count, setCount] = useState(initCount);

  return (
    <div>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
      <h1>{count}</h1>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
    </div>
  )
};
