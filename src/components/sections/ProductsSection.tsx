
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
      description: "Conectividade premium para eventos sem limites",
      icon: <svg className="w-8 h-8" strokeWidth={1.5} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M12 2L8 6h8l-4-4z"/>
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 15v6"/>
        <path d="M8 19l8-8"/>
        <path d="M16 19l-8-8"/>
      </svg>,
      link: "/negocios/aero",
      features: ["WiFi enterprise", "Streaming 4K", "Cobertura total"]
    },
    {
      title: "AI",
      description: "Inteligência artificial que potencializa resultados",
      icon: <Brain className="w-8 h-8" strokeWidth={1.5} />,
      link: "/negocios/ai",
      features: ["Automação", "Analytics", "Personalização"]
    },
    {
      title: "ALUGUE",
      description: "Equipamentos e tecnologia sob demanda",
      icon: <Wifi className="w-8 h-8" strokeWidth={1.5} />,
      link: "/negocios/alugue",
      features: ["Hardware", "Suporte 24h", "Logística"]
    },
    {
      title: "ASSINATURA",
      description: "Conectividade contínua para seu negócio",
      icon: <svg className="w-8 h-8" strokeWidth={1.5} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
        <path d="M6 8h4"/>
        <path d="M6 12h8"/>
      </svg>,
      link: "/negocios/assinatura",
      features: ["Planos flexíveis", "Suporte dedicado", "Escalabilidade"]
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
