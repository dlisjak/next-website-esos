import Link from 'next/link';

const Header = import('../components/Header');
const Section = import('../components/Section');
const SectionContainer = import('../components/SectionContainer');

import ABSTRACT_22 from '../public/images/headers/1920/ABSTRACT_22.jpeg';
import CITY_AERIAL_OFFICE from '../public/images/vstop/CITY_AERIAL_OFFICE.jpeg';

const Index = () => {
  return (
    <>
      <Header
        image={ABSTRACT_22}
        title="ESOS Digital"
        subtitles={
          <h2 className="text-white	text-4xl sm:text-5xl mb-6">
            Edinstvena Rešitev
            <br />
            Nove Dobe
          </h2>
        }
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
            title="ESOS Digital"
            text={
              <>
                Smo kreativna ekipa vizionarjev, kjer ne poznamo besede "nemogoče".
                <br />Z izkušnjami na največjih projektih v Evropi smo prepričani, da smo pravi
                naslov za vas.
                <br />
                Naše tehnološke rešitve so najnaprednejše in smo zmeraj korak pred ostalimi.
              </>
            }
          >
            <Link href="/storitve">
              <a className="button -dark">Storitve</a>
            </Link>
            <Link href="/kontakt">
              <a className="button -dark">Kontaktirajte nas</a>
            </Link>
          </Section>
        </SectionContainer>
      </div>
    </>
  );
};

export default Index;
