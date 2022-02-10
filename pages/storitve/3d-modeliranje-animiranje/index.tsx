import Link from 'next/link';
import Head from 'next/head';

import Header from '../../../components/Header';
import Section from '../../../components/Section';
import SectionContainer from '../../../components/SectionContainer';

import ABSTRACT_27 from '../../../public/images/headers/1920/ABSTRACT_27.jpeg';
import ANIMACIJE from '../../../public/images/storitve/3D_ANIMACIJE.jpeg';

const Index = () => {
  return (
    <div className="appdevelopment h-full">
      <Head>
        <title>3D Moderliranje in Animiranje | ESOS Digital</title>
        <meta name="title" content="3D Moderliranje in Animiranje | ESOS Digital" />
        <meta
          name="description"
          content="Za poustvarjanje neverjetnih scen iz filmov in reklam in za prikaz domišljijskega in dinamičnega sveta."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.esos.si/storitve/3d-modeliranje-animiranje" />
        <meta property="og:title" content="3D Moderliranje in Animiranje | ESOS Digital" />
        <meta
          property="og:description"
          content="Za poustvarjanje neverjetnih scen iz filmov in reklam in za prikaz domišljijskega in dinamičnega sveta."
        />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_META_FOLDER_URL}ABSTRACT_27.jpeg`}
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://www.esos.si/storitve/3d-modeliranje-animiranje"
        />
        <meta property="twitter:title" content="3D Moderliranje in Animiranje | ESOS Digital" />
        <meta
          property="twitter:description"
          content="Za poustvarjanje neverjetnih scen iz filmov in reklam in za prikaz domišljijskega in dinamičnega sveta."
        />
        <meta
          property="twitter:image"
          content={`${process.env.NEXT_PUBLIC_META_FOLDER_URL}ABSTRACT_27.jpeg`}
        />
        <link rel="canonical" href="https://www.esos.si/storitve/3d-modeliranje-animiranje" />
      </Head>
      <Header
        image={ABSTRACT_27}
        alt="Northern lights on a dark starry night"
        title={
          <h2 className="text-white	text-4xl sm:text-5xl mb-6">
            3D Moderliranje <br />& Animiranje
          </h2>
        }
        subtitle="Grafične rešitve"
        buttons={
          <>
            <Link href="#modeliranje-animiranje">
              <a className="button mr-4 mb-4">Izdelava mobilne aplikacije</a>
            </Link>
          </>
        }
      />
      <div
        id="modeliranje-animiranje"
        className="bg-[#EfEfEf] h-auto flex relative flex-col justify-center text-black py-12 px-4"
      >
        <SectionContainer>
          <Section
            image={ANIMACIJE}
            alt="Disney castle"
            showImageOnSmall={false}
            aboveTitle={<p className="text-slate-500">Ko resničnost poka po šivih</p>}
            title={
              <>
                3D Moderliranje
                <br />& Animiranje
              </>
            }
            text={
              <>
                <p className="mb-2">
                  Za poustvarjanje neverjetnih scen iz filmov in reklam in za prikaz domišljijskega
                  in dinamičnega sveta se v današnjem času vse bolj uveljavlja tehnologija 3 D
                  animacij.
                </p>
                <p className="mb-2">
                  Naše podjetje Tim Optimum d.o.o. se lahko pohvali s strokovnim kadrom na področju
                  modeliranja 3D objektov in 3D animacij. Zato vam lahko ponudimo izdelavo oglasa od
                  zasnove ideje, izvedbe in uspešnega lansiranja oglasa, ki vam bo omogočil
                  prepoznavnost in modern pristop za pridobivanje strank in posledično večjo
                  prepoznavnost vašega izdelka in blagovne znamke.
                </p>
                <p className="mb-2">
                  Klasično snemanje kvalitetnih video posnetkov oziroma komercialnih oglasov danes
                  zahteva ogromno časa in sredstev. Zaradi naravnih zakonov fizike je klasično
                  snemanje omejeno na fizični prostor. To pa z lahkoto presegamo v 3D prostoru, kjer
                  poustvarjamo realistični prikaz prostora brez omejitev, s specialnimi tehnikami
                  lahko poustvarjamo specialne efekte, posnetke iz vseh možnih zornih kotov. Zaradi
                  tega se stroški video produkcije močno zmanjšajo, saj odpadejo načeloma vsi
                  potrebni tehnični pripomočki, kot so scena, igralci, statisti in prevozna
                  sredstva, studijska produkcija drugo.
                </p>
                <p className="mb-2">
                  Z modeliranjem in animiranjem prikažemo virtualno resničnost, bogato s
                  podrobnostmi, ki nam daje občutek resničnosti. S tem pritegnemo pozornost
                  potencialnih kupcev in boljšo prodajo storitev in izdelkov, ki jih na tak način
                  presentiramo.
                </p>
              </>
            }
          >
            <Link href="/kontakt">
              <a className="button -dark mr-4">Pošlji povpraševanje</a>
            </Link>
          </Section>
        </SectionContainer>
      </div>
    </div>
  );
};

export default Index;
