
import React from 'react';

const HeroSectionSomosLegal = () => {
  return (
    <section className="relative py-32 md:py-48 text-center text-white bg-gradient-to-br from-legal to-legal-purple overflow-hidden">
      {/* Elementos visuais de fundo (partículas, linhas) podem ser adicionados aqui */}
      <div className="absolute inset-0 bg-black opacity-30"></div> {/* Overlay para contraste */}
      
      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-wider mb-6 animate-fade-in" style={{ letterSpacing: '0.1em' }}>
          SOMOS LEGAL
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl font-light max-w-3xl mx-auto animate-fade-in animation-delay-300">
          ... e somos um. Falamos a mesma língua; e isso é o que começamos a fazer; e agora, não haverá limites para tudo o que quisermos fazer.
        </p>
      </div>
      {/* Animação de partículas ou linhas de conexão aqui (exemplo placeholder) */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSectionSomosLegal;
