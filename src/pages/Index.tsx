import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      
      {/* Temporary content section to test scroll behavior */}
      <section className="min-h-screen bg-clatt-white flex items-center justify-center">
        <div className="text-center px-6">
          <h2 className="text-4xl font-light text-clatt-blue mb-4 tracking-wide">
            Experiência Clatt
          </h2>
          <p className="text-lg text-clatt-dark/70 max-w-2xl mx-auto">
            Descubra um novo padrão de excelência em hospitalidade de luxo
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
