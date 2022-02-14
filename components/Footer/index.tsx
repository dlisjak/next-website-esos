import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="flex justify-center p-4 text-white">
      <span className="mr-8">Vse pravice pridržane @ TimOptimum d.o.o.</span>
      <Link href="/politika-zasebnosti">Politika zasebnosti</Link>
    </footer>
  );
};

export default Footer;
