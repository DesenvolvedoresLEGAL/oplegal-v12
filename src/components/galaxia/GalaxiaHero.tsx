import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Sparkles, Bot, Zap, Brain } from 'lucide-react';

const GalaxiaHero = () => {
  return (
    <section className="py-24 md:py-32 text-center bg-gradient-to-br from-legal to-legal-purple text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <Sparkles className="absolute top-1/4 left-1/4 w-64 h-64 text-white/10 animate-pulse transform -translate-x-1/2 -translate-y-1/2" />
        <Bot className="absolute top-1/3 right-1/4 w-48 h-48 text-white/10 animate-pulse animation-delay-300 transform -translate-x-1/2 -translate-y-1/2" />
        <Zap className="absolute bottom-10 right-10 w-32 h-32 text-white/10 animate-ping" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-center mb-8">
          <div className="bg-legal-cyan/20 rounded-full p-4 mr-4">
            <Brain className="w-16 h-16 text-legal-cyan" />
          </div>
          <div className="text-left">
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-wider" style={{ letterSpacing: '0.05em' }}>
              GalaxIA™
            </h1>
            <p className="text-xl md:text-2xl font-light text-legal-cyan">
              Inteligência Artificial sob medida
            </p>
          </div>
        </div>
        
        <p className="text-lg md:text-xl font-light max-w-4xl mx-auto mb-6 animate-fade-in animation-delay-300">
          Infraestrutura artesanal de IA, feita <strong className="text-legal-cyan">sob medida</strong> para sua empresa 
          crescer mais rápido e com menos custos.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8 text-sm">
          <div className="flex items-center justify-center">
            <Brain className="w-5 h-5 mr-2 text-legal-cyan" />
            <span>IA Artesanal</span>
          </div>
          <div className="flex items-center justify-center">
            <Bot className="w-5 h-5 mr-2 text-legal-cyan" />
            <span>Agentes IA</span>
          </div>
          <div className="flex items-center justify-center">
            <Zap className="w-5 h-5 mr-2 text-legal-cyan" />
            <span>Automações</span>
          </div>
          <div className="flex items-center justify-center">
            <Sparkles className="w-5 h-5 mr-2 text-legal-cyan" />
            <span>Copilotos</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-600">
          <Button asChild size="lg" className="bg-legal-cyan hover:bg-legal-cyan/90 text-legal font-bold">
            <Link to="/contato?produto=galaxia&tipo=conversa">
              Agendar uma conversa com a LEGAL
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-legal/80">
            <Link to="#principais-dores">
              Conhecer a Solução
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GalaxiaHero;