import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check, CalendarIcon, Users, Minus, Plus } from 'lucide-react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getRoomById } from '@/data/rooms';

const RoomDetails = () => {
  const { roomId } = useParams();
  const room = getRoomById(Number(roomId));
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [guests, setGuests] = useState(2);

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
      <section className="relative w-full h-[50vh] md:h-[60vh]">
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

      {/* Booking Bar */}
      <section className="w-full bg-clatt-blue py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Title */}
            <h3 className="text-white font-heading text-xl md:text-2xl tracking-wide">
              RESERVE SUA ESTADIA
            </h3>

            {/* Booking Controls */}
            <div className="flex flex-col md:flex-row items-center gap-4 w-full lg:w-auto">
              {/* Check-in Date */}
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full md:w-[180px] justify-start text-left font-normal bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white",
                      !checkIn && "text-white/70"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {checkIn ? format(checkIn, "dd/MM/yyyy", { locale: ptBR }) : <span>Check-in</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-background" align="start">
                  <Calendar
                    mode="single"
                    selected={checkIn}
                    onSelect={setCheckIn}
                    disabled={(date) => date < new Date()}
                    initialFocus
                    className={cn("p-3 pointer-events-auto")}
                  />
                </PopoverContent>
              </Popover>

              {/* Check-out Date */}
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full md:w-[180px] justify-start text-left font-normal bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white",
                      !checkOut && "text-white/70"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {checkOut ? format(checkOut, "dd/MM/yyyy", { locale: ptBR }) : <span>Check-out</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-background" align="start">
                  <Calendar
                    mode="single"
                    selected={checkOut}
                    onSelect={setCheckOut}
                    disabled={(date) => date < new Date() || (checkIn && date <= checkIn)}
                    initialFocus
                    className={cn("p-3 pointer-events-auto")}
                  />
                </PopoverContent>
              </Popover>

              {/* Guests Counter */}
              <div className="flex items-center gap-3 bg-transparent border border-white/30 rounded-md px-4 py-2 w-full md:w-auto justify-center">
                <Users className="h-4 w-4 text-white" />
                <button 
                  onClick={() => setGuests(Math.max(1, guests - 1))}
                  className="text-white hover:text-white/70 transition-colors"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="text-white font-body min-w-[60px] text-center">
                  {guests} {guests === 1 ? 'hóspede' : 'hóspedes'}
                </span>
                <button 
                  onClick={() => setGuests(Math.min(6, guests + 1))}
                  className="text-white hover:text-white/70 transition-colors"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>

              {/* Reserve Button */}
              <Button 
                className="bg-white text-clatt-blue hover:bg-white/90 px-8 py-2 font-body tracking-wide w-full md:w-auto"
              >
                Reservar
              </Button>
            </div>
          </div>
        </div>
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