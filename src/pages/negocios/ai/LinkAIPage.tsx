
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import SectionTitle from '@/components/SectionTitle';
import CallToAction from '@/components/CallToAction';
import { 
  Users, 
  Zap, 
  Target, 
  Brain, 
  Network, 
  CheckCircle, 
  Smartphone,
  BarChart3,
  Settings,
  Heart,
  MessageSquare,
  Calendar,
  TrendingUp,
  Shield,
  Lightbulb
} from 'lucide-react';

const LinkAIPage = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "IA Avançada de Matchmaking",
      description: "Algoritmos de machine learning que analisam interesses, objetivos e comportamentos para conexões precisas."
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Networking Inteligente",
      description: "Sugestões personalizadas baseadas em perfis profissionais, setor de atuação e objetivos de negócio."
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Chat Integrado",
      description: "Sistema de mensagens nativo com tradução automática e quebra-gelos sugeridos pela IA."
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Agendamento Automático",
      description: "IA que sugere e agenda reuniões baseadas na disponibilidade e compatibilidade dos participantes."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analytics de Conexões",
      description: "Relatórios detalhados sobre qualidade das conexões, ROI de networking e oportunidades geradas."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Matchmaking por Objetivos",
      description: "Conexões direcionadas para vendas, parcerias, investimentos, recrutamento ou conhecimento."
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Aumento de 300% em conexões relevantes",
      description: "Participantes conectam com pessoas realmente alinhadas aos seus objetivos"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "95% de satisfação em matches",
      description: "Taxa de aprovação das conexões sugeridas pela inteligência artificial"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Redução de 80% no tempo de networking",
      description: "IA elimina tentativa e erro, focando apenas em conexões de alto potencial"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "ROI 5x superior em eventos",
      description: "Organizadores relatam resultados exponencialmente melhores para participantes"
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Cadastro Inteligente",
      description: "Participantes preenchem perfil detalhado com objetivos, interesses e disponibilidade para networking."
    },
    {
      number: "02", 
      title: "Análise Comportamental",
      description: "IA processa dados do perfil, histórico de conexões e comportamento no evento para criar persona única."
    },
    {
      number: "03",
      title: "Matchmaking Preciso",
      description: "Algoritmo identifica e sugere conexões com maior potencial de gerar valor mútuo e resultados."
    },
    {
      number: "04",
      title: "Facilitação Ativa",
      description: "Sistema facilita o primeiro contato, agenda reuniões e acompanha o desenvolvimento das conexões."
    }
  ];

  const stats = [
    { number: "95%", label: "Match Quality", description: "Taxa de aprovação" },
    { number: "3x", label: "Mais Conexões", description: "Que networking tradicional" },
    { number: "24h", label: "Acompanhamento", description: "Pós-evento automático" },
    { number: "89%", label: "Conversão", description: "Conexões em oportunidades" }
  ];

  const useCases = [
    {
      title: "Conferences B2B",
      description: "Networking direcionado entre executivos, vendedores e tomadores de decisão",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Feiras de Negócios",
      description: "Conecta expositores com visitantes qualificados baseado em interesses específicos",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Eventos de Investimento", 
      description: "Facilita encontros entre startups, investidores e aceleradoras com afinidade setorial",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Congressos Acadêmicos",
      description: "Promove colaborações entre pesquisadores de áreas complementares",
      icon: <Lightbulb className="w-6 h-6" />
    }
  ];

  const aiCapabilities = [
    {
      title: "Análise de Personalidade",
      description: "IA identifica traços comportamentais para sugerir conexões com alta compatibilidade interpessoal.",
      icon: <Brain className="w-8 h-8" />
    },
    {
      title: "Predição de Oportunidades",
      description: "Algoritmos preveem quais conexões têm maior probabilidade de gerar negócios ou parcerias.",
      icon: <Target className="w-8 h-8" />
    },
    {
      title: "Otimização Temporal",
      description: "IA calcula o momento ideal para cada conexão baseado em agenda e disponibilidade emocional.",
      icon: <Calendar className="w-8 h-8" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>LinkAI | Matchmaking Inteligente para Eventos - LEGAL</title>
        <meta name="description" content="LinkAI: Plataforma de matchmaking com IA para networking de alta qualidade. 95% de satisfação, 3x mais conexões relevantes e ROI 5x superior." />
        <meta name="keywords" content="LinkAI, matchmaking IA, networking inteligente, eventos B2B, conexões empresariais, LEGAL AI" />
        <meta property="og:title" content="LinkAI | Matchmaking Inteligente para Eventos - LEGAL" />
        <meta property="og:description" content="Transforme networking em eventos com LinkAI: IA que conecta pessoas certas no momento certo para máximo valor." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://legal.com.br/negocios/ai/linkai" />
        <link rel="canonical" href="https://legal.com.br/negocios/ai/linkai" />
      </Helmet>

      <div className="bg-background text-foreground font-unica">
        {/* Hero Section */}
        <section className="py-24 md:py-32 text-center bg-gradient-to-br from-legal to-legal-purple text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" aria-hidden="true">
            <Network className="absolute top-10 left-10 w-32 h-32 text-white/10 animate-pulse" />
            <Heart className="absolute bottom-10 right-10 w-24 h-24 text-white/10 animate-pulse animation-delay-500" />
            <Users className="absolute top-1/3 right-20 w-28 h-28 text-white/10 animate-ping" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <header>
              <div className="flex items-center justify-center gap-3 mb-6">
                <Network className="w-12 h-12 text-legal-cyan" />
                <h1 className="text-5xl md:text-7xl font-black uppercase tracking-wider" style={{ letterSpacing: '0.05em' }}>
                  LinkAI
                </h1>
              </div>
              <p className="text-lg md:text-xl font-light max-w-4xl mx-auto mb-8">
                <strong className="font-bold text-legal-cyan">Matchmaking Inteligente com IA</strong> que revoluciona o networking em eventos. 
                Conecta as pessoas certas no momento certo para maximizar valor e oportunidades de negócio.
              </p>
            </header>
            <nav className="flex flex-col sm:flex-row justify-center gap-4" role="navigation">
              <Button asChild size="lg" className="bg-legal-cyan hover:bg-legal-cyan/90 text-legal font-bold">
                <Link to="/contato?produto=linkai">Solicitar Demonstração</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-legal hover:bg-white hover:text-legal/80">
                <Link to="/negocios/ai">Ver Todos os Produtos AI</Link>
              </Button>
            </nav>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <SectionTitle
              title="Inteligência Artificial para Networking"
              subtitle="Tecnologia avançada que transforma conexões casuais em oportunidades estratégicas de negócio"
              center
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-none">
                  <CardContent className="p-8 text-center">
                    <div className="mb-6 text-legal group-hover:text-legal-purple transition-colors duration-300 flex justify-center">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-legal mb-4">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <article key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-black text-legal mb-2">{stat.number}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{stat.label}</h3>
                  <p className="text-sm text-gray-600">{stat.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* AI Capabilities Section */}
        <section className="py-20 bg-gradient-to-r from-legal-purple/10 to-legal-cyan/10">
          <div className="container mx-auto px-4">
            <SectionTitle
              title="Capacidades Avançadas da IA"
              subtitle="Algoritmos proprietários que analisam múltiplas dimensões para matchmaking de alta precisão"
              center
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {aiCapabilities.map((capability, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg text-center">
                  <div className="text-legal-purple mb-6 flex justify-center">
                    {capability.icon}
                  </div>
                  <h3 className="text-xl font-bold text-legal mb-4">{capability.title}</h3>
                  <p className="text-gray-600">{capability.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <SectionTitle
              title="Resultados Comprovados"
              subtitle="Métricas reais que demonstram o impacto transformador do LinkAI em eventos"
              center
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="text-legal-purple mt-1">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-legal mb-2">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <SectionTitle
              title="Como Funciona o LinkAI"
              subtitle="Processo inteligente em 4 etapas para networking de alto impacto"
              center
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="bg-legal text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-legal mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <SectionTitle
              title="Casos de Uso Estratégicos"
              subtitle="LinkAI se adapta a diferentes tipos de eventos e objetivos de networking"
              center
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="text-legal mb-4 flex justify-center">
                      {useCase.icon}
                    </div>
                    <h3 className="text-lg font-bold text-legal mb-3">{useCase.title}</h3>
                    <p className="text-gray-600 text-sm">{useCase.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Integration with LEGAL AI */}
        <section className="py-16 bg-gradient-to-r from-legal/10 to-legal-purple/10">
          <div className="container mx-auto px-4 text-center">
            <SectionTitle 
              title="Integração Total com LEGAL AI"
              subtitle="LinkAI potencializa outros produtos do ecossistema LEGAL AI para resultados exponenciais"
              center
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <article className="bg-white rounded-xl p-6 shadow-lg">
                <Brain className="w-12 h-12 text-legal mx-auto mb-4" />
                <h3 className="text-xl font-bold text-legal mb-3">Eventrix + LinkAI</h3>
                <p className="text-gray-600">Gestão completa de eventos com matchmaking inteligente integrado desde o credenciamento.</p>
              </article>
              <article className="bg-white rounded-xl p-6 shadow-lg">
                <Shield className="w-12 h-12 text-legal-purple mx-auto mb-4" />
                <h3 className="text-xl font-bold text-legal-purple mb-3">FacePass + LinkAI</h3>
                <p className="text-gray-600">Identificação facial combinada com sugestões automáticas de networking baseadas na localização.</p>
              </article>
              <article className="bg-white rounded-xl p-6 shadow-lg">
                <BarChart3 className="w-12 h-12 text-legal-cyan mx-auto mb-4" />
                <h3 className="text-xl font-bold text-legal-cyan mb-3">Blue Analytics</h3>
                <p className="text-gray-600">Análise profunda do sucesso do networking com métricas de ROI e qualidade das conexões.</p>
              </article>
            </div>
            <Button asChild size="lg" className="bg-legal-purple hover:bg-legal-purple/90 text-white">
              <Link to="/negocios/ai">Conheça Todo o Ecossistema LEGAL AI</Link>
            </Button>
          </div>
        </section>

        <CallToAction
          title="Revolutione o Networking dos Seus Eventos"
          subtitle="Experimente o poder do LinkAI e veja como a inteligência artificial pode transformar conexões casuais em oportunidades estratégicas de negócio. Solicite uma demonstração personalizada."
          buttonText="Solicitar Demonstração"
          buttonLink="/contato?produto=linkai"
          secondaryButtonText="Falar com Especialista"
          secondaryButtonLink="/contato?tipo=consultoria&produto=linkai"
          background="gradient"
        />
      </div>
    </>
  );
};

export default LinkAIPage;
