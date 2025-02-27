import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { savi_logo } from '@/assets';

const navLinks = [
  { name: 'Home', link: '/' },
  {
    name: 'Services',
    link: '#',
    dropdownItems: [
      { name: 'Digital Cable TV', link: 'services' },
      { name: 'ISP', link: 'services' },
      { name: 'Leased Line', link: '#services' },
    ]
  },
  { name: 'Pricing', link: 'pricing' },
  { name: 'Support', link: 'support' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!isHomePage) return; 
      
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    // Set initial state based on route
    if (!isHomePage) {
      setScrolled(true);
    } else {
      setScrolled(window.scrollY > 10);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled, isHomePage]);

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const headerOffset = 70; // Adjust this value based on your header height
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      className={`fixed  top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        scrolled || !isHomePage
          ? 'h-[65px] bg-white' 
          : 'h-[100px] bg-white'
      }`}
    >
      <nav className={`max-w-[99%] relative mx-auto px-2 md:px-8 h-full flex items-center justify-between transition-all duration-500 ${
        scrolled || !isHomePage ? 'py-2' : 'py-4'
      }`}>
 
        {/* Logo */}
        <div className='flex gap-4'>
          
        <div className='h-12 bg-black w-auto'>
      <img src={savi_logo} alt='logo'   className='h-full w-full'/>
        </div>
       
        </div>
     

        {/* Updated Navigation Links with Better Dropdown */}
        <div className="items-center gap-8 hidden md:flex">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative group"
              onMouseEnter={() => link.dropdownItems && setActiveDropdown(link.name)}
              onMouseLeave={() => link.dropdownItems && setActiveDropdown(null)}
            >
              <Link 
                to={link.link === 'pricing' || link.link === 'support' ? '#' : link.link}
                onClick={(e) => {
                  if (link.link === 'pricing' || link.link === 'support') {
                    e.preventDefault();
                    scrollToSection(link.link);
                  }
                  if (link.dropdownItems) {
                    e.preventDefault();
                    setActiveDropdown(activeDropdown === link.name ? null : link.name);
                  }
                }}
                className={`relative transition-all duration-300 
                  ${scrolled || !isHomePage ? 'text-gray-800' : 'text-gray-800'}
                  ${link.dropdownItems ? 'cursor-pointer flex items-center gap-1' : ''}
                  ${!link.dropdownItems && isActiveLink(link.link) 
                    ? 'text-bluvy font-medium after:content-[""] after:absolute after:w-full after:h-0.5 after:bg-bluvy after:left-0 after:-bottom-1' 
                    : !link.dropdownItems 
                    ? 'after:content-[""] after:absolute after:w-0 after:h-0.5 after:bg-bluvy after:left-1/2 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0' 
                    : ''}`}
             
              >
                {link.name}
                {link.dropdownItems && (
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === link.name ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </Link>
              
              {link.dropdownItems && (
                <div 
                  className={`absolute top-2/3 border left-0 mt-2 w-56 bg-white rounded-[4px] shadow-lg py-2 transform transition-all duration-200 ease-in-out origin-top-left
                    ${activeDropdown === link.name ? 'opacity-100 scale-100' : 'opacity-0  pointer-events-none'}
                  `}
                >
                  {link.dropdownItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.link}
                      className="block px-4 py-2.5 text-gray-800 hover:bg-gray-50 transition-colors duration-150 text-sm"
                      onClick={(e) => 
                        {
                          e.preventDefault();
                          setActiveDropdown(null);
                          scrollToSection(item.link);
                      }}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          
          <button 
            className={`px-6 py-2 rounded-full transition-all duration-500 ${
              scrolled || !isHomePage
                ? 'bg-bluvy text-white hover:bg-gray-700' 
                : 'bg-white text-gray-800 hover:bg-gray-100'
            }`}
          >
            Contact
          </button>
        </div>
        <div className='md:hidden'>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <X className='w-6 h-6' />
            ) : (
              <Menu className='w-6 h-6' />
            )}
          </button>
        </div>

        {/* Updated Mobile Menu with Better Dropdown */}
        <div 
          className={`fixed inset-0 top-[65px] bg-white z-50 md:hidden transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col items-center pt-8 gap-4">
            {navLinks.map((link) => (
              <div key={link.name} className="w-full">
                <div 
                  className="px-6 py-2 flex items-center justify-between cursor-pointer"
                  onClick={() => {
                    if (link.dropdownItems) {
                      setActiveDropdown(activeDropdown === link.name ? null : link.name);
                    } else {
                      setIsMenuOpen(false);
                    }
                  }}
                >
                  <Link
                    to={link.dropdownItems ? '#' : link.link}
                    className={`relative text-gray-800 text-lg 
                      ${!link.dropdownItems && isActiveLink(link.link) 
                        ? 'text-bluvy font-medium after:content-[""] after:absolute after:w-full after:h-0.5 after:bg-bluvy after:left-0 after:-bottom-1' 
                        : !link.dropdownItems 
                        ? 'after:content-[""] after:absolute after:w-0 after:h-0.5 after:bg-bluvy after:left-1/2 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0' 
                        : ''}`}
                    onClick={(e) => link.dropdownItems && e.preventDefault()}
                  >
                    {link.name}
                  </Link>
                  {link.dropdownItems && (
                    <svg
                      className={`w-5 h-5 transition-transform duration-200 ${
                        activeDropdown === link.name ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </div>
                {link.dropdownItems && (
                  <div 
                    className={`bg-gray-50 overflow-hidden transition-all duration-300 ease-in-out ${
                      activeDropdown === link.name ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    {link.dropdownItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.link}
                        className="block px-8 py-2.5 text-gray-700 hover:bg-gray-100 transition-colors duration-150"
                        onClick={() => {
                          setIsMenuOpen(false);
                          setActiveDropdown(null);
                          scrollToSection(item.link);
                        }}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar; 