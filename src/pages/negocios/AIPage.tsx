
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import CallToAction from '@/components/CallToAction';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, Link as LinkIcon, ScanFace, CheckSquare, Zap, Settings, Users, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const solutions = [
  {
    id: "hubx",
    name: "HubX",
    description: "Plataforma centralizada para gerenciamento de dados de eventos, integrando informações e otimizando a tomada de decisões em tempo real.",
    icon: <Settings className="w-12 h-12 text-legal-cyan mb-4" />,
    features: [
      "Dashboard Unificado de Dados",
      "Integração com Múltiplas Fontes",
      "Relatórios Personalizados",
      "Análise Preditiva de Comportamento",
    ],
    ctaLink: "/contato?solution=hubx",
  },
  {
    id: "linkai",
    name: "LinkAI",
    description: "Assistente virtual inteligente que oferece suporte personalizado e informações relevantes aos participantes, melhorando o engajamento.",
    icon: <Zap className="w-12 h-12 text-legal-cyan mb-4" />,
    features: [
      "Chatbot com Processamento de Linguagem Natural",
      "Recomendações Personalizadas",
      "Suporte 24/7",
      "Integração com Agendas e Mapas",
    ],
    ctaLink: "/contato?solution=linkai",
  },
  {
    id: "facepass",
    name: "FacePass",
    description: "Sistema avançado de credenciamento e controle de acesso via reconhecimento facial, garantindo segurança e agilidade.",
    icon: <ScanFace className="w-12 h-12 text-legal-cyan mb-4" />,
    features: [
      "Check-in Rápido e Sem Contato",
      "Segurança Reforçada",
      "Prevenção de Fraudes",
      "Integração com Listas de Convidados",
    ],
    ctaLink: "/contato?solution=facepass",
  },
  {
    id: "fitscore",
    name: "FitScore",
    description: "Algoritmo de IA que analisa perfis e interesses para otimizar o networking, conectando participantes com alta afinidade.",
    icon: <Users className="w-12 h-12 text-legal-cyan mb-4" />,
    features: [
      "Matchmaking Inteligente",
      "Sugestões de Conexão Relevantes",
      "Otimização de Agendas de Reunião",
      "Análise de Interesses e Perfis",
    ],
    ctaLink: "/contato?solution=fitscore",
  },
];

const AIPage = () => {
  return (
    <div className="bg-background text-foreground font-unica">
      {/* Hero Section */}
      <section className="py-24 md:py-32 text-center bg-gradient-to-br from-legal to-legal-purple text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {/* Subtle background pattern or animation */}
          <Brain className="absolute top-10 left-10 w-32 h-32 text-white/10 animate-pulse" />
          <Zap className="absolute bottom-10 right-10 w-24 h-24 text-white/10 animate-pulse animation-delay-500" />
          <Settings className="absolute top-1/3 right-20 w-28 h-28 text-white/10 animate-ping" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-wider mb-6 animate-fade-in" style={{ letterSpacing: '0.05em' }}>
            LEGAL AI
          </h1>
          <p className="text-lg md:text-xl font-light max-w-3xl mx-auto mb-8 animate-fade-in animation-delay-300">
            Inteligência Artificial para Eventos e Negócios Inteligentes. Descubra como nossas soluções <strong className="font-bold text-legal-cyan">HubX</strong>, <strong className="font-bold text-legal-cyan">LinkAI</strong>, <strong className="font-bold text-legal-cyan">FacePass</strong>, e <strong className="font-bold text-legal-cyan">FitScore</strong>, integradas à plataforma SmartEvents, revolucionam a experiência e a gestão.
          </p>
          <Button asChild size="lg" className="bg-legal-cyan hover:bg-legal-cyan/90 text-legal font-bold animate-fade-in animation-delay-600">
            <Link to="/smart-events">Conheça SmartEvents</Link>
          </Button>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Nossas Soluções de Inteligência Artificial"
            subtitle="Tecnologia de ponta para transformar dados em insights e ações estratégicas."
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {solutions.map((solution) => (
              <Card key={solution.id} className="bg-card border-legal/30 shadow-xl hover:shadow-legal-cyan/30 transition-all duration-300 transform hover:-translate-y-1 flex flex-col overflow-hidden">
                <CardHeader className="bg-legal/5 p-6">
                  <div className="flex items-center gap-4">
                    {solution.icon}
                    <CardTitle className="text-3xl font-black text-legal uppercase tracking-wide">{solution.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-6 flex-grow flex flex-col">
                  <p className="text-muted-foreground mb-6 text-base leading-relaxed">
                    {solution.description}
                  </p>
                  <h4 className="font-bold text-legal mb-2 text-lg">Principais Funcionalidades:</h4>
                  <ul className="list-none space-y-2 mb-6 text-sm styled-list">
                    {solution.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                         <CheckSquare className="w-5 h-5 text-legal-cyan mr-2 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-4">
                    <Button asChild className="w-full bg-legal hover:bg-legal-purple text-white">
                      <Link to={solution.ctaLink}>Saiba Mais sobre {solution.name}</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* SmartEvents Integration Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
           <SectionTitle 
            title="Integradas à Plataforma SmartEvents"
            subtitle="Todas as nossas soluções de IA são potencializadas quando combinadas com a robustez e flexibilidade da plataforma SmartEvents, criando um ecossistema tecnológico completo para seus eventos e negócios."
            center
          />
          <BarChart className="w-24 h-24 text-legal-purple mx-auto mb-6" />
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            A plataforma SmartEvents serve como a espinha dorsal, permitindo que HubX, LinkAI, FacePass e FitScore trabalhem em harmonia, compartilhando dados e insights para uma experiência unificada e resultados superiores.
          </p>
          <Button asChild size="lg" className="bg-legal-purple hover:bg-legal-purple/90 text-white">
            <Link to="/smart-events">Descubra o Poder do SmartEvents</Link>
          </Button>
        </div>
      </section>

      {/* Call to Action Section */}
      <CallToAction
        title="Potencialize seus Eventos e Negócios com LEGAL AI"
        subtitle="Entre em contato com nossos especialistas e descubra como a Inteligência Artificial pode levar seus resultados para o próximo nível."
        buttonText="Fale com um Especialista"
        buttonLink="/contato"
        background="gradient"
      />
    </div>
  );
};

export default AIPage;
