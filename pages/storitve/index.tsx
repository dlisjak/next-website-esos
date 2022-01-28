import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

import HeaderImage from '../../components/HeaderImage';

import BUILDING_BRIDGE from '../../public/images/headers/1920/BUILDING_BRIDGE.jpeg';
import SPLETNE_RESITVE from '../../public/images/storitve/SPLETNE_RESITVE.jpeg';
import IZDELAVA_APLIKACIJ from '../../public/images/storitve/IZDELAVA_APLIKACIJ.jpeg';
import DIGITALNI_MARKETING from '../../public/images/storitve/DIGITALNI_MARKETING.jpeg';
import ANIMACIJE from '../../public/images/storitve/3D_ANIMACIJE.jpeg';

const Storitve = () => {
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
            src={BUILDING_BRIDGE}
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
              Storitve
            </h1>
            <h2 className="text-white text-3xl sm:text-5xl mb-2">Spletne Rešitve</h2>
            <h2 className="text-white	text-3xl sm:text-5xl mb-2">Mobilne Aplikacije</h2>
            <h2 className="text-white	text-3xl sm:text-5xl mb-2">Marketing</h2>
            <h2 className="text-white	text-3xl sm:text-5xl">3D Animacije</h2>
            <div className="flex">
              <div className="mr-4">
                <Link href="#storitve">
                  <span className="button">Več o storitvah</span>
                </Link>
              </div>
              <div className="mr-4">
                <Link href="/reference">
                  <span className="button">Reference</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
      <div
        id="storitve"
        className="bg-[#EfEfEf] flex relative flex-col justify-center text-black sm:py-4 lg:py-8 xl:12 2xl:py-20 px-4"
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
              <Image src={SPLETNE_RESITVE} width={450} height={675} placeholder="blur" />
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
                <Link href="/storitve/optimizacija-spletnih-resitev">
                  <span className="button -dark">Poglej podrobneje</span>
                </Link>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="flex items-center ml-auto py-12"
            transition={{ duration: 1.5, ease: 'easeOut' }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            exit={{ opacity: 0 }}
          >
            <div className="sm:w-2/3 flex flex-col sm:mr-8 items-end sm:max-w-3xl relative z-10">
              <h2 className="relative text-right mt-0 z-10">
                Izdelava Mobilnih
                <br />
                Aplikacij
              </h2>
              <p className="text-right">
                Za vas izdelamo mobilne aplikacije na sisemih iOS in Android. Omogočimo vam celotno
                ponudbo od izdelave, gostovanja na Cloud tehnologiji s podporo kubernetes sistema.
              </p>
              <div className="ml-auto mt-4">
                <Link href="/storitve/izdelava-mobilnih-aplikacij">
                  <span className="button -dark">Poglej podrobneje</span>
                </Link>
              </div>
            </div>
            <div className="izdelavaAplikacij__image hidden sm:flex relative w-auto overflow-hidden">
              <Image src={IZDELAVA_APLIKACIJ} width={450} height={675} placeholder="blur" />
            </div>
          </motion.div>
          <motion.div
            className="flex items-center mr-auto py-12"
            transition={{ duration: 1.5, ease: 'easeOut' }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            exit={{ opacity: 0 }}
          >
            <div className="digitalniMarketing__image hidden sm:flex relative w-auto overflow-hidden">
              <Image src={DIGITALNI_MARKETING} width={450} height={675} placeholder="blur" />
            </div>
            <div className="sm:w-2/3 flex flex-col sm:ml-8 items-start sm:max-w-3xl relative z-10">
              <h2 className="relative mt-0 z-10">Digitalni Marketing</h2>
              <p className="text-left">
                Za vas organiziramo in upravljamo izvedbo učinkovitih digitalnih trženjskih
                strategij. Tako boste dobili celostni vpogled in pravilno izbrali ciljno občinstvo,
                ki vam bo omogočilo najboljši izplen vloženih sredstev v reklamno kampanjo.
              </p>
              <div className="mr-auto mt-4">
                <Link href="/storitve/digitalni-marketing">
                  <span className="button -dark">Poglej podrobneje</span>
                </Link>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="flex items-center ml-auto py-12"
            transition={{ duration: 1.5, ease: 'easeOut' }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            exit={{ opacity: 0 }}
          >
            <div className="sm:w-2/3 flex flex-col sm:mr-8 items-end sm:max-w-3xl relative z-10">
              <h2 className="relative text-right mt-0 z-10">
                3D Modeliranje
                <br />& Animiranje
              </h2>
              <p className="text-right">
                Za vas izdelamo mobilne aplikacije na sisemih iOS in Android. Omogočimo vam celotno
                ponudbo od izdelave, gostovanja na Cloud tehnologiji s podporo kubernetes sistema.
              </p>
              <div className="ml-auto mt-4">
                <Link href="/storitve/3d-modeliranje-animiranje">
                  <span className="button -dark">Poglej podrobneje</span>
                </Link>
              </div>
            </div>
            <div className="izdelavaAplikacij__image hidden sm:flex relative w-auto overflow-hidden">
              <Image src={ANIMACIJE} width={450} height={675} placeholder="blur" />
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Storitve;
