
import React from 'react';
import { Target, Rocket, Heart } from 'lucide-react';

const MissaoVisaoValoresHero = () => {
  return (
    <section className="relative py-32 md:py-48 text-center text-white bg-gradient-to-br from-legal via-legal-purple to-legal-cyan overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-legal-cyan rounded-full animate-pulse animation-delay-300"></div>
        <div className="absolute bottom-20 left-1/3 w-16 h-16 border border-white rounded-full animate-pulse animation-delay-700"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-center items-center mb-8 space-x-8">
          <div className="p-4 bg-white/20 rounded-full backdrop-blur-sm">
            <Target size={32} className="text-legal-cyan" />
          </div>
          <div className="p-4 bg-white/20 rounded-full backdrop-blur-sm">
            <Rocket size={32} className="text-white" />
          </div>
          <div className="p-4 bg-white/20 rounded-full backdrop-blur-sm">
            <Heart size={32} className="text-legal-cyan" />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-wider mb-6 animate-fade-in">
          MISSÃO, VISÃO<br />& VALORES
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl font-light max-w-4xl mx-auto animate-fade-in animation-delay-300">
          Os pilares que sustentam nossa jornada de transformação digital e crescimento exponencial. 
          Aqui você encontra a essência do que nos move e para onde estamos indo.
        </p>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default MissaoVisaoValoresHero;
