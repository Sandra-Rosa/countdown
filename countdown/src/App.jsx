import { useState } from 'react';
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function countDown(){
    setCount(count-1);
  }
  function countUp(){
    setCount(count+1);
  }
  return (
    <>
      <div>
      <button onClick={countDown}>-</button>
      <h1>{count}</h1>
      <button onClick={countUp}>+</button>
      </div>
    </>
  )
}

export default App
