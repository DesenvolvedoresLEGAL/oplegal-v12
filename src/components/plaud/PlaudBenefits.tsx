import React from "react";
import SectionTitle from "../SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Clock, Target, Users, CheckCircle, Zap } from "lucide-react";

const PlaudBenefits = () => {
  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Aumento de 40% na Produtividade",
      description: "Elimine a necessidade de tomar notas manuais e foque 100% na conversa. Tenha resumos automáticos em minutos.",
      stats: "40% mais produtivo"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Economia de 5h por Semana",
      description: "Pare de perder tempo transcrevendo manualmente. O Plaud faz isso instantaneamente com precisão profissional.",
      stats: "5h economizadas/semana"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Precisão de 98% nas Transcrições",
      description: "IA avançada garante transcrições precisas mesmo em ambientes ruidosos ou com múltiplos falantes.",
      stats: "98% de precisão"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Colaboração Aprimorada",
      description: "Compartilhe resumos estruturados instantaneamente com sua equipe. Mantenha todos alinhados automaticamente.",
      stats: "100% da equipe alinhada"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Zero Perda de Informação",
      description: "Nunca mais perca detalhes importantes. Capture tudo e acesse quando precisar com busca inteligente.",
      stats: "0% de perda de dados"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Setup em 30 Segundos",
      description: "Configuração ultra simples. Ligue, pareie e comece a gravar. Não precisa ser expert em tecnologia.",
      stats: "30s para configurar"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Transforme sua Forma de Trabalhar"
          subtitle="Descubra como o Plaud pode revolucionar sua produtividade e a qualidade das suas reuniões"
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
            <h3 className="text-2xl font-bold text-legal mb-4">Calcule seu ROI com Plaud</h3>
            <p className="text-gray-600">Veja quanto tempo e dinheiro você pode economizar</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="bg-legal/5 rounded-xl p-6">
              <div className="text-3xl font-bold text-legal mb-2">5h</div>
              <div className="text-sm text-gray-600">Economizadas por semana</div>
            </div>
            <div className="bg-legal-purple/5 rounded-xl p-6">
              <div className="text-3xl font-bold text-legal-purple mb-2">20h</div>
              <div className="text-sm text-gray-600">Economizadas por mês</div>
            </div>
            <div className="bg-legal-cyan/5 rounded-xl p-6">
              <div className="text-3xl font-bold text-legal-cyan mb-2">R$ 2.400</div>
              <div className="text-sm text-gray-600">Valor economizado/mês*</div>
            </div>
            <div className="bg-legal-secondary/5 rounded-xl p-6">
              <div className="text-3xl font-bold text-legal-secondary mb-2">300%</div>
              <div className="text-sm text-gray-600">ROI em 6 meses</div>
            </div>
          </div>
          
          <p className="text-xs text-gray-500 text-center mt-4">
            *Cálculo baseado em salário médio de profissional sênior (R$ 120/hora)
          </p>
        </div>
      </div>
    </section>
  );
};

export default PlaudBenefits;