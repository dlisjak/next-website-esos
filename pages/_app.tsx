import { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

import NavBar from '../components/NavBar';

import { pageview } from '../utils/ga';

import '../styles/main.css';

const MyApp = ({ Component, pageProps, router }) => {
  const route = router.route;

  useEffect(() => {
    pageview(route);
  }, []);

  return (
    <div className="bg-black">
      <NavBar />
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={route} />;
      </AnimatePresence>
    </div>
  );
};

export default MyApp;
