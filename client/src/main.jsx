import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import '../index.css';
// Importing Roboto font with different weights
import "@fontsource/roboto/300.css"; // Weight 300
import "@fontsource/roboto/400.css"; // Weight 400
import "@fontsource/roboto/700.css"; // Weight 700

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
