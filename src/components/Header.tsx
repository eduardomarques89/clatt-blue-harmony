import { useState, useEffect } from 'react';
import { Menu, Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    'Sobre o Clatt',
    'Acomodações',
    'Experiências',
    'Sustentabilidade',
    'Corporativo',
    'Reservas'
  ];

  return (
    <>
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-clatt-blue shadow-lg' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Menu Hamburger */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(true)}
              className="text-clatt-white hover:bg-clatt-white/10 transition-all"
            >
              <Menu className="h-6 w-6" />
            </Button>

            {/* Logo */}
            <div className="flex-1 flex justify-center">
              <div className="text-clatt-white font-light text-2xl tracking-wider">
                CLATT
                <div className="text-xs text-center tracking-widest opacity-80">
                  HOTEL DESIGN LUXE
                </div>
              </div>
            </div>

            {/* Search */}
            <Button
              variant="ghost"
              size="icon"
              className="text-clatt-white hover:bg-clatt-white/10 transition-all"
            >
              <Search className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>

      {/* Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-clatt-blue">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between mb-16">
              {/* Empty space for alignment */}
              <div className="w-10"></div>

              {/* Logo */}
              <div className="text-clatt-white font-light text-2xl tracking-wider">
                CLATT
                <div className="text-xs text-center tracking-widest opacity-80">
                  HOTEL DESIGN LUXE
                </div>
              </div>

              {/* Close Button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(false)}
                className="text-clatt-white hover:bg-clatt-white/10 transition-all"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>

            {/* Menu Items */}
            <nav className="flex flex-col items-center space-y-8">
              {menuItems.map((item, index) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-clatt-white text-xl font-light tracking-wide hover:opacity-70 transition-opacity"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;