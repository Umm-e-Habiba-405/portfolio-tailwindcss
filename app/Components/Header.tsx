import Link from 'next/link';

const Header = () => {
  return (

    <header className="bg-gray-300 text-black py-5">
      <nav className="container mr-6 flex justify-between items-center">
        <h1 className="text-4xl font-bold ml-16"><b>Port</b><b className='text-pink-600'>folio</b></h1>
        <ul className="flex space-x-6 mx-2 font-bold text-lg">
          <li>
            <Link href="#about" className="hover:text-pink-600">
              About
            </Link>
          </li>
          <li>
            <Link href="#services" className="hover:text-pink-600">
              Services
            </Link>
          </li>
          <li>
            <Link href="#skills" className="hover:text-pink-600">
              Skills
            </Link>
          </li>
         
          
          <li>
            <Link href="#contact" className="hover:text-pink-600">
              Contact
            </Link>
          </li>
          
        </ul>
        <button className='bg-pink-400 px-3 py-1 rounded-lg font-bold hover:bg-gray-400'>sign in</button>
      </nav>
      
    </header>
    
  );
};

export default Header;
