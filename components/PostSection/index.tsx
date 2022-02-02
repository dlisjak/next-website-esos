import Image from 'next/image';
import Link from 'next/link';

import Section from '../Section';

const PostSection = ({
  image,
  alt,
  title,
  author,
  authorImage,
  category,
  slug = '',
  isPost,
  body,
}) => {
  const href = `/vsebina/${category.slug}/${slug}`;
  return (
    <Section
      image={image}
      alt={alt}
      title={isPost ? title : <Link href={href}>{title}</Link>}
      aboveTitle={
        <div className="flex flex-col items-start">
          {isPost && (
            <div className="flex items-center py-2">
              <Image
                className="rounded-full"
                src={authorImage}
                alt="Image of author"
                width={50}
                height={50}
              />
              <span className="ml-4">{author}</span>
            </div>
          )}
          <Link href={`/vsebina/${category.slug}`}>{category.title}</Link>
        </div>
      }
      isPost={isPost}
      text={body}
    >
      {!isPost && (
        <div className="flex flex-col py-2">
          <Link href={`/vsebina/${category.slug}/${slug}`}>
            <a className="button -dark mb-2">Preberi podrobneje</a>
          </Link>
          <div className="flex items-center mt-2">
            <Image className="rounded-full" src={authorImage} width={50} height={50} />
            <span className="ml-4">{author}</span>
          </div>
        </div>
      )}
    </Section>
  );
};

export default PostSection;
