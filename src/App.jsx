import {useEffect, useState } from "react";
function App() {
  const [count, setCount] = useState(0);
// Save Counter in Local Storage
// save in string
useEffect(()=>{
  localStorage.setItem("count", JSON.stringify(count));
},[count]);

// convert to number
useEffect(()=>{
  const save = localStorage.getItem("count");
  if(save) setCount(JSON.parse(save));

},[]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 ">
      <div className="bg-white rounded-lg shadow-md  h-96 p-14">
      <h1 className="text-5xl font-extrabold ">Counter App</h1>
      <div className="text-2xl m-10 pl-2.5 bg-amber-300 h-10 ">Current Count: {count}</div>
      <button 
      className="m1-1.5 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      onClick={() => setCount(count + 1)} disabled={count===10}> ➕Increment</button>
      <button 
           className="m-1.5 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      onClick={() => setCount(count - 1)} disabled={count===0}>  ➖ Decrement</button>
      <button 
           className="m-1.5 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      onClick={() => setCount(0)}> 🔁 Reset</button>
      </div>
    </div>
  );
}
export default App;
