import Head from 'next/head';
import Link from 'next/link';

import LandingHeaderSection from '../../../components/LandingHeaderSection';

import TIGER from "../../../public/images/headers/new/800/TIGER.jpeg";

const Index = () => {
  return (
    <div className="digitalmarketing">
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
      <div className="section">
        <LandingHeaderSection
          id="marketing"
          image={TIGER}
          alt="fierce tiger looking at you"
          title={
            <>
              <h2 className="text-gradient text-center -tiger leading-6 text-2xl sm:text-2xl md:text-5xl mb-4 sm:mb-6">
                Najemite nas za upravljanje Google Ads in prejmite 100% dodatnega budgeta z naše strani!
              </h2>
              <p className='text-white underline text-center text-xs'>Dodatne informacije:</p>
              <ul className='text-white text-xs text-center'>
                <li>Minimalen znesek: 300€</li>
                <li>Maksimalen znesek: 1000€</li>
                <li>Velja le 1. mesec sodelovanja</li>
              </ul>
              <Link href="/kontakt"><a className='relative top-8 button'>Kontakt</a></Link>
            </>
          }
          subtitle={
            <h1 className="relative text-center text-gradient -tiger -noUnderline text-base sm:text-xl underline underline-offset-1 2xl:mb-2 left-0.5"></h1>
          }
        />
      </div>
    </div>
  );
};

export default Index;
