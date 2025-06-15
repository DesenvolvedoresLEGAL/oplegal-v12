
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Camera, Video, Drone, Play } from 'lucide-react';

const NuvyoHero = () => {
  return (
    <section className="py-24 md:py-32 text-center bg-gradient-to-br from-legal to-legal-purple text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-legal-cyan/20 rounded-full animate-ping"></div>
        <Drone className="absolute top-1/3 right-1/3 w-48 h-48 text-white/5 animate-bounce" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-center mb-6">
          <div className="bg-legal-cyan/20 rounded-full p-4 mr-4">
            <Camera className="w-12 h-12 text-legal-cyan" />
          </div>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-wider" style={{ letterSpacing: '0.05em' }}>
            Nuvyo
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl font-light mb-6 text-legal-cyan">
          Filmagem e Fotografia com Drones Profissionais
        </p>
        
        <p className="text-lg md:text-xl font-light max-w-4xl mx-auto mb-8 leading-relaxed">
          Transforme sua perspectiva com nossos serviços de <strong className="text-legal-cyan">filmagem e fotografia aérea</strong>. 
          Capturamos momentos únicos com qualidade cinematográfica 4K/8K para eventos, marketing e produções audiovisuais.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
            <Video className="w-5 h-5 mr-2 text-legal-cyan" />
            <span className="text-sm font-medium">Qualidade 4K/8K</span>
          </div>
          <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
            <Drone className="w-5 h-5 mr-2 text-legal-cyan" />
            <span className="text-sm font-medium">Pilotos Certificados</span>
          </div>
          <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
            <Camera className="w-5 h-5 mr-2 text-legal-cyan" />
            <span className="text-sm font-medium">Equipamentos Premium</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-legal-cyan hover:bg-legal-cyan/90 text-legal font-bold">
            <Link to="/contato?subject=nuvyo-orcamento">
              Solicitar Orçamento
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-legal">
            <Link to="#demo" className="flex items-center">
              <Play className="w-5 h-5 mr-2" />
              Ver Demonstração
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NuvyoHero;
