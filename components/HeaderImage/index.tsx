const HeaderImage = ({ src, alt, objectPosition = 'center' }) => (
  <img src={src} alt={alt} className={`w-full object-cover object-${objectPosition}`} />
);

export default HeaderImage;
