import Image from 'next/image';
import { motion } from 'framer-motion';

const Section = ({ image, title, text, right = false, children }) => {
  return (
    <motion.div
      className={`section bg-white w-full flex items-center overflow-hidden m-auto my-12 p-4 sm:p-0 ${
        !right ? '' : 'justify-end'
      }`}
      transition={{ duration: 1.5, ease: 'easeOut' }}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      exit={{ opacity: 0 }}
    >
      {!right && (
        <div className="section__image sm:w-1/3 sm:flex relative w-auto overflow-hidden hidden">
          <Image src={image} width={450} height={675} placeholder="blur" />
        </div>
      )}
      <div
        className={`sm:w-2/3 flex flex-col sm:max-w-3xl relative z-10 ${
          !right ? 'items-start sm:ml-4 md:ml-6 lg:ml-8' : 'items-end sm:mr-4 md:mr-6 lg:mr-8'
        }`}
      >
        <h2 className={`relative mt-0 z-10 mb-2 ${!right ? 'text-left' : 'text-right'}`}>
          {title}
        </h2>
        <p className={`mb-2 md:mb-4 text-left ${!right ? 'text-left' : 'text-right'}`}>{text}</p>
        <div className="flex">{children}</div>
      </div>
      {right && (
        <div className="section__image sm:w-1/3 sm:flex relative w-auto overflow-hidden hidden">
          <Image src={image} width={450} height={675} placeholder="blur" />
        </div>
      )}
    </motion.div>
  );
};

export default Section;
