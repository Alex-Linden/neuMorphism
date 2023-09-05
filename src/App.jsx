import React from 'react';
import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {


  return (
    <div>

    <div className='neumorphism-card'>
      <h1>Neumorphism</h1>
    </div>
    <button onClick={(e) => {console.log(window.getComputedStyle(e.target, null).getPropertyValue("background-color"))}}>print color</button>
    </div>
  );
}

export default App;
