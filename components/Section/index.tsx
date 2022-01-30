import Image from 'next/image';

const Section = ({ image, title, text, right = false, aboveTitle, children }) => {
  const imageEl = (
    <div className="section__image sm:w-1/3 sm:flex relative w-auto overflow-hidden hidden">
      <Image
        className="pointer-events-none"
        src={image}
        width={450}
        height={675}
        placeholder="blur"
      />
    </div>
  );

  return (
    <div
      className={`section bg-white w-full flex items-center overflow-hidden m-auto my-12 p-4 sm:p-0 ${
        !right ? '' : 'justify-end'
      }`}
    >
      {!right && imageEl}
      <div
        className={`sm:w-2/3 flex flex-col sm:max-w-3xl relative z-10 ${
          !right ? 'items-start sm:ml-4 md:ml-6 lg:ml-8' : 'items-end sm:mr-4 md:mr-6 lg:mr-8'
        }`}
      >
        <div className="flex h-10">{aboveTitle}</div>
        <h2 className={`relative mt-0 z-10 mb-2 ${!right ? 'text-left' : 'text-right'}`}>
          {title}
        </h2>
        <p className={`mb-2 md:mb-4 text-left ${!right ? 'text-left' : 'text-right'}`}>{text}</p>
        <div className="flex">{children}</div>
      </div>
      {right && imageEl}
    </div>
  );
};

export default Section;
