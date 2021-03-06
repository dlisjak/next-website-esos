import HeaderImage from '../../components/HeaderImage';

const Header = ({ image, alt, objectPosition = 'center', title, subtitle, buttons }) => (
  <header className="bg-black h-screen w-full relative">
    <div className="relative flex h-full pointer-events-none">
      <HeaderImage
        src={image}
        alt={alt}
        objectFit="cover"
        objectPosition={objectPosition}
        placeholder="blur"
        priority={true}
      />
    </div>
    <div className="flex container mx-auto absolute items-center h-full top-0 right-0 left-0 px-4">
      <div>
        <h1 className="CopperplateGothic relative text-white text-sm underline underline-offset-1 2xl:mb-2 left-0.5">
          {subtitle}
        </h1>
        {title}
        <div className="flex flex-wrap">{buttons}</div>
      </div>
    </div>
  </header>
);

export default Header;
