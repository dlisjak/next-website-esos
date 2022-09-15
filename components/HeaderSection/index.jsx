import HeaderSectionImage from './Image';

const HeaderSection = ({ id, image, alt, title, subtitle, buttons, priority = false, left = false }) => (
  <div id={id} className="flex container mx-auto bg-black h-screen w-full relative">
    {left && (
      <div className="relative flex pointer-events-none items-center headerImageContainer">
        <HeaderSectionImage src={image} alt={alt} placeholder="blur" priority={priority} />
      </div>
    )}
    <div className="flex container mx-auto items-center h-full top-0 right-0 left-0 px-4">
      <div className={`${left ? "text-right ml-auto" : "text-left mr-auto"}`}>
        {subtitle}
        {title}
        <div className="flex flex-wrap">{buttons}</div>
      </div>
    </div>
    {!left && (
      <div className="relative flex pointer-events-none items-center headerImageContainer">
        <HeaderSectionImage src={image} alt={alt} placeholder="blur" priority={priority} />
      </div>
    )}
  </div>
);

export default HeaderSection;
