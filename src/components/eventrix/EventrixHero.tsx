
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Brain, Calendar, TrendingUp, Play } from 'lucide-react';

const EventrixHero = () => {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-legal to-legal-purple text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <Brain className="absolute top-10 left-10 w-32 h-32 text-white/10 animate-pulse" />
        <Calendar className="absolute bottom-10 right-10 w-24 h-24 text-white/10 animate-pulse animation-delay-500" />
        <TrendingUp className="absolute top-1/3 right-20 w-28 h-28 text-white/10 animate-ping" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <header>
            <div className="flex items-center gap-3 mb-6">
              <Brain className="w-12 h-12 text-legal-cyan" />
              <h1 className="text-5xl md:text-7xl font-black uppercase tracking-wider">Eventrix</h1>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-legal-cyan">
              Gestão de Eventos com IA
            </h2>
            
            <p className="text-lg md:text-xl mb-8 leading-relaxed">
              Plataforma completa de <strong>gestão de eventos</strong> com inteligência artificial. 
              Automatize processos, personalize experiências e maximize resultados com análise preditiva 
              que aumenta o <strong>engajamento em até 85%</strong>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button asChild size="lg" className="bg-legal-cyan hover:bg-legal-cyan/90 text-legal font-bold">
                <Link to="/contato?produto=eventrix">Solicitar Demo</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-legal">
                <Play className="mr-2 h-4 w-4" />
                Ver Demonstração
              </Button>
            </div>
            
            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-legal-green rounded-full"></div>
                <span>IA Avançada</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-legal-green rounded-full"></div>
                <span>85% + Engajamento</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-legal-green rounded-full"></div>
                <span>Cloud Nativo</span>
              </div>
            </div>
          </header>
          
          <div className="lg:text-right">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-xl font-bold mb-4">Por que escolher Eventrix?</h3>
              <ul className="space-y-3 text-left">
                <li className="flex items-center gap-3">
                  <Brain className="w-5 h-5 text-legal-cyan" />
                  <span>IA que aprende com seus eventos</span>
                </li>
                <li className="flex items-center gap-3">
                  <TrendingUp className="w-5 h-5 text-legal-cyan" />
                  <span>85% mais engajamento</span>
                </li>
                <li className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-legal-cyan" />
                  <span>Gestão completa em uma plataforma</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventrixHero;
