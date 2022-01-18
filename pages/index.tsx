import { motion } from 'framer-motion';
import Link from 'next/link';

const Index = () => {
  return (
    <motion.div
      className="bg-black h-screen"
      transition={{ duration: 1, ease: 'easeOut' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <video className="video absolute" autoPlay muted>
        <source src="/videos/HERCULES_1920.mp4" type="video/mp4" />
      </video>
      <div className="flex container mx-auto relative h-screen flex-col items-start justify-center">
        <motion.div
          transition={{ duration: 1.5, ease: 'easeOut', delay: 0.5 }}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
        >
          <h1 className="text-white	text-6xl mb-6">
            Edinstvena rešitev
            <br />
            nove dobe
          </h1>
          <Link href="/storitve">
            <span className="button">Storitve</span>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Index;
