import { Fragment } from 'react';
import Link from 'next/link';
import Head from 'next/head';

import Header from '../../components/Header';
import SectionContainer from '../../components/SectionContainer';
import PostSection from '../../components/PostSection';

import WOMAN_SITTING_CHRIST_MUSEUM from '../../public/images/headers/1920/WOMAN_SITTING_MUSEUM_CHRIST.jpeg';

const Vsebina = ({ posts }) => {
  return (
    <div className="vsebina h-full">
      <Head>
        <title>Vsebina | ESOS Digital</title>
        <meta name="title" content="Vsebina | ESOS Digital" />
        <meta
          name="description"
          content="Vas zanima kakšne so naše skrivnosti? Tukaj lahko preberete več in se sami pozanimate kakšne so naše strategije."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.esos.si/vsebina" />
        <meta property="og:title" content="Vsebina | ESOS Digital" />
        <meta
          property="og:description"
          content="Vas zanima kakšne so naše skrivnosti? Tukaj lahko preberete več in se sami pozanimate kakšne so naše strategije."
        />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_META_FOLDER_URL}WOMAN_SITTING_MUSEUM_CHRIST.jpeg`}
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.esos.si/vsebina" />
        <meta property="twitter:title" content="Vsebina | ESOS Digital" />
        <meta
          property="twitter:description"
          content="Vas zanima kakšne so naše skrivnosti? Tukaj lahko preberete več in se sami pozanimate kakšne so naše strategije."
        />
        <meta
          property="twitter:image"
          content={`${process.env.NEXT_PUBLIC_META_FOLDER_URL}WOMAN_SITTING_MUSEUM_CHRIST.jpeg`}
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
