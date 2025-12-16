import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { rooms } from '@/data/rooms';

const RoomsSection = () => {
  return (
    <section id="quartos" className="py-20 bg-clatt-white">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-clatt-dark tracking-wide mb-4">
            NOSSO QUARTOS
          </h2>
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {rooms.slice(0, 3).map((room) => (
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

        {/* Ver Todos Button */}
        <div className="text-center mt-12">
          <Link to="/quartos">
            <Button 
              variant="outline" 
              className="border-clatt-dark text-clatt-dark hover:bg-clatt-dark hover:text-clatt-white px-8 py-6 tracking-wide"
            >
              Ver Todos os Quartos
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;