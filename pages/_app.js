import { SwitchTransition, CSSTransition } from 'react-transition-group';

import NavBar from '../components/NavBarNew';
import Footer from '../components/Footer';

import '../styles/main.css';
import '../styles/page.css';

const MyApp = ({ Component, pageProps, router }) => {
  const route = router.route;

  return (
    <>
      <NavBar route={route} />
      <SwitchTransition mode="out-in">
        <CSSTransition key={route} classNames="page" timeout={500}>
          <Component {...pageProps} key={route} />
        </CSSTransition>
      </SwitchTransition>
      <Footer route={route} />
    </>
  );
};

export default MyApp;
