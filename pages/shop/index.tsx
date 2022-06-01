import Link from 'next/link';
import React from 'react';
import Header from '../../components/Header';
import ProductCard from '../../components/ProductCard';
import ProductGrid from '../../components/ProductGrid';

import ABSTRACT_22 from '../../public/images/headers/1920/ABSTRACT_22.jpeg';

const Shop = () => {
  return (
    <>
      <Header
        image={ABSTRACT_22}
        alt="Greek statue looking out to the blue sky"
        title={<h2 className="text-white	text-4xl sm:text-5xl mb-6">Shop</h2>}
        subtitle="Spletna trgovina"
        buttons={
          <>
            <Link href="#intro">
              <a className="button mr-4">Vstop</a>
            </Link>
            <Link href="/kontakt">
              <a className="button">Kontakt</a>
            </Link>
          </>
        }
      />
      <div id="intro" className="relative bg-[#EfEfEf] h-auto text-black py-12 px-4">
        <ProductGrid>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </ProductGrid>
      </div>
    </>
  );
};

export default Shop;
