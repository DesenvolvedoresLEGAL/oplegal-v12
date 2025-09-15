import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Sparkles, Bot, Zap } from 'lucide-react';

const GalaxiaHero = () => {
  return (
    <section className="py-24 md:py-32 text-center bg-gradient-to-br from-legal-primary to-legal-secondary text-white relative overflow-hidden">
      {/* Background futurista minimalista com galáxias + tecnologia */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-legal-tertiary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-legal-tertiary rounded-full blur-2xl animate-pulse animation-delay-700"></div>
        <Sparkles className="absolute top-1/3 left-1/3 w-32 h-32 text-white/10 animate-ping animation-delay-300" />
        <Bot className="absolute bottom-1/4 right-1/3 w-24 h-24 text-white/10 animate-pulse animation-delay-500" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-center mb-8">
          <div className="bg-legal-tertiary/20 rounded-full p-4 mr-4">
            <Sparkles className="w-16 h-16 text-legal-tertiary" />
          </div>
          <div className="text-left">
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-wider font-haas" style={{ letterSpacing: '0.05em' }}>
              GalaxIA™
            </h1>
            <p className="text-xl md:text-2xl font-light text-legal-tertiary font-haas">
              Sua própria infraestrutura de Inteligência Artificial
            </p>
          </div>
        </div>
        
        <p className="text-lg md:text-xl font-light max-w-4xl mx-auto mb-8 animate-fade-in animation-delay-300 font-haas">
          Infraestrutura artesanal de IA, feita <strong className="text-legal-tertiary">sob medida</strong> para sua empresa 
          crescer mais rápido e com menos custos.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-600">
          <Button asChild size="lg" className="bg-legal-tertiary hover:bg-legal-tertiary/90 text-legal-primary font-bold font-haas px-8 py-6 text-lg h-auto">
            <Link to="/contato?produto=galaxia&tipo=conversa">
              Agendar uma conversa com a LEGAL
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-legal-primary font-haas px-8 py-6 text-lg h-auto">
            <Link to="#sobre-solucao">
              Conhecer a Solução
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GalaxiaHero;