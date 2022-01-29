import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Section = ({ image, title, text, right = false, children }) => {
  if (!right) {
    return (
      <motion.div
        className="section bg-white flex items-center overflow-hidden m-auto my-12 p-4 sm:p-0"
        transition={{ duration: 1.5, ease: 'easeOut' }}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        exit={{ opacity: 0 }}
      >
        <div className="section__image -left hidden sm:w-1/3 sm:flex relative w-auto">
          <Image src={image} width={450} height={675} placeholder="blur" />
        </div>
        <div className="sm:w-2/3 flex flex-col sm:ml-4 md:ml-8 items-start sm:max-w-3xl relative z-10 pr-4">
          <h2 className="relative text-left mt-0 mb-2">{title}</h2>
          <p className="text-left mb-2 md:mb-4">{text}</p>
          <div className="flex">{children}</div>
        </div>
      </motion.div>
    );
  } else {
    return (
      <motion.div
        className="section -right bg-white flex items-center justify-end overflow-hidden m-auto my-12 p-4 sm:p-0"
        transition={{ duration: 1.5, ease: 'easeOut' }}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        exit={{ opacity: 0 }}
      >
        <div className="sm:w-2/3 flex flex-col sm:mr-4 md:mr-8 items-end sm:max-w-3xl relative z-10">
          <h2 className="relative text-right mt-0 z-10">{title}</h2>
          <p className="text-right mb-2 md:mb-4">{text}</p>
          <div className="flex">{children}</div>
        </div>
        <div className="section__image sm:w-1/3 hidden sm:flex relative w-auto">
          <Image src={image} width={450} height={675} placeholder="blur" />
        </div>
      </motion.div>
    );
  }
};

export default Section;
