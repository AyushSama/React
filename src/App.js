import './App.css';
import About from './Components/About';
import Alert from './Components/Alert';
import Counter from './Components/Counter';
import Navbar from './Components/Navbar';
import React, { useState } from 'react'

function App() {

  const [mode , setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'dark'){
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Enabled!" , "success");
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(7 11 77)';
      showAlert("Dark Mode Enabled!" , "success");
    }
  }

  return (
    <>
    <div>
    <Navbar title="Ayush" link="HK" mode={mode} toggleMode={toggleMode}/>
    </div>
    <Alert alert={alert} />
    <div className="container">
    <Counter mode={mode} toggleMode={toggleMode}/>
    <About mode={mode} toggleMode={toggleMode}/>
    </div>
    </>
  );
}

export default App;
