// import Image from 'next/image';
// import React from 'react';

// const Product = ({ product }) => {
//   const { name, slug, optionGroups, description, variants, featuredAsset } = product;
//   console.log(product);
//   return (
//     <div className="relative bg-[#EfEfEf] h-full text-black py-12 px-4">
//       <div className="container m-auto flex pt-20">
//         <div className="relative w-80 mr-8">
//           <Image src={featuredAsset.source} layout="responsive" width={450} height={600} />
//         </div>
//         <div className="flex flex-col">
//           <h1>{name}</h1>
//           <div className="flex flex-col">
//             {optionGroups.map((optionGroup) => (
//               <div className="flex" key={optionGroup.code}>
//                 {optionGroup.name}
//               </div>
//             ))}
//           </div>
//           <div dangerouslySetInnerHTML={{ __html: description }} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export const getStaticPaths = async () => {
//   // const client = (await import('../../../../lib/apollo')).default;
//   // const query = (await import('../../../../gql/product')).ALL_PRODUCTS_QUERY;

//   // const { data } = await client.query({ query });

//   // const paths = data.products.items.map((item) => ({ params: { slug: item.slug } }));
//   const paths = [];

//   return { paths, fallback: false };
// };

// export const getStaticProps = async ({ params }) => {
//   // const client = (await import('../../../../lib/apollo')).default;
//   // const query = (await import('../../../../gql/product')).SINGLE_PRODUCT_QUERY;

//   // const { data } = await client.query({ query, variables: { slug: params.slug } });

//   return {
//     props: {
//       product: {},
//     },
//   };
// };

// export default Product;
