import React, { useState } from 'react'
import './Temperature.css'

export default function Temperature() {

  const [temp , setTemp] = useState(10);
  const [tint , setColor] = useState({ background: 'blue' })

  const incTemp = ()=>{
    setTemp(temp+1);
    setColor({ background: updateColor(temp) });
  }
  
  const decTemp = ()=>{
    setTemp(temp-1);
    setColor({ background: updateColor(temp) });
  }

  const updateColor = (temp)=>{
      let low = -40;
      let high = 100;
      let percent = (temp-low)/(high-temp);
      let hue = (1-percent)*240;
      const backgroundColor = `linear-gradient(to right, hsl(${hue}, 100%, 50%), hsl(${hue + 60}, 100%, 50%))`;
      return backgroundColor;
  }

  return (
    <>
        <div className="container">
            <div className="square">
                <div className="circle" style={tint}>{temp}<span>&#176;</span> C</div>
                <div className="inc" onClick={incTemp}>+</div>
                <div className="dec" onClick={decTemp}>-</div>
            </div>
        </div>
    </>
  )
}
