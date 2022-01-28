import React from 'react';

const Button = ({ onClick, animate = true, children }) => {
  return (
    <button onClick={onClick} className={`button ${animate ? 'sheen' : ''}`}>
      {children}
    </button>
  );
};

export default Button;
