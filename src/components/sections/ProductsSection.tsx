
import React from "react";
import { ArrowRight } from "lucide-react";
import Card from "@/components/Card";
import { Link } from "react-router-dom";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";

interface ProductsSectionProps {
  titleOverride?: string;
}

const ProductsSection = ({ titleOverride }: ProductsSectionProps) => {
  // Product data
  const products = [
    {
      title: "LEGAL AERO",
      description: "Infraestrutura tecnológica para eventos com conectividade garantida.",
      icon: "🛰️",
      link: "/negocios/aero"
    },
    {
      title: "LEGAL AI",
      description: "Soluções de inteligência artificial para análise de dados e experiências.",
      icon: "🧠",
      link: "/negocios/ai"
    },
    {
      title: "LEGAL ALUGUE",
      description: "Aluguel de equipamentos e soluções para eventos e produtividade.",
      icon: "📱",
      link: "/negocios/alugue"
    },
    {
      title: "LEGAL ASSINATURA",
      description: "Conectividade contínua para empresas com FWA de alta performance.",
      icon: "📶",
      link: "/negocios/assinatura"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title={titleOverride || "Produtos LEGAL"}
          subtitle="Soluções completas para conectar pessoas, negócios e tecnologia"
          center={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {products.map((product, index) => (
            <Card
              key={index}
              title={product.title}
              subtitle={product.description}
              icon={<span className="text-4xl">{product.icon}</span>}
              className="h-full"
            >
              <Link to={product.link}>
                <Button variant="ghost" className="mt-4 text-legal hover:text-legal/90 p-0 flex items-center">
                  Conhecer <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            asChild 
            className="bg-legal hover:bg-legal/90 text-white"
          >
            <Link to="/produtos">
              Ver todas as soluções LEGAL
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
