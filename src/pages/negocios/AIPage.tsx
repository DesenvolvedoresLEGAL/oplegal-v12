
import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '@/components/SectionTitle';
import CallToAction from '@/components/CallToAction';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Brain, 
  ScanFace, 
  CheckSquare, 
  Zap, 
  Settings, 
  Users, 
  BarChart,
  MessageSquare,
  Gamepad2,
  Eye,
  TrendingUp,
  FileText,
  Copy,
  Target,
  Bot,
  Network
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const mainProducts = [
  {
    id: "facepass",
    name: "FacePass",
    description: "Sistema avançado de credenciamento facial para eventos sem fila. Elimine esperas e garanta segurança máxima com reconhecimento facial instantâneo.",
    icon: <ScanFace className="w-12 h-12 text-legal-cyan mb-4" />,
    features: [
      "Check-in instantâneo sem contato físico",
      "Segurança reforçada com biometria facial",
      "Prevenção de fraudes e duplicações",
      "Integração com listas de convidados e CRM",
      "Analytics em tempo real de fluxo de pessoas",
      "Conformidade com LGPD"
    ],
    benefits: [
      "Redução de 90% no tempo de credenciamento",
      "Zero filas nos eventos",
      "Experiência premium para participantes"
    ],
    ctaLink: "/contato?solution=facepass",
  },
  {
    id: "linkai",
    name: "LinkAI",
    description: "Copiloto de networking 2.0 que revoluciona conexões profissionais. IA que entende seu momento de negócio e conecta você com as pessoas certas.",
    icon: <Network className="w-12 h-12 text-legal-cyan mb-4" />,
    features: [
      "Match inteligente baseado em objetivos de negócio",
      "Análise de compatibilidade profissional",
      "Sugestões personalizadas de networking",
      "Dashboard de oportunidades em tempo real",
      "Integração com LinkedIn e redes sociais",
      "ROI tracking de conexões geradas"
    ],
    benefits: [
      "300% mais conexões qualificadas",
      "Otimização do tempo em eventos",
      "Resultados mensuráveis de networking"
    ],
    ctaLink: "/contato?solution=linkai",
  },
  {
    id: "fitscore",
    name: "FitScore™",
    description: "Copiloto de contratação e people analytics que revoluciona RH. Avalia e prevê alinhamento cultural, performance e fit organizacional com precisão científica.",
    icon: <Users className="w-12 h-12 text-legal-cyan mb-4" />,
    features: [
      "Análise preditiva de fit cultural",
      "Score de compatibilidade candidato-vaga",
      "Redução de turnover com IA",
      "People analytics avançado",
      "Predição de performance futura",
      "Dashboard executivo de talentos"
    ],
    benefits: [
      "70% redução no turnover",
      "85% precisão em predições de performance",
      "50% economia em processos seletivos"
    ],
    ctaLink: "/contato?solution=fitscore",
  },
  {
    id: "blue",
    name: "Blue",
    description: "Plataforma de Business Intelligence que transforma dados em insights estratégicos. IA que analisa padrões e gera relatórios inteligentes automaticamente.",
    icon: <BarChart className="w-12 h-12 text-legal-cyan mb-4" />,
    features: [
      "Dashboards inteligentes em tempo real",
      "Análise preditiva de tendências",
      "Relatórios automatizados personalizados",
      "Integração com múltiplas fontes de dados",
      "Alertas inteligentes de anomalias",
      "Visualizações interativas avançadas"
    ],
    benefits: [
      "Decisões 60% mais rápidas",
      "Insights antes da concorrência",
      "ROI mensurável em todas as ações"
    ],
    ctaLink: "/contato?solution=blue",
  }
];

const complementaryProducts = [
  {
    id: "samurai",
    name: "SamurAI",
    description: "Robô para captação e cadastro automático de leads em feiras e exposições.",
    icon: <Bot className="w-8 h-8 text-legal-purple" />,
    features: [
      "Captação automática de leads",
      "Qualificação inteligente em tempo real",
      "Integração com CRM automática"
    ]
  },
  {
    id: "eventrix",
    name: "Eventrix",
    description: "Plataforma de gestão completa de eventos com IA integrada.",
    icon: <Settings className="w-8 h-8 text-legal-purple" />,
    features: [
      "Gestão end-to-end de eventos",
      "Automações inteligentes",
      "Analytics preditivos"
    ]
  },
  {
    id: "humanoid",
    name: "Humanoid",
    description: "Plataforma de atendimento multicanal com chatbots AI avançados.",
    icon: <MessageSquare className="w-8 h-8 text-legal-purple" />,
    features: [
      "Atendimento 24/7 multicanal",
      "IA conversacional avançada",
      "Integração com sistemas existentes"
    ]
  },
  {
    id: "neurafit",
    name: "NeuraFit",
    description: "Plataforma de gamificação para treinar e turbinar o cérebro de equipes.",
    icon: <Gamepad2 className="w-8 h-8 text-legal-purple" />,
    features: [
      "Treinamento gamificado",
      "Desenvolvimento cognitivo",
      "Métricas de performance mental"
    ]
  }
];

