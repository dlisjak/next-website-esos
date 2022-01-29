import Link from 'next/link';
import { motion } from 'framer-motion';

import HeaderImage from '../components/HeaderImage';

import ABSTRACT_22 from '../public/images/headers/1920/ABSTRACT_22.jpeg';
import CITY_AERIAL_OFFICE from '../public/images/vstop/CITY_AERIAL_OFFICE.jpeg';
import Section from '../components/Section';
import SectionContainer from '../components/SectionContainer';

const Index = () => {
  return (
    <>
      <motion.div
        className="bg-black h-full relative"
        transition={{ duration: 0.5, ease: 'easeOut' }}
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
            transition={{ duration: 1, ease: 'easeOut' }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            exit={{ opacity: 0 }}
          >
            <h1 className="relative text-white text-sm underline underline-offset-1 2xl:mb-2 left-0.5">
              ESOS Digital
            </h1>
            <h2 className="text-white	text-4xl sm:text-5xl mb-6">
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
        className="bg-[#EfEfEf] h-auto flex relative flex-col justify-center text-black py-12 px-4"
      >
        <SectionContainer>
          <Section
            image={CITY_AERIAL_OFFICE}
            title="ESOS Digital"
            text={[
              'Smo kreativna ekipa vizionarjev, kjer ne poznamo besede "nemogoče".',
              <br />,
              'Z izkušnjami na največjih projektih v Evropi smo prepričani, da smo pravi naslov za vas.',
              <br />,
              'Naše tehnološke rešitve so najnaprednejše in smo zmeraj korak pred ostalimi.',
            ]}
          >
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
          </Section>
        </SectionContainer>
      </div>
    </>
  );
};

export default Index;
