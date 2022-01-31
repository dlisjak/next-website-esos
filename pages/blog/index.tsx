import Link from 'next/link';
import Head from 'next/head';

import Header from '../../components/Header';
import Section from '../../components/Section';
import SectionContainer from '../../components/SectionContainer';

import WOMAN_SITTING_CHRIST_MUSEUM from '../../public/images/headers/1920/WOMAN_SITTING_MUSEUM_CHRIST.jpeg';
import NA_ROBU_NAPREDKA from '../../public/images/references/NA_ROBU_NAPREDKA.jpeg';

const Blog = () => {
  return (
    <div className="blog h-full">
      <Head>
        <title>Blog | ESOS Digital</title>
        <meta property="title" content="Blog | ESOS Digital" key="title" />
        <meta property="og:title" content="Blog | ESOS Digital" key="og:title" />
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
        <link rel="canonical" href="https://www.esos.si/blog" />
      </Head>
      <Header
        image={WOMAN_SITTING_CHRIST_MUSEUM}
        alt="Silhouette of a woman sitting in a museum in front of images of Christ"
        title={<h1 className="text-white text-3xl sm:text-5xl mb-6">Blog</h1>}
        subtitle="ESOS Digital"
        buttons={
          <>
            <Link href="#blog">
              <a className="button mr-4">Podrobneje</a>
            </Link>

            <Link href="/storitve">
              <a className="button">Storitve</a>
            </Link>
          </>
        }
      />
      <div
        id="blog"
        className="bg-[#EfEfEf] h-auto flex relative flex-col justify-center text-black py-12 px-4"
      >
        <SectionContainer>
          <Section
            image={NA_ROBU_NAPREDKA}
            alt="Indoors of the Cathedral of St.Peter in Vatican"
            title="Dokazali Smo Ostalim, Naj Še Vam"
            text="Z večletnimi izkušnjami in konstantnim napredovanjem na kreativnem in tehnološkem
            področju verjamemo, da imamo edinstveno rešitev, ki govori sama zase."
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

export default Blog;
