
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SectionTitle from "../SectionTitle";
import { Brain, Wifi } from "lucide-react";

interface ProductsSectionProps {
  titleOverride?: string;
}

const ProductsSection = ({ titleOverride }: ProductsSectionProps) => {
  const products = [
    {
      title: "AERO",
      description: "Soluções aéreas incríveis com Drones",
      icon: <svg className="w-8 h-8" strokeWidth={1.5} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <circle cx="12" cy="12" r="3"/>
        <circle cx="12" cy="2" r="1"/>
        <circle cx="12" cy="22" r="1"/>
        <circle cx="2" cy="12" r="1"/>
        <circle cx="22" cy="12" r="1"/>
        <path d="M8.5 8.5L6 6"/>
        <path d="M15.5 8.5L18 6"/>
        <path d="M8.5 15.5L6 18"/>
        <path d="M15.5 15.5L18 18"/>
        <line x1="12" y1="6" x2="12" y2="10"/>
        <line x1="12" y1="14" x2="12" y2="18"/>
        <line x1="6" y1="12" x2="10" y2="12"/>
        <line x1="14" y1="12" x2="18" y2="12"/>
      </svg>,
      link: "/negocios/aero",
      features: ["Foto/Filmagem", "Delivery inteligente", "Limpeza de estruturas"]
    },
    {
      title: "AI",
      description: "Ganhe eficiência e escalabilidade",
      icon: <Brain className="w-8 h-8" strokeWidth={1.5} />,
      link: "/negocios/ai",
      features: ["Eventrix", "Humanoid", "LinkAI"]
    },
    {
      title: "ALUGUE",
      description: "Internet e tech sob demanda",
      icon: <Wifi className="w-8 h-8" strokeWidth={1.5} />,
      link: "/negocios/alugue",
      features: ["Internet 5G", "Rede & WiFi", "Gadgets"]
    },
    {
      title: "ASSINATURA",
      description: "Conectividade para seu negócio",
      icon: <svg className="w-8 h-8" strokeWidth={1.5} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
        <path d="M6 8h4"/>
        <path d="M6 12h8"/>
      </svg>,
      link: "/negocios/assinatura",
      features: ["Planos Sob Medida", "Links Backup", "SLA 99,9%"]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title={titleOverride || "Nossos Produtos"}
          subtitle="Soluções integradas que transformam eventos em experiências memoráveis"
          center={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="group overflow-hidden border-none shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white">
              <CardContent className="p-8 text-center h-full flex flex-col">
                <div className="mb-6 text-legal group-hover:text-legal-green transition-colors duration-300 flex justify-center">
                  {product.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-legal mb-3 group-hover:text-legal-green transition-colors duration-300">
                  {product.title}
                </h3>
                
                <p className="text-gray-600 mb-6 flex-grow">
                  {product.description}
                </p>
                
                <div className="mb-6">
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-500 flex items-center justify-center">
                        <span className="w-1.5 h-1.5 bg-legal-cyan rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button 
                  asChild 
                  variant="outline" 
                  className="border-legal text-legal hover:bg-legal hover:text-white transition-all duration-300 w-full group-hover:border-legal-green group-hover:text-legal-green group-hover:hover:bg-legal-green group-hover:hover:text-white"
                >
                  <Link to={product.link}>
                    Saiba mais
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild className="bg-legal hover:bg-legal/90 text-white px-8 py-6 text-lg h-auto">
            <Link to="/smart-events">
              Ver Smart Events™ completo
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
