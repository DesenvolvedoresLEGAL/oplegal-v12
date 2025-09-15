
import React from 'react';
import SEOHead from '@/components/SEOHead';
import Breadcrumbs from '@/components/Breadcrumbs';
import HeroSection from '@/components/ai/HeroSection';
import ProductCard from '@/components/ai/ProductCard';
import StatsSection from '@/components/ai/StatsSection';
import AdvancedModulesSection from '@/components/ai/AdvancedModulesSection';
import IntegrationSection from '@/components/ai/IntegrationSection';
import CallToAction from '@/components/CallToAction';
import { Brain, Users, BarChart3, Eye, Zap, MessageSquare, Target, Gamepad2, Cloud } from 'lucide-react';

const aiProducts = [
  {
    id: 'galaxia',
    name: 'GALAXIA',
    description: 'Infraestrutura de IA personalizada para empresas com soluções escaláveis.',
    icon: <Cloud className="w-6 h-6" />,
    features: ['Infraestrutura cloud dedicada', 'APIs personalizadas', 'Modelos de IA sob demanda'],
    benefits: ['Redução de 50% nos custos de infraestrutura', 'Escalabilidade automática', 'Integração empresarial completa'],
    ctaLink: '/contato?produto=galaxia'
  },
  {
    id: 'magicpass',
    name: 'MAGICPASS',
    description: 'Credenciamento facial de alta precisão para eventos e controle de acesso.',
    icon: <Eye className="w-6 h-6" />,
    features: ['Reconhecimento facial avançado', 'Check-in automatizado', 'Relatórios de acesso em tempo real'],
    benefits: ['Redução de 90% no tempo de credenciamento', 'Eliminação de filas', 'Segurança aprimorada'],
    ctaLink: '/contato?produto=magicpass'
  },
  {
    id: 'linkai',
    name: 'LinkAI',
    description: 'Networking inteligente que conecta participantes com interesses em comum.',
    icon: <Users className="w-6 h-6" />,
    features: ['Sugestões de conexões personalizadas', 'Agendamento de reuniões', 'Análise de perfil comportamental'],
    benefits: ['Aumento de 300% nas conexões relevantes', 'ROI mensurável em networking', 'Experiência personalizada'],
    ctaLink: '/contato?produto=linkai'
  },
  {
    id: 'fitscore',
    name: 'FitScore™',
    description: 'Análise de perfil comportamental para recrutamento e gestão de equipes.',
    icon: <BarChart3 className="w-6 h-6" />,
    features: ['Mapeamento de competências', 'Identificação de talentos', 'Relatórios de desempenho individual e em grupo'],
    benefits: ['Redução de 60% no tempo de contratação', 'Aumento da retenção de talentos', 'Decisões baseadas em dados'],
    ctaLink: '/contato?produto=fitscore'
  },
  {
    id: 'humanoid',
    name: 'Humanoid',
    description: 'Captação de leads qualificados através de inteligência artificial.',
    icon: <Target className="w-6 h-6" />,
    features: ['Identificação de potenciais clientes', 'Segmentação de público-alvo', 'Geração de leads automatizada'],
    benefits: ['Aumento de 400% na qualificação de leads', 'Redução do custo de aquisição', 'Pipeline previsível'],
    ctaLink: '/contato?produto=humanoid'
  },
  {
    id: 'eventrix',
    name: 'Eventrix',
    description: 'Plataforma de gestão de eventos com recursos de inteligência artificial.',
    icon: <Zap className="w-6 h-6" />,
    features: ['Automação de tarefas', 'Personalização da experiência do participante', 'Análise de resultados em tempo real'],
    benefits: ['Redução de 70% no tempo de organização', 'Experiência do participante otimizada', 'Análises preditivas'],
    ctaLink: '/contato?produto=eventrix'
  },
  {
    id: 'ping',
    name: 'Ping',
    description: 'Chatbot inteligente para atendimento ao cliente e suporte técnico.',
    icon: <MessageSquare className="w-6 h-6" />,
    features: ['Respostas automatizadas', 'Integração com CRM', 'Disponibilidade 24/7'],
    benefits: ['Redução de 80% no tempo de resposta', 'Satisfação do cliente melhorada', 'Escalabilidade ilimitada'],
    ctaLink: '/contato?produto=ping'
  },
  {
    id: 'neurafit',
    name: 'NeuraFit',
    description: 'Gamificação para engajamento e motivação de equipes.',
    icon: <Gamepad2 className="w-6 h-6" />,
    features: ['Criação de desafios personalizados', 'Ranking de desempenho', 'Recompensas e reconhecimento'],
    benefits: ['Aumento de 250% no engaj    amento', 'Produtividade mensurável', 'Cultura organizacional fortalecida'],
    ctaLink: '/contato?produto=neurafit'
  }
];

