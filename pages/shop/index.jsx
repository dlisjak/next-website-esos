import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import Slider from 'react-slick';
// import { PayPalButtons } from '@paypal/react-paypal-js';

import Button from '../../components/Button';
import ProductHeader from '../../components/ProductHeader';
import SectionContainer from '../../components/SectionContainer';
import YoutubeEmbed from '../../components/YoutubeEmbed';

import ANXIETY_RINGS_HEADER from '../../public/images/shop/headers/ANXIETY_RINGS_HEADER.jpeg';
import ANXIETY_RING_1 from '../../public/images/shop/products/ANXIETY_RING_1.webp';
import ANXIETY_RING_2 from '../../public/images/shop/products/ANXIETY_RING_2.webp';
import ANXIETY_RING_3 from '../../public/images/shop/products/ANXIETY_RING_3.gif';

const Shop = () => {
  const [productQuantity, setProductQuantity] = useState(0);
  const [productColor, setProductColor] = useState('silver');
  const [cart, setCart] = useState([]);

  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const onColorChanged = (e) => {
    setProductColor(e.target.value);
    setProductQuantity(0);
  };

  const handleAddToCart = () => {
    const item = { color: productColor, qty: productQuantity };
    setCart([...cart, item]);
    setProductQuantity(0);
  };

  console.log(cart);

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
            <div className="flex flex-col justify-start w-full my-auto px-8">
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
      <div id="order" className="relative flex bg-[#EfEfEf] flex w-full h-auto py-12 px-4">
        <SectionContainer>
          <h3>Order yours now</h3>
          <div className="flex container w-full">
            <div className="w-2/4 py-4 px-4">
              <Slider {...settings}>
                <div>
                  <Image src={ANXIETY_RING_1} />
                </div>
                <div>
                  <Image src={ANXIETY_RING_2} />
                </div>
                <div>
                  <Image src={ANXIETY_RING_3} />
                </div>
              </Slider>
              <div className="flex">
                {[ANXIETY_RING_1, ANXIETY_RING_2, ANXIETY_RING_3].map((image, idx) => (
                  <div className="mr-2" key={idx}>
                    <Image src={image} width={150} height={150} key={idx} />
                  </div>
                ))}
              </div>
            </div>
            <div className="relative flex flex-col w-full h-auto py-4 px-4">
              <h4 className="text-2xl mb-4">Gold Anxiety Ring</h4>
              <p>
                Price: <b>{productQuantity * 15}$</b>
              </p>
              <div className="flex my-4" onChange={onColorChanged}>
                <p className="mr-2">Color:</p>
                <div className="flex flex-col mr-4">
                  <input
                    type="radio"
                    name="color"
                    value="silver"
                    checked={productColor === 'silver'}
                    readOnly
                  />
                  Silver
                </div>
                <div className="flex flex-col mr-4">
                  <input
                    type="radio"
                    name="color"
                    value="gold"
                    checked={productColor === 'gold'}
                    readOnly
                  />
                  Gold
                </div>
                <div className="flex flex-col mr-4">
                  <input
                    type="radio"
                    name="color"
                    value="rose_gold"
                    checked={productColor === 'rose_gold'}
                    readOnly
                  />
                  Rose Gold
                </div>
              </div>
              <div className="flex">
                <button
                  className="bg-white p-4"
                  onClick={() => setProductQuantity(productQuantity - 1)}
                >
                  -
                </button>
                <input className="w-12 p-2 text-center" type="number" value={productQuantity} />
                <button
                  className="bg-white p-4"
                  onClick={() => setProductQuantity(productQuantity + 1)}
                >
                  +
                </button>
              </div>
              <div className="flex my-4">
                <Button onClick={handleAddToCart} dark>
                  Add to cart
                </Button>
              </div>
              <div>
                <p>Items in cart:</p>
                {cart.map((item) => (
                  <div className="flex w-full">
                    {item.color} - {item.qty}
                  </div>
                ))}
                <p>Cart Total: x $</p>
              </div>
            </div>
          </div>
        </SectionContainer>
      </div>
    </>
  );
};

export default Shop;
