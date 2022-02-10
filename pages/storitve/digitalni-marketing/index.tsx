import Link from 'next/link';
import Head from 'next/head';

import Header from '../../../components/Header';
import Section from '../../../components/Section';
import SectionContainer from '../../../components/SectionContainer';

import ABSTRACT_29 from '../../../public/images/headers/1920/ABSTRACT_29.jpeg';
import DIGITALNI_MARKETING from '../../../public/images/storitve/digitalni_marketing/DIGITALNI_MARKETING.jpeg';

const Index = () => {
  return (
    <div className="digitalmarketing h-full">
      <Head>
        <title>Digitalni marketing | ESOS Digital</title>
        <meta name="title" content="Digitalni marketing | ESOS Digital" />
        <meta
          name="description"
          content="Za Vas organiziramo in upravljamo izvedbo učinkovitih digitalnih trženjskih strategij. Tako boste dobili celostni vpogled in pravilno izbrali ciljno občinstvo."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.esos.si/storitve/digitalni-marketing" />
        <meta property="og:title" content="Digitalni marketing | ESOS Digital" />
        <meta
          property="og:description"
          content="Za Vas organiziramo in upravljamo izvedbo učinkovitih digitalnih trženjskih strategij. Tako boste dobili celostni vpogled in pravilno izbrali ciljno občinstvo."
        />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_META_FOLDER_URL}ABSTRACT_29.jpeg`}
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.esos.si/storitve/digitalni-marketing" />
        <meta property="twitter:title" content="Digitalni marketing | ESOS Digital" />
        <meta
          property="twitter:description"
          content="Za Vas organiziramo in upravljamo izvedbo učinkovitih digitalnih trženjskih strategij. Tako boste dobili celostni vpogled in pravilno izbrali ciljno občinstvo."
        />
        <meta
          property="twitter:image"
          content={`${process.env.NEXT_PUBLIC_META_FOLDER_URL}ABSTRACT_29.jpeg`}
        />
        <link rel="canonical" href="https://www.esos.si/storitve/digitalni-marketing" />
      </Head>
      <Header
        image={ABSTRACT_29}
        alt="Arizona desert red cave"
        title={<h1 className="text-white text-4xl sm:text-5xl mb-6">Digitalni marketing</h1>}
        subtitle="Marketinške Rešitve"
        buttons={
          <>
            <Link href="#digital-marketing">
              <a className="button mr-4 mb-4">Podrobneje</a>
            </Link>
          </>
        }
      />
      <div
        id="digital-marketing"
        className="bg-[#EfEfEf] h-auto flex relative flex-col justify-center text-black py-12 px-4"
      >
        <SectionContainer>
          <Section
            image={DIGITALNI_MARKETING}
            alt="Colorful tower reaching for the skies"
            showImageOnSmall={false}
            title={<>Digitalni marketing</>}
            text={
              <>
                <p className="mb-2">
                  Za vas organiziramo in upravljamo izvedbo učinkovitih digitalnih trženjskih
                  strategij. Tako boste dobili celostni vpogled in pravilno izbrali ciljno
                  občinstvo, kar vam bo omogočilo najboljši izplen vloženih sredstev v reklamno
                  kampanjo.
                </p>
                <p className="mb-2">
                  Z vami skupaj pripravimo strategijo celostnega nastopa blagovne znamke na
                  družbenih omrežjih. Le-ta omogočajo učinkovito, dvosmerno komunikacijo z vašim
                  ciljnim občinstvom in ponujajo platforme za grajenje skupnosti sledilcev. Nudimo
                  pomoč pri identifikaciji ustreznih vplivnežev, ki s svojimi objavami na digitalnih
                  kanalih ustvarjajo simbiozo z vašo blagovno znamko in potencialnimi kupci.
                </p>
                <p className="mb-2">
                  S premišljenim umeščanjem družbenih medijev v vaše strategije in z iskanjem
                  sinergij z oglaševalskimi orodji in taktikami vam pomagamo, da dosežete prave
                  uporabnike, ki bodo priporočali vašo blagovno znamko svojim znancem.
                </p>
                <p className="mb-2">
                  Z našimi poslovnimi partnerji vam omogočimo ustvarjenje zanimivih vsebin; od
                  priprave besedil, produkcije foto in video gradiv in izdelave aplikacij do
                  oblikovanja natečajev, nagradnih iger in drugih aktivacij.
                </p>
                <p className="mb-2">
                  Za vas oblikujemo celovite in integrirane komunikacijske strategije, s katerimi
                  boste ustvarili pravo kemijo med svojo blagovno znamko in svojimi kupci.
                </p>
                <p className="mb-2">
                  Preko podatkov o klikih, prikazih v sorazmerju s porabljenimi sredstvi, lahko
                  hitro ugotovimo uspešnost zastavljene digitalne kampanje in po potrebi prilagodimo
                  razmerja in parametre v kampanji na način, ki bo najbolje optimiziral kampanjo in
                  privabil največjo možno skupino bodočih uporabnikov ali kupcev.
                </p>
              </>
            }
          >
            <div className="flex flex-wrap">
              <Link href="/kontakt">
                <a className="button -dark mr-4 mb-4">Pošljite povpraševanje</a>
              </Link>
              <Link href="/storitve">
                <a className="button -dark mr-4 mb-4">Ostale storitve</a>
              </Link>
            </div>
          </Section>
        </SectionContainer>
      </div>
    </div>
  );
};

export default Index;
