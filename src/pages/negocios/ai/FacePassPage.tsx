
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import SectionTitle from '@/components/SectionTitle';
import CallToAction from '@/components/CallToAction';
import { 
  Eye, 
  Zap, 
  Shield, 
  Clock, 
  Users, 
  CheckCircle, 
  Smartphone,
  Camera,
  Lock,
  BarChart3,
  Settings,
  Brain
} from 'lucide-react';

const FacePassPage = () => {
  const features = [
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Reconhecimento Facial Avançado",
      description: "Tecnologia de IA com 99.9% de precisão para identificação facial em tempo real."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Check-in Instantâneo",
      description: "Credenciamento automático em menos de 2 segundos, eliminando filas e atrasos."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Segurança Máxima",
      description: "Criptografia de ponta e conformidade com LGPD para proteção total dos dados."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analytics em Tempo Real",
      description: "Relatórios detalhados de acesso, horários de pico e análise de fluxo de participantes."
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Múltiplas Plataformas",
      description: "Integração com dispositivos móveis, tablets e sistemas de controle de acesso."
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Configuração Flexível",
      description: "Adaptável a diferentes tipos de evento, desde conferências até festivais de música."
    }
  ];

  const benefits = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Redução de 90% no tempo de credenciamento",
      description: "Elimine filas e agilize o acesso aos eventos"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Experiência do participante aprimorada",
      description: "Acesso rápido e sem contato físico"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Segurança anti-fraude garantida",
      description: "Impossibilidade de falsificação ou transferência de credenciais"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Dados precisos de participação",
      description: "Métricas exatas para análise de ROI e engajamento"
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Cadastro Prévio",
      description: "Participantes fazem upload de foto através de formulário seguro ou app do evento."
    },
    {
      number: "02", 
      title: "Processamento IA",
      description: "Nossa IA processa e cria perfis biométricos únicos com algoritmos avançados."
    },
    {
      number: "03",
      title: "Reconhecimento Instantâneo",
      description: "No evento, câmeras identificam e liberam acesso automaticamente em 2 segundos."
    },
    {
      number: "04",
      title: "Monitoramento Contínuo",
      description: "Acompanhamento em tempo real com relatórios e analytics detalhados."
    }
  ];

  const stats = [
    { number: "99.9%", label: "Precisão", description: "Taxa de reconhecimento" },
    { number: "2s", label: "Velocidade", description: "Tempo médio de acesso" },
    { number: "50K+", label: "Participantes", description: "Já credenciados" },
    { number: "100%", label: "LGPD", description: "Conformidade garantida" }
  ];

  const useCases = [
    {
      title: "Conferências Corporativas",
      description: "Credenciamento VIP para executivos e palestrantes principais",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Festivais e Shows",
      description: "Controle de acesso para diferentes áreas e setores do evento",
      icon: <Camera className="w-6 h-6" />
    },
    {
      title: "Feiras e Exposições", 
      description: "Identificação de visitantes e expositores com perfis diferenciados",
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      title: "Eventos Esportivos",
      description: "Acesso rápido para torcedores em estádios e arenas",
      icon: <Zap className="w-6 h-6" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>FacePass | Credenciamento Facial com IA - LEGAL</title>
        <meta name="description" content="FacePass: Credenciamento facial avançado com inteligência artificial. 99.9% de precisão, acesso em 2 segundos, segurança máxima e conformidade LGPD." />
        <meta name="keywords" content="FacePass, credenciamento facial, IA eventos, reconhecimento facial, acesso automático, LEGAL AI, biometria eventos" />
        <meta property="og:title" content="FacePass | Credenciamento Facial com IA - LEGAL" />
        <meta property="og:description" content="Revolucione o credenciamento de eventos com FacePass: IA avançada, 99.9% de precisão e acesso instantâneo." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://legal.com.br/negocios/ai/facepass" />
        <link rel="canonical" href="https://legal.com.br/negocios/ai/facepass" />
      </Helmet>

      <div className="bg-background text-foreground font-unica">
        {/* Hero Section */}
        <section className="py-24 md:py-32 text-center bg-gradient-to-br from-legal to-legal-purple text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" aria-hidden="true">
            <Eye className="absolute top-10 left-10 w-32 h-32 text-white/10 animate-pulse" />
            <Camera className="absolute bottom-10 right-10 w-24 h-24 text-white/10 animate-pulse animation-delay-500" />
            <Lock className="absolute top-1/3 right-20 w-28 h-28 text-white/10 animate-ping" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <header>
              <div className="flex items-center justify-center gap-3 mb-6">
                <Eye className="w-12 h-12 text-legal-cyan" />
                <h1 className="text-5xl md:text-7xl font-black uppercase tracking-wider" style={{ letterSpacing: '0.05em' }}>
                  FacePass
                </h1>
              </div>
              <p className="text-lg md:text-xl font-light max-w-4xl mx-auto mb-8">
                <strong className="font-bold text-legal-cyan">Credenciamento Facial com Inteligência Artificial</strong> que revoluciona 
                o acesso a eventos. Tecnologia de reconhecimento facial de alta precisão para experiências sem atrito.
              </p>
            </header>
            <nav className="flex flex-col sm:flex-row justify-center gap-4" role="navigation">
              <Button asChild size="lg" className="bg-legal-cyan hover:bg-legal-cyan/90 text-legal font-bold">
                <Link to="/contato?produto=facepass">Solicitar Demonstração</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-legal">
                <Link to="/negocios/ai">Ver Todos os Produtos AI</Link>
              </Button>
            </nav>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <SectionTitle
              title="Tecnologia de Ponta"
              subtitle="Recursos avançados de inteligência artificial para credenciamento facial preciso e seguro"
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
              subtitle="Resultados reais que transformam a experiência de credenciamento em eventos"
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
              title="Como Funciona"
              subtitle="Processo simples e seguro em 4 etapas para implementação do FacePass"
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
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <SectionTitle
              title="Casos de Uso"
              subtitle="FacePass se adapta a diferentes tipos de eventos e necessidades"
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
              subtitle="FacePass faz parte do ecossistema LEGAL AI, potencializando seus resultados com outras soluções inteligentes"
              center
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <article className="bg-white rounded-xl p-6 shadow-lg">
                <Brain className="w-12 h-12 text-legal mx-auto mb-4" />
                <h3 className="text-xl font-bold text-legal mb-3">Eventrix Integrado</h3>
                <p className="text-gray-600">Combine credenciamento facial com gestão completa de eventos em uma única plataforma.</p>
              </article>
              <article className="bg-white rounded-xl p-6 shadow-lg">
                <Users className="w-12 h-12 text-legal-purple mx-auto mb-4" />
                <h3 className="text-xl font-bold text-legal-purple mb-3">LinkAI Networking</h3>
                <p className="text-gray-600">Identificação automática para sugestões de networking personalizadas entre participantes.</p>
              </article>
              <article className="bg-white rounded-xl p-6 shadow-lg">
                <BarChart3 className="w-12 h-12 text-legal-cyan mx-auto mb-4" />
                <h3 className="text-xl font-bold text-legal-cyan mb-3">Blue Analytics</h3>
                <p className="text-gray-600">Dados de acesso integrados com business intelligence para insights profundos.</p>
              </article>
            </div>
            <Button asChild size="lg" className="bg-legal-purple hover:bg-legal-purple/90 text-white">
              <Link to="/negocios/ai">Conheça Todo o Ecossistema LEGAL AI</Link>
            </Button>
          </div>
        </section>

        <CallToAction
          title="Transforme o Credenciamento dos Seus Eventos"
          subtitle="Experimente o poder do FacePass e veja como a inteligência artificial pode revolucionar a experiência dos seus participantes. Solicite uma demonstração personalizada agora mesmo."
          buttonText="Solicitar Demonstração"
          buttonLink="/contato?produto=facepass"
          secondaryButtonText="Falar com Especialista"
          secondaryButtonLink="/contato?tipo=consultoria&produto=facepass"
          background="gradient"
        />
      </div>
    </>
  );
};

export default FacePassPage;
