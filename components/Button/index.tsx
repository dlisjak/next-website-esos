import React from 'react';

const Button = (props) => {
  const { onClick, className, dark = false, children } = props;
  return (
    <button onClick={onClick} className={`button ${dark ? '-dark' : ''} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
