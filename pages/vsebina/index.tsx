import { Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

import Header from '../../components/Header';
import Section from '../../components/Section';
import SectionContainer from '../../components/SectionContainer';

import WOMAN_SITTING_CHRIST_MUSEUM from '../../public/images/headers/1920/WOMAN_SITTING_MUSEUM_CHRIST.jpeg';
import PostSection from '../../components/PostSection';

const Vsebina = ({ posts }) => {
  return (
    <div className="vsebina h-full">
      <Head>
        <title>Vsebina | ESOS Digital</title>
        <meta property="title" content="Vsebina | ESOS Digital" key="title" />
        <meta property="og:title" content="Vsebina | ESOS Digital" key="og:title" />
        <meta
          name="description"
          content="Vas zanima kakšne so naše skrivnosti? Tukaj lahko preberete več in se sami pozanimate kakšne so naše strategije."
          key="description"
        />
        <meta
          name="og:description"
          content="Vas zanima kakšne so naše skrivnosti? Tukaj lahko preberete več in se sami pozanimate kakšne so naše strategije."
          key="og:description"
        />
        <link rel="canonical" href="https://www.esos.si/vsebina" />
      </Head>
      <Header
        image={WOMAN_SITTING_CHRIST_MUSEUM}
        alt="Silhouette of a woman sitting in a museum in front of images of Christ"
        title={<h1 className="text-white text-3xl sm:text-5xl mb-6">Vsebina</h1>}
        subtitle="ESOS Digital"
        buttons={
          <>
            <Link href="#vsebina">
              <a className="button mr-4">Podrobneje</a>
            </Link>

            <Link href="/storitve">
              <a className="button">Storitve</a>
            </Link>
          </>
        }
      />
      <div
        id="vsebina"
        className="bg-[#EfEfEf] h-auto flex relative flex-col justify-center text-black py-12 px-4"
      >
        <SectionContainer>
          {(posts || []).map((post) => (
            <Fragment key={post.title}>
              <PostSection
                image={post.mainImageSrc}
                alt="Indoors of the Cathedral of St.Peter in Vatican"
                title={post.title}
                category={post.category}
                slug={post.slug}
                author={post.author}
                authorImage={post.authorImgSrc}
                isPost={false}
                body={<div>{(post.body || [])[0].children[0].text}</div>}
              />
            </Fragment>
          ))}
        </SectionContainer>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const sanity = (await import('../../utils/sanity')).default;
  const imageUrlBuilder = (await import('@sanity/image-url')).default;
  function urlFor(source) {
    return imageUrlBuilder(sanity).image(source);
  }
  const postsQuery = `
    *[_type == "post"] { 
      title,
      body,
      mainImage,
      "author": author->name,
      "slug": slug.current,
      "publishedAt": publishedAt,
      "authorImage": author->image,
      "category": categories[0] -> {title, "slug": slug.current},
  }
  `;
  const posts = await sanity.fetch(postsQuery);
  posts.forEach((post) => (post.authorImgSrc = urlFor(post.authorImage).width(50).url()));
  posts.forEach((post) => (post.mainImageSrc = urlFor(post.mainImage).width(450).url()));

  return { props: { posts } };
}

export default Vsebina;
