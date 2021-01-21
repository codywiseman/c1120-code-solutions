import React from 'react';
import ReactDOM from 'react-dom';
import ToggleButton from './toggle-switch';

ReactDOM.render(
  <ToggleButton labelOff='OFF' toggleOff='toggle-btn toggleOff' circleOff='circle circleOff'
    labelOn='ON' toggleOn='toggle-btn toggleOn' circleOn='circle circleOn'/>,
  document.querySelector('#root')
)
