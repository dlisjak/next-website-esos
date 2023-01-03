import Link from 'next/link';
import ContactBlock from '../ContactBlock';

const Footer = ({ route }) => {
  return (
    <>
      {route !== '/kontakt' || route !== "/" && <ContactBlock />}
      <footer className="flex bg-black justify-center p-4 text-white">
        <span className="mr-8">Vse pravice pridržane @ Tim Optimum d.o.o.</span>
        <Link href="/politika-zasebnosti">Politika zasebnosti</Link>
      </footer>
    </>
  );
};

export default Footer;
