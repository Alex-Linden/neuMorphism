import React from 'react';
import { useState, useEffect } from 'react';
import Card from './Card';
import './App.css';
import HOCCard from './HOCCard';

function App() {


  return (
    <div>
      <Card media={null} />
      <Card />
      <HOCCard />

      {/* <div className='neumorphism-card'>
        <h1>Neumorphism</h1>
      </div>
      <button onClick={(e) => { console.log(window.getComputedStyle(e.target, null).getPropertyValue("background-color")); }}>print color</button> */}
    </div>
  );
}

export default App;
