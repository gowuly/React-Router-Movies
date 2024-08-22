import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'; // import BrowserRouter from react-router-dom.


const root = ReactDOM.createRoot(document.getElementById('root'));

// You'll need to wrap <App /> for routing to work
root.render(
  <BrowserRouter> {/* wrap the App component in BrowserRouter */}
  <App/>
  </BrowserRouter>
);
