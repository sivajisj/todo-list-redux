// Navbar.js

import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo mb-3">Todo-List-App</div>
      <div className="nav-links">
        <a href="#" className="nav-link">Home</a>
        <a href="#" className="nav-link">About</a>
        <a href="#" className="nav-link">Services</a>
        <a href="#" className="nav-link">Contact</a>
      </div>
    </div>
  );
};

export default Navbar;
