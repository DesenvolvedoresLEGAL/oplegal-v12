
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Package, Zap, Shield, Clock } from 'lucide-react';

const SonixHero = () => {
  return (
    <section className="py-24 md:py-32 text-center bg-gradient-to-br from-legal to-legal-purple text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <Package className="absolute top-1/4 left-1/4 w-64 h-64 text-white/10 animate-pulse transform -translate-x-1/2 -translate-y-1/2" />
        <Zap className="absolute bottom-10 right-10 w-32 h-32 text-white/10 animate-ping" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-center mb-8">
          <div className="bg-legal-cyan/20 rounded-full p-4 mr-4">
            <Package className="w-16 h-16 text-legal-cyan" />
          </div>
          <div className="text-left">
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-wider" style={{ letterSpacing: '0.05em' }}>
              Sonix
            </h1>
            <p className="text-xl md:text-2xl font-light text-legal-cyan">
              Delivery Premium com Drones
            </p>
          </div>
        </div>
        
        <p className="text-lg md:text-xl font-light max-w-4xl mx-auto mb-6 animate-fade-in animation-delay-300">
          O mais avançado serviço de <strong className="text-legal-cyan">delivery com drones</strong> do Brasil. 
          Entregas em até 15 minutos com tecnologia de ponta e experiência premium.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8 text-sm">
          <div className="flex items-center justify-center">
            <Clock className="w-5 h-5 mr-2 text-legal-cyan" />
            <span>Até 15min</span>
          </div>
          <div className="flex items-center justify-center">
            <Shield className="w-5 h-5 mr-2 text-legal-cyan" />
            <span>100% Seguro</span>
          </div>
          <div className="flex items-center justify-center">
            <Zap className="w-5 h-5 mr-2 text-legal-cyan" />
            <span>IA Avançada</span>
          </div>
          <div className="flex items-center justify-center">
            <Package className="w-5 h-5 mr-2 text-legal-cyan" />
            <span>Até 3kg</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-600">
          <Button asChild size="lg" className="bg-legal-cyan hover:bg-legal-cyan/90 text-legal font-bold">
            <Link to="/contato?service=sonix">
              Solicitar Demonstração
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white text-legal hover:bg-white hover:text-legal/80">
            <Link to="#como-funciona">
              Como Funciona
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SonixHero;
