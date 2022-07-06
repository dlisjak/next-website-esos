import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

import '../styles/main.css';
import '../styles/page.css';
import '../styles/carousel.css';
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";

const MyApp = ({ Component, pageProps, router }) => {
  const initialOptions = {
    "client-id": "test",
    currency: "USD",
    components: "buttons",
  };
  const route = router.route;

  return (
    <>
      <PayPalScriptProvider options={initialOptions}>
        <NavBar route={route} />
        <SwitchTransition mode="out-in">
          <CSSTransition key={route} classNames="page" timeout={500}>
            <Component {...pageProps} key={route} />
          </CSSTransition>
        </SwitchTransition>
        <Footer route={route} />
      </PayPalScriptProvider>
    </>
  );
};

export default MyApp;
