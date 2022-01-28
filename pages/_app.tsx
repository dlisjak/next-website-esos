import { AnimatePresence } from 'framer-motion';

import '../styles/main.css';

const MyApp = ({ Component, pageProps, router }) => {
  const route = router.route;

  return (
    <div className="bg-black">
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={route} />;
      </AnimatePresence>
    </div>
  );
};

export default MyApp;
