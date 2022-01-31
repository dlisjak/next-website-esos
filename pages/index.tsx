import Link from 'next/link';
import Head from 'next/head';

import Header from '../components/Header';
import Section from '../components/Section';
import SectionContainer from '../components/SectionContainer';

import ABSTRACT_22 from '../public/images/headers/1920/ABSTRACT_22.jpeg';
import CITY_AERIAL_OFFICE from '../public/images/vstop/CITY_AERIAL_OFFICE.jpeg';
import COLOSSEUM from '../public/images/vstop/COLOSSEUM.jpeg';

const Index = () => {
  return (
    <div className="index h-full">
      <Head>
        <title>Domov | ESOS Digital</title>
        <meta property="title" content="Domov | ESOS Digital" key="title" />
        <meta property="og:title" content="Domov | ESOS Digital" key="og:title" />
        <meta
          name="description"
          content="Smo kreativna ekipa vizionarjev, kjer ne poznamo besede nemogoče. Naše tehnološke rešitve so najnaprednejše in smo zmeraj korak pred ostalimi."
          key="description"
        />
        <meta
          name="og:description"
          content="Smo kreativna ekipa vizionarjev, kjer ne poznamo besede nemogoče. Naše tehnološke rešitve so najnaprednejše in smo zmeraj korak pred ostalimi."
          key="og:description"
        />
      </Head>
      <Header
        image={ABSTRACT_22}
        alt="Greek statue looking out to the blue sky"
        title={
          <h1 className="text-white	text-4xl sm:text-5xl mb-6">
            Edinstvena Rešitev
            <br />
            Nove Dobe
          </h1>
        }
        subtitle="ESOS Digital"
        buttons={
          <>
            <Link href="#onas">
              <a className="button mr-4">O nas</a>
            </Link>
            <Link href="/storitve">
              <a className="button">Storitve</a>
            </Link>
          </>
        }
      />
      <div
        id="onas"
        className="bg-[#EfEfEf] h-auto flex relative flex-col justify-center text-black py-12 px-4"
      >
        <SectionContainer>
          <Section
            image={CITY_AERIAL_OFFICE}
            alt="Populated city with towers"
            aboveTitle={<p className="text-slate-500">O nas</p>}
            title="ESOS Digital"
            text={
              <>
                Smo kreativna ekipa vizionarjev, kjer ne poznamo besede "nemogoče".
                <br />Z izkušnjami na največjih projektih v Evropi smo prepričani, da smo pravi
                naslov za Vas.
                <br />
                Naše tehnološke rešitve so najnaprednejše in smo zmeraj korak pred ostalimi.
              </>
            }
          >
            <Link href="/storitve">
              <a className="button -dark mr-4">Storitve</a>
            </Link>
          </Section>
          <Section
            right
            image={COLOSSEUM}
            alt="Zoomed image of the Roman colosseum"
            aboveTitle={<p className="text-slate-500">Ker vemo kaj je potrebno</p>}
            title="Edinstvena Rešitev"
            text={
              <>
                Zaradi širokega znanja z večih področij in edinstvenim pristopom lahko za Vas
                ustvarimo rešitev, ki bo primerna za Vaš posel in učinkovita pri doseganju zadanih
                ciljev.
              </>
            }
          >
            <Link href="/kontakt">
              <a className="button -dark">Kontaktirajte nas</a>
            </Link>
          </Section>
        </SectionContainer>
      </div>
    </div>
  );
};

export default Index;
