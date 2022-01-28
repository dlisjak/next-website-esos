import { AnimatePresence } from 'framer-motion';

import NavBar from '../components/NavBar';

import '../styles/main.css';

const MyApp = ({ Component, pageProps, router }) => {
  const route = router.route;

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
