// "1. Explain why functional components are better than class based components
// Functional components are more concise and easier to read than class-based components. 
//Functional components are faster than class-based components and also provides hooks,provides code reusablity and consistency

// 2. Create a component called Counter that displays a number on screen with two buttons ( +, - ).
//    - On clicking of those buttons, the number on screen should increase or decrease by 1.
//    - Default value of that number should be 0 and parent should be able to override default value using
//      as prop called defaultValue."
import React, { useState } from 'react';

function Counter({ defaultValue = 0 }) {
  const [count, setCount] = useState(defaultValue);

  function increment(){
    setCount(count + 1);
  };

  function decrement() {
    setCount(count - 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default Counter;
