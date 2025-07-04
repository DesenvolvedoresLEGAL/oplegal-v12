
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const AluguelHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-legal-black text-white overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-legal to-legal-black opacity-80"></div>
      
      {/* Optimized Grid overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 0 60 L 60 60' stroke='%23191970' stroke-opacity='0.2' fill='none' /%3E%3Cpath d='M 60 0 L 60 60' stroke='%23191970' stroke-opacity='0.2' fill='none' /%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)' /%3E%3C/svg%3E")`,
        }}
      />

      {/* Optimized floating elements */}
      <div className="absolute w-64 h-64 rounded-full bg-legal-cyan blur-[100px] top-20 -left-20 opacity-20 animate-pulse will-change-transform"></div>
      <div className="absolute w-96 h-96 rounded-full bg-legal-purple blur-[120px] bottom-0 right-0 opacity-20 animate-pulse will-change-transform" style={{
        animationDelay: "1s"
      }}></div>

      <div className="container mx-auto px-4 relative z-10 py-24">
        <div className="text-center max-w-5xl mx-auto">
          <header>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-wider mb-6" style={{ letterSpacing: '0.05em' }}>
              LEGAL ALUGUE
            </h1>
            <p className="text-lg md:text-xl font-light max-w-4xl mx-auto mb-8">
              <strong className="font-bold text-legal-cyan">Aluguel de internet para eventos</strong> e 
              <strong className="font-bold text-legal-cyan"> locação de internet temporária</strong> com tecnologia de ponta. 
              Oferecemos <strong>soluções de rede para eventos</strong>, <strong>infraestrutura de TI para feiras</strong> e
              <strong> Wi-Fi para congressos</strong> com instalação rápida e suporte técnico especializado 24/7.
            </p>
          </header>
          <nav className="flex flex-col sm:flex-row justify-center gap-4" role="navigation" aria-label="Ações principais">
            <Button asChild size="lg" className="bg-legal-cyan hover:bg-legal-cyan/90 text-legal font-bold">
              <Link to="/contato?solution=legal-alugue" title="Solicite um orçamento para locação de equipamentos">
                Solicitar Orçamento
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-legal hover:bg-white hover:text-legal/80">
              <Link to="#solucoes" title="Conheça nossas soluções de locação de internet e equipamentos">
                Ver Soluções
              </Link>
            </Button>
          </nav>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-gray-400 mb-2">Scroll</span>
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-gray-400 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default AluguelHero;
