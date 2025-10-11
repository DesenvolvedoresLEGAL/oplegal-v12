import React from 'react';

const HumanoidProblemSection = () => {
  return (
    <section className="py-32 bg-white text-gray-900 relative overflow-hidden">
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full mb-8">
            <span className="text-2xl">💥</span>
            <span className="text-sm font-bold tracking-wider">O PROBLEMA</span>
          </div>
          
          <h2 className="font-haas text-4xl md:text-6xl font-black leading-tight mb-8 text-legal">
            Sua empresa tem dados demais…<br />
            mas <span className="text-legal-purple">decisões de menos</span>.
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-12">
            Os times estão sobrecarregados, os sistemas não conversam<br className="hidden md:block" />
            e o retrabalho virou rotina.
          </p>
          
          <div className="space-y-6 text-2xl md:text-3xl font-bold text-legal">
            <p className="animate-fade-up" style={{ animationDelay: '200ms' }}>
              O que falta não é tecnologia.
            </p>
            <p className="animate-fade-up" style={{ animationDelay: '400ms' }}>
              É <span className="text-legal-purple">coordenação</span>.
            </p>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-700 pt-8 animate-fade-up" style={{ animationDelay: '600ms' }}>
            As empresas do futuro não serão maiores — serão <span className="text-legal-purple font-bold">mais inteligentes</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HumanoidProblemSection;
