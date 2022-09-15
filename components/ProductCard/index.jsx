import Image from 'next/image';
import React from 'react';

import AP from '../../public/images/references/AP.png';

const ProductCard = () => {
  return (
    <div className="flex flex-col">
      <Image src={AP} layout="fixed" width={250} height={250} />
      <h3>Example</h3>
    </div>
  );
};

export default ProductCard;
