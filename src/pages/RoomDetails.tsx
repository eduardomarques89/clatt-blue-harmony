import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getRoomById } from '@/data/rooms';

const RoomDetails = () => {
  const { roomId } = useParams();
  const room = getRoomById(Number(roomId));

  if (!room) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-heading text-foreground mb-4">Quarto não encontrado</h1>
          <Link to="/">
            <Button variant="outline">Voltar para Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Image */}
      <section className="relative w-full h-[60vh] md:h-[70vh]">
        <img 
          src={room.image} 
          alt={room.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        
        {/* Back Button */}
        <Link 
          to="/#quartos" 
          className="absolute top-24 left-6 md:left-12 flex items-center gap-2 text-white/90 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-body text-sm tracking-wide">Voltar</span>
        </Link>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 bg-clatt-white">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Section Title */}
          <div className="mb-8">
            <span className="text-xs tracking-[0.3em] text-clatt-dark/60 font-body uppercase">
              SOBRE A ACOMODAÇÃO
            </span>
          </div>

          {/* Room Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-light text-clatt-dark mb-4 tracking-wide">
            {room.name}
          </h1>

          {/* Subtitle */}
          {room.subtitle && (
            <p className="text-lg md:text-xl text-clatt-blue font-body mb-8 italic">
              {room.subtitle}
            </p>
          )}

          {/* Room Description */}
          <p className="text-base md:text-lg text-clatt-dark/80 leading-relaxed font-body mb-12">
            {room.fullDescription || room.description}
          </p>

          {/* Highlights */}
          {room.highlights && room.highlights.length > 0 && (
            <div className="border-t border-clatt-dark/10 pt-12">
              <h2 className="text-xl font-heading font-light text-clatt-dark mb-8 tracking-wide">
                Comodidades
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {room.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-clatt-blue flex-shrink-0" />
                    <span className="font-body text-sm text-clatt-dark/80">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA Button */}
          <div className="mt-16 text-center">
            <Button 
              className="bg-clatt-blue hover:bg-clatt-blue/90 text-white px-12 py-6 text-base tracking-wide font-body"
            >
              Reservar Agora
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RoomDetails;