import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [value,setValue] = useState(0);

  useEffect(() => {
    setTimeout(()=>{
      setValue(value+1)
    },2000)  
  },[count]);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <h1>value: {value}</h1>
    </div>
  );
};

export default UseEffect;
