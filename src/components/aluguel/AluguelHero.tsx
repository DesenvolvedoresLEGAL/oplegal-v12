
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Router, Wifi, Server } from 'lucide-react';

const AluguelHero = () => {
  return (
    <section className="py-24 md:py-32 text-center bg-gradient-to-br from-legal to-legal-purple text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none" aria-hidden="true">
        <Router className="absolute top-10 left-10 w-32 h-32 text-white/10 animate-pulse will-change-transform" />
        <Wifi className="absolute bottom-10 right-10 w-24 h-24 text-white/10 animate-pulse animation-delay-500 will-change-transform" />
        <Server className="absolute top-1/3 right-20 w-28 h-28 text-white/10 animate-ping will-change-transform" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <header>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-wider mb-6 animate-fade-in will-change-transform" style={{ letterSpacing: '0.05em' }}>
            LEGAL ALUGUE
          </h1>
          <p className="text-lg md:text-xl font-light max-w-4xl mx-auto mb-8 animate-fade-in animation-delay-300 will-change-transform">
            <strong className="font-bold text-legal-cyan">Aluguel de internet para eventos</strong> e 
            <strong className="font-bold text-legal-cyan"> locação de internet temporária</strong> com tecnologia de ponta. 
            Oferecemos <strong>soluções de rede para eventos</strong>, <strong>infraestrutura de TI para feiras</strong> 
             e <strong>Wi-Fi para congressos</strong> com instalação rápida e suporte técnico especializado 24/7.
          </p>
        </header>
        <nav className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in animation-delay-600 will-change-transform" role="navigation" aria-label="Ações principais">
          <Button asChild size="lg" className="bg-legal-cyan hover:bg-legal-cyan/90 text-legal font-bold">
            <Link to="/contato?solution=legal-alugue" title="Solicite um orçamento para locação de equipamentos">
              Solicitar Orçamento
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-legal">
            <Link to="#solucoes" title="Conheça nossas soluções de locação de internet e equipamentos">
              Ver Soluções
            </Link>
          </Button>
        </nav>
      </div>
    </section>
  );
};

export default AluguelHero;
