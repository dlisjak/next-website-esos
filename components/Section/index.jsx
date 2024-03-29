import Image from 'next/image';

const Section = ({
  image,
  alt,
  showImageOnSmall = true,
  title,
  text,
  right = false,
  aboveTitle = {},
  isPost = false,
  children,
}) => {
  const imageEl = (
    <div
      className={`section__image sm:w-1/3 ${showImageOnSmall ? 'sm:flex' : 'xl:flex'
        } relative w-auto overflow-hidden hidden`}
    >
      <Image
        className="pointer-events-none"
        src={image}
        alt={alt}
        width={450}
        height={675}
        placeholder={typeof image !== 'string' ? 'blur' : 'empty'}
      />
    </div>
  );

  return (
    <div
      className={`contentSection bg-white w-full flex overflow-hidden m-auto my-12 p-4 ${!right ? '' : 'justify-end'
        } ${showImageOnSmall ? 'sm:p-0' : 'md:p-4 xl:p-0 justify-center xl:justify-start'} ${!right ? '' : 'xl:justify-end'
        } ${isPost ? 'items-start post' : 'items-center'}`}
    >
      {!right && imageEl}
      <div
        className={`sm:w-2/3 flex flex-col sm:max-w-3xl relative z-10 ${!right ? 'items-start sm:ml-4 md:ml-6 lg:ml-8' : 'items-end sm:mr-4 md:mr-6 lg:mr-8'
          } ${showImageOnSmall ? '' : 'sm:w-full'}${isPost ? 'sm:pt-4 sm:pr-8 xl:pr-0' : ''}`}
      >
        {aboveTitle}
        <h2 className={`relative mt-0 z-10 mb-2 ${!right ? 'text-left' : 'text-right'}`}>
          {title}
        </h2>
        <div className={`mb-2 md:mb-4 text-left ${!right ? 'text-left' : 'text-right'}`}>
          {text}
        </div>
        <div
          className={`flex flex-wrap relative ${showImageOnSmall ? '' : 'ml-auto xl:ml-0'} ${right ? 'justify-end' : ''
            }`}
        >
          {children}
        </div>
      </div>
      {right && imageEl}
    </div>
  );
};

export default Section;
