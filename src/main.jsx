import React from 'react';
import ReactDOM from 'react-dom/client';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import './index.css';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav />
    <App />
    <Footer />
  </React.StrictMode>,
);
