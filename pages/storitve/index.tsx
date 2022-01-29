import Link from 'next/link';
import { motion } from 'framer-motion';

import HeaderImage from '../../components/HeaderImage';

import BUILDING_BRIDGE from '../../public/images/headers/1920/BUILDING_BRIDGE.jpeg';
import SPLETNE_RESITVE from '../../public/images/storitve/SPLETNE_RESITVE.jpeg';
import IZDELAVA_APLIKACIJ from '../../public/images/storitve/IZDELAVA_APLIKACIJ.jpeg';
import DIGITALNI_MARKETING from '../../public/images/storitve/DIGITALNI_MARKETING.jpeg';
import VIDEO_PRODUCTION from '../../public/images/storitve/VIDEO_PRODUCTION.jpeg';
import ANIMACIJE from '../../public/images/storitve/3D_ANIMACIJE.jpeg';
import Section from '../../components/Section';
import SectionContainer from '../../components/SectionContainer';

const Storitve = () => {
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
            transition={{ duration: 1, ease: 'easeOut' }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            exit={{ opacity: 0 }}
          >
            <h1 className="relative text-white text-sm underline underline-offset-1 2xl:mb-2 left-0.5">
              Storitve
            </h1>
            <h2 className="text-white text-3xl sm:text-5xl 2xl:mb-2">Spletne Rešitve</h2>
            <h2 className="text-white	text-3xl sm:text-5xl 2xl:mb-2">Mobilne Aplikacije</h2>
            <h2 className="text-white	text-3xl sm:text-5xl 2xl:mb-2">Digitalni Marketing</h2>
            <h2 className="text-white	text-3xl sm:text-5xl 2xl:mb-2">3D Animacije</h2>
            <h2 className="text-white	text-3xl sm:text-5xl mb-6">Video Produkcija</h2>
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
        className="bg-[#EfEfEf] h-auto flex relative flex-col justify-center text-black py-12 px-4"
      >
        <SectionContainer>
          <Section
            image={SPLETNE_RESITVE}
            title={
              <>
                Optimizacija
                <br />
                Spletnih Rešitev
              </>
            }
            text="Za vas izdelamo spletno stran z uporabo najmodernejših in najustreznejših orodij, ki
                vam bodo omogočala, da boste konkurenčni ponudnik svojih storitev na spletu."
          >
            <Link href="/storitve/optimizacija-spletnih-resitev">
              <span className="button -dark">Poglej podrobneje</span>
            </Link>
          </Section>
          <Section
            right
            image={IZDELAVA_APLIKACIJ}
            title={
              <>
                Izdelava Mobilnih
                <br />
                Aplikacij
              </>
            }
            text="Za vas izdelamo mobilne aplikacije na sisemih iOS in Android. Omogočimo vam celotno
            ponudbo od izdelave do gostovanja."
          >
            <Link href="/storitve/izdelava-mobilnih-aplikacij">
              <span className="button -dark">Poglej podrobneje</span>
            </Link>
          </Section>
          <Section
            image={DIGITALNI_MARKETING}
            title="Digitalni Marketing"
            text="Za vas organiziramo in upravljamo izvedbo učinkovitih digitalnih trženjskih
            strategij. Tako boste dobili celostni vpogled in pravilno izbrali ciljno občinstvo,
            ki vam bo omogočilo najboljši izplen vloženih sredstev v reklamno kampanjo."
          >
            <Link href="/storitve/digitalni-marketing">
              <span className="button -dark">Poglej podrobneje</span>
            </Link>
          </Section>
          <Section
            right
            image={ANIMACIJE}
            title={
              <>
                3D Modeliranje
                <br />& Animiranje
              </>
            }
            text="Za vas izdelamo mobilne aplikacije na sisemih iOS in Android. Omogočimo vam celotno
            ponudbo od izdelave, gostovanja na Cloud tehnologiji s podporo kubernetes sistema."
          >
            <Link href="/storitve/3d-modeliranje-animiranje">
              <span className="button -dark">Poglej podrobneje</span>
            </Link>
          </Section>
          <Section
            image={VIDEO_PRODUCTION}
            title="Video Produkcija"
            text="Za vas pripravimo in uresničimo kreativno vizijo, kjer bo vašemu občinstvu jasno, da
            so končno prispeli na pravi naslov. Z kreativno in umetniško režijo boste izstopali
            in uspešno prikazali svojo vizijo ter sporočilo."
          >
            <Link href="/storitve/video-produkcija">
              <span className="button -dark">Poglej podrobneje</span>
            </Link>
          </Section>
        </SectionContainer>
      </div>
    </>
  );
};

export default Storitve;
