import './App.css';
import About from './Components/About';
import Counter from './Components/Counter';
import Navbar from './Components/Navbar';
import React, { useState } from 'react'

function App() {

  return (
    <>
    <div>
    <Navbar title="Ayush" link="HK"/>
    </div>
    <div className="container">
    <Counter/>
    </div>
    <div className="containter">
    <About/>
    </div>
    </>
  );
}

export default App;
