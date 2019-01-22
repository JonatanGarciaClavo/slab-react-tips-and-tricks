import React from 'react';
import '../styles/components/Error.css';
import errorLogo from '../styles/assets/errorLogo.svg';

// Component that shows error screen when fails the initial data fetch
const Error = () => (
  <div className="error-container">
    <div className="error-container-wrapper">
      <img src={errorLogo} className="error-logo" alt="logo" />
      <div className="error-text">Oops, something went wrong!</div>
    </div>
  </div>
);

export default Error;
