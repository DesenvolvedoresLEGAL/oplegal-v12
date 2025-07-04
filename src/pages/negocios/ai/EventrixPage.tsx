
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import SectionTitle from '@/components/SectionTitle';
import CallToAction from '@/components/CallToAction';
import { 
  Zap, 
  Calendar, 
  Users, 
  BarChart3, 
  Clock, 
  CheckCircle, 
  Sparkles,
  Target,
  Brain,
  Settings,
  Smartphone,
  Globe
} from 'lucide-react';

const EventrixPage = () => {
  const features = [
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Gestão Completa de Eventos",
      description: "Planeje, organize e execute eventos de qualquer porte com ferramentas integradas de gestão."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Credenciamento Inteligente",
      description: "Sistema automatizado de credenciamento com reconhecimento facial e QR codes dinâmicos."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analytics em Tempo Real",
      description: "Dashboards interativos com métricas de engajamento, participação e ROI em tempo real."
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "IA Preditiva",
      description: "Inteligência artificial para prever tendências, otimizar recursos e personalizar experiências."
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "App Nativo Personalizado",
      description: "Aplicativo mobile customizado para cada evento com funcionalidades específicas."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Transmissão Híbrida",
      description: "Plataforma integrada para eventos presenciais, virtuais e híbridos com alta qualidade."
    }
  ];

  const benefits = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Redução de 70% no tempo de organização",
      description: "Automação de tarefas repetitivas e processos otimizados"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Aumento de 300% no engajamento",
      description: "Experiências personalizadas e interativas para participantes"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "ROI mensurável e comprovado",
      description: "Métricas detalhadas para medir o sucesso do evento"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "99.9% de disponibilidade",
      description: "Infraestrutura robusta e confiável para eventos críticos"
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Planejamento Estratégico",
      description: "Definição de objetivos, público-alvo e métricas de sucesso com nossa consultoria especializada."
    },
    {
      number: "02", 
      title: "Configuração da Plataforma",
      description: "Personalização completa da plataforma com identidade visual e funcionalidades específicas."
    },
    {
      number: "03",
      title: "Execução Monitorada",
      description: "Suporte técnico 24/7 durante o evento com monitoramento em tempo real."
    },
    {
      number: "04",
      title: "Análise de Resultados",
      description: "Relatórios detalhados pós-evento com insights para otimização futura."
    }
  ];

  const stats = [
    { number: "500+", label: "Eventos Realizados", description: "Experiência comprovada" },
    { number: "1M+", label: "Participantes Atendidos", description: "Escala e confiabilidade" },
    { number: "98%", label: "Satisfação dos Clientes", description: "Qualidade reconhecida" },
    { number: "24/7", label: "Suporte Técnico", description: "Disponibilidade total" }
  ];

  return (
    <>
      <Helmet>
        <title>EVENTRIX | Plataforma de Gestão de Eventos com IA - LEGAL</title>
        <meta name="description" content="EVENTRIX: Plataforma completa de gestão de eventos com inteligência artificial. Credenciamento facial, analytics em tempo real, app nativo e transmissão híbrida." />
        <meta name="keywords" content="EVENTRIX, gestão eventos, IA eventos, credenciamento facial, analytics eventos, app eventos, transmissão híbrida, LEGAL AI" />
        <meta property="og:title" content="EVENTRIX | Plataforma de Gestão de Eventos com IA - LEGAL" />
        <meta property="og:description" content="Revolucione seus eventos com EVENTRIX: IA preditiva, credenciamento inteligente, analytics em tempo real e muito mais." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://legal.com.br/negocios/ai/eventrix" />
        <link rel="canonical" href="https://legal.com.br/negocios/ai/eventrix" />
      </Helmet>

      <div className="bg-background text-foreground font-unica">
        {/* Hero Section */}
        <section className="py-24 md:py-32 text-center bg-gradient-to-br from-legal to-legal-purple text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" aria-hidden="true">
            <Zap className="absolute top-10 left-10 w-32 h-32 text-white/10 animate-pulse" />
            <Calendar className="absolute bottom-10 right-10 w-24 h-24 text-white/10 animate-pulse animation-delay-500" />
            <Settings className="absolute top-1/3 right-20 w-28 h-28 text-white/10 animate-ping" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <header>
              <div className="flex items-center justify-center gap-3 mb-6">
                <Zap className="w-12 h-12 text-legal-cyan" />
                <h1 className="text-5xl md:text-7xl font-black uppercase tracking-wider" style={{ letterSpacing: '0.05em' }}>
                  EVENTRIX
                </h1>
              </div>
              <p className="text-lg md:text-xl font-light max-w-4xl mx-auto mb-8">
                <strong className="font-bold text-legal-cyan">Plataforma de Gestão de Eventos com Inteligência Artificial</strong> que revoluciona 
                a forma como eventos são planejados, executados e analisados. Tecnologia de ponta para resultados excepcionais.
              </p>
            </header>
            <nav className="flex flex-col sm:flex-row justify-center gap-4" role="navigation">
              <Button asChild size="lg" className="bg-legal-cyan hover:bg-legal-cyan/90 text-legal font-bold">
                <Link to="/contato?produto=eventrix">Solicitar Demonstração</Link>
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
              title="Funcionalidades Avançadas"
              subtitle="Tecnologia de ponta para gestão completa de eventos com inteligência artificial integrada"
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

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-r from-legal-purple/10 to-legal-cyan/10">
          <div className="container mx-auto px-4">
            <SectionTitle
              title="Benefícios Comprovados"
              subtitle="Resultados reais que transformam a experiência de eventos e maximizam o ROI"
              center
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
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
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <SectionTitle
              title="Nosso Processo"
              subtitle="Metodologia comprovada para garantir o sucesso do seu evento"
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

        {/* Integration with LEGAL AI */}
        <section className="py-16 bg-gradient-to-r from-legal/10 to-legal-purple/10">
          <div className="container mx-auto px-4 text-center">
            <SectionTitle 
              title="Integração Total com LEGAL AI"
              subtitle="EVENTRIX faz parte do ecossistema LEGAL AI, potencializando seus resultados com outras soluções inteligentes"
              center
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <article className="bg-white rounded-xl p-6 shadow-lg">
                <Brain className="w-12 h-12 text-legal mx-auto mb-4" />
                <h3 className="text-xl font-bold text-legal mb-3">FacePass Integrado</h3>
                <p className="text-gray-600">Credenciamento facial automatizado para entrada rápida e segura nos eventos.</p>
              </article>
              <article className="bg-white rounded-xl p-6 shadow-lg">
                <Users className="w-12 h-12 text-legal-purple mx-auto mb-4" />
                <h3 className="text-xl font-bold text-legal-purple mb-3">LinkAI Networking</h3>
                <p className="text-gray-600">Conecte participantes com interesses em comum através de IA avançada.</p>
              </article>
              <article className="bg-white rounded-xl p-6 shadow-lg">
                <BarChart3 className="w-12 h-12 text-legal-cyan mx-auto mb-4" />
                <h3 className="text-xl font-bold text-legal-cyan mb-3">Blue Analytics</h3>
                <p className="text-gray-600">Business Intelligence integrado para insights profundos sobre seu evento.</p>
              </article>
            </div>
            <Button asChild size="lg" className="bg-legal-purple hover:bg-legal-purple/90 text-white">
              <Link to="/negocios/ai">Conheça Todo o Ecossistema LEGAL AI</Link>
            </Button>
          </div>
        </section>

        <CallToAction
          title="Transforme Seus Eventos com EVENTRIX"
          subtitle="Experimente a revolução na gestão de eventos com inteligência artificial. Solicite uma demonstração personalizada e veja como podemos elevar seus eventos a um novo patamar."
          buttonText="Solicitar Demonstração"
          buttonLink="/contato?produto=eventrix"
          secondaryButtonText="Falar com Especialista"
          secondaryButtonLink="/contato?tipo=consultoria&produto=eventrix"
          background="gradient"
        />
      </div>
    </>
  );
};

export default EventrixPage;
