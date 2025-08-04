import React from "react";
import SectionTitle from "../SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Phone, GraduationCap, Briefcase, FileText, Headphones, Building, UserCheck } from "lucide-react";

const PlaudUseCases = () => {
  const useCases = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Eventos Corporativos",
      description: "Perfeito para convenções, congressos e conferências. Capture todas as palestras e workshops principais sem perder nenhum insight importante.",
      features: ["Locação por evento", "Suporte técnico no local", "Entrega e retirada inclusos"]
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Projetos Temporários",
      description: "Ideal para consultorias, auditorias e projetos com prazo definido. Tenha documentação profissional sem investimento inicial.",
      features: ["Locação flexível", "Configuração inclusa", "Suporte durante todo projeto"]
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Treinamentos & Workshops",
      description: "Transforme cursos e capacitações em material de estudo permanente. Ideal para empresas que promovem treinamentos regulares.",
      features: ["Múltiplas sessões", "Material para revisão", "Distribuição automática"]
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Entrevistas e Research",
      description: "Colete insights valiosos em pesquisas qualitativas e entrevistas. Organize findings automaticamente por temas.",
      features: ["Análise temática", "Citações destacadas", "Relatórios automáticos"]
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Startups & PMEs",
      description: "Acesso à tecnologia avançada sem comprometer o capital de giro. Teste antes de decidir pela aquisição definitiva.",
      features: ["Teste por período", "Sem investimento inicial", "Upgrade para compra"]
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Grandes Corporações",
      description: "Teste de tecnologia antes da implementação em escala. Avalie impacto e ROI antes de investimentos maiores.",
      features: ["Pilot projects", "Múltiplas unidades", "Análise de performance"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Casos de Uso da Locação Plaud"
          subtitle="Descubra como diferentes tipos de empresas e eventos estão aproveitando a flexibilidade da locação"
          center={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {useCases.map((useCase, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-all duration-300 border-0 shadow-md group">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-legal/10 text-legal rounded-xl mb-4 group-hover:bg-legal group-hover:text-white transition-colors">
                    {useCase.icon}
                  </div>
                  <h3 className="text-xl font-bold text-legal mb-3">{useCase.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{useCase.description}</p>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-legal mb-3">Recursos destacados:</h4>
                  {useCase.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-legal-cyan rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Integration Section */}
        <div className="bg-gradient-to-r from-legal to-legal-purple rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Integração Perfeita com suas Ferramentas</h3>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            O Plaud se conecta com as principais plataformas de produtividade para um workflow sem atrito
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              "Notion", "Slack", "Teams", "Zoom", "Google Workspace", "Office 365"
            ].map((tool, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-colors">
                <div className="text-sm font-medium">{tool}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlaudUseCases;