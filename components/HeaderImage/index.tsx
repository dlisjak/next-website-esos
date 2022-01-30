import React from 'react';
import Image from 'next/image';

const HeaderImage = (props) => {
  const {
    src,
    alt,
    layout = 'fill',
    objectFit,
    objectPosition = 'center center',
    priority,
  } = props;

  return (
    <Image
      src={src}
      alt={alt}
      layout={layout}
      objectFit={objectFit}
      objectPosition={objectPosition}
      quality={80}
      priority={priority}
      {...props}
    />
  );
};

export default HeaderImage;
