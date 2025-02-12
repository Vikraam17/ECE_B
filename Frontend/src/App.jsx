import { useState } from "react";

function App() {
  const [count, setCount]=useState(0);
  const [name, setName]=useState("Vikraam");
  return (
    <>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count-1)}>Decrement</button>
      <button onClick={()=>{setCount(count+1)}}>Increment</button>
      <h1>{name}</h1>
      <button onClick={()=>setName(name==="Vikraam"?"viky":"Vikraam")}>Click</button>
    </>
  );
}

export default App;