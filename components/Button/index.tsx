import React from 'react';

const Button = (props) => {
  const { onClick, className, dark = false, red = false, children } = props;
  return (
    <button
      onClick={onClick}
      className={`button ${dark ? '-dark' : red ? '-red' : ''} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
