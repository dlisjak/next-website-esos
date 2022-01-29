import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';

import HeaderImage from '../components/HeaderImage';
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
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <motion.div
        className="h-full relative"
        transition={{ duration: 0.5, ease: 'easeOut' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="flex relative h-full">
          <HeaderImage
            src={HAND_FLOWERS}
            layout="fill"
            objectFit="cover"
            palceholder="blur"
            priority
          />
        </div>
        <div className="flex container mx-auto absolute flex-col justify-center h-full top-0 right-0 left-0 px-4">
          <motion.div
            transition={{ duration: 1, ease: 'easeOut' }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            exit={{ opacity: 0 }}
          >
            <h1 className="relative text-white text-sm underline underline-offset-1 2xl:mb-2 left-0.5">
              Kontakt
            </h1>
            <h2 className="text-white text-3xl sm:text-5xl mb-6">Odzovi se na klic</h2>
            <div className="flex">
              <div className="mr-4">
                <Link href="#kontakt">
                  <span className="button">Obrazec</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
      <div
        id="kontakt"
        className="bg-[#EfEfEf] h-auto flex relative flex-col justify-center text-black py-12 px-4"
      >
        <SectionContainer>
          <motion.div
            className="section bg-white w-full flex items-center overflow-hidden m-auto my-12 p-4 md:p-6 lg:p-0"
            transition={{ duration: 1, ease: 'easeOut' }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            exit={{ opacity: 0 }}
          >
            <div className="section__image pointer-events-none sm:w-1/3 lg:flex relative w-auto overflow-hidden hidden">
              <Image src={KONTAKT} width={450} height={675} placeholder="blur" />
            </div>
            <div className="w-full lg:w-2/3 flex flex-col lg:max-w-3xl relative z-10 items-start lg:ml-6 lg:ml-8">
              <h2 className="relative mt-0 z-10 lg:right-2 mb-2 text-left">Pozdravljeni,</h2>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full lg:w-auto flex flex-col py-1"
              >
                <div className="flex items-center mb-4 lg:mb-2 flex-wrap lg:flex-nowrap">
                  <label className="mr-2 whitespace-nowrap" htmlFor="zanimanje">
                    Pošiljam zanimanje za:<span className="text-red-500">*</span>
                  </label>
                  <select
                    className="w-full"
                    id="zanimanje"
                    placeholder="Izberite"
                    defaultValue="splosno"
                    {...register('zanimanje', { required: true })}
                  >
                    <option>Spletne rešitve</option>
                    <option>Mobilne aplikacije</option>
                    <option>Digitalni marketing</option>
                    <option>3D animacije</option>
                    <option>Video produkcija</option>
                  </select>
                </div>
                <div className="flex items-center mb-4 lg:mb-2 flex-wrap lg:flex-nowrap">
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
                <div className="flex items-center mb-4 lg:mb-2 flex-wrap lg:flex-nowrap">
                  <label className="mr-2 whitespace-nowrap" htmlFor="contact">
                    Dosegljivi smo na: <span className="text-red-500">*</span>
                  </label>
                  <input
                    className="w-full"
                    id="contact"
                    placeholder="Kako vas lahko kontaktiramo"
                    {...register('contact', { required: true })}
                  />
                </div>
                <div className="flex items-start mb-4 lg:mb-2 flex-wrap lg:flex-nowrap">
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
                <div className="flex w-full sm:w-auto sm:auto sm:ml-auto lg:ml-0">
                  <input className="button -dark w-full" type="submit" />
                </div>
              </form>
            </div>
          </motion.div>
        </SectionContainer>
      </div>
    </>
  );
};

export default Kontakt;