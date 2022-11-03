import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import HAND_FLOWERS from '../../public/images/headers/1920/HAND_FLOWERS.jpeg';

const ContactBlock = () => {
  return (
    <div className="container relative mx-auto flex justify-end items-center min-h-[450px]">
      <div className="flex flex-col mx-auto absolute justify-center items-start text-white h-full right-0 left-0 px-4 z-20">
        <h2 className="mb-4">
          Naredite prvi <br />
          korak še danes
        </h2>
        <p className="mb-4">
          Pošljite nam kratko predstavitev o Vašem poslovanju in skupaj
          <br />
          ustvarimo načrt za prihodnost.
        </p>
        <Link href="/kontakt">
          <a className="button">Kontakt</a>
        </Link>
      </div>
      <div className="max-w-5xl w-full block ml-auto">
        <Image
          src={HAND_FLOWERS}
          alt="Extending hand of a person in the middle of orange flowers"
          layout="responsive"
          height={450}
          width={745}
          placeholder="blur"
        />
      </div>
    </div>
  );
};

export default ContactBlock;
