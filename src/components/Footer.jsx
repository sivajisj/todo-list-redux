// Footer.jsx
import React from 'react';

const footerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '1rem',
  position: 'fixed',
  bottom: '0',
  width: '100%',
  boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.2)'
};

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>&copy; {new Date().getFullYear()} TodoList App - All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
