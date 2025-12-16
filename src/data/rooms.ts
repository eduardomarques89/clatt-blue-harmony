export interface RoomHighlight {
  id: number;
  name: string;
  description: string;
  subtitle?: string;
  fullDescription?: string;
  image: string;
  images?: string[]; // Para múltiplas fotos no futuro
  buttonText: string;
  highlights?: string[];
}

export const rooms: RoomHighlight[] = [
  {
    id: 1,
    name: "SMART QUEEN",
    subtitle: "Funcionalidade e precisão no essencial",
    description: "O Smart Queen apresenta 25 m² distribuídos com eficiência, oferecendo ergonomia, boa circulação e acústica aprimorada.",
    fullDescription: "Com cama queen, bancada funcional e iluminação planejada, é um quarto pensado para o hóspede que valoriza praticidade, estabilidade e design bem resolvido. A combinação de design contemporâneo, layout linear e organização intuitiva garante uma atmosfera agradável e funcional para diferentes perfis de estadia, sempre preservando o padrão de qualidade do CLATT.",
    image: "https://w7startup.com.br/img/clatt/quarto-executivo.png",
    buttonText: "Saiba Mais",
    highlights: [
      "Cama Queen",
      "TV 43''",
      "Bancada de trabalho",
      "Frigobar",
      "Sistema de climatização de alta eficiência",
      "Cortina blackout",
      "Amenities completos",
      "Secador de cabelo"
    ]
  },
  {
    id: 2,
    name: "SMART TWIN",
    subtitle: "Versatilidade para quem divide a hospedagem",
    description: "Com 28 m², o Smart Twin oferece um ambiente equilibrado com duas camas de solteiro e acústica aprimorada, ideal para duplas de trabalho, famílias ou hóspedes que preferem dormir em leitos separados.",
    fullDescription: "O design contemporâneo, a metragem ampliada e a ergonomia bem planejada garantem conforto individual e fluidez sem abrir mão da estética que marca o CLATT.",
    image: "https://w7startup.com.br/img/clatt/suite-premium.png",
    buttonText: "Saiba Mais",
    highlights: [
      "Duas camas de solteiro",
      "TV 43''",
      "Bancada de trabalho",
      "Frigobar",
      "Sistema de climatização de alta eficiência",
      "Cortina blackout",
      "Amenities completos",
      "Secador de cabelo"
    ]
  },
  {
    id: 3,
    name: "EXECUTIVE KING",
    subtitle: "Amplitude e conforto técnico em nível superior",
    description: "O Executive King apresenta 30 m² de amplitude equilibrada, acabamento superior e cama king, oferecendo uma experiência mais generosa para o viajante que busca conforto elevado.",
    fullDescription: "A integração entre ergonomia, iluminação e amplitude eleva a sensação de conforto e reforça o posicionamento da categoria dentro do portfólio do CLATT.",
    image: "https://w7startup.com.br/img/clatt/cobertura-luxo.png",
    buttonText: "Saiba Mais",
    highlights: [
      "Cama King",
      "Poltrona + mesa para duas pessoas",
      "TV 50''",
      "Bancada de trabalho",
      "Frigobar",
      "Sistema de climatização de alta eficiência",
      "Banheiro ampliado com acabamento superior",
      "Amenities assinados pelo Boticário",
      "Travesseiros e mantas de maior gramatura"
    ]
  },
  {
    id: 4,
    name: "SMART ACCESS",
    subtitle: "Autonomia e ergonomia com padrão CLATT",
    description: "O Smart Access oferece 30 m² planejados com precisão para acessibilidade total, mantendo a estética contemporânea.",
    fullDescription: "O ambiente mantém a ergonomia aprimorada e a sensação de conforto e aconchego. A cama queen complementada por uma cama de solteiro oferece flexibilidade e pontos de apoio bem posicionados para garantir autonomia.",
    image: "/images/quartos/quarto-executivo.png",
    buttonText: "Saiba Mais",
    highlights: [
      "Cama Queen + Solteiro auxiliar",
      "Banheiro 100% acessível",
      "Barras de apoio",
      "TV 43''",
      "Circulação ampliada",
      "Cortina blackout",
      "Amenities acessíveis"
    ]
  },
  {
    id: 5,
    name: "PRIME STUDIO",
    subtitle: "Independência para long stay",
    description: "Com 35 m², o Prime Studio oferece uma metragem generosa combinada a uma mini cozinha equipada, garantindo independência sem abrir mão do conforto e da estética CLATT.",
    fullDescription: "A atmosfera traz funcionalidade elevada, ideal para long stays, rotinas flexíveis ou hóspedes que desejam maior autonomia.",
    image: "/images/quartos/suite-premium.png",
    buttonText: "Saiba Mais",
    highlights: [
      "Cama King",
      "Mini cozinha equipada",
      "TV 50''",
      "Mini geladeira e Micro-ondas",
      "Sistema de climatização de alta eficiência",
      "Cortina blackout",
      "Amenities assinados pelo Boticário",
      "Travesseiros e mantas de maior gramatura"
    ]
  }
];

export const getRoomById = (id: number): RoomHighlight | undefined => {
  return rooms.find(room => room.id === id);
};