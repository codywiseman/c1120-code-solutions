import React from 'react';
import ReactDOM from 'react-dom';
import ToggleButton from './toggle-switch';

ReactDOM.render(
  <ToggleButton label='OFF' toggle='toggle-btn toggleOff' circle='circle circleOff'/>,
  document.querySelector('#root')
)
