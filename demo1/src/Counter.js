import React, { useState, useEffect } from "react";

export default function App2() {
    const [time, setTime] = useState(Time());
    const [start, setStart] = useState(false);
    useEffect(() => {
      if (start === false) {
        return;
      }
      const timer = setInterval(() => {
        setTime(Time());
      }, 1000);
  
      return () => {
        clearInterval(timer);
      };
    }, [start]);
  
    return (
      <div>
        <h3>Timer</h3>
        Time: {time}
        <br></br>
        <button onClick={() => setStart(!start)}>Time</button>
      </div>
    );
  }
  
  function Time() {
    return new Date().toLocaleString();
  }