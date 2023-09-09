import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './count'
import Team from './Team'
import Users from './user'
import Friends from './friends';

function App() {
  function handleClick(){
      alert('button clicked')
  }
  const handleClick2 =()=>{
    alert('button clicked2')
  }

  const addToFive =(num) =>{
    alert(num+5);
  }
  return (
   
    <>
     
      <h1> React Core Concepts 2</h1>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>click me</button>
      <button onClick={handleClick2}>click 2</button>
      <button onClick={() =>{alert('third button clicked')}}>third clicked</button>
      <button onClick={()=> addToFive(3)  }>Fourth click</button>
     
      
    </>
  )
}

export default App
