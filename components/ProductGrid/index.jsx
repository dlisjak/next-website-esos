import React from 'react';

const ProductGrid = ({ children }) => {
  return <div className="container m-auto flex flex-wrap justify-evenly">{children}</div>;
};

export default ProductGrid;
