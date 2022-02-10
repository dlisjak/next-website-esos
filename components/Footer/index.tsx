import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="flex">
      <ul>
        <li>
          <Link href="/politika-zasebnosti">Politika zasebnosti</Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
