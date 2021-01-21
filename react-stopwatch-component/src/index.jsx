import React from 'react';
import ReactDOM from 'react-dom';
import StopWatch, { pausePlay } from './stopwatch';


ReactDOM.render(
  <StopWatch start={pausePlay}/>,
  document.querySelector('#root')
)
