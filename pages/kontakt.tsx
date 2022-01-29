import Link from 'next/link';
import { motion } from 'framer-motion';

import HeaderImage from '../components/HeaderImage';

import HAND_FLOWERS from '../public/images/headers/1920/HAND_FLOWERS.jpeg';

const Kontakt = () => {
  return (
    <>
      <motion.div
        className="h-full relative"
        transition={{ duration: 0.5, ease: 'easeOut' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="flex relative h-full">
          <HeaderImage
            src={HAND_FLOWERS}
            layout="fill"
            objectFit="cover"
            palceholder="blur"
            priority
          />
        </div>
        <div className="flex container mx-auto absolute flex-col justify-center h-full top-0 right-0 left-0 px-4">
          <motion.div
            transition={{ duration: 1.5, ease: 'easeOut' }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            exit={{ opacity: 0 }}
          >
            <h1 className="relative text-white text-sm underline underline-offset-1 2xl:mb-2 left-0.5">
              Kontakt
            </h1>
            <h2 className="text-white text-3xl sm:text-5xl mb-6">Napišite Svojo Zgodbo</h2>
            <div className="flex">
              <div className="mr-4">
                <Link href="#kontakt">
                  <span className="button">Obrazec</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
      <div
        id="kontakt"
        className="bg-[#EfEfEf] h-auto flex relative flex-col justify-center text-black py-12 px-4"
      ></div>
    </>
  );
};

export default Kontakt;
