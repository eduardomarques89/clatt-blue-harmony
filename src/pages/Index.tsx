import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import RoomsSection from '@/components/RoomsSection';
import LocationSection from '@/components/LocationSection';
import ExperienceSection from '@/components/ExperienceSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <RoomsSection />
      <LocationSection />
      <ExperienceSection />
      <Footer />
    </div>
  );
};

export default Index;
