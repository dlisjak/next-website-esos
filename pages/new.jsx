import ReactFullpage from "@fullpage/react-fullpage";
import Link from 'next/link';
import Head from 'next/head';

import HeaderSection from '../components/HeaderSection';

import LION from '../public/images/headers/new/800/LION.jpeg';
import DOLPHIN from '../public/images/headers/new/800/DOLPHIN.jpeg';
import TIGER from '../public/images/headers/new/800/TIGER.jpeg';
import BIRD_RIGHT from '../public/images/headers/new/800/BIRD_RIGHT.jpeg';

const Index = () => {
  const handleOnLeave = (origin, destination, direction, trigger) => {
    const index = destination.index;
    const logo = document.querySelector("div.logo");
    if (index === 0) {
      logo.classList.add("-lion")
      logo.classList.remove("-dolphin")
    }
    if (index === 1) {
      logo.classList.add("-dolphin")
      logo.classList.remove("-lion")
      logo.classList.remove("-tiger")
    }
    if (index === 2) {
      logo.classList.add("-tiger")
      logo.classList.remove("-dolphin")
      logo.classList.remove("-bird")
    }
    if (index === 3) {
      logo.classList.add("-bird")
      logo.classList.remove("-tiger")
    }
  }

  return (
    <div className="index h-full">
      <Head>
        <title>Edinstvena rešitev nove dobe | ESOS Digital</title>
        <meta name="title" content="Edinstvena rešitev nove dobe | ESOS Digital" />
        <meta
          name="description"
          content="Smo kreativna ekipa vizionarjev, kjer ne poznamo besede nemogoče. Naše tehnološke rešitve so najnaprednejše in smo zmeraj korak pred ostalimi."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.esos.si/" />
        <meta property="og:title" content="Edinstvena rešitev nove dobe | ESOS Digital" />
        <meta
          property="og:description"
          content="Smo kreativna ekipa vizionarjev, kjer ne poznamo besede nemogoče. Naše tehnološke rešitve so najnaprednejše in smo zmeraj korak pred ostalimi."
        />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_META_FOLDER_URL}LION.jpeg`}
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.esos.si/" />
        <meta property="twitter:title" content="Edinstvena rešitev nove dobe | ESOS Digital" />
        <meta
          property="twitter:description"
          content="Smo kreativna ekipa vizionarjev, kjer ne poznamo besede nemogoče. Naše tehnološke rešitve so najnaprednejše in smo zmeraj korak pred ostalimi."
        />
        <meta
          property="twitter:image"
          content={`${process.env.NEXT_PUBLIC_META_FOLDER_URL}LION.jpeg`}
        />
        <link rel="canonical" href="https://www.esos.si" />
      </Head>
      <ReactFullpage scrollingSpeed={1300} onLeave={handleOnLeave} licenseKey="KA7UH-YQJQ7-88GKK-JJ83H-CDYUM" render={() => (
        <ReactFullpage.Wrapper>
          <div className="section bg-black">
            <HeaderSection
              id="splet"
              image={LION}
              alt="Majest calm lion looking towards you"
              title={
                <h2 className="text-gradient -lion text-4xl sm:text-5xl mb-6">
                  Postanite kralj
                  <br />
                  spletnega prostora
                </h2>
              }
              subtitle={
                <h1 className="relative text-gradient -lion text-xl underline underline-offset-1 2xl:mb-2 left-0.5">
                  Spletne rešitve
                </h1>
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
              priority
            />
          </div>
          <div className="section">
            <HeaderSection
              id="mobile"
              image={DOLPHIN}
              alt="Dolphin swimming towards the top of the page"
              title={
                <h2 className="text-gradient -dolphin	text-4xl sm:text-5xl mb-6">
                  Zasedite svoje mesto
                  <br />
                  na pametnih telefonih
                </h2>
              }
              left
              subtitle={
                <h1 className="relative text-gradient -dolphin text-xl underline underline-offset-1 2xl:mb-2 left-0.5">
                  Izdelava mobilnih rešitev
                </h1>
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
          </div>
          <div className="section">
            <HeaderSection
              id="marketing"
              image={TIGER}
              alt="fierce tiger looking at you"
              title={
                <h2 className="text-gradient -tiger text-4xl sm:text-5xl mb-6">
                  Nepozabljiva prezenca
                </h2>
              }
              subtitle={
                <h1 className="relative text-gradient -tiger text-xl underline underline-offset-1 2xl:mb-2 left-0.5">
                  Digitalni marketing
                </h1>
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
          </div>
          <div className="section">
            <HeaderSection
              id="video"
              image={BIRD_RIGHT}
              alt="fierce tiger looking at you"
              title={
                <h2 className="text-gradient -bird text-4xl sm:text-5xl mb-6">
                  Inspiracija v vsakem
                  <br />
                  trenutku
                </h2>
              }
              subtitle={
                <h1 className="relative text-gradient -bird text-xl underline underline-offset-1 2xl:mb-2 left-0.5">
                  Video produkcija
                </h1>
              }
              left
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
          </div>
        </ReactFullpage.Wrapper>
      )} />
    </div>
  );
};

export default Index;
