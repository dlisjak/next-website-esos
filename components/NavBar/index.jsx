import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className='fixed w-full flex justify-center z-50 mix-blend-difference py-4'>
      <ul className='flex items-center text-white font-light	'>
        <li className='mx-4'><Link href="/">Vstop</Link></li>
        <li className='mx-4'><Link href="/storitve">Storitve</Link></li>
        <img src="/images/logo_icon.svg" width="50" height="auto" />
        <li className='mx-4'><Link href="/reference">Reference</Link></li>
        <li className='mx-4'><Link href="/kontakt">Kontakt</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
