import React, { useState } from 'react';
import '../App.css'
function Counter({ defaultValue = 0 }) {
  const [count, setCount] = useState(defaultValue);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button style={{marginLeft:'20px'}} onClick={decrement}>-</button>
      <div className='extraSpace'></div>
    </div>
  );
};

export default Counter;
