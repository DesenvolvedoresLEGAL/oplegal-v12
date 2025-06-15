
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Heart, 
  Utensils, 
  Package, 
  ShoppingBag, 
  FileText, 
  Gift,
  Clock,
  Star
} from 'lucide-react';

const SonixUseCases = () => {
  const useCases = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Medicamentos de Emergência",
      description: "Entrega urgente de medicamentos essenciais com controle de temperatura e máxima segurança.",
      features: ["Prioridade máxima", "Controle térmico", "24/7 disponível"],
      time: "10-15min"
    },
    {
      icon: <Utensils className="w-8 h-8" />,
      title: "Gastronomia Premium",
      description: "Pratos gourmet e bebidas especiais mantidos na temperatura ideal durante todo o trajeto.",
      features: ["Compartimento térmico", "Sem balanços", "Qualidade preservada"],
      time: "12-18min"
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "E-commerce Express",
      description: "Produtos comprados online entregues no mesmo dia com rastreamento em tempo real.",
      features: ["Mesmo dia", "Rastreamento GPS", "Notificações automáticas"],
      time: "15-25min"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Documentos Urgentes",
      description: "Contratos, documentos legais e papéis importantes com segurança máxima e rapidez.",
      features: ["Alta segurança", "Lacre digital", "Confirmação biométrica"],
      time: "8-12min"
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: "Presentes Especiais",
      description: "Surpresas e presentes entregues no momento exato com embalagem premium intacta.",
      features: ["Embalagem protegida", "Horário específico", "Experiência premium"],
      time: "15-20min"
    },
    {
      icon: <ShoppingBag className="w-8 h-8" />,
      title: "Compras de Luxo",
      description: "Produtos premium, joias e itens de valor com máxima segurança e discrição.",
      features: ["Segurança reforçada", "Discrição total", "Seguro premium"],
      time: "10-15min"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Casos de Uso do Sonix"
          subtitle="Soluções especializadas para diferentes tipos de entrega premium com drone"
          center
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <Card key={index} className="bg-white border-legal/20 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-legal to-legal-purple text-white rounded-full flex items-center justify-center">
                  {useCase.icon}
                </div>
                <CardTitle className="text-xl font-bold text-legal flex items-center justify-center gap-2">
                  {useCase.title}
                  <span className="text-sm bg-legal-cyan text-white px-2 py-1 rounded-full flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {useCase.time}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {useCase.description}
                </p>
                <div className="space-y-2">
                  {useCase.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-700">
                      <Star className="w-4 h-4 text-legal-cyan mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SonixUseCases;
