import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

const HumanoidManifestoHero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-humanoid-dark text-humanoid-light overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-humanoid-accent/10 via-transparent to-humanoid-highlight/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(55,55,255,0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10 text-center animate-fade-in">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-humanoid-accent/20 rounded-full mb-4 animate-pulse-slow">
            <Sparkles className="w-4 h-4 text-humanoid-highlight" />
            <span className="text-sm font-medium text-humanoid-light">Manifesto HUMANOID</span>
          </div>
          
          <h1 className="font-haas text-5xl md:text-7xl lg:text-8xl font-black leading-tight">
            O futuro das empresas não será{' '}
            <span className="text-humanoid-highlight">humano</span> ou{' '}
            <span className="text-humanoid-accent">artificial</span>.
          </h1>
          
          <p className="text-3xl md:text-5xl font-bold text-humanoid-highlight animate-reveal">
            Será Humanoid.
          </p>
          
          <div className="pt-8 animate-fade-up">
            <Button 
              asChild 
              size="lg"
              className="bg-humanoid-accent hover:bg-humanoid-accent/90 text-white text-lg px-12 py-6 h-auto rounded-full font-bold shadow-2xl hover:shadow-humanoid-accent/50 transition-all"
            >
              <Link to="/contato?produto=humanoid">Desperte sua empresa</Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-humanoid-dark to-transparent" />
    </section>
  );
};

export default HumanoidManifestoHero;
