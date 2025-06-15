
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Brain, 
  Users, 
  BarChart3, 
  Calendar,
  MessageSquare, 
  Zap,
  Target,
  Shield,
  Smartphone
} from 'lucide-react';

const EventrixFeatures = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "IA Preditiva Avançada",
      description: "Algoritmos de machine learning que analisam dados históricos e comportamento dos participantes para otimizar automaticamente cada aspecto do evento."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Gestão Inteligente de Participantes",
      description: "Sistema completo de credenciamento, check-in automático, networking inteligente e experiência personalizada baseada no perfil de cada participante."
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Planejamento Automatizado",
      description: "Criação automática de cronogramas otimizados, alocação inteligente de recursos e sugestões de melhoria baseadas em análise de dados."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analytics em Tempo Real",
      description: "Dashboard completo com métricas avançadas, análise de engajamento, previsão de attendance e insights acionáveis para tomada de decisão."
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Comunicação Inteligente",
      description: "Sistema de notificações personalizadas, chatbot com IA para suporte 24/7 e comunicação direcionada baseada no comportamento dos usuários."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Segmentação Avançada",
      description: "Criação automática de personas e segmentos de público, recomendações personalizadas de conteúdo e experiências sob medida para cada perfil."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Automação de Processos",
      description: "Workflows automatizados para follow-up, geração de leads, envio de certificados e todas as tarefas operacionais do evento."
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "App Mobile Nativo",
      description: "Aplicativo móvel personalizado para cada evento com funcionalidades offline, networking, agenda pessoal e gamificação integrada."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Segurança e Compliance",
      description: "Proteção de dados LGPD compliant, criptografia end-to-end, backup automatizado e infraestrutura de alta disponibilidade."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Tecnologia de Ponta"
          subtitle="Descubra como nossa IA revoluciona cada aspecto da gestão de eventos com automação inteligente"
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="text-legal mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-legal mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventrixFeatures;
