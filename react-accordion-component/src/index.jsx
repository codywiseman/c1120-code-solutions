import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './accordion';

ReactDOM.render(
  <div>
    <Accordion title="html" />
    <Accordion title="css" />
    <Accordion title="javascript" />
  </div>,
  document.querySelector('#root')
)
