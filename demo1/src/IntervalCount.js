import React, { useState } from 'react';

export default function IntervalCount() {
    // Declare a new state variable, which we'll call "count"
    // state skal bruges hvis vi ændre inden i og opdatere det vi ser.
    const [count, setCount] = useState(0);
  
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
        <button onClick={() => setCount(count - 1)}>
          Click me
        </button>
      </div>
    );
  }