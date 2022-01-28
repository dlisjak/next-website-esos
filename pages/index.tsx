import { motion } from 'framer-motion';
import Link from 'next/link';

const Index = () => {
  return (
    <motion.div
      className="bg-black h-auto relative"
      transition={{ duration: 1, ease: 'easeOut' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="video relative h-auto">
        <video className="relative h-auto" autoPlay muted>
          <source src="/videos/HERCULES_1920.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="flex container mx-auto absolute flex-col justify-center h-full top-0 right-0 left-0 px-8">
        <motion.div
          transition={{ duration: 1.5, ease: 'easeOut', delay: 0.5 }}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          exit={{ opacity: 0 }}
        >
          <h1 className="text-white	text-5xl mb-6">
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
