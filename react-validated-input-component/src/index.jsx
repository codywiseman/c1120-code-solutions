import React from 'react';
import ReactDOM from 'react-dom';
import ValidatedInput, { message } from './validated-input';

ReactDOM.render(
  <ValidatedInput message={message}/>,
  document.querySelector('#root')
)
