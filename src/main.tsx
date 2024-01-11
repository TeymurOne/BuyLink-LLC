import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  

  BrowserRouter as Router,
  
} from 'react-router-dom';
import App from './App';
import store from './app/api/store';
import './index.css';
import './satoshi.css';

import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
);
