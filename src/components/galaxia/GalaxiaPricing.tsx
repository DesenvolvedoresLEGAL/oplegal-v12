import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import SectionTitle from '@/components/SectionTitle';
import { Check, Calculator, Clock, Users, Zap, Calendar } from 'lucide-react';

const GalaxiaPricing = () => {
  const pricingPlans = [
    {
      name: "Pay-per-Use",
      icon: <Zap className="w-6 h-6" />,
      description: "Ideal para projetos pontuais e testes",
      features: [
        "Cobrança por recursos utilizados",
        "Sem compromisso mínimo",
        "Escalabilidade automática",
        "Suporte técnico básico"
      ],
      priceRange: "A partir de R$ 0,50/hora GPU",
      highlight: false
    },
    {
      name: "Mensal/Anual",
      icon: <Calendar className="w-6 h-6" />,
      description: "Para operações contínuas e previsibilidade",
      features: [
        "Recursos dedicados garantidos",
        "Desconto progressivo anual",
        "Suporte 24/7 prioritário",
        "SLA 99.9% de uptime"
      ],
      priceRange: "R$ 15.000 - R$ 50.000/mês",
      highlight: true
    },
    {
      name: "Enterprise",
      icon: <Users className="w-6 h-6" />,
      description: "Solução personalizada para grandes volumes",
      features: [
        "Infraestrutura dedicada",
        "Arquiteto de soluções exclusivo",
        "Integração personalizada",
        "Conformidade total"
      ],
      priceRange: "Sob consulta",
      highlight: false
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="pricing">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Modelos de Precificação Transparente"
          subtitle="Escolha o plano ideal para sua necessidade e escale conforme seu crescimento"
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {pricingPlans.map((plan, index) => (
            <Card key={index} className={`relative hover:shadow-xl transition-all duration-300 ${plan.highlight ? 'border-legal border-2 shadow-lg transform scale-105' : 'hover:-translate-y-2'}`}>
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-legal text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Mais Popular
                </div>
              )}
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="text-legal mr-3">
                    {plan.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-legal">{plan.name}</h3>
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <div className="text-3xl font-black text-legal mb-6">{plan.priceRange}</div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full ${plan.highlight ? 'bg-legal hover:bg-legal-purple' : 'variant-outline'}`}
                  size="lg"
                >
                  {plan.name === "Enterprise" ? "Falar com Especialista" : "Começar Agora"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Calculadora de Orçamento */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <div className="flex items-center justify-center mb-6">
            <Calculator className="w-8 h-8 text-legal mr-4" />
            <h3 className="text-2xl font-bold text-legal">Como Calculamos Seu Orçamento</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <div className="bg-legal/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-legal" />
              </div>
              <h4 className="font-bold text-legal mb-2">Recursos Computacionais</h4>
              <p className="text-gray-600 text-sm">GPU, CPU, RAM e armazenamento utilizados pelos seus modelos de IA</p>
            </div>
            <div className="p-4">
              <div className="bg-legal/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-legal" />
              </div>
              <h4 className="font-bold text-legal mb-2">Tempo de Uso</h4>
              <p className="text-gray-600 text-sm">Horas de processamento ativo e tempo de infraestrutura dedicada</p>
            </div>
            <div className="p-4">
              <div className="bg-legal/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-legal" />
              </div>
              <h4 className="font-bold text-legal mb-2">Nível de Suporte</h4>
              <p className="text-gray-600 text-sm">Suporte técnico, SLA personalizado e arquiteto de soluções dedicado</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalaxiaPricing;