import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const data = ['Slider 1', 'Slider 2', 'Slider 3']
ReactDOM.render(
  <React.StrictMode>
    <App sliders={data}/>
  </React.StrictMode>,
  document.getElementById('root')
);

