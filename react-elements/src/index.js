import React from 'react';
import ReactDOM from 'react-dom'

let h1 = React.createElement("h1", null, 'Hello, React!')

console.log(h1)

ReactDOM.render(h1, document.getElementById('root'))
