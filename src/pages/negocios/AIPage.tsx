
import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '@/components/SectionTitle';
import CallToAction from '@/components/CallToAction';
import ProductCard from '@/components/ai/ProductCard';
import StatsSection from '@/components/ai/StatsSection';
import HeroSection from '@/components/ai/HeroSection';
import AdvancedModulesSection from '@/components/ai/AdvancedModulesSection';
import IntegrationSection from '@/components/ai/IntegrationSection';
import { 
  ScanFace, 
  Network, 
  Users, 
  BarChart,
  Bot,
  Settings,
  MessageSquare,
  Gamepad2,
  Eye,
  TrendingUp,
  FileText,
  Copy
} from 'lucide-react';

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
        
        <link rel="canonical" href="https://legal.com.br/negocios/ai" />
        
        <link rel="alternate" hreflang="pt-BR" href="https://legal.com.br/negocios/ai" />
        <link rel="alternate" hreflang="x-default" href="https://legal.com.br/negocios/ai" />

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

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@legal_tech" />
        <meta name="twitter:creator" content="@legal_tech" />
        <meta name="twitter:url" content="https://legal.com.br/negocios/ai" />
        <meta name="twitter:title" content="LEGAL AI - Inteligência Artificial Empresarial" />
        <meta name="twitter:description" content="Ecossistema completo de IA para eventos e negócios. 8 produtos transversais que revolucionam a gestão empresarial." />
        <meta name="twitter:image" content="https://legal.com.br/images/legal-ai-twitter-card.jpg" />

        <meta name="theme-color" content="#020cbc" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />
        
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
            "datePublished": `${currentYear}-01-01`,
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
        <HeroSection />
        
        <StatsSection stats={stats} />

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
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  description={product.description}
                  icon={product.icon}
                  features={product.features}
                  benefits={product.benefits}
                  ctaLink={product.ctaLink}
                  variant="main"
                />
              ))}
            </div>
          </div>
        </section>

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
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  description={product.description}
                  icon={product.icon}
                  features={product.features}
                  benefits={[]}
                  ctaLink={`/contato?solution=${product.id}`}
                  variant="complementary"
                />
              ))}
            </div>
          </div>
        </section>

        <AdvancedModulesSection modules={advancedModules} />
        
        <IntegrationSection />

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
