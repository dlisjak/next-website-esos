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
        title={<h2 className="text-white text-4xl sm:text-5xl mb-6">Digitalni marketing</h2>}
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
      </div>
    </div>
  );
};

export default Index;
