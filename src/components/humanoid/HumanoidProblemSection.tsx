import React from 'react';

const HumanoidProblemSection = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-legal to-legal-purple text-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(3,249,255,0.15),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full mb-8">
            <span className="text-2xl">💥</span>
            <span className="text-sm font-bold tracking-wider">O PROBLEMA</span>
          </div>
          
          <h2 className="font-haas text-4xl md:text-6xl font-black leading-tight mb-8">
            Sua empresa tem dados demais…<br />
            mas <span className="text-legal-cyan">decisões de menos</span>.
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-12">
            Os times estão sobrecarregados, os sistemas não conversam<br className="hidden md:block" />
            e o retrabalho virou rotina.
          </p>
          
          <div className="space-y-6 text-2xl md:text-3xl font-bold">
            <p className="animate-fade-up" style={{ animationDelay: '200ms' }}>
              O que falta não é tecnologia.
            </p>
            <p className="animate-fade-up" style={{ animationDelay: '400ms' }}>
              É <span className="text-legal-cyan">coordenação</span>.
            </p>
          </div>
          
          <p className="text-xl md:text-2xl text-white/80 pt-8 animate-fade-up" style={{ animationDelay: '600ms' }}>
            As empresas do futuro não serão maiores — serão <span className="text-legal-cyan font-bold">mais inteligentes</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HumanoidProblemSection;
