import { motion } from 'framer-motion';
import Link from 'next/link';

const Storitve = () => {
  return (
    <motion.div
      className="bg-[#0c66c2] h-screen"
      transition={{ duration: 1, ease: 'easeOut' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <video className="video absolute" autoPlay muted>
        <source src="/videos/BLUE_1920.mp4" type="video/mp4" />
      </video>
      <div className="flex container mx-auto relative h-screen flex-col items-end justify-center">
        <motion.div
          className="flex flex-col items-end"
          transition={{ duration: 1.5, ease: 'easeOut', delay: 0.5 }}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
        >
          <h1 className="text-white	text-6xl mb-6 text-right">
            <h1>
              Pospeševanje prodaje
              <br />
              Izdelava spletnih rešitev
              <br />
              Zagotavljanje vidljivosti
            </h1>
          </h1>
          <Link href="/reference">
            <span className="button">Reference</span>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Storitve;
