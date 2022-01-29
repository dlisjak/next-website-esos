import Link from 'next/link';

import Header from '../components/Header';
import Section from '../components/Section';
import SectionContainer from '../components/SectionContainer';

import WOMAN_SITTING_CHRIST_MUSEUM from '../public/images/headers/1920/WOMAN_SITTING_MUSEUM_CHRIST.jpeg';
import NA_ROBU_NAPREDKA from '../public/images/references/NA_ROBU_NAPREDKA.jpeg';

const Reference = () => {
  return (
    <>
      <Header
        image={WOMAN_SITTING_CHRIST_MUSEUM}
        title="Reference"
        subtitles={<h2 className="text-white text-3xl sm:text-5xl mb-6">Uspeh je naša vrlina</h2>}
        buttons={
          <>
            <Link href="#reference">
              <a className="button">Podrobneje</a>
            </Link>

            <Link href="/kontakt">
              <a className="button">Kontakt</a>
            </Link>
          </>
        }
      />
      <div
        id="#reference"
        className="bg-[#EfEfEf] h-auto flex relative flex-col justify-center text-black py-12 px-4"
      >
        <SectionContainer>
          <Section
            image={NA_ROBU_NAPREDKA}
            title="Dokazali Smo Ostalim, Naj Še Vam"
            text="Z večletnimi izkušnjami in konstantnim napredovanjem na kreativnem in tehnološkem
            področju verjamemo, da imamo edinstveno rešitev, ki govori sama zase."
          >
            <Link href="/reference/optimizacija-spletnih-resitev">
              <a className="button -dark">Poglej podrobneje</a>
            </Link>
          </Section>
        </SectionContainer>
      </div>
    </>
  );
};

export default Reference;
