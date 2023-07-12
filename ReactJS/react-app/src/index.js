import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import App from './Inter 2 react router/App';
import { BrowserRouter } from 'react-router-dom';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter> 
  {/* BrowserRouter batata hai Kya - Route for page navigation */}
    <App />
  </BrowserRouter>
);

