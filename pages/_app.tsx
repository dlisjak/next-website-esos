import { AnimatePresence } from 'framer-motion';
import Image from 'next/image';

import '../styles/main.css';

const MyApp = ({ Component, pageProps, router }) => {
  const route = router.route;

  return (
    <div className="bg-black">
      <div className="container flex justify-center mx-auto absolute top-0 right-0 left-0 bottom-0">
        <div className="flex items-center justify-center mx-auto">
          <Image src="/images/logo_icon.svg" height={130} width={150} />
        </div>
      </div>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={route} />;
      </AnimatePresence>
    </div>
  );
};

export default MyApp;
