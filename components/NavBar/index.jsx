import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { pageview } from '../../utils/ga';
import Button from '../Button';
import GoogleAnalytics from '../GoogleAnalytics';

import Logo from '../../public/images/logo_icon_white.svg';

const NavBar = ({ route }) => {
  const [isCookieConsent, setIsCookieConsent] = useState(false);

  const acceptCookies = () => {
    setIsCookieConsent(true);
    localStorage.setItem("allowsCookies", true);
  };

  useEffect(() => {
    const allowsCookies = localStorage.getItem("allowsCookies");

    if (allowsCookies) {
      setIsCookieConsent(true);
    }
  }, []);

  useEffect(() => {
    if (!isCookieConsent) return;
    pageview(route);
  }, [route]);

  return (
    <>
      <nav className='fixed w-full flex justify-center z-50 mix-blend-difference py-4'>
        <ul className='flex items-center relative text-white font-light'>
          <li className='mx-4'><Link href="/">Vstop</Link></li>
          <li className='mx-4'><Link href="/storitve">Storitve</Link></li>
          <li className="cursor-pointer">
            <Link href="/">
              <div className='w-12 text-white'>
                <Logo />
              </div>
            </Link>
          </li>
          {/*<li className='mx-4'><Link href="/reference">Reference</Link></li>*/}
          <li className='mx-4'><Link href="/vsebina">Vsebina</Link></li>
          <li className='mx-4'><Link href="/kontakt">Kontakt</Link></li>
        </ul>
      </nav>
      {!isCookieConsent && (
        <div className="fixed w-full flex flex-col md:flex-row items-center justify-center bottom-0 left-0 right-0 z-20 p-4 bg-black text-white text-center">
          Za pravilno delovanje te strani uporabljamo pištkoke.
          <div className="flex mt-2 ml-4">
            <span className="button mr-4">
              <Link href="/politika-zasebnosti">Preberi več</Link>
            </span>
            <Button onClick={() => acceptCookies(true)}>Sprejmi</Button>
          </div>
        </div>
      )}
      {isCookieConsent && <GoogleAnalytics />}
    </>
  );
};

export default NavBar;
