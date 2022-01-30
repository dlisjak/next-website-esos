import { useEffect } from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';

import NavBar from '../components/NavBar';

import { pageview } from '../utils/ga';

import '../styles/main.css';
import '../styles/page.css';

const MyApp = ({ Component, pageProps, router }) => {
  const route = router.route;

  useEffect(() => {
    pageview(route);
  }, []);

  return (
    <>
      <NavBar />
      <SwitchTransition mode="out-in">
        <CSSTransition key={route} classNames="page" timeout={500}>
          <Component {...pageProps} key={route} />
        </CSSTransition>
      </SwitchTransition>
    </>
  );
};

export default MyApp;
