import React from 'react';
import Image from 'next/image';

const HeaderImage = (props) => {
  const { src, layout, objectFit, objectPosition = 'center center', priority } = props;

  return (
    <Image
      src={src}
      layout={layout}
      objectFit={objectFit}
      objectPosition={objectPosition}
      quality={100}
      priority={priority}
      {...props}
    />
  );
};

export default HeaderImage;
