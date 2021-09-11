import React, { useState } from "react";
import Slider from "./Slider";
import "./App.css";

export default function App({ sliders }) {
  const [ranges, setRanges] = useState(
    new Array(sliders.length).fill(100 / sliders.length)
  );

  function handleChange(index, value) {
    let maxValue = 100;
    const remaining = maxValue - parseInt(value, 10);
    setRanges((vs) =>
      vs.map((v, i) => {
        if (i === index) return parseInt(value, 10);
        const valueRemainig = maxValue - parseInt(vs[index], 10);
        if (valueRemainig) return (remaining * v) / valueRemainig;
        return remaining / (sliders.length - 1);
      })
    );
  }

  return (
    <div className="container" id="main">
        <div className='container text-center' style={{paddingTop:'40px', paddingBottom:'40px'}}>
            <h1>Progress App</h1>
        </div>
      {sliders.map((item, index) => (
        <Slider
          key={index}
          index={index}
          value={ranges[index]}
          onChange={(e) => handleChange(index, e.target.value)}
        />
      ))}
    </div>
  );
}
