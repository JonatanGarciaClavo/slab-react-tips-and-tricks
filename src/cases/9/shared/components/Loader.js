import React from 'react';
import '../styles/components/Loader.css';
import logo from '../styles/assets/logo.svg';

// Loader component
const Loader = () => (
  <div className="loader-container">
    <div>
      <img src={logo} className="loader-logo" alt="logo" />
      <div className="loader-text">Loading...</div>
    </div>
  </div>
);

export default Loader;
