import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const Index = () => {
  return (
    <motion.div
      className="bg-black h-full relative"
      transition={{ duration: 1, ease: 'easeOut' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="flex relative h-full">
        <Image
          src="/images/headers/1920/ABSTRACT_22.jpeg"
          layout="fill"
          quality={100}
          objectFit="cover"
          priority
        />
      </div>
      <div className="flex container mx-auto absolute flex-col justify-center h-full top-0 right-0 left-0 px-4">
        <motion.div
          transition={{ duration: 1.5, ease: 'easeOut', delay: 0.5 }}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          exit={{ opacity: 0 }}
        >
          <h1 className="relative text-white text-sm underline underline-offset-1 mb-2 left-0.5">
            ESOS Digital
          </h1>
          <h2 className="text-white	text-4xl sm:text-5xl">
            Edinstvena Rešitev
            <br />
            Nove Dobe
          </h2>
          <Link href="/storitve">
            <span className="button">Vstop</span>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Index;
