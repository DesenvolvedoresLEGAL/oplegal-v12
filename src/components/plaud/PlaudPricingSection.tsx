import React from "react";
import { Card } from "@/components/ui/card";
import SectionTitle from "../SectionTitle";

const PlaudPricingSection = () => {
  const plans = [
    {
      title: "Projeto Curto",
      price: "R$ 800",
      period: "Por semana",
      description: "Ideal para eventos de 1-7 dias",
      features: [
        "1 dispositivo Plaud Note",
        "Suporte técnico completo",
        "Configuração incluída",
        "Entrega expressa",
        "Transcrição ilimitada"
      ],
      popular: false
    },
    {
      title: "Empresarial",
      price: "R$ 2.500",
      period: "Por mês",
      description: "Para uso corporativo contínuo",
      features: [
        "3 dispositivos Plaud Note",
        "Dashboard analytics",
        "Integração APIs",
        "Treinamento da equipe",
        "Suporte prioritário 24/7"
      ],
      popular: true
    },
    {
      title: "Customizado",
      price: "Sob consulta",
      period: "Projetos longos",
      description: "Soluções sob medida",
      features: [
        "Quantidade personalizada",
        "Setup personalizado",
        "SLA dedicado",
        "Integração customizada",
        "Consultoria especializada"
      ],
      popular: false
    }
  ];

  return (
    <section id="planos-locacao" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Planos de Locação Flexíveis"
          subtitle="Escolha o plano ideal para seu evento ou projeto corporativo"
          center={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative p-8 ${plan.popular ? 'ring-2 ring-primary shadow-xl scale-105' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Mais Popular
                  </span>
                </div>
              )}
              
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.title}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  {plan.price !== "Sob consulta" && (
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  )}
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <a 
                  href="/contato?produto=plaud-locacao" 
                  className={`inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-12 px-8 py-3 rounded-md w-full min-h-[48px] ${
                    plan.popular 
                      ? 'bg-primary text-white hover:bg-primary/90' 
                      : 'border border-primary text-primary hover:bg-primary hover:text-white'
                  }`}
                  aria-label={`Solicitar orçamento para o plano ${plan.title}`}
                >
                  Solicitar Orçamento
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlaudPricingSection;