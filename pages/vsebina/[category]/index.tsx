import { Fragment } from 'react';
import Link from 'next/link';
import Head from 'next/head';

import Header from '../../../components/Header';
import SectionContainer from '../../../components/SectionContainer';

import WOMAN_SITTING_CHRIST_MUSEUM from '../../../public/images/headers/1920/WOMAN_SITTING_MUSEUM_CHRIST.jpeg';
import PostSection from '../../../components/PostSection';

const Category = ({ category, posts = [] }) => {
  return (
    <div className="category h-full">
      <Head>
        <title>{category.title} | ESOS Digital</title>
        <meta property="title" content={`${category.title} | ESOS Digital`} key="title" />
        <meta property="og:title" content={`${category.title} | ESOS Digital`} key="og:title" />
        <meta name="description" content={`${category.description}`} key="description" />
        <meta name="og:description" content={`${category.description}`} key="og:description" />
        <link rel="canonical" href={`https://www.esos.si/vsebina/${category.slug}`} />
      </Head>
      <Header
        image={WOMAN_SITTING_CHRIST_MUSEUM}
        alt="Silhouette of a woman sitting in a museum in front of images of Christ"
        title={<h1 className="text-white text-3xl sm:text-5xl mb-6">{category.title}</h1>}
        subtitle="Vsebina"
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
          {(posts || []).map((post) => (
            <Fragment key={post.title}>
              <PostSection
                image={post.imgSrc}
                alt={post.title}
                title={post.title}
                slug={post.slug}
                author={post.author}
                authorImage={post.authorImgSrc}
                isPost={false}
                category={post.category}
                body={<div>{(post.body || [])[0].children[0].text}</div>}
              ></PostSection>
            </Fragment>
          ))}
        </SectionContainer>
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const sanity = (await import('../../../utils/sanity')).default;
  const categoryQuery = `*[_type == "category"] { title, "slug": slug.current }`;
  const categories = await sanity.fetch(categoryQuery);
  const paths = categories.map((category) => ({
    params: { category: category.slug, title: category.title },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const sanity = (await import('../../../utils/sanity')).default;
  const imageUrlBuilder = (await import('@sanity/image-url')).default;
  function urlFor(source) {
    return imageUrlBuilder(sanity).image(source);
  }
  const categoryQuery = `
  *[_type == "category" && $slug == slug.current][0] { 
    title,
    description,
    "slug": slug.current,
  }
  `;
  const postsQuery = `
  *[_type == "post" && $category in categories[]->slug.current] { 
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
  const category = await sanity.fetch(categoryQuery, { slug: params.category });
  const posts = await sanity.fetch(postsQuery, { category: params.category });
  posts.forEach((post) => (post.imgSrc = urlFor(post.mainImage).width(450).url()));
  posts.forEach((post) => (post.authorImgSrc = urlFor(post.authorImage).width(50).url()));

  return { props: { posts, category: category } };
}

export default Category;
