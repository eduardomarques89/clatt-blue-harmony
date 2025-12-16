import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const RoomsSection = () => {
  const rooms = [
    {
      id: 'executivo',
      name: "Quartos Executivos",
      description: "Conforto e funcionalidade em ambientes projetados para o seu descanso e produtividade. Ideal para viajantes a trabalho que valorizam eficiência e bem-estar.",
      image: "/lovable-uploads/7ea5b64d-566e-4e56-9d9f-bf5b225d33dc.png",
      buttonText: "Saiba Mais"
    },
    {
      id: 'premium',
      name: "Suítes Premium",
      description: "Elegância e exclusividade com espaços amplos, decoração refinada e serviços diferenciados. Perfeitas para estadias que pedem uma experiência superior.",
      image: "/lovable-uploads/7ea5b64d-566e-4e56-9d9f-bf5b225d33dc.png",
      buttonText: "Saiba Mais"
    },
    {
      id: 'cobertura',
      name: "Cobertura Luxo",
      description: "Exclusividade e sofisticação no ponto mais alto, com vistas deslumbrantes e terraço privativo. A escolha definitiva para uma experiência de luxo incomparável.",
      image: "/lovable-uploads/7ea5b64d-566e-4e56-9d9f-bf5b225d33dc.png",
      buttonText: "Saiba Mais"
    }
  ];

  return (
    <section className="py-20 bg-clatt-white">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-clatt-dark tracking-wide mb-4">
            NOSSO QUARTOS
          </h2>
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {rooms.map((room) => (
            <Card key={room.id} className="border-none shadow-none bg-transparent group cursor-pointer">
              <CardContent className="p-0">
                {/* Room Image */}
                <div className="aspect-[4/3] bg-gray-200 rounded-lg mb-6 overflow-hidden">
                  <img 
                    src={room.image} 
                    alt={room.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Room Info */}
                <div className="text-center space-y-4">
                  <h3 className="text-xl font-light text-clatt-dark tracking-wide">
                    {room.name}
                  </h3>
                  
                  <p className="text-sm text-clatt-dark/70 leading-relaxed px-2">
                    {room.description}
                  </p>

                  <Link to={`/quartos/${room.id}`}>
                    <Button 
                      variant="ghost" 
                      className="text-clatt-dark hover:text-clatt-blue border-b border-clatt-dark/30 hover:border-clatt-blue rounded-none px-0 pb-1 font-light tracking-wide transition-all"
                    >
                      {room.buttonText}
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;