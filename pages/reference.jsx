import Link from 'next/link';
import Head from 'next/head';
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
    <div className="reference h-full">
      <Head>
        <title>Reference | ESOS Digital</title>
        <meta property="title" content="Reference | ESOS Digital" key="title" />
        <meta property="og:title" content="Reference | ESOS Digital" key="og:title" />
        <meta
          name="description"
          content="Z večletnimi izkušnjami in konstantnim napredovanjem na kreativnem in tehnološkem
          področju verjamemo, da imamo edinstveno rešitev, ki govori sama zase."
          key="description"
        />
        <meta
          name="og:description"
          content="Z večletnimi izkušnjami in konstantnim napredovanjem na kreativnem in tehnološkem
          področju verjamemo, da imamo edinstveno rešitev, ki govori sama zase."
          key="og:description"
        />
        <link rel="canonical" href="https://www.esos.si/reference" />
      </Head>
      <Header
        image={WOMAN_SITTING_CHRIST_MUSEUM}
        alt="Silhouette of a woman sitting in a museum in front of images of Christ"
        title={<h1 className="text-white text-3xl sm:text-5xl mb-6">Uspeh je naša vrlina</h1>}
        subtitle="Reference"
        buttons={
          <>
            <Link href="#reference">
              <a className="button mr-4">Podrobneje</a>
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
            alt="Indoors of the Cathedral of St.Peter in Vatican"
            title="Dokazali Smo Ostalim, Naj Še Vam"
            aboveTitle={<></>}
            text={
              <div className="flex h-10">
                <Link href="https://www.chip-tuning.si">
                  <a className="mr-2" target="_blank">
                    https://www.chip-tuning.si/
                  </a>
                </Link>
                <Link href="https://www.escort-ljubljana.com">
                  <a className="mr-2" target="_blank">
                    https://www.escort-ljubljana.com/
                  </a>
                </Link>
                <Link href="https://www.avrame-slovenia.com/">
                  <a className="mr-2" target="_blank">
                    https://www.avrame-slovenia.com/
                  </a>
                </Link>
                <Link href="https://www.taxi-ptuj.si/">
                  <a className="mr-2" target="_blank">
                    https://www.taxi-ptuj.si/
                  </a>
                </Link>
                <Link href="https://www.sanjska-savna.si/">
                  <a className="mr-2" target="_blank">
                    https://www.sanjska-savna.si/
                  </a>
                </Link>
                <Link href="https://www.minoksidil.si/">
                  <a className="mr-2" target="_blank">
                    https://www.minoksidil.si/
                  </a>
                </Link>
              </div>
            }
          >
            <Link href="/kontakt">
              <a className="button -dark">Kontakt</a>
            </Link>
          </Section>
        </SectionContainer>
      </div>
    </div>
  );
};

export default Reference;
