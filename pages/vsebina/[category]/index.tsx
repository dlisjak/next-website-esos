import { Fragment } from 'react';
import Link from 'next/link';
import Head from 'next/head';

import Header from '../../../components/Header';
import Section from '../../../components/Section';
import SectionContainer from '../../../components/SectionContainer';

import WOMAN_SITTING_CHRIST_MUSEUM from '../../../public/images/headers/1920/WOMAN_SITTING_MUSEUM_CHRIST.jpeg';

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
              <Section
                image={post.imgSrc}
                alt="Indoors of the Cathedral of St.Peter in Vatican"
                title={<Link href={`/vsebina/${category.slug}/${post.slug}`}>{post.title}</Link>}
                aboveTitle={post.categories.map((category) => (
                  <Link key={category.slug} href={`/vsebina/${category.slug}`}>
                    {category.title}
                  </Link>
                ))}
                text={<div>{(post.body || [])[0].children[0].text}</div>}
              >
                <Link href={`/vsebina/${category.slug}/${post.slug}`}>
                  <a className="button -dark">Preberi podrobneje</a>
                </Link>
              </Section>
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
    "slug": slug.current,
    "categories": categories[] -> {title, "slug": slug.current},
    "authorImage": author->image,
    "publishedAt": publishedAt
  }
  `;
  const category = await sanity.fetch(categoryQuery, { slug: params.category });
  const posts = await sanity.fetch(postsQuery, { category: params.category });
  posts.forEach((post) => (post.imgSrc = urlFor(post.mainImage).width(450).url()));

  return { props: { posts, category: category } };
}

export default Category;
