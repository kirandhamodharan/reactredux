import React from 'react';
import ReactDOM from 'react-dom';
import './style/main.css';
import App from './app';

import { Provider } from 'react-redux';
import store from './util/redux/store'

import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(<Provider  store={store} ><BrowserRouter>
        <App />
     </BrowserRouter></Provider>,
     document.getElementById('app'));