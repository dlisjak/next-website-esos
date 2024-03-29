import { SwitchTransition, CSSTransition } from 'react-transition-group';

import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import NavBarNew from '../components/NavbarNew';

import { vh } from "../utils/vh";

import '../styles/main.css';
import '../styles/page.css';

const MyApp = ({ Component, pageProps, router }) => {
  const route = router.route;
  vh();

  return (
    <>
      {route === "/" ?
        <NavBarNew /> : <NavBar />
      }
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
