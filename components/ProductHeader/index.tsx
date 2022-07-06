import Image from 'next/image';
import HeaderImage from '../../components/HeaderImage';

const ProductHeader = ({
  images,
  alt,
  objectPosition = 'center',
  title,
  subtitle,
  buttons,
  productImages,
}) => (
  <header className="bg-[#EfEfEf] h-screen w-full relative flex">
    <div className="flex flex-col container items-center justify-center w-2/4 h-full px-4">
      <div className="mx-auto mt-20">
        <h2 className="CopperplateGothic relative text-teal-700 text-lg underline underline-offset-1 2xl:mb-2 left-0.5">
          {subtitle}
        </h2>
        {title}
        <div className="flex flex-wrap">{buttons}</div>
        <div className="flex mt-8">
          {productImages.map((image) => (
            <div className="mr-4">
              <Image src={image} width={250} height={250} />
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="relative flex h-full pointer-events-none w-2/4">
      {images.map((image) => (
        <HeaderImage
          src={image}
          alt={alt}
          objectFit="cover"
          objectPosition={objectPosition}
          placeholder="blur"
          priority={true}
        />
      ))}
    </div>
  </header>
);

export default ProductHeader;
