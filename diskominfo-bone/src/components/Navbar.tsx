import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 

interface NavbarProps {
  scrollToBeranda: () => void;
  scrollToProfil: () => void;
  scrollToBerita: () => void;
  scrollToLayanan: () => void;
}

const Navbar = ({ scrollToBeranda, scrollToProfil, scrollToBerita, scrollToLayanan }: NavbarProps) => { 
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 z-50 flex items-center justify-between w-screen h-12 transition-colors sm:h-16 lg:h-20 ease-brand duration-250 px-8 ${
      isScrolled
        ? 'bg-green-700 shadow-lg' 
        : 'bg-green-primary hover:bg-green-700 lg:bg-black lg:bg-opacity-10 lg:backdrop-filter lg:backdrop-blur-lg lg:hover:bg-green-700'
    } text-white`}>
      <div className="flex items-center space-x-2">
        <button onClick={scrollToBeranda} className="focus:outline-none">
          <img src="/images/pemkab-bone.png" alt="Portal Logo" className="h-12 w-auto" />
        </button>
      </div>
      <div className="hidden md:flex items-center space-x-8">
        <button
          onClick={scrollToBeranda}
          className="px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-green-800 hover:text-white focus:outline-none"
        >
          Beranda
        </button>
        <button
          onClick={scrollToProfil}
          className="px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-green-800 hover:text-white focus:outline-none"
        >
          Profil
        </button>
        <button
          onClick={scrollToBerita}
          className="px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-green-800 hover:text-white focus:outline-none"
        >
          Berita
        </button>
        <button
          onClick={scrollToLayanan}
          className="px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-green-800 hover:text-white focus:outline-none"
        >
          Layanan
        </button>
        <Link
          to="/login" 
          className="px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-green-800 hover:text-white"
        >
          Masuk
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;