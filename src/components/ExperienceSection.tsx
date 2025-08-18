import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      name: "Lounge",
      description: "Ambiente sofisticado e acolhedor projetado para momentos de relaxamento e networking. Ideal para encontros casuais, leitura ou simplesmente desfrutar de nossa seleção de bebidas e aperitivos.",
      image: "/lovable-uploads/fd757ea0-2f82-438f-ba60-29ba000a8139.png",
      buttonText: "Saiba Mais"
    },
    {
      id: 2,
      name: "Salas de Reunião Executivas",
      description: "Espaços elegantes e funcionais para eventos corporativos, reuniões de negócios e apresentações. Equipadas com tecnologia de ponta e ambiente profissional de alta qualidade.",
      image: "/lovable-uploads/fd757ea0-2f82-438f-ba60-29ba000a8139.png",
      buttonText: "Saiba Mais"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-clatt-dark tracking-wide mb-4">
            EXPERIÊNCIA
          </h2>
        </div>

        {/* Experience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {experiences.map((experience) => (
            <Card key={experience.id} className="border-none shadow-none bg-transparent group cursor-pointer">
              <CardContent className="p-0">
                {/* Experience Image */}
                <div className="aspect-[4/3] bg-gray-200 rounded-lg mb-6 overflow-hidden">
                  <img 
                    src={experience.image} 
                    alt={experience.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Experience Info */}
                <div className="text-center space-y-4">
                  <h3 className="text-xl font-light text-clatt-dark tracking-wide">
                    {experience.name}
                  </h3>
                  
                  <p className="text-sm text-clatt-dark/70 leading-relaxed px-2">
                    {experience.description}
                  </p>

                  <Button 
                    variant="ghost" 
                    className="text-clatt-dark hover:text-clatt-blue border-b border-clatt-dark/30 hover:border-clatt-blue rounded-none px-0 pb-1 font-light tracking-wide transition-all"
                  >
                    {experience.buttonText}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;