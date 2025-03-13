import React, { useMemo, useState } from "react";

const UseMemo = () => {
  const [number, setNumber] = useState(0);

  const [count, setCount] = useState(0);

  const cubeNum = (num) => {
    console.log("Calculation done!");
    return Math.pow(num, 3);
  };
  const result = useMemo(()=>cubeNum(number),[number])
  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <h1>Cube of the number: {result}</h1>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Click me!</button>
    </div>
  );
};

export default UseMemo;
