import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import Header from '../components/Header';
import SectionContainer from '../components/SectionContainer';

import HAND_FLOWERS from '../public/images/headers/1920/HAND_FLOWERS.jpeg';
import KONTAKT from '../public/images/kontakt/KONTAKT.jpeg';

const Kontakt = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [isFormSuccessful, setIsFormSuccessful] = useState(false);
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);

  const handleFormSubmit = () => {
    const submit = document.querySelector('.formSubmit');

    console.log(submit);
  };

  const onSubmit = async (data) => {
    setIsFormSubmitting(true);
    const formData = new FormData();
    const axios = (await import('axios')).default;

    formData.set('zanimanje', data.zanimanje);
    formData.set('storitev', data.storitev);
    formData.set('url', data.url);
    formData.set('contact', data.contact);
    formData.set('moreinfo', data.moreinfo);
    formData.set('firstName', data.name);

    const res = await axios.post(process.env.NEXT_PUBLIC_MAIL_URL, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });

    if (res.data.status === 'mail_sent') {
      // success
      setIsFormSuccessful(true);
    } else {
      // error
      setIsFormSuccessful(false);
    }
    setIsFormSubmitting(false);
  };

  return (
    <div className="kontakt h-full">
      <Head>
        <title>Kontakt | ESOS Digital</title>
        <meta property="title" content="Kontakt | ESOS Digital" key="title" />
        <meta property="og:title" content="Kontakt | ESOS Digital" key="og:title" />
        <meta
          name="description"
          content="Odzovite se na klic in nam pošljite povpraševanje. Vaš predlog bomo pregledali in Vas v kratkem kontaktirali."
          key="description"
        />
        <meta
          name="og:description"
          content="Odzovite se na klic in nam pošljite povpraševanje. Vaš predlog bomo pregledali in Vas v kratkem kontaktirali."
          key="og:description"
        />
      </Head>
      <Header
        image={HAND_FLOWERS}
        alt="Extending hand of a person in the middle of orange flowers"
        title={<h2 className="text-white text-3xl sm:text-5xl mb-6">Odzovi se na klic</h2>}
        subtitle="Kontakt"
        buttons={
          <Link href="#kontakt">
            <a className="button">Obrazec</a>
          </Link>
        }
      />
      <div
        id="kontakt"
        className="bg-[#EfEfEf] h-auto flex relative flex-col justify-center text-black py-12 px-4"
      >
        <SectionContainer>
          <div className="section bg-white w-full flex items-center overflow-hidden m-auto my-12 p-4 md:p-6 xl:p-0">
            <div className="section__image pointer-events-none lg:w-1/3 xl:flex relative w-auto overflow-hidden hidden">
              <Image
                src={KONTAKT}
                alt="Pen and letter on a desk"
                width={450}
                height={675}
                placeholder="blur"
              />
            </div>
            <div className="w-full xl:w-2/3 flex flex-col xl:max-w-3xl relative z-10 xl:items-start lg:ml-6 xl:ml-8">
              <h2 className="relative mt-0 z-10 lg:right-2 mb-2 text-left">Pozdravljeni,</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col py-1">
                <div className="flex items-center mb-4 lg:mb-2 flex-wrap">
                  <label className="mr-2 whitespace-nowrap" htmlFor="zanimanje">
                    Pošiljam zanimanje za:<span className="text-red-500">*</span>
                  </label>
                  <select
                    className="w-full"
                    id="zanimanje"
                    placeholder="Izberite"
                    defaultValue=""
                    {...register('zanimanje', { required: true })}
                  >
                    <option value="" selected disabled hidden>
                      Izberi
                    </option>
                    <option value="spletne rešitve">Spletne rešitve</option>
                    <option value="mobilne aplikacije">Mobilne aplikacije</option>
                    <option value="digitalni marketing">Digitalni marketing</option>
                    <option value="3d animacije">3D animacije</option>
                    <option value="video produkcija">Video produkcija</option>
                  </select>
                </div>
                <div className="flex items-center mb-4 lg:mb-2 flex-wrap">
                  <label className="mr-2 whitespace-nowrap" htmlFor="storitev">
                    Ukvarjamo se z:<span className="text-red-500">*</span>
                  </label>
                  <input
                    className="w-full"
                    id="storitev"
                    placeholder="Vaša storitev"
                    type="text"
                    {...register('storitev', { required: true })}
                  />
                </div>
                <div className="flex items-center mb-4 lg:mb-2 flex-wrap">
                  <label className="mr-2 whitespace-nowrap" htmlFor="url">
                    Več informacij o nas najdete na:<span className="text-red-500">*</span>
                  </label>
                  <input
                    className="w-full"
                    id="url"
                    placeholder="Povezava"
                    type="text"
                    {...register('url', { required: true })}
                  />
                </div>
                <div className="flex items-center mb-4 lg:mb-2 flex-wrap">
                  <label className="mr-2 whitespace-nowrap" htmlFor="contact">
                    Dosegljivi smo na: <span className="text-red-500">*</span>
                  </label>
                  <input
                    className="w-full"
                    id="contact"
                    placeholder="Kako Vas lahko kontaktiramo"
                    {...register('contact', { required: true })}
                  />
                </div>
                <div className="flex items-start mb-4 lg:mb-2 flex-wrap">
                  <label className="mr-2 whitespace-nowrap" htmlFor="moreinfo">
                    Podrobneje:
                  </label>
                  <textarea
                    className="w-full"
                    id="moreinfo"
                    placeholder="Po želji lahko dodate sporočilo"
                    {...register('moreinfo')}
                  />
                </div>
                <div className="flex flex-col items-start mb-4 lg:mb-2">
                  <label className="mr-2 whitespace-nowrap" htmlFor="name">
                    Lep pozdrav,<span className="text-red-500">*</span>
                    <br />
                  </label>
                  <input
                    className="w-full lg:w-auto"
                    id="name"
                    placeholder="Ime, Priimek"
                    {...register('name', { required: true })}
                  />
                </div>
                {isFormSuccessful && (
                  <div className="bg-green-500 text-white p-4 md:mt-2 mb-4 lg:mb-0">
                    Uspešno ste poslali povprašeanje. Pregledali bomo poslano in Vas v kratkem
                    kontaktirali.
                  </div>
                )}
                <div className="flex button h-12 justify-center align-center -dark sm:w-auto sm:ml-auto xl:ml-0 lg:mt-4">
                  {!isFormSubmitting ? (
                    <input
                      className="w-full"
                      type="submit"
                      disabled={isFormSubmitting}
                      value="Pošlji"
                    />
                  ) : (
                    <div className="lds-ring h-6">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </SectionContainer>
      </div>
    </div>
  );
};

export default Kontakt;
