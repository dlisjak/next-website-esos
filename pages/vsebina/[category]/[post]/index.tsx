import { createElement, Fragment } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

import Header from '../../../../components/Header';
import PostSection from '../../../../components/PostSection';
import SectionContainer from '../../../../components/SectionContainer';

import WOMAN_SITTING_CHRIST_MUSEUM from '../../../../public/images/headers/1920/WOMAN_SITTING_MUSEUM_CHRIST.jpeg';

const Post = ({ post }) => {
  const { author, authorImgSrc, body, category, imgSrc, publishedAt, slug, title } = post;
  const intro = (body || [])[0].children[0].text;
  console.log(body);
  return (
    <div className="post h-full">
      <Head>
        <title>{title} | ESOS Digital</title>
        <meta property="title" content={`${title} | ESOS Digital`} key="title" />
        <meta property="og:title" content={`${title} | ESOS Digital`} key="og:title" />
        <meta name="description" content={intro} key="description" />
        <meta name="og:description" content={intro} />
        <link rel="canonical" href={`https://www.esos.si/vsebina/${category.slug}/${slug}`} />
      </Head>
      <Header
        image={WOMAN_SITTING_CHRIST_MUSEUM}
        alt="Silhouette of a woman sitting in a museum in front of images of Christ"
        title={<h1 className="text-white text-3xl sm:text-5xl mb-6">{title}</h1>}
        subtitle={category.title}
        buttons={
          <>
            <Link href="#vsebina">
              <a className="button mr-4">Podrobneje</a>
            </Link>

            <Link href="/kontakt">
              <a className="button">Kontakt</a>
            </Link>
          </>
        }
      />
      <div
        id="vsebina"
        className="bg-[#EfEfEf] h-auto flex relative flex-col justify-center text-black py-12 px-4"
      >
        <SectionContainer>
          <PostSection
            image={imgSrc}
            alt="Indoors of the Cathedral of St.Peter in Vatican"
            title={title}
            category={post.category}
            author={author}
            authorImage={authorImgSrc}
            isPost={true}
            body={(body || []).map((block) => {
              let el;
              if (block.style !== 'normal') {
                el = createElement(block.style, {}, block.children[0].text);
              } else {
                el = <p className="pb-4">{block.children[0].text}</p>;
              }

              return <Fragment key={block._key}>{el}</Fragment>;
            })}
          />
        </SectionContainer>
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const sanity = (await import('../../../../utils/sanity')).default;
  const postsQuery = `*[_type == "post"] { 
    title,
    "slug": slug.current,
    "categories": categories[] -> {title, "slug": slug.current},
  }`;
  const posts = await sanity.fetch(postsQuery);
  const paths = posts.map((post) => ({
    params: { category: post.categories[0].slug, post: post.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const sanity = (await import('../../../../utils/sanity')).default;
  const imageUrlBuilder = (await import('@sanity/image-url')).default;
  function urlFor(source) {
    return imageUrlBuilder(sanity).image(source);
  }
  const postsQuery = `
    *[_type == "post" && $slug == slug.current][0] { 
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
  const post = await sanity.fetch(postsQuery, { slug: params.post });
  if (post) {
    post.imgSrc = urlFor(post.mainImage).width(450).url();
    post.authorImgSrc = urlFor(post.authorImage).width(50).url();
  }

  return { props: { post } };
}

export default Post;
