import React, { useState, useEffect } from 'react';
import { clearInterval } from 'timers';

export default function Countdown() {
  const [time, setTime] = useState(10);

  // Set an interval to decrement every second, and create a cleanup
  useEffect(() => {
    const countdownTimer = setInterval(() => {
      console.log(time + "!");
      if (time === 0) console.log("Lift Off!!!");
      setTime(prevTime => prevTime - 1);
    }, 1000);

    return () => clearTimeout(countdownTimer);
  }, [time]);

  return (
    <div>
      <h1>This component counts down from 10</h1>
      <h2>{time}</h2> 
    </div>
  )
}
