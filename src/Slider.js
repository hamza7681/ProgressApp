import React from 'react'
import './App.css'

const Sliders= ({title, value, onChange}) => {
  return (
    <>
      <div className="slider-container pl-3 pr-3">
        <div className="range-min-max-values">
          <span>{title}</span>
        </div>
        <input
          type="range"
          min={0}
          max={100}
          value={value}
          onChange={onChange}
          id='slider'
        />
        <span>{value.toFixed(2)}%</span>
      </div>
    </>
  )
}

export default Sliders;