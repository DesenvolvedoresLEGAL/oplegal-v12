import React from "react";
import SectionTitle from "../SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Clock, Target, Users, CheckCircle, Zap } from "lucide-react";

const PlaudBenefits = () => {
  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Zero Investimento Inicial",
      description: "Acesse tecnologia de ponta sem desembolso. Pague apenas pelo período de uso e tenha flexibilidade total para seus projetos.",
      stats: "R$ 0 de entrada"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Locação Flexível",
      description: "De 1 dia a 12 meses. Ideal para eventos pontuais, projetos temporários ou testes antes de uma aquisição futura.",
      stats: "A partir de 1 dia"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Suporte Técnico Incluso",
      description: "Configuração, treinamento e suporte durante todo período de locação. Nossa equipe garante que tudo funcione perfeitamente.",
      stats: "Suporte 24/7"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Ideal para Eventos",
      description: "Perfeito para conferências, workshops, reuniões importantes. Capture tudo e tenha documentação profissional instantânea.",
      stats: "100% dos eventos cobertos"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Sempre Atualizado",
      description: "Equipamentos sempre com última versão de software e IA. Sem se preocupar com manutenção ou atualizações.",
      stats: "Última versão garantida"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Entrega em 24h",
      description: "Equipamentos entregues e configurados em até 24h na Grande São Paulo. Outras regiões em até 48h.",
      stats: "Entrega em 24h"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Vantagens da Locação Plaud"
          subtitle="Acesse tecnologia de ponta sem investimento inicial. Flexibilidade e suporte completo para seus eventos e negócios"
          center={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-legal/10 text-legal rounded-xl">
                      {benefit.icon}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold mb-3 text-legal">{benefit.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{benefit.description}</p>
                    <div className="inline-flex items-center bg-legal-cyan/10 text-legal px-3 py-1 rounded-full text-sm font-semibold">
                      {benefit.stats}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* ROI Calculator Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-legal mb-4">Planos de Locação Flexíveis</h3>
            <p className="text-gray-600">Escolha o plano ideal para seu evento ou projeto</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="bg-legal/5 rounded-xl p-6">
              <div className="text-3xl font-bold text-legal mb-2">R$ 150</div>
              <div className="text-sm text-gray-600">Por dia (eventos)</div>
            </div>
            <div className="bg-legal-purple/5 rounded-xl p-6">
              <div className="text-3xl font-bold text-legal-purple mb-2">R$ 800</div>
              <div className="text-sm text-gray-600">Por semana (projetos)</div>
            </div>
            <div className="bg-legal-cyan/5 rounded-xl p-6">
              <div className="text-3xl font-bold text-legal-cyan mb-2">R$ 2.500</div>
              <div className="text-sm text-gray-600">Por mês (empresas)</div>
            </div>
            <div className="bg-legal-secondary/5 rounded-xl p-6">
              <div className="text-3xl font-bold text-legal-secondary mb-2">Customizado</div>
              <div className="text-sm text-gray-600">Projetos longos</div>
            </div>
          </div>
          
          <p className="text-xs text-gray-500 text-center mt-4">
            *Valores incluem equipamento, suporte técnico e configuração. Descontos para locações acima de 30 dias.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PlaudBenefits;