const aiStats = [
  { number: '8', label: 'Produtos', description: 'Ecossistema completo de IA' },
  { number: '10x', label: 'Resultados', description: 'Aumento da eficiência e performance' },
  { number: '95%', label: 'Satisfação', description: 'Clientes satisfeitos com as soluções' },
  { number: '100%', label: 'Integrado', description: 'Soluções totalmente integradas' },
];

const advancedModules = [
  {
    name: 'IA Preditiva',
    description: 'Análise preditiva para antecipar tendências e otimizar resultados.',
    icon: <Brain className="w-8 h-8" />,
  },
  {
    name: 'Visão Computacional',
    description: 'Reconhecimento de padrões visuais para análise de imagens e vídeos.',
    icon: <Eye className="w-8 h-8" />,
  },
  {
    name: 'Processamento de Linguagem Natural',
    description: 'Compreensão e geração de linguagem natural para comunicação inteligente.',
    icon: <MessageSquare className="w-8 h-8" />,
  },
  {
    name: 'Aprendizado por Reforço',
    description: 'Algoritmos de aprendizado por reforço para otimização de processos.',
    icon: <Target className="w-8 h-8" />,
  },
];

const AIPage = () => {
  const aiPageSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "LEGAL AI",
    "description": "Ecossistema completo de inteligência artificial para eventos e negócios com 8 produtos transversais integrados",
    "provider": {
      "@type": "Organization",
      "name": "LEGAL"
    },
    "serviceType": "Inteligência Artificial para Eventos",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Produtos LEGAL AI",
      "itemListElement": aiProducts.map((product, index) => ({
        "@type": "Offer",
        "position": index + 1,
        "itemOffered": {
          "@type": "Service",
          "name": product.name,
          "description": product.description
        }
      }))
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150"
    }
  };

  return (
    <>
      <SEOHead
        title="LEGAL AI | Inteligência Artificial para Eventos e Negócios"
        description="Descubra o ecossistema completo LEGAL AI com 8 produtos de IA: GALAXIA, MAGICPASS, LinkAI, FitScore, Eventrix, Humanoid, Ping e NeuraFit. Transforme eventos e negócios com inteligência artificial."
        keywords="LEGAL AI, inteligência artificial eventos, GALAXIA infraestrutura IA, MAGICPASS credenciamento facial, LinkAI networking, FitScore RH, Eventrix gestão eventos, Humanoid captação leads, Ping chatbot, NeuraFit gamificação"
        url="https://operadora.legal/negocios/ai"
        type="service"
        schemaData={aiPageSchema}
      />

      <div className="bg-background text-foreground font-unica">
        <Breadcrumbs />
        <HeroSection />
        
        {/* Products Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <header className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-legal mb-4">
                8 Produtos Transversais LEGAL AI
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Soluções integradas de inteligência artificial que trabalham em sinergia para maximizar resultados em eventos e negócios.
              </p>
            </header>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {aiProducts.map((product, index) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </section>

        <StatsSection stats={aiStats} />
        <AdvancedModulesSection modules={advancedModules} />
        <IntegrationSection />

        <CallToAction
          title="Pronto para Revolucionar com IA?"
          subtitle="Descubra como o ecossistema LEGAL AI pode transformar seus eventos e negócios. Fale com nossos especialistas e receba uma demonstração personalizada."
          buttonText="Solicitar Demonstração"
          buttonLink="/contato?solution=legal-ai"
          secondaryButtonText="Ver SmartEvents"
          secondaryButtonLink="/smart-events"
          background="gradient"
        />
      </div>
    </>
  );
};

export default AIPage;
