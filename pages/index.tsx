import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

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
        <div className="flex relative h-full">
          <Image
            src="/images/headers/1920/ABSTRACT_22.jpeg"
            layout="fill"
            quality={100}
            objectFit="cover"
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
        className="bg-[#EfEfEf] flex relative flex-col justify-center text-black sm:py-4 lg:py-8 xl:12 2xl:py-20 px-4"
      >
        <div className="container mx-auto flex flex-col items-center">
          <motion.div
            className="flex items-center py-12"
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
              <div className="mt-4">
                <Link href="#ekipa">
                  <span className="button -dark">Spoznaj ekipo</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Index;
