import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

import HeaderImage from '../components/HeaderImage';

import WOMAN_SITTING_CHRIST_MUSEUM from '../public/images/headers/1920/WOMAN_SITTING_MUSEUM_CHRIST.jpeg';

const Reference = () => {
  return (
    <>
      <motion.div
        className="h-full relative"
        transition={{ duration: 1, ease: 'easeOut' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="flex relative h-full">
          <HeaderImage
            src={WOMAN_SITTING_CHRIST_MUSEUM}
            layout="fill"
            objectFit="cover"
            objectPosition="right"
            palceholder="blur"
            priority
          />
        </div>
        <div className="flex container mx-auto absolute flex-col justify-center h-full top-0 right-0 left-0 px-4">
          <motion.div
            transition={{ duration: 1.5, ease: 'easeOut', delay: 0.5 }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            exit={{ opacity: 0 }}
          >
            <h1 className="relative text-white text-sm underline underline-offset-1 mb-2 left-0.5">
              Reference
            </h1>
            <h2 className="text-white text-3xl sm:text-5xl">Uspeh je naša vrlina</h2>
            <div className="flex">
              <div className="mr-4">
                <Link href="#reference">
                  <span className="button">Podrobneje</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
      <div
        id="reference"
        className="bg-[#EfEfEf] h-full flex relative flex-col justify-center text-black sm:py-4 lg:py-8 xl:12 2xl:py-20 px-4"
      >
        <div className="container mx-auto flex flex-col items-center">
          <motion.div
            className="flex items-center mr-auto py-12"
            transition={{ duration: 1.5, ease: 'easeOut' }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            exit={{ opacity: 0 }}
          >
            <div className="spletneResitve__image hidden sm:flex relative w-auto overflow-hidden">
              <Image src={'/ASD'} width={450} height={675} />
            </div>
            <div className="sm:w-2/3 flex flex-col sm:ml-8 items-start sm:max-w-3xl relative z-10">
              <h2 className="relative text-left mt-0">
                Optimizacija
                <br />
                Spletnih Rešitev
              </h2>
              <p className="text-left">
                Za vas izdelamo spletno stran z uporabo najmodernejših in najustreznejših orodij, ki
                vam bodo omogočala, da boste konkurenčni ponudnik svojih storitev na spletu. S tem
                boste dobili možnost, da jo v prihodnje nadgradite ali prilagodite, saj se poslovno
                okolje nenehno spreminja in so potrebne velike zmožnosti prilagoditve poslovanja.
              </p>
              <div className="mt-4">
                <Link href="/reference/optimizacija-spletnih-resitev">
                  <span className="button -dark">Poglej podrobneje</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Reference;
