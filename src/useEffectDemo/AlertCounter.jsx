import React, { useState, useEffect } from 'react';

export default function AlertCounter() {
  const [count, setCount] = useState(0);

  // log when component mounts
  // Empty array will not change so it runs once
  useEffect(() => {
    console.log("Alert Counter has mounted");
  }, []);

  useEffect(() => {
    if (count > 3) alert("Count is greater than 3");
  }, [count]);

  return (
    <div>
      <h1>This component alerts every time the count is greater than 3</h1>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
      <h2>{count}</h2>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
    </div>
  )
}