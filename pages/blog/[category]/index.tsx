import Link from 'next/link';
import Head from 'next/head';

import Section from '../../../components/Section';
import SectionContainer from '../../../components/SectionContainer';

const Category = ({ category, posts }) => {
  console.log(category);
  console.log(posts);
  return (
    <div className="category h-full">
      <Head>
        <title>{category.name} | ESOS Digital</title>
        <meta property="title" content={`${category.name} | ESOS Digital`} key="title" />
        <meta property="og:title" content={`${category.name} | ESOS Digital`} key="og:title" />
        <meta name="description" content={`${category.description}`} key="description" />
        <meta name="og:description" content={`${category.description}`} key="og:description" />
        <link rel="canonical" href={`https://www.esos.si/blog/${category.slug}`} />
      </Head>
      <div
        id={`category-${category.slug}`}
        className="bg-[#EfEfEf] h-auto flex relative flex-col justify-center text-black py-12 px-4"
      >
        <SectionContainer>
          {(posts || []).map((post) => (
            <Section
              image={post.src}
              alt="Indoors of the Cathedral of St.Peter in Vatican"
              title={post.title.rendered}
              aboveTitle={<Link href={`/blog/${post.category.slug}`}>{post.category.name}</Link>}
              text={<div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />}
              key={post.id}
            >
              <Link href={`/${category.slug}/${post.slug}`}>
                <a className="button -dark">Kontakt</a>
              </Link>
            </Section>
          ))}
        </SectionContainer>
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories`);
  const categoriesJson = await res.json();
  const categories = categoriesJson.map((category) => {
    return { params: { category: `${category.slug}` } };
  });

  return {
    paths: categories,
    fallback: true,
  };
}

const fetchAdditional = async (postsJson) => {
  const posts = postsJson.map(async (post) => {
    const featuredImageRes = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/media/${post.featured_media}`
    );
    const featuredImageJson = await featuredImageRes.json();
    const src = featuredImageJson.source_url;

    const newPost = {
      ...post,
      src: src || null,
    };

    return newPost;
  });

  return Promise.all(posts);
};

export async function getStaticProps({ params }) {
  const categoryRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/categories/${params.category}`
  );
  const postsRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/posts?categories=${params.category}`
  );
  const category = await categoryRes.json();
  const postsJson = await postsRes.json();
  const posts = await fetchAdditional(postsJson);

  return {
    props: { category, posts },
  };
}

export default Category;
