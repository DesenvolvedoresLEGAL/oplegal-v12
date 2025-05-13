
import React from "react";
import { 
  Wifi, 
  Radio, 
  Activity, 
  Layers, 
  BarChart3, 
  ArrowRight 
} from "lucide-react";
import SectionTitle from "../SectionTitle";
import Card from "../Card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PillarsSection = () => {
  const pillars = [
    {
      icon: <Wifi size={36} />,
      title: "Smart Connect",
      description: "Always-on para 10.000+ dispositivos com FWA 5G e WiFi especializado para eventos.",
      features: ["Conexão 5G", "WiFi de alta densidade", "Baixa latência", "Multi-dispositivos"]
    },
    {
      icon: <Radio size={36} />,
      title: "Smart Sense",
      description: "Sensores e visão 360° do evento com mapas de calor e reconhecimento em tempo real.",
      features: ["IoT avançado", "Mapas de calor", "Localização indoor", "Visão computacional"]
    },
    {
      icon: <Activity size={36} />,
      title: "Smart Flow",
      description: "Operações e credenciamento autônomos com reconhecimento facial e fluxos inteligentes.",
      features: ["Credenciamento facial", "Fluxos automatizados", "Filas inteligentes", "Operação autônoma"]
    },
    {
      icon: <Layers size={36} />,
      title: "Smart Engage",
      description: "IA generativa e realidade aumentada para engajamento único e personalizado.",
      features: ["IA generativa", "Realidade aumentada", "Personalização inteligente", "Engajamento digital"]
    },
    {
      icon: <BarChart3 size={36} />,
      title: "Smart Insight",
      description: "ROI em tempo real com FitScore™ para métricas tangíveis e insights precisos.",
      features: ["Analytics em tempo real", "FitScore™", "Métricas de ROI", "Insights preditivos"]
    },
  ];

  return (
    <section className="py-20 bg-legal-gray" id="pilares">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="O que são Smart Events™"
          subtitle="Uma abordagem revolucionária para eventos que integra tecnologias avançadas para criar experiências mais inteligentes, conectadas e lucrativas."
          center
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {pillars.map((pillar, index) => (
            <Card
              key={index}
              title={pillar.title}
              subtitle={pillar.description}
              icon={pillar.icon}
              className="flex flex-col h-full"
            >
              <ul className="styled-list mt-4 mb-6 flex-grow">
                {pillar.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <Button 
                asChild
                variant="outline" 
                className="mt-auto w-full border-legal text-legal hover:bg-legal hover:text-white"
              >
                <Link to="/smart-events">
                  Saiba mais
                  <ArrowRight className="ml-2" size={16} />
                </Link>
              </Button>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button 
            asChild
            className="bg-legal hover:bg-legal/90 text-white px-8 py-6 text-lg h-auto"
          >
            <Link to="/smart-events">
              Explorar todos os pilares
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;
