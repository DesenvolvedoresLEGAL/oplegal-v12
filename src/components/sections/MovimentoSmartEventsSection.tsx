
import React from "react";
import { Rocket, Target, Trophy, Zap, Globe, Star } from "lucide-react";
import SectionTitle from "../SectionTitle";
import { Button } from "@/components/ui/button";

const MovimentoSmartEventsSection = () => {
  const impactMetrics = [
    {
      icon: Target,
      number: "TOP 3",
      label: "São Paulo no ranking mundial de eventos",
      description: "Posicionando o Brasil entre as 3 principais potências globais"
    },
    {
      icon: Zap,
      number: "100%",
      label: "Eficiência operacional",
      description: "Tecnologia de última geração em todos os eventos"
    },
    {
      icon: Globe,
      number: "1M+",
      label: "Pessoas conectadas",
      description: "Nossa meta até 2030 através do movimento"
    }
  ];

  const movementPillars = [
    {
      icon: Rocket,
      title: "Inovação Tecnológica",
      description: "IA, credenciamento facial, 5G e realidade aumentada transformando cada evento em uma experiência única"
    },
    {
      icon: Trophy,
      title: "Excelência Operacional",
      description: "Padrões internacionais de qualidade que colocam o Brasil no mapa global de eventos"
    },
    {
      icon: Star,
      title: "Impacto Exponencial", 
      description: "ROI comprovado, sustentabilidade e transformação digital que gera resultados mensuráveis"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-legal via-legal-purple to-legal text-white overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-legal-cyan/30 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-legal-cyan/20 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-legal-cyan/20 rounded-full px-6 py-2 mb-6">
            <Rocket className="w-5 h-5 mr-2 text-legal-cyan" />
            <span className="text-legal-cyan font-semibold">LANÇAMENTO PRÓXIMO MÊS</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-unica">
            Movimento <br />
            <span className="text-legal-cyan">SmartEvents™</span>
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-white/90 leading-relaxed">
            O Brasil está pronto para liderar a revolução dos eventos inteligentes. 
            Vamos elevar nosso país ao <strong>TOP 3 mundial</strong> em tecnologia e inovação para eventos.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button 
              className="bg-legal-cyan hover:bg-legal-cyan/90 text-legal px-8 py-6 text-lg h-auto font-semibold"
              asChild
            >
              <a href="/contato?movimento=smartevents">
                Fazer Parte do Movimento
              </a>
            </Button>
            <Button 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-legal px-8 py-6 text-lg h-auto"
              asChild
            >
              <a href="#manifesto">
                Conhecer o Manifesto
              </a>
            </Button>
          </div>
        </div>

        {/* Impact Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {impactMetrics.map((metric, index) => (
            <div key={index} className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <metric.icon className="w-12 h-12 text-legal-cyan mx-auto mb-4" />
              <div className="text-4xl md:text-5xl font-bold mb-2 text-legal-cyan">
                {metric.number}
              </div>
              <h3 className="text-xl font-semibold mb-3">{metric.label}</h3>
              <p className="text-white/80 text-sm">{metric.description}</p>
            </div>
          ))}
        </div>

        {/* Movement Pillars */}
        <div className="mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Os 3 Pilares do Movimento
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {movementPillars.map((pillar, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <pillar.icon className="w-16 h-16 text-legal-cyan mb-6" />
                <h4 className="text-2xl font-bold mb-4">{pillar.title}</h4>
                <p className="text-white/90 leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            São Paulo no TOP 3 Mundial até 2026
          </h3>
          <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
            Junte-se ao movimento que vai posicionar o Brasil como referência mundial em eventos inteligentes. 
            Vamos mostrar ao mundo que a inovação brasileira não tem limites.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              className="bg-legal-cyan hover:bg-legal-cyan/90 text-legal px-8 py-6 text-lg h-auto font-semibold"
              asChild
            >
              <a href="/movimento-smartevents">
                Saiba Mais sobre o Movimento
              </a>
            </Button>
            <Button 
              variant="outline"
              className="border-legal-cyan text-legal-cyan hover:bg-legal-cyan hover:text-legal px-8 py-6 text-lg h-auto"
              asChild
            >
              <a href="/contato">
                Participar Agora
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovimentoSmartEventsSection;
