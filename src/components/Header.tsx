import { useState, useEffect } from 'react';
import { Menu, Search, X, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
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
              onClick={() => setIsSearchOpen(true)}
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

      {/* Search Card */}
      {isSearchOpen && (
        <div className="fixed top-0 left-0 right-0 z-40 bg-clatt-blue/95 backdrop-blur-sm border-b border-white/20">
          <div className="container mx-auto px-6 py-8">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-clatt-white text-2xl font-light tracking-wide">
                Reserve Sua Estadia
              </h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsSearchOpen(false)}
                className="text-clatt-white hover:bg-white/10 transition-all"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
              {/* Check-in */}
              <div>
                <label className="text-clatt-white/80 text-sm font-light mb-2 block">
                  Check-in
                </label>
                <input
                  type="date"
                  className="w-full bg-white/20 border border-white/30 text-clatt-white placeholder-clatt-white/60 rounded-md px-4 py-3 focus:outline-none focus:border-white/50 transition-all"
                />
              </div>
              
              {/* Check-out */}
              <div>
                <label className="text-clatt-white/80 text-sm font-light mb-2 block">
                  Check-out
                </label>
                <input
                  type="date"
                  className="w-full bg-white/20 border border-white/30 text-clatt-white placeholder-clatt-white/60 rounded-md px-4 py-3 focus:outline-none focus:border-white/50 transition-all"
                />
              </div>

              {/* Guests */}
              <div>
                <label className="text-clatt-white/80 text-sm font-light mb-2 block">
                  Hóspedes
                </label>
                <select className="w-full bg-white/20 border border-white/30 text-clatt-white rounded-md px-4 py-3 focus:outline-none focus:border-white/50 transition-all">
                  <option value="2-adultos-0-criancas" className="text-clatt-dark">2 Adultos, 0 Crianças</option>
                  <option value="1-adulto-0-criancas" className="text-clatt-dark">1 Adulto, 0 Crianças</option>
                  <option value="2-adultos-1-crianca" className="text-clatt-dark">2 Adultos, 1 Criança</option>
                  <option value="2-adultos-2-criancas" className="text-clatt-dark">2 Adultos, 2 Crianças</option>
                </select>
              </div>

              {/* Search Button */}
              <Button className="bg-white text-clatt-blue hover:bg-white/90 transition-all font-medium py-3 px-8">
                Pesquisar
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;