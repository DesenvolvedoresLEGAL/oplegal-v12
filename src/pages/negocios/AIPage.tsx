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
  Network,
  Shield,
  Clock,
  Trophy
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

const seoKeywords = [
  "inteligência artificial empresarial",
  "AI para eventos",
  "reconhecimento facial empresarial",
  "networking inteligente",
  "people analytics",
  "business intelligence",
  "automação empresarial",
  "chatbots corporativos",
  "gamificação empresarial",
  "visão computacional",
  "IA preditiva",
  "transformação digital"
];

const AIPage = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <>
      <Helmet>
        <title>LEGAL AI - Inteligência Artificial Empresarial | Produtos Transversais para Eventos e Negócios</title>
        <meta name="description" content="Descubra o ecossistema LEGAL AI: FacePass, LinkAI, FitScore™, Blue e mais. Soluções completas de inteligência artificial que transformam eventos corporativos e otimizam processos empresariais com tecnologia de ponta." />
        <meta name="keywords" content={seoKeywords.join(', ')} />
        <meta name="author" content="LEGAL - Tecnologia e Inovação" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://legal.com.br/negocios/ai" />
        
        {/* Hreflang for internationalization */}
        <link rel="alternate" hreflang="pt-BR" href="https://legal.com.br/negocios/ai" />
        <link rel="alternate" hreflang="x-default" href="https://legal.com.br/negocios/ai" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="LEGAL" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:url" content="https://legal.com.br/negocios/ai" />
        <meta property="og:title" content="LEGAL AI - Inteligência Artificial Empresarial | Ecossistema Completo" />
        <meta property="og:description" content="Ecossistema LEGAL AI: 8 produtos transversais de IA para eventos e negócios. FacePass, LinkAI, FitScore™, Blue, SamurAI, Eventrix, Humanoid e NeuraFit." />
        <meta property="og:image" content="https://legal.com.br/images/legal-ai-social-share.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="LEGAL AI - Ecossistema de Inteligência Artificial para Empresas" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@legal_tech" />
        <meta name="twitter:creator" content="@legal_tech" />
        <meta name="twitter:url" content="https://legal.com.br/negocios/ai" />
        <meta name="twitter:title" content="LEGAL AI - Inteligência Artificial Empresarial" />
        <meta name="twitter:description" content="Ecossistema completo de IA para eventos e negócios. 8 produtos transversais que revolucionam a gestão empresarial." />
        <meta name="twitter:image" content="https://legal.com.br/images/legal-ai-twitter-card.jpg" />

        {/* Additional SEO Meta Tags */}
        <meta name="theme-color" content="#020cbc" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* Structured Data - Organization */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "LEGAL",
            "description": "Maior TechCo do Brasil especializada em inteligência artificial para eventos e negócios",
            "url": "https://legal.com.br",
            "logo": "https://legal.com.br/images/legal-logo.png",
            "sameAs": [
              "https://linkedin.com/company/legal-tech",
              "https://instagram.com/legal.tech",
              "https://twitter.com/legal_tech"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+55-11-99999-9999",
              "contactType": "sales",
              "availableLanguage": "Portuguese"
            },
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "BR",
              "addressLocality": "São Paulo"
            }
          })}
        </script>

        {/* Structured Data - SoftwareApplication */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "LEGAL AI - Ecossistema de Inteligência Artificial",
            "description": "Conjunto completo de 8 produtos de inteligência artificial para transformar eventos corporativos e otimizar processos empresariais",
            "url": "https://legal.com.br/negocios/ai",
            "applicationCategory": "BusinessApplication",
            "applicationSubCategory": "ArtificialIntelligence",
            "operatingSystem": "Web-based",
            "softwareVersion": "2024",
            "datePublished": `${currentYear}-01-01",
            "dateModified": new Date().toISOString().split('T')[0],
            "offers": {
              "@type": "Offer",
              "priceCurrency": "BRL",
              "availability": "https://schema.org/InStock",
              "category": "Enterprise Software"
            },
            "provider": {
              "@type": "Organization",
              "name": "LEGAL",
              "url": "https://legal.com.br"
            },
            "featureList": [
              "Reconhecimento Facial (FacePass)",
              "Networking Inteligente (LinkAI)", 
              "People Analytics (FitScore™)",
              "Business Intelligence (Blue)",
              "Captação Automática de Leads (SamurAI)",
              "Gestão de Eventos (Eventrix)",
              "Atendimento Multicanal (Humanoid)",
              "Gamificação Corporativa (NeuraFit)"
            ],
            "screenshot": "https://legal.com.br/images/legal-ai-dashboard.jpg"
          })}
        </script>

        {/* Structured Data - Product Collection */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Produtos LEGAL AI",
            "description": "Ecossistema completo de produtos de inteligência artificial",
            "numberOfItems": 8,
            "itemListElement": [
              {
                "@type": "SoftwareApplication",
                "position": 1,
                "name": "FacePass",
                "description": "Sistema avançado de credenciamento facial para eventos"
              },
              {
                "@type": "SoftwareApplication", 
                "position": 2,
                "name": "LinkAI",
                "description": "Copiloto de networking 2.0 com IA"
              },
              {
                "@type": "SoftwareApplication",
                "position": 3, 
                "name": "FitScore™",
                "description": "Copiloto de contratação e people analytics"
              },
              {
                "@type": "SoftwareApplication",
                "position": 4,
                "name": "Blue", 
                "description": "Plataforma de Business Intelligence"
              }
            ]
          })}
        </script>

        {/* Structured Data - WebPage */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "LEGAL AI - Inteligência Artificial Empresarial",
            "description": "Página institucional do ecossistema LEGAL AI com produtos transversais de inteligência artificial para eventos e negócios",
            "url": "https://legal.com.br/negocios/ai",
            "inLanguage": "pt-BR",
            "isPartOf": {
              "@type": "WebSite",
              "name": "LEGAL",
              "url": "https://legal.com.br"
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://legal.com.br"
                },
                {
                  "@type": "ListItem", 
                  "position": 2,
                  "name": "Negócios",
                  "item": "https://legal.com.br/negocios"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "LEGAL AI",
                  "item": "https://legal.com.br/negocios/ai"
                }
              ]
            },
            "mainEntity": {
              "@type": "Thing",
              "name": "LEGAL AI",
              "description": "Ecossistema de inteligência artificial empresarial"
            }
          })}
        </script>
      </Helmet>

      <div className="bg-background text-foreground font-unica">
        {/* SEO-optimized Hero Section */}
        <section className="py-24 md:py-32 text-center bg-gradient-to-br from-legal to-legal-purple text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" aria-hidden="true">
            <Brain className="absolute top-10 left-10 w-32 h-32 text-white/10 animate-pulse" />
            <Zap className="absolute bottom-10 right-10 w-24 h-24 text-white/10 animate-pulse animation-delay-500" />
            <Settings className="absolute top-1/3 right-20 w-28 h-28 text-white/10 animate-ping" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <header>
              <h1 className="text-5xl md:text-7xl font-black uppercase tracking-wider mb-6 animate-fade-in" style={{ letterSpacing: '0.05em' }}>
                LEGAL AI
              </h1>
              <p className="text-lg md:text-xl font-light max-w-4xl mx-auto mb-8 animate-fade-in animation-delay-300">
                <strong className="font-bold text-legal-cyan">Ecossistema Completo de Inteligência Artificial</strong> para revolucionar eventos corporativos e negócios. 
                8 produtos transversais integrados para máxima eficiência e resultados exponenciais.
              </p>
            </header>
            <nav className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in animation-delay-600" role="navigation" aria-label="Ações principais">
              <Button asChild size="lg" className="bg-legal-cyan hover:bg-legal-cyan/90 text-legal font-bold">
                <Link to="/contato?solution=legal-ai" title="Conheça todas as soluções LEGAL AI">Conheça Todas as Soluções</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-legal">
                <Link to="/smart-events" title="Veja a plataforma SmartEvents">Ver SmartEvents</Link>
              </Button>
            </nav>
          </div>
        </section>

        {/* SEO-optimized Stats Section */}
        <section className="py-16 bg-white" aria-labelledby="stats-heading">
          <div className="container mx-auto px-4">
            <h2 id="stats-heading" className="sr-only">Estatísticas e resultados LEGAL AI</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <article key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-black text-legal mb-2" aria-label={`${stat.number} ${stat.label}`}>{stat.number}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{stat.label}</h3>
                  <p className="text-sm text-gray-600">{stat.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SEO-optimized Main Products Section */}
        <section className="py-16 md:py-24" aria-labelledby="main-products-heading">
          <div className="container mx-auto px-4">
            <header>
              <SectionTitle
                title="Produtos Principais LEGAL AI"
                subtitle="Soluções completas de inteligência artificial que transformam a forma como você conduz eventos corporativos e otimiza processos empresariais."
                center
              />
            </header>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {mainProducts.map((product) => (
                <article key={product.id} className="bg-card border-legal/30 shadow-xl hover:shadow-legal-cyan/30 transition-all duration-300 transform hover:-translate-y-1 flex flex-col overflow-hidden rounded-lg">
                  <header className="bg-legal/5 p-6">
                    <div className="flex items-center gap-4">
                      <div aria-hidden="true">{product.icon}</div>
                      <h3 className="text-3xl font-black text-legal uppercase tracking-wide">{product.name}</h3>
                    </div>
                  </header>
                  <div className="p-6 flex-grow flex flex-col">
                    <p className="text-muted-foreground mb-6 text-base leading-relaxed">
                      {product.description}
                    </p>
                    
                    <section className="mb-6">
                      <h4 className="font-bold text-legal mb-3 text-lg">Principais Funcionalidades:</h4>
                      <ul className="list-none space-y-2 text-sm" role="list">
                        {product.features.map((feature, index) => (
                          <li key={index} className="flex items-start" role="listitem">
                            <CheckSquare className="w-4 h-4 text-legal-cyan mr-2 mt-0.5 flex-shrink-0" aria-hidden="true" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </section>

                    <section className="mb-6">
                      <h4 className="font-bold text-legal-purple mb-3 text-lg">Benefícios Comprovados:</h4>
                      <ul className="list-none space-y-2 text-sm" role="list">
                        {product.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start" role="listitem">
                            <Target className="w-4 h-4 text-legal-purple mr-2 mt-0.5 flex-shrink-0" aria-hidden="true" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </section>

                    <footer className="mt-auto pt-4">
                      <Button asChild className="w-full bg-legal hover:bg-legal-purple text-white">
                        <Link to={product.ctaLink} title={`Saiba mais sobre ${product.name}`}>
                          Saiba Mais sobre {product.name}
                        </Link>
                      </Button>
                    </footer>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SEO-optimized Complementary Products Section */}
        <section className="py-16 bg-gray-50" aria-labelledby="complementary-products-heading">
          <div className="container mx-auto px-4">
            <header>
              <SectionTitle
                title="Produtos Complementares"
                subtitle="Soluções especializadas que ampliam o poder do ecossistema LEGAL AI para atender todas as necessidades empresariais."
                center
              />
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {complementaryProducts.map((product) => (
                <article key={product.id} className="bg-white border-legal-purple/20 hover:border-legal-purple/50 transition-all duration-300 transform hover:-translate-y-1 rounded-lg overflow-hidden">
                  <header className="pb-4 p-6">
                    <div className="flex flex-col items-center text-center">
                      <div aria-hidden="true">{product.icon}</div>
                      <h3 className="text-xl font-bold text-legal-purple mt-2">{product.name}</h3>
                    </div>
                  </header>
                  <div className="pt-0 px-6 pb-6">
                    <p className="text-gray-600 text-sm mb-4 text-center">{product.description}</p>
                    <ul className="list-none space-y-1 text-xs" role="list">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-start" role="listitem">
                          <CheckSquare className="w-3 h-3 text-legal-purple mr-2 mt-0.5 flex-shrink-0" aria-hidden="true" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SEO-optimized Advanced Modules Section */}
        <section className="py-16" aria-labelledby="advanced-modules-heading">
          <div className="container mx-auto px-4">
            <header>
              <SectionTitle
                title="Módulos Avançados em Desenvolvimento"
                subtitle="O futuro da inteligência artificial empresarial está sendo construído agora. Inovações que definirão o mercado nos próximos anos."
                center
              />
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {advancedModules.map((module, index) => (
                <article key={index} className="bg-gradient-to-br from-legal/10 to-legal-cyan/10 rounded-xl p-6 text-center border border-legal/20 hover:border-legal-cyan/50 transition-all duration-300">
                  <header className="flex justify-center mb-4" aria-hidden="true">
                    {module.icon}
                  </header>
                  <h3 className="text-lg font-bold text-legal mb-3">{module.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{module.description}</p>
                  <footer className="text-xs text-legal-cyan font-semibold">EM BREVE</footer>
                </article>
              ))}
            </div>
          </div>
        </section>
        
        {/* SEO-optimized SmartEvents Integration Section */}
        <section className="py-16 bg-gradient-to-r from-legal-purple/10 to-legal-cyan/10" aria-labelledby="integration-heading">
          <div className="container mx-auto px-4 text-center">
            <header>
              <SectionTitle 
                title="Integração Total com SmartEvents"
                subtitle="Todos os produtos LEGAL AI trabalham em harmonia na plataforma SmartEvents, criando um ecossistema tecnológico sem precedentes no mercado brasileiro."
                center
              />
            </header>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <article className="bg-white rounded-xl p-6 shadow-lg">
                <Brain className="w-12 h-12 text-legal mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-xl font-bold text-legal mb-3">IA Unificada</h3>
                <p className="text-gray-600">Todos os produtos compartilham dados e aprendizados para resultados superiores e insights mais precisos.</p>
              </article>
              <article className="bg-white rounded-xl p-6 shadow-lg">
                <Settings className="w-12 h-12 text-legal-purple mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-xl font-bold text-legal-purple mb-3">Gestão Centralizada</h3>
                <p className="text-gray-600">Um único dashboard intuitivo para controlar todo o ecossistema de IA com eficiência máxima.</p>
              </article>
              <article className="bg-white rounded-xl p-6 shadow-lg">
                <BarChart className="w-12 h-12 text-legal-cyan mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-xl font-bold text-legal-cyan mb-3">Analytics Integrados</h3>
                <p className="text-gray-600">Insights cruzados de todos os produtos para decisões empresariais mais inteligentes e estratégicas.</p>
              </article>
            </div>
            <Button asChild size="lg" className="bg-legal-purple hover:bg-legal-purple/90 text-white">
              <Link to="/smart-events" title="Descubra o poder da plataforma SmartEvents">Descubra o Poder do SmartEvents</Link>
            </Button>
          </div>
        </section>

        {/* SEO-optimized Call to Action Section */}
        <CallToAction
          title="Transforme seus Eventos e Negócios com LEGAL AI"
          subtitle="Entre em contato com nossos especialistas em inteligência artificial e descubra como nosso ecossistema completo pode revolucionar seus resultados empresariais. Agende uma demonstração personalizada gratuita."
          buttonText="Fale com um Especialista em IA"
          buttonLink="/contato?solution=legal-ai"
          secondaryButtonText="Agendar Demonstração Gratuita"
          secondaryButtonLink="/contato?demo=legal-ai"
          background="gradient"
        />
      </div>
    </>
  );
};

export default AIPage;
