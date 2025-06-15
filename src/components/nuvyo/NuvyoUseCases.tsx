
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Building, Camera, Users, Briefcase, Home } from 'lucide-react';

const NuvyoUseCases = () => {
  const useCases = [
    {
      icon: <Heart className="w-8 h-8 text-legal-cyan" />,
      title: "Casamentos e Eventos Sociais",
      description: "Momentos únicos capturados de ângulos impossíveis, criando memórias cinematográficas inesquecíveis.",
      examples: ["Cerimônias religiosas", "Festas de casamento", "Formaturas", "Aniversários especiais"]
    },
    {
      icon: <Building className="w-8 h-8 text-legal-cyan" />,
      title: "Marketing Imobiliário",
      description: "Destaque propriedades com imagens aéreas que mostram toda a área e diferenciais do imóvel.",
      examples: ["Lançamentos imobiliários", "Tours virtuais", "Condomínios", "Áreas de lazer"]
    },
    {
      icon: <Camera className="w-8 h-8 text-legal-cyan" />,
      title: "Publicidade e Marketing",
      description: "Conteúdo visual impactante para campanhas publicitárias e redes sociais.",
      examples: ["Campanhas publicitárias", "Conteúdo para redes sociais", "Vídeos institucionais", "Produtos em movimento"]
    },
    {
      icon: <Users className="w-8 h-8 text-legal-cyan" />,
      title: "Eventos Corporativos",
      description: "Cobertura profissional de eventos empresariais com qualidade broadcast.",
      examples: ["Convenções", "Lançamentos de produtos", "Confraternizações", "Inaugurações"]
    },
    {
      icon: <Briefcase className="w-8 h-8 text-legal-cyan" />,
      title: "Inspeção e Monitoramento",
      description: "Análise técnica de estruturas, terrenos e obras com precisão e segurança.",
      examples: ["Inspeção de telhados", "Monitoramento de obras", "Análise de terrenos", "Documentação técnica"]
    },
    {
      icon: <Home className="w-8 h-8 text-legal-cyan" />,
      title: "Turismo e Hotelaria",
      description: "Promova destinos turísticos e empreendimentos hoteleiros com imagens aéreas espetaculares.",
      examples: ["Hotéis e pousadas", "Destinos turísticos", "Resorts", "Parques temáticos"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Aplicações do Nuvyo"
          subtitle="Soluções versáteis para diferentes segmentos e necessidades de mercado"
          center
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <Card key={index} className="bg-white border-legal/20 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="bg-legal-cyan/10 rounded-full p-3 mr-4 group-hover:bg-legal-cyan/20 transition-colors">
                    {useCase.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-legal group-hover:text-legal-purple transition-colors">
                    {useCase.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {useCase.description}
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-legal text-sm">Aplicações:</h4>
                  <ul className="text-sm space-y-1">
                    {useCase.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-legal-cyan rounded-full mr-2 mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NuvyoUseCases;
