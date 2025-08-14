import { useState, useEffect } from 'react';
import { Menu, Search, X, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Sobre o Clatt', hasSubmenu: false },
    { name: 'Acomodações', hasSubmenu: true, submenu: ['Suítes Premium', 'Quartos Executivos', 'Apartamentos'] },
    { name: 'Experiências', hasSubmenu: true, submenu: ['Spa & Wellness', 'Gastronomia', 'Eventos Exclusivos'] },
    { name: 'Sustentabilidade', hasSubmenu: false },
    { name: 'Corporativo', hasSubmenu: true, submenu: ['Salas de Reunião', 'Eventos Corporativos', 'Pacotes Empresariais'] },
    { name: 'Reservas', hasSubmenu: false }
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

            {/* Menu Content */}
            <div className="flex h-full">
              {/* Main Menu */}
              <nav className="flex flex-col items-center justify-center space-y-8 flex-1">
                {menuItems.map((item, index) => (
                  <div key={item.name} className="flex items-center">
                    {item.hasSubmenu ? (
                      <button
                        onClick={() => setActiveSubmenu(activeSubmenu === item.name ? null : item.name)}
                        className="text-clatt-white text-xl font-light tracking-wide hover:opacity-70 transition-opacity flex items-center gap-2"
                      >
                        {item.name}
                        <ChevronRight 
                          className={`h-5 w-5 transition-transform duration-300 ${
                            activeSubmenu === item.name ? 'rotate-90' : ''
                          }`} 
                        />
                      </button>
                    ) : (
                      <a
                        href={`#${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                        className="text-clatt-white text-xl font-light tracking-wide hover:opacity-70 transition-opacity"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                    )}
                  </div>
                ))}
              </nav>

              {/* Submenu Panel */}
              {activeSubmenu && (
                <div className="flex">
                  {/* White Divider */}
                  <div className="w-px bg-clatt-white/20 mx-8"></div>
                  
                  {/* Submenu Content */}
                  <div className="flex flex-col justify-center space-y-6 min-w-[200px]">
                    {menuItems
                      .find(item => item.name === activeSubmenu)
                      ?.submenu?.map((subItem, index) => (
                        <a
                          key={subItem}
                          href={`#${subItem.toLowerCase().replace(/\s+/g, '-')}`}
                          className="text-clatt-white/80 text-lg font-light tracking-wide hover:text-clatt-white hover:opacity-70 transition-all"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem}
                        </a>
                      ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;