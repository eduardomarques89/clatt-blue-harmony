import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import heroVideoPoster from '@/assets/hero-video-poster.jpg';

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Auto-play video when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch(console.error);
    }
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={heroVideoPoster}
        >
          {/* Fallback for when no video is available */}
          <source src="/video/clatt-hotel-hero.mp4" type="video/mp4" />
          {/* Fallback image */}
          <img 
            src={heroVideoPoster} 
            alt="Clatt Hotel Luxury Interior" 
            className="w-full h-full object-cover"
          />
        </video>
      </div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-clatt-blue/40"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center text-clatt-white px-6 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-light tracking-wider mb-6 opacity-90">
            CLATT
          </h1>
          <p className="text-lg md:text-xl font-light tracking-wide mb-8 opacity-80 max-w-2xl mx-auto">
            Uma experiência de hospitalidade que transcende o luxo tradicional
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="outline" 
              size="lg"
              className="bg-transparent border-clatt-white text-clatt-white hover:bg-clatt-white hover:text-clatt-blue transition-all duration-300 px-8"
            >
              Descobrir Experiências
            </Button>
            <Button 
              size="lg"
              className="bg-clatt-white text-clatt-blue hover:bg-clatt-white/90 transition-all duration-300 px-8"
            >
              Fazer Reserva
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-px h-16 bg-clatt-white/50 animate-pulse"></div>
      </div>
    </section>
  );
};

export default HeroSection;