import HeaderImage from '../../components/HeaderImage';

const Header = ({ image, objectPosition = 'center', title, subtitles, buttons }) => (
  <header className="bg-black h-full w-full relative">
    <div className="flex relative h-full">
      <HeaderImage
        src={image}
        objectFit="cover"
        objectPosition={objectPosition}
        placeholder="blur"
        priority={true}
      />
    </div>
    <div className="flex container mx-auto absolute flex-col justify-center h-full top-0 right-0 left-0 px-4">
      <div>
        <h1 className="relative text-white text-sm underline underline-offset-1 2xl:mb-2 left-0.5">
          {title}
        </h1>
        {subtitles}
        <div className="flex">{buttons}</div>
      </div>
    </div>
  </header>
);

export default Header;
