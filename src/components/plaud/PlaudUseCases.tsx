import React from "react";
import SectionTitle from "../SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Phone, GraduationCap, Briefcase, FileText, Headphones, Building, UserCheck } from "lucide-react";

const PlaudUseCases = () => {
  const useCases = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Reuniões de Equipe",
      description: "Capture decisões importantes, action items e insights sem perder o foco da discussão. Compartilhe resumos automáticos com todos os participantes.",
      features: ["Identificação de speakers", "Extração de action items", "Resumos estruturados"]
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Chamadas Comerciais",
      description: "Registre propostas, objeções e próximos passos em vendas. Analise padrões para melhorar sua taxa de conversão.",
      features: ["Análise de sentimento", "Extração de objeções", "Follow-up automático"]
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Aulas e Treinamentos",
      description: "Transforme palestras e workshops em material de estudo organizado. Crie resumos para revisão posterior.",
      features: ["Divisão por tópicos", "Destacar conceitos-chave", "Criação de flashcards"]
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Entrevistas e Research",
      description: "Colete insights valiosos em pesquisas qualitativas e entrevistas. Organize findings automaticamente por temas.",
      features: ["Análise temática", "Citações destacadas", "Relatórios automáticos"]
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Brainstorming e Ideação",
      description: "Capture todas as ideias criativas sem interromper o fluxo. Organize conceitos em categorias para desenvolvimento posterior.",
      features: ["Categorização de ideias", "Priorização automática", "Mind maps gerados"]
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Eventos Corporativos",
      description: "Documente apresentações, workshops e networking. Crie atas profissionais e compartilhe conhecimento organizacional.",
      features: ["Múltiplas sessões", "Integração com calendário", "Distribuição automática"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Casos de Uso do Plaud"
          subtitle="Descubra como profissionais de diferentes áreas estão usando o Plaud para maximizar produtividade"
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