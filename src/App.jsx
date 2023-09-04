import React from 'react';
import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [color, setColor] = useState("")
  console.log("color", color)

  useEffect(() => {
    setColor(document.body.style.backgroundColor)
    console.log(color)
  }, [color] )

  return (
    <div className='neumorphism-card'>
      <h1>Neumorphism</h1>
    </div>
  );
}

export default App;
