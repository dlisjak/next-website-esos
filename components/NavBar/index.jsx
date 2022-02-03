import Image from 'next/image';
import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className='fixed w-full flex justify-center z-50 mix-blend-difference py-4'>
      <ul className='flex items-center relative text-white font-light'>
        <li className='mx-4'><Link href="/">Vstop</Link></li>
        <li className='mx-4'><Link href="/storitve">Storitve</Link></li>
        <li className="cursor-pointer">
          <Link href="/">
            <div>
              <Image src="/images/logo_icon.svg" alt="ESOS Digital logo" width={80} height={45} priority />
            </div>
          </Link>
        </li>
        {/*<li className='mx-4'><Link href="/reference">Reference</Link></li>*/}
        <li className='mx-4'><Link href="/vsebina">Vsebina</Link></li>
        <li className='mx-4'><Link href="/kontakt">Kontakt</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
