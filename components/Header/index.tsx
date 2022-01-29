import { motion } from 'framer-motion';

import HeaderImage from '../../components/HeaderImage';

const Header = ({ image, objectPosition = 'center', title, subtitles, buttons }) => (
  <motion.header
    className="bg-black h-full relative"
    transition={{ duration: 0.5, ease: 'easeOut' }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <div className="flex relative h-full">
      <HeaderImage
        src={image}
        layout="fill"
        objectFit="cover"
        objectPosition={objectPosition}
        placeholder="blur"
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
          {title}
        </h1>
        {subtitles}
        <div className="flex">{buttons}</div>
      </motion.div>
    </div>
  </motion.header>
);

export default Header;
