import Link from 'next/link';
import ContactBlock from '../ContactBlock';

const Footer = ({ route }) => {
  return (
    <>
      {(route !== '/kontakt' || route !== '/shop') && <ContactBlock />}
      <footer className="flex justify-center p-4 text-white">
        <span className="mr-8">Vse pravice pridržane @ TimOptimum d.o.o.</span>
        <Link href="/politika-zasebnosti">Politika zasebnosti</Link>
      </footer>
    </>
  );
};

export default Footer;
