import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import HeaderImage from '../components/HeaderImage';

import ABSTRACT_22 from '../public/images/headers/1920/ABSTRACT_22.jpeg';

const Index = () => {
  return (
    <>
      <motion.div
        className="bg-black h-full relative"
        transition={{ duration: 1, ease: 'easeOut' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="relative h-full">
          <HeaderImage
            src={ABSTRACT_22}
            layout="fill"
            objectFit="cover"
            placeholder="blur"
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
              ESOS Digital
            </h1>
            <h2 className="text-white	text-4xl sm:text-5xl">
              Edinstvena Rešitev
              <br />
              Nove Dobe
            </h2>
            <Link href="#onas">
              <span className="button mr-4">O nas</span>
            </Link>
            <Link href="/storitve">
              <span className="button">Storitve</span>
            </Link>
          </motion.div>
        </div>
      </motion.div>
      <div
        id="onas"
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
              <Image src="/images/vstop/CITY_AERIAL_OFFICE.jpeg" width={450} height={675} />
            </div>
            <div className="sm:w-2/3 flex flex-col sm:ml-8 items-start sm:max-w-3xl relative z-10">
              <h2 className="relative text-left mt-0">ESOS Digital</h2>
              <p className="text-left">
                Za vas izdelamo spletno stran z uporabo najmodernejših in najustreznejših orodij, ki
                vam bodo omogočala, da boste konkurenčni ponudnik svojih storitev na spletu. S tem
                boste dobili možnost, da jo v prihodnje nadgradite ali prilagodite, saj se poslovno
                okolje nenehno spreminja in so potrebne velike zmožnosti prilagoditve poslovanja.
              </p>
              <div className="flex mt-4">
                <div className="mr-4">
                  <Link href="/storitve">
                    <span className="button -dark">Storitve</span>
                  </Link>
                </div>
                <div className="mr-4">
                  <Link href="/kontakt">
                    <span className="button -dark">Kontaktirajte nas</span>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Index;
