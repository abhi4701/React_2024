import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter]=useState(15)

  const addValue =()=>{
    if(counter<20){
      counter= counter+1;
   
      setCounter(counter)
    }
   
  }

  const decereaseValue=()=>{
  
    if(counter>0){
      counter= counter-1;
      setCounter(counter)
    }
      
  }

  return (
    <>
     <h1>Chai aur React</h1>
     <h2>Counter value: {counter}</h2>

     <button
      onClick={addValue}
      >Add value</button>
     <br />
     <button
      onClick={decereaseValue}
     >Decrease value</button>
    </>
  )
}

export default App
