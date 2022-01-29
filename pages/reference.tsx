import Link from 'next/link';
import { motion } from 'framer-motion';

import HeaderImage from '../components/HeaderImage';
import Section from '../components/Section';

import WOMAN_SITTING_CHRIST_MUSEUM from '../public/images/headers/1920/WOMAN_SITTING_MUSEUM_CHRIST.jpeg';
import NA_ROBU_NAPREDKA from '../public/images/references/NA_ROBU_NAPREDKA.jpeg';
import SectionContainer from '../components/SectionContainer';

const Reference = () => {
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
            src={WOMAN_SITTING_CHRIST_MUSEUM}
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
              Reference
            </h1>
            <h2 className="text-white text-3xl sm:text-5xl mb-6">Uspeh je naša vrlina</h2>
            <div className="flex">
              <div className="mr-4">
                <Link href="#reference">
                  <span className="button">Podrobneje</span>
                </Link>
              </div>
              <div className="mr-4">
                <Link href="/kontakt">
                  <span className="button">Kontakt</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
      <div
        id="#reference"
        className="bg-[#EfEfEf] h-auto flex relative flex-col justify-center text-black py-12 px-4"
      >
        <SectionContainer>
          <Section
            image={NA_ROBU_NAPREDKA}
            title="Dokazali Smo Ostalim, Naj Še Vam"
            text="Z večletnimi izkušnjami in konstantnim napredovanjem na kreativnem in tehnološkem
            področju smo samozavestni in verjamemo, da imamo edinstveno
            rešitev, ki govori sama zase."
          >
            <Link href="/reference/optimizacija-spletnih-resitev">
              <span className="button -dark">Poglej podrobneje</span>
            </Link>
          </Section>
        </SectionContainer>
      </div>
    </>
  );
};

export default Reference;
