import React, { useEffect, useRef, useState } from "react";

const UseRef = () => {
  const [count, setCount] = useState(0);
  const value = useRef(0);
  useEffect(() => {
    value.current++;
  }, [count]);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h1>value: {value.current}</h1>
    </div>
  );
};

export default UseRef;
