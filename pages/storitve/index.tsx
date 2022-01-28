import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

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
          <Image
            src="/images/headers/1920/ABSTRACT_5.jpeg"
            layout="fill"
            quality={100}
            objectFit="cover"
            objectPosition="left center"
            priority
          />
        </div>
        <div className="flex container mx-auto absolute flex-col items-start justify-center h-full top-0 right-0 left-0">
          <motion.div
            className="flex flex-col items-start"
            transition={{ duration: 1.5, ease: 'easeOut', delay: 0.5 }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            exit={{ opacity: 0 }}
          >
            <h1 className="relative text-white text-sm underline underline-offset-1 mb-2 left-0.5">
              Storitve
            </h1>
            <h2 className="CopperplateGothic text-white	text-5xl mb-2">
              Optimizacija Spletnih Rešitev
            </h2>
            <h2 className="CopperplateGothic text-white	text-5xl mb-2">
              Izdelava Mobilnih Aplikacij
            </h2>
            <h2 className="CopperplateGothic text-white	text-5xl">Digitalni Marketing</h2>
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
        className="bg-[#EfEfEf] flex relative flex-col justify-center text-black py-20"
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
            <div className="spletneResitve__image flex relative w-auto overflow-hidden">
              <Image src="/images/storitve/SPLETNE_RESITVE.jpeg" width={450} height={675} />
            </div>
            <div className="w-2/3 flex flex-col ml-8 items-start max-w-3xl relative z-10">
              <h2 className="CopperplateGothic relative text-left mt-0">
                Optimizacija spletnih rešitev
              </h2>
              <p className="text-left">
                Za vas izdelamo spletno stran z uporabo najmodernejših in najustreznejših orodij, ki
                vam bodo omogočala, da boste konkurenčni ponudnik svojih storitev na spletu. S tem
                boste dobili možnost, da v prihodnje nadgradite, prilagodite funkcionalnost in
                izgled svoje spletne strani, saj se poslovno okolje nenehno spreminja in so potrebne
                velike zmožnosti prilagoditve poslovanja.
              </p>
              <div className="mt-4">
                <Link href="/storitve/optimizacija-spletnih-resitev">
                  <span className="button -dark">Poglej podrobneje</span>
                </Link>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="flex items-center py-12"
            transition={{ duration: 1.5, ease: 'easeOut' }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            exit={{ opacity: 0 }}
          >
            <div className="w-2/3 flex flex-col mr-8 max-w-3xl items-end">
              <h2 className="CopperplateGothic relative text-right mt-0 z-10">
                Izdelava mobilnih aplikacij
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
            <div className="flex relative w-auto overflow-hidden izdelavaAplikacij__image">
              <Image src="/images/storitve/IZDELAVA_APLIKACIJ.jpeg" width={450} height={675} />
            </div>
          </motion.div>
          <motion.div
            className="flex items-center py-12"
            transition={{ duration: 1.5, ease: 'easeOut' }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            exit={{ opacity: 0 }}
          >
            <div className="flex relative w-auto overflow-hidden digitalniMarketing__image">
              <Image src="/images/storitve/DIGITALNI_MARKETING.jpeg" width={450} height={675} />
            </div>
            <div className="w-2/3 flex flex-col ml-8 max-w-3xl">
              <h2 className="CopperplateGothic relative mt-0 z-10">Digitalni marketing</h2>
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
        </div>
      </div>
    </>
  );
};

export default Storitve;
