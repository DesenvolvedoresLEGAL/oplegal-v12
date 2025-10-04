import React from 'react';
import { BarChart3, Bot, Users, Link as LinkIcon, ScanFace, Grid3x3 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Module {
  icon: React.ReactNode;
  title: string;
  body: string;
}

interface HumanoidModulesProps {
  headline?: string;
  className?: string;
}

const HumanoidModules: React.FC<HumanoidModulesProps> = ({
  headline = "Os módulos que formam o seu sistema nervoso corporativo.",
  className
}) => {
  const modules: Module[] = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Blue™ — Inteligência Analítica",
      body: "BI vivo com dashboards preditivos e automações que transformam dados em decisões. O cérebro analítico do HUMANOID."
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Humanoid Auto™ — Execução Inteligente",
      body: "Seu gestor automático. Cria, monitora e otimiza rotinas, fluxos e indicadores com IA."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "FitScore™ — Consciência Cultural",
      body: "O sensor comportamental do time. Analisa alinhamento cultural, performance e energia em tempo real."
    },
    {
      icon: <LinkIcon className="w-8 h-8" />,
      title: "LinkAI™ — Conexões Inteligentes",
      body: "O agente social do ecossistema. Promove matchmaking de alto valor entre pessoas e empresas."
    },
    {
      icon: <ScanFace className="w-8 h-8" />,
      title: "MagicPass™ — Reconhecimento Inteligente",
      body: "Entrada e credenciamento facial com IA, conectando pessoas ao físico e ao digital de forma instantânea."
    },
    {
      icon: <Grid3x3 className="w-8 h-8" />,
      title: "Eventrix™ — Gestão Inteligente de Eventos",
      body: "A central neural para eventos e exposições. Conecta expositores, visitantes e dados em tempo real."
    }
  ];

  return (
    <section className={cn("py-24 bg-gradient-to-br from-humanoid-dark to-humanoid-accent/5", className)}>
      <div className="container mx-auto px-4">
        <h2 className="font-haas text-3xl md:text-5xl font-bold text-center text-humanoid-light mb-16 animate-fade-in">
          {headline}
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module, index) => (
            <div 
              key={index}
              className="bg-humanoid-dark/80 backdrop-blur-sm rounded-2xl p-8 border border-humanoid-accent/30 hover:border-humanoid-highlight/50 transition-all animate-fade-up group hover:transform hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-humanoid-accent group-hover:text-humanoid-highlight transition-colors mb-4">
                {module.icon}
              </div>
              <h3 className="font-haas text-xl font-bold mb-3 text-humanoid-light">
                {module.title}
              </h3>
              <p className="text-base text-humanoid-light/70 leading-relaxed">
                {module.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HumanoidModules;
