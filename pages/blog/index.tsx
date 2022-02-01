import { Fragment } from 'react';
import Link from 'next/link';
import Head from 'next/head';

import Header from '../../components/Header';
import Section from '../../components/Section';
import SectionContainer from '../../components/SectionContainer';

import WOMAN_SITTING_CHRIST_MUSEUM from '../../public/images/headers/1920/WOMAN_SITTING_MUSEUM_CHRIST.jpeg';

const Blog = ({ posts }) => {
  console.log(posts);
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
          {(posts || []).map((post) => (
            <Fragment key={post.title}>
              <Section
                image={post.mainImageSrc}
                alt="Indoors of the Cathedral of St.Peter in Vatican"
                title={post.title}
                aboveTitle={
                  <div className="flex flex-wrap">
                    {post.categories.map((category) => (
                      <Link key={category.slug} href={`/blog/${category.slug}`}>
                        <a className="text-slate-500 mr-4">{category.title}</a>
                      </Link>
                    ))}
                  </div>
                }
                text={<div dangerouslySetInnerHTML={{ __html: post.excerpt }} />}
              >
                <Link href={`/${post.categories[0].slug}/${post.slug}`}>
                  <a className="button -dark">Kontakt</a>
                </Link>
              </Section>
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
      "slug": slug.current,
      mainImage,
      "categories": categories[] -> {title, "slug": slug.current},
      "authorImage": author->image,
      "publishedAt": publishedAt
  }
  `;
  const posts = await sanity.fetch(postsQuery);
  posts.forEach((post) => (post.authorImgSrc = urlFor(post.authorImage).width(50).url()));
  posts.forEach((post) => (post.mainImageSrc = urlFor(post.mainImage).width(450).url()));

  return { props: { posts } };
}

export default Blog;
