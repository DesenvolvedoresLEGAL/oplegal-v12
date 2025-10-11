import React from 'react';
import { Brain, Network, Zap } from 'lucide-react';

const HumanoidSolutionSection = () => {
  return (
    <section className="py-32 bg-legal text-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-legal-cyan/20 backdrop-blur-sm rounded-full border border-legal-cyan/30">
              <span className="text-2xl">🚀</span>
              <span className="text-sm font-bold tracking-wider text-legal-cyan">A SOLUÇÃO</span>
            </div>
            
            <h2 className="font-haas text-4xl md:text-6xl font-black leading-tight">
              <span className="text-legal-cyan">HUMANOID™</span>
            </h2>
          </div>

          {/* Main Content */}
          <div className="text-center space-y-8 animate-fade-up">
            <p className="text-2xl md:text-3xl font-bold leading-relaxed">
              O HUMANOID é o <span className="text-legal-cyan">cérebro digital</span> da sua empresa.
            </p>
            
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-4xl mx-auto">
              Um workspace onde tudo se conecta — pessoas, processos, sistemas e IA —<br className="hidden md:block" />
              para que sua operação <span className="text-white font-semibold">pense, decida e aja automaticamente</span>.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 pt-8">
            <div className="text-center space-y-4 p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-legal-cyan/50 transition-all animate-fade-up" style={{ animationDelay: '100ms' }}>
              <div className="inline-flex p-4 bg-legal-cyan/20 rounded-full">
                <Brain className="w-8 h-8 text-legal-cyan" />
              </div>
              <p className="text-lg font-bold">Ele <span className="text-legal-cyan">entende</span> o que está acontecendo.</p>
            </div>

            <div className="text-center space-y-4 p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-legal-cyan/50 transition-all animate-fade-up" style={{ animationDelay: '200ms' }}>
              <div className="inline-flex p-4 bg-legal-cyan/20 rounded-full">
                <Network className="w-8 h-8 text-legal-cyan" />
              </div>
              <p className="text-lg font-bold">Ele toma <span className="text-legal-cyan">decisões com contexto</span>.</p>
            </div>

            <div className="text-center space-y-4 p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-legal-cyan/50 transition-all animate-fade-up" style={{ animationDelay: '300ms' }}>
              <div className="inline-flex p-4 bg-legal-cyan/20 rounded-full">
                <Zap className="w-8 h-8 text-legal-cyan" />
              </div>
              <p className="text-lg font-bold">Ele <span className="text-legal-cyan">executa tarefas</span> em segundos.</p>
            </div>
          </div>

          {/* Footer */}
          <p className="text-xl md:text-2xl text-white/70 text-center pt-8 animate-fade-up" style={{ animationDelay: '400ms' }}>
            E tudo isso com <span className="text-white font-semibold">segurança</span>, <span className="text-white font-semibold">trilha de auditoria</span> e <span className="text-legal-cyan font-bold">ROI real</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HumanoidSolutionSection;
