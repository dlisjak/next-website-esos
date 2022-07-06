import Link from 'next/link';
import React from 'react';
import ProductHeader from '../../components/ProductHeader';
import SectionContainer from '../../components/SectionContainer';
import YoutubeEmbed from '../../components/YoutubeEmbed';

import ANXIETY_RINGS_HEADER from '../../public/images/shop/headers/ANXIETY_RINGS_HEADER.jpeg';
// import ANXIETY_RINGS_HEADER_2 from '../../public/images/shop/headers/ANXIETY_RINGS_HEADER_2.jpeg';
// import ANXIETY_RINGS_HEADER_3 from '../../public/images/shop/headers/ANXIETY_RINGS_HEADER_3.jpeg';
// import ANXIETY_RINGS_HEADER_4 from '../../public/images/shop/headers/ANXIETY_RINGS_HEADER_4.jpeg';
import ANXIETY_RING_1 from '../../public/images/shop/products/ANXIETY_RING_1.webp';
import ANXIETY_RING_2 from '../../public/images/shop/products/ANXIETY_RING_2.webp';
import ANXIETY_RING_3 from '../../public/images/shop/products/ANXIETY_RING_3.gif';

const Shop = () => {
  return (
    <>
      <ProductHeader
        images={[ANXIETY_RINGS_HEADER]}
        alt="Woman relaxing in tropical pool"
        title={<h1 className="text-black text-4xl sm:text-5xl mb-6">Anxiety Rings</h1>}
        subtitle="As seen on TikTok"
        buttons={
          <>
            <Link href="#benefits">
              <a className="button -teal mr-4">Benefits</a>
            </Link>
            <Link href="#order">
              <a className="button -teal">Order now</a>
            </Link>
          </>
        }
        productImages={[ANXIETY_RING_1, ANXIETY_RING_3, ANXIETY_RING_2]}
      />
      <div className="relative flex bg-[#EfEfEf]">
        <div className="relative flex w-full bg-teal-700 h-auto py-12 px-4">
          <SectionContainer>
            <div className="w-full text-white px-8">
              <YoutubeEmbed embedId="LTy5K9bYkzM" />
            </div>
          </SectionContainer>
        </div>
        <div className="relative flex w-full h-auto py-12 px-4">
          <SectionContainer>
            <div className="flex flex-col justify-start w-full px-8">
              <h2>Amazing benefits</h2>
              <p className="text-xl mt-2">
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
              </p>
              <ul className="text-xl list-disc mt-4">
                <li className="ml-8 pl-2">Less anxiety</li>
                <li className="ml-8 pl-2">Better focus</li>
                <li className="ml-8 pl-2">Easy way to relieve stress</li>
              </ul>
            </div>
          </SectionContainer>
        </div>
      </div>
    </>
  );
};

export default Shop;