const advancedModules = [
  {
    name: "IA Preditiva de Vendas",
    description: "Módulo que prediz tendências de vendas e identifica oportunidades.",
    icon: <TrendingUp className="w-8 h-8 text-legal-cyan" />
  },
  {
    name: "Geração Automática de Conteúdo",
    description: "IA que cria conteúdo personalizado para eventos e marketing.",
    icon: <FileText className="w-8 h-8 text-legal-cyan" />
  },
  {
    name: "Gêmeos Digitais",
    description: "Simulações digitais precisas de eventos e processos.",
    icon: <Copy className="w-8 h-8 text-legal-cyan" />
  },
  {
    name: "Heatmaps e Visão Computacional",
    description: "Análise visual inteligente de comportamento e fluxos.",
    icon: <Eye className="w-8 h-8 text-legal-cyan" />
  }
];

const stats = [
  { number: "1M+", label: "Pessoas Conectadas", description: "Através de nossas soluções AI" },
  { number: "98%", label: "Precisão", description: "Em reconhecimento facial" },
  { number: "300%", label: "Mais Conexões", description: "Qualificadas com LinkAI" },
  { number: "70%", label: "Redução Turnover", description: "Com FitScore™" }
];

const AIPage = () => {
  return (
    <>
      <Helmet>
        <title>LEGAL AI - Inteligência Artificial para Eventos e Negócios | Produtos Transversais</title>
        <meta name="description" content="Descubra os produtos transversais LEGAL AI: FacePass, LinkAI, FitScore™, Blue, SamurAI, Eventrix, Humanoid e NeuraFit. Soluções de IA que revolucionam eventos e negócios." />
        <meta name="keywords" content="inteligência artificial, eventos, negócios, FacePass, LinkAI, FitScore, reconhecimento facial, networking, people analytics, business intelligence, chatbots, gamificação" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://legal.com.br/negocios/ai" />
        <meta property="og:title" content="LEGAL AI - Inteligência Artificial para Eventos e Negócios" />
        <meta property="og:description" content="Produtos transversais de IA que transformam eventos e negócios. FacePass, LinkAI, FitScore™ e mais." />
        <meta property="og:image" content="https://legal.com.br/images/legal-ai-og.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://legal.com.br/negocios/ai" />
        <meta property="twitter:title" content="LEGAL AI - Inteligência Artificial para Eventos e Negócios" />
        <meta property="twitter:description" content="Produtos transversais de IA que transformam eventos e negócios." />
        <meta property="twitter:image" content="https://legal.com.br/images/legal-ai-twitter.jpg" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "LEGAL AI",
            "description": "Conjunto de produtos de inteligência artificial para eventos e negócios",
            "url": "https://legal.com.br/negocios/ai",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "priceCurrency": "BRL"
            },
            "provider": {
              "@type": "Organization",
              "name": "LEGAL",
              "url": "https://legal.com.br"
            }
          })}
        </script>

        <link rel="canonical" href="https://legal.com.br/negocios/ai" />
      </Helmet>

      <div className="bg-background text-foreground font-unica">
        {/* Hero Section */}
        <section className="py-24 md:py-32 text-center bg-gradient-to-br from-legal to-legal-purple text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <Brain className="absolute top-10 left-10 w-32 h-32 text-white/10 animate-pulse" />
            <Zap className="absolute bottom-10 right-10 w-24 h-24 text-white/10 animate-pulse animation-delay-500" />
            <Settings className="absolute top-1/3 right-20 w-28 h-28 text-white/10 animate-ping" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-wider mb-6 animate-fade-in" style={{ letterSpacing: '0.05em' }}>
              LEGAL AI
            </h1>
            <p className="text-lg md:text-xl font-light max-w-4xl mx-auto mb-8 animate-fade-in animation-delay-300">
              Ecossistema completo de <strong className="font-bold text-legal-cyan">Inteligência Artificial</strong> para revolucionar eventos e negócios. 
              Produtos transversais que se integram perfeitamente para máxima eficiência e resultados exponenciais.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in animation-delay-600">
              <Button asChild size="lg" className="bg-legal-cyan hover:bg-legal-cyan/90 text-legal font-bold">
                <Link to="/contato?solution=legal-ai">Conheça Todas as Soluções</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-legal">
                <Link to="/smart-events">Ver SmartEvents</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-black text-legal mb-2">{stat.number}</div>
                  <div className="text-lg font-bold text-gray-900 mb-1">{stat.label}</div>
                  <div className="text-sm text-gray-600">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Products Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <SectionTitle
              title="Produtos Principais LEGAL AI"
              subtitle="Soluções completas de inteligência artificial que transformam a forma como você conduz eventos e negócios."
              center
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {mainProducts.map((product) => (
                <Card key={product.id} className="bg-card border-legal/30 shadow-xl hover:shadow-legal-cyan/30 transition-all duration-300 transform hover:-translate-y-1 flex flex-col overflow-hidden">
                  <CardHeader className="bg-legal/5 p-6">
                    <div className="flex items-center gap-4">
                      {product.icon}
                      <CardTitle className="text-3xl font-black text-legal uppercase tracking-wide">{product.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 flex-grow flex flex-col">
                    <p className="text-muted-foreground mb-6 text-base leading-relaxed">
                      {product.description}
                    </p>
                    
                    <h4 className="font-bold text-legal mb-3 text-lg">Principais Funcionalidades:</h4>
                    <ul className="list-none space-y-2 mb-6 text-sm">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <CheckSquare className="w-4 h-4 text-legal-cyan mr-2 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <h4 className="font-bold text-legal-purple mb-3 text-lg">Benefícios Comprovados:</h4>
                    <ul className="list-none space-y-2 mb-6 text-sm">
                      {product.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <Target className="w-4 h-4 text-legal-purple mr-2 mt-0.5 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto pt-4">
                      <Button asChild className="w-full bg-legal hover:bg-legal-purple text-white">
                        <Link to={product.ctaLink}>Saiba Mais sobre {product.name}</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Complementary Products Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <SectionTitle
              title="Produtos Complementares"
              subtitle="Soluções especializadas que ampliam o poder do ecossistema LEGAL AI."
              center
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {complementaryProducts.map((product) => (
                <Card key={product.id} className="bg-white border-legal-purple/20 hover:border-legal-purple/50 transition-all duration-300 transform hover:-translate-y-1">
                  <CardHeader className="pb-4">
                    <div className="flex flex-col items-center text-center">
                      {product.icon}
                      <CardTitle className="text-xl font-bold text-legal-purple mt-2">{product.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-600 text-sm mb-4 text-center">{product.description}</p>
                    <ul className="list-none space-y-1 text-xs">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <CheckSquare className="w-3 h-3 text-legal-purple mr-2 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Advanced Modules Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <SectionTitle
              title="Módulos Avançados em Desenvolvimento"
              subtitle="O futuro da inteligência artificial para eventos e negócios está sendo construído agora."
              center
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {advancedModules.map((module, index) => (
                <div key={index} className="bg-gradient-to-br from-legal/10 to-legal-cyan/10 rounded-xl p-6 text-center border border-legal/20 hover:border-legal-cyan/50 transition-all duration-300">
                  <div className="flex justify-center mb-4">
                    {module.icon}
                  </div>
                  <h3 className="text-lg font-bold text-legal mb-3">{module.name}</h3>
                  <p className="text-gray-600 text-sm">{module.description}</p>
                  <div className="mt-4 text-xs text-legal-cyan font-semibold">EM BREVE</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* SmartEvents Integration Section */}
        <section className="py-16 bg-gradient-to-r from-legal-purple/10 to-legal-cyan/10">
          <div className="container mx-auto px-4 text-center">
            <SectionTitle 
              title="Integração Total com SmartEvents"
              subtitle="Todos os produtos LEGAL AI trabalham em harmonia na plataforma SmartEvents, criando um ecossistema tecnológico sem precedentes no mercado."
              center
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <Brain className="w-12 h-12 text-legal mx-auto mb-4" />
                <h3 className="text-xl font-bold text-legal mb-3">IA Unificada</h3>
                <p className="text-gray-600">Todos os produtos compartilham dados e aprendizados para resultados superiores.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <Settings className="w-12 h-12 text-legal-purple mx-auto mb-4" />
                <h3 className="text-xl font-bold text-legal-purple mb-3">Gestão Centralizada</h3>
                <p className="text-gray-600">Um único dashboard para controlar todo o ecossistema de IA.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <BarChart className="w-12 h-12 text-legal-cyan mx-auto mb-4" />
                <h3 className="text-xl font-bold text-legal-cyan mb-3">Analytics Integrados</h3>
                <p className="text-gray-600">Insights cruzados de todos os produtos para decisões mais inteligentes.</p>
              </div>
            </div>
            <Button asChild size="lg" className="bg-legal-purple hover:bg-legal-purple/90 text-white">
              <Link to="/smart-events">Descubra o Poder do SmartEvents</Link>
            </Button>
          </div>
        </section>

        {/* Call to Action Section */}
        <CallToAction
          title="Transforme seus Eventos e Negócios com LEGAL AI"
          subtitle="Entre em contato com nossos especialistas e descubra como nosso ecossistema completo de IA pode revolucionar seus resultados. Agende uma demonstração personalizada."
          buttonText="Fale com um Especialista em IA"
          buttonLink="/contato?solution=legal-ai"
          secondaryButtonText="Agendar Demonstração"
          secondaryButtonLink="/contato?demo=legal-ai"
          background="gradient"
        />
      </div>
    </>
  );
};

export default AIPage;
