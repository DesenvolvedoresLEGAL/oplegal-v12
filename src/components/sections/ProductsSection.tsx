
import React from "react";
import { Wifi, Cloud, Send, Bot, ArrowRight } from "lucide-react";
import SectionTitle from "../SectionTitle";
import Card from "../Card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ProductsSection = () => {
  const products = [
    {
      icon: <Wifi size={36} />,
      title: "ALUGUE",
      subtitle: "Links temporários FWA 5G",
      description:
        "Infraestrutura WiFi para qualquer tipo de evento, desde pequenos workshops até grandes congressos e festivais.",
      features: ["Instalação em 24h", "Escala até 10.000+ dispositivos", "Monitoramento em tempo real", "Suporte 24/7"]
    },
    {
      icon: <Cloud size={36} />,
      title: "ASSINATURA",
      subtitle: "Planos de internet FWA 5G",
      description:
        "Conectividade dedicada para empresas com alta performance, baixa latência e SLA garantido.",
      features: ["SLA garantido", "Redundância múltipla", "Segurança avançada", "Gestão centralizada"]
    },
    {
      icon: <Send size={36} />,
      title: "AERO",
      subtitle: "Serviços de drones avançados",
      description:
        "Soluções aéreas inovadoras, incluindo lavagem em altura e delivery inteligente durante eventos.",
      features: ["Delivery durante eventos", "Mapeamento aéreo", "Inspeções técnicas", "Cobertura audiovisual"]
    },
    {
      icon: <Bot size={36} />,
      title: "AI",
      subtitle: "Serviços de Inteligência Artificial",
      description:
        "Suite completa de soluções com IA para credenciamento, matchmaking e BI para eventos.",
      features: ["FacePass (facial)", "LinkAI (matchmaking)", "BLUE (BI)", "HubX (gestão)"]
    },
  ];

  return (
    <section className="py-20 bg-white" id="produtos">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Produtos LEGAL"
          subtitle="Soluções modulares que podem ser combinadas para criar a experiência ideal para seu evento."
          center
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {products.map((product, index) => (
            <Card
              key={index}
              title={product.title}
              subtitle={product.subtitle}
              icon={product.icon}
              className="flex flex-col h-full"
            >
              <p className="text-gray-600 mb-4">{product.description}</p>
              <ul className="styled-list mt-4 mb-6 flex-grow">
                {product.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <Button 
                asChild
                variant="outline" 
                className="mt-auto w-full border-legal text-legal hover:bg-legal hover:text-white"
              >
                <Link to="/produtos">
                  Ver detalhes
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
            <Link to="/produtos">
              Ver todos os produtos
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
