import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './Component/Input.css'
import './Component/Table.css'


import * as serviceWorker from './serviceWorker';


ReactDOM.render(<App/>, document.getElementById('root'));
serviceWorker.unregister();
