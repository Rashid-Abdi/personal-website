// src/pages/NotFound.js

import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'; // Optional: Create this file for specific styling

function NotFound() {
  return (
    <div className="page not-found">
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="back-home">
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;
