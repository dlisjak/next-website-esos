import Link from 'next/link';
import Image from 'next/image';

import Header from '../components/Header';
import Section from '../components/Section';
import SectionContainer from '../components/SectionContainer';

import WOMAN_SITTING_CHRIST_MUSEUM from '../public/images/headers/1920/WOMAN_SITTING_MUSEUM_CHRIST.jpeg';
import NA_ROBU_NAPREDKA from '../public/images/references/NA_ROBU_NAPREDKA.jpeg';
import AP from '../public/images/references/AP.png';
import BILLA from '../public/images/references/BILLA.png';
import JOE from '../public/images/references/JOE.png';

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
        id="reference"
        className="bg-[#EfEfEf] h-auto flex relative flex-col justify-center text-black py-12 px-4"
      >
        <SectionContainer>
          <Section
            image={NA_ROBU_NAPREDKA}
            title="Dokazali Smo Ostalim, Naj Še Vam"
            text="Z večletnimi izkušnjami in konstantnim napredovanjem na kreativnem in tehnološkem
            področju verjamemo, da imamo edinstveno rešitev, ki govori sama zase."
            aboveTitle={
              <div className="flex h-10">
                <Link href="https://apnews.com">
                  <a className="mr-2" target="_blank" rel="nofollow">
                    <Image src={AP} width={40} height={40} />
                  </a>
                </Link>
                <Link href="https://billa.at">
                  <a className="mr-2" target="_blank" rel="nofollow">
                    <Image src={BILLA} width={40} height={40} />
                  </a>
                </Link>
                <Link href="https://joe-club.at">
                  <a className="mr-2" target="_blank" rel="nofollow">
                    <Image src={JOE} width={40} height={40} />
                  </a>
                </Link>
              </div>
            }
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
