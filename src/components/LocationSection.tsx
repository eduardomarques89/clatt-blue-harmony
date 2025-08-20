import { MapPin, Heart, Coffee, Car } from 'lucide-react';

const LocationSection = () => {
  return (
    <section className="py-20 bg-clatt-blue">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-clatt-white tracking-wide mb-4">
              NOSSA LOCALIZAÇÃO
            </h2>
            <p className="text-lg text-clatt-white/80 font-light">
              No coração de São João da Boa Vista
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Address & Info */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-clatt-white mt-1" />
                <div>
                  <h3 className="text-xl font-light text-clatt-white mb-2">
                    Endereço
                  </h3>
                  <p className="text-clatt-white/90 leading-relaxed">
                    Av. Profa. Isette Corrèa Fontão, 265<br />
                    Jardim Vila Rica<br />
                    São João da Boa Vista - SP<br />
                    CEP: 13876-750
                  </p>
                </div>
              </div>

              <div className="border-l-2 border-clatt-white/30 pl-6">
                <p className="text-clatt-white/90 leading-relaxed">
                  Localizado estrategicamente em São João da Boa Vista, uma charmosa cidade do interior paulista 
                  conhecida por suas águas termais, arquitetura histórica e hospitalidade calorosa. 
                  Estamos no coração da região, oferecendo fácil acesso aos principais pontos turísticos e 
                  atrações da cidade.
                </p>
              </div>
            </div>

            {/* Right Column - City Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="text-center space-y-3">
                <Heart className="w-8 h-8 text-clatt-white mx-auto" />
                <h4 className="text-lg font-light text-clatt-white">
                  Águas Termais
                </h4>
                <p className="text-sm text-clatt-white/80">
                  Famosa estância hidromineral com propriedades terapêuticas
                </p>
              </div>

              <div className="text-center space-y-3">
                <Coffee className="w-8 h-8 text-clatt-white mx-auto" />
                <h4 className="text-lg font-light text-clatt-white">
                  Gastronomia Local
                </h4>
                <p className="text-sm text-clatt-white/80">
                  Rica tradição culinária com sabores autênticos do interior
                </p>
              </div>

              <div className="text-center space-y-3">
                <Car className="w-8 h-8 text-clatt-white mx-auto" />
                <h4 className="text-lg font-light text-clatt-white">
                  Acesso Fácil
                </h4>
                <p className="text-sm text-clatt-white/80">
                  Localização privilegiada com fácil acesso às principais rodovias
                </p>
              </div>

              <div className="text-center space-y-3">
                <MapPin className="w-8 h-8 text-clatt-white mx-auto" />
                <h4 className="text-lg font-light text-clatt-white">
                  Centro Histórico
                </h4>
                <p className="text-sm text-clatt-white/80">
                  Próximo aos principais pontos turísticos e culturais da cidade
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;