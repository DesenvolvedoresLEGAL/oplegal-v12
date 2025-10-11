import React from 'react';
import { Sparkles } from 'lucide-react';

const HumanoidVisionSection = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-legal/20 via-legal-purple/20 to-legal/20 text-white relative overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(3,249,255,0.15),transparent_70%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-12 animate-fade-in">
          {/* Icon Header */}
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md rounded-full border border-legal-cyan/30">
            <span className="text-3xl">🌎</span>
            <span className="text-sm font-bold tracking-widest">VISÃO DE FUTURO</span>
          </div>
          
          {/* Main Content */}
          <div className="space-y-8">
            <h2 className="font-haas text-3xl md:text-5xl font-black leading-tight">
              O futuro das empresas é <span className="text-legal-cyan">híbrido</span>.
            </h2>
            
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-4xl mx-auto">
              Humanos e agentes inteligentes trabalhando lado a lado.
            </p>
          </div>

          {/* Divider with icon */}
          <div className="flex items-center justify-center gap-4 py-8">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-legal-cyan" />
            <Sparkles className="w-6 h-6 text-legal-cyan" />
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-legal-cyan" />
          </div>

          {/* Vision Statement */}
          <div className="space-y-6 max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              O HUMANOID é o primeiro passo para essa nova geração:
            </p>
            
            <p className="text-2xl md:text-3xl font-bold leading-relaxed">
              empresas que <span className="text-legal-cyan">aprendem</span>, <span className="text-legal-cyan">decidem</span> e <span className="text-legal-cyan">agem</span>
            </p>
            
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
              com a <span className="font-semibold text-white">precisão de uma máquina</span><br className="hidden md:block" />
              e o <span className="font-semibold text-white">propósito de um humano</span>.
            </p>
          </div>

          {/* Glow effect */}
          <div className="pt-12 animate-pulse-slow">
            <div className="w-32 h-1 mx-auto bg-gradient-to-r from-transparent via-legal-cyan to-transparent rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HumanoidVisionSection;
