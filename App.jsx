
import React from 'react'
import { useState } from 'react'
import './App.css';
const App = ()=> {
    const [cnt, setCnt] = useState(0);
    const increment = ()=>{
        setCnt(cnt + 1);
    };
  return (
    <div className='app'>
      <h1 className='h1'>{cnt}</h1>
      <button onClick = {increment}>Click Me</button>
    </div>
  );
}

export default App
