import React from 'react';
import './Style.css';
import { Link } from 'react-router-dom';
function ThankYou() {
  return (
    <div className='thanks-container'>
      <h2>Thank You!</h2>
      <p>Your complaint has been submitted successfully.</p>
      <h3>
          <Link to="/Home">Return to Home Page</Link>
      </h3>
    </div>
  );
}

export default ThankYou;