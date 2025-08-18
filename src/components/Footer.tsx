import { Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-clatt-blue text-white py-16">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo */}
          <div className="md:col-span-1">
            <h2 className="font-heading text-3xl font-light tracking-wider">
              CLATT
            </h2>
            <p className="text-sm text-white/70 mt-2 tracking-wide">
              HOTEL DESIGN EXCLUSIVO
            </p>
          </div>

          {/* Conheça mais */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium mb-6 border-b border-white/20 pb-2">
              Conheça mais
            </h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors text-sm">Nossa História</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors text-sm">Sustentabilidade</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors text-sm">Acessibilidade</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors text-sm">Carreiras</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors text-sm">FAQs</a></li>
            </ul>
          </div>

          {/* Atendimento */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium mb-6 border-b border-white/20 pb-2">
              Atendimento
            </h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors text-sm">Central de Ajuda</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors text-sm">Política de Cancelamento</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors text-sm">Política de Reembolso</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors text-sm">Política de Privacidade</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors text-sm">Termos de Uso</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors text-sm">Cookies</a></li>
            </ul>
          </div>

          {/* Redes Sociais & Linguagem */}
          <div className="md:col-span-1">
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-6 border-b border-white/20 pb-2">
                Redes Sociais
              </h3>
              <a href="#" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm">
                <Instagram size={16} />
                Instagram
              </a>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-6 border-b border-white/20 pb-2">
                Linguagem
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span className="text-sm">Português</span>
                  <span className="text-xl">🇧🇷</span>
                </li>
                <li className="flex items-center gap-2">
                  <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">Inglês</a>
                  <span className="text-xl">🇺🇸</span>
                </li>
                <li className="flex items-center gap-2">
                  <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">Espanhol</a>
                  <span className="text-xl">🇪🇸</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/70 text-sm">
              Copyright © 2025 Clatt Hotel
            </p>
            <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">
              Portal de Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;