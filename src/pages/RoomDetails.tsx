import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Wifi, Tv, Wind, Coffee, Bath, Users, Maximize } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const roomsData = [
  {
    id: 'executivo',
    name: "Quartos Executivos",
    description: "Conforto e funcionalidade em ambientes projetados para o seu descanso e produtividade. Ideal para viajantes a trabalho que valorizam eficiência e bem-estar.",
    fullDescription: "Nossos Quartos Executivos são a escolha perfeita para viajantes de negócios que buscam conforto sem abrir mão da praticidade. Com decoração moderna e funcional, cada detalhe foi pensado para proporcionar uma estadia produtiva e relaxante. Os quartos contam com ampla área de trabalho, iluminação adequada e todas as comodidades necessárias para que você se sinta em casa, mesmo longe dela.",
    image: "/lovable-uploads/7ea5b64d-566e-4e56-9d9f-bf5b225d33dc.png",
    size: "25m²",
    capacity: "2 hóspedes",
    amenities: ["Wi-Fi de alta velocidade", "TV Smart 43\"", "Ar-condicionado", "Cafeteira", "Banheiro privativo", "Área de trabalho"]
  },
  {
    id: 'premium',
    name: "Suítes Premium",
    description: "Elegância e exclusividade com espaços amplos, decoração refinada e serviços diferenciados. Perfeitas para estadias que pedem uma experiência superior.",
    fullDescription: "As Suítes Premium do Clatt Hotel representam o equilíbrio perfeito entre luxo e conforto. Com ambientes espaçosos e decoração sofisticada, estas suítes oferecem uma experiência de hospedagem diferenciada. Desfrute de vistas privilegiadas, amenidades exclusivas e um atendimento personalizado que faz toda a diferença na sua estadia.",
    image: "/lovable-uploads/7ea5b64d-566e-4e56-9d9f-bf5b225d33dc.png",
    size: "40m²",
    capacity: "3 hóspedes",
    amenities: ["Wi-Fi de alta velocidade", "TV Smart 55\"", "Ar-condicionado", "Minibar", "Banheira de hidromassagem", "Sala de estar"]
  },
  {
    id: 'cobertura',
    name: "Cobertura Luxo",
    description: "Exclusividade e sofisticação no ponto mais alto, com vistas deslumbrantes e terraço privativo. A escolha definitiva para uma experiência de luxo incomparável.",
    fullDescription: "A Cobertura Luxo é o ápice da experiência Clatt Hotel. Localizada no último andar, oferece vistas panorâmicas deslumbrantes e um terraço privativo para momentos inesquecíveis. Com decoração assinada por designers renomados, esta acomodação exclusiva conta com amenidades de primeira linha e serviços personalizados 24 horas. A escolha definitiva para quem não aceita menos que o extraordinário.",
    image: "/lovable-uploads/7ea5b64d-566e-4e56-9d9f-bf5b225d33dc.png",
    size: "80m²",
    capacity: "4 hóspedes",
    amenities: ["Wi-Fi de alta velocidade", "TV Smart 65\"", "Ar-condicionado central", "Cozinha gourmet", "Jacuzzi privativa", "Terraço panorâmico"]
  }
];

const amenityIcons: { [key: string]: React.ReactNode } = {
  "Wi-Fi de alta velocidade": <Wifi className="w-5 h-5" />,
  "TV Smart 43\"": <Tv className="w-5 h-5" />,
  "TV Smart 55\"": <Tv className="w-5 h-5" />,
  "TV Smart 65\"": <Tv className="w-5 h-5" />,
  "Ar-condicionado": <Wind className="w-5 h-5" />,
  "Ar-condicionado central": <Wind className="w-5 h-5" />,
  "Cafeteira": <Coffee className="w-5 h-5" />,
  "Minibar": <Coffee className="w-5 h-5" />,
  "Cozinha gourmet": <Coffee className="w-5 h-5" />,
  "Banheiro privativo": <Bath className="w-5 h-5" />,
  "Banheira de hidromassagem": <Bath className="w-5 h-5" />,
  "Jacuzzi privativa": <Bath className="w-5 h-5" />,
};

const RoomDetails = () => {
  const { roomId } = useParams();
  const room = roomsData.find(r => r.id === roomId);

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
          <div className="mb-12">
            <span className="text-xs tracking-[0.3em] text-clatt-dark/60 font-body uppercase">
              SOBRE A ACOMODAÇÃO
            </span>
          </div>

          {/* Room Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-light text-clatt-dark mb-8 tracking-wide">
            {room.name}
          </h1>

          {/* Room Description */}
          <p className="text-base md:text-lg text-clatt-dark/80 leading-relaxed font-body mb-12">
            {room.fullDescription}
          </p>

          {/* Room Details */}
          <div className="flex flex-wrap gap-8 mb-16">
            <div className="flex items-center gap-3">
              <Maximize className="w-5 h-5 text-clatt-blue" />
              <span className="font-body text-clatt-dark">{room.size}</span>
            </div>
            <div className="flex items-center gap-3">
              <Users className="w-5 h-5 text-clatt-blue" />
              <span className="font-body text-clatt-dark">{room.capacity}</span>
            </div>
          </div>

          {/* Amenities */}
          <div className="border-t border-clatt-dark/10 pt-12">
            <h2 className="text-xl font-heading font-light text-clatt-dark mb-8 tracking-wide">
              Comodidades
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {room.amenities.map((amenity, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="text-clatt-blue">
                    {amenityIcons[amenity] || <Coffee className="w-5 h-5" />}
                  </span>
                  <span className="font-body text-sm text-clatt-dark/80">{amenity}</span>
                </div>
              ))}
            </div>
          </div>

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