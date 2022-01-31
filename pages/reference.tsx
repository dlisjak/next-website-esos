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
            text="Z večletnimi izkušnjami in konstantnim napredovanjem na kreativnem in tehnološkem
            področju verjamemo, da imamo edinstveno rešitev, ki govori sama zase."
            aboveTitle={
              <div className="flex h-10">
                <Link href="https://apnews.com">
                  <a className="mr-2" target="_blank" rel="noreferrer">
                    <Image src={AP} alt="APnews.com logo" width={40} height={40} />
                  </a>
                </Link>
                <Link href="https://billa.at">
                  <a className="mr-2" target="_blank" rel="noreferrer">
                    <Image src={BILLA} alt="Billa.at logo" width={40} height={40} />
                  </a>
                </Link>
                <Link href="https://joe-club.at">
                  <a className="mr-2" target="_blank" rel="noreferrer">
                    <Image src={JOE} alt="joe-club.at logo" width={40} height={40} />
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
