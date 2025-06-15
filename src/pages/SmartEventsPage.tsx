import React from "react";
import { Helmet } from "react-helmet-async";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { 
  Wifi, 
  Radio, 
  Activity, 
  Layers, 
  BarChart3,
  ArrowRight,
  CheckCircle,
  Target,
  Globe,
  Timer,
  Shield,
  Users,
  Link as LinkIcon,
  Download,
  MessageCircle,
  ShoppingBag,
  User,
  DollarSign
} from "lucide-react";
import Card from "@/components/Card";
import { Link } from "react-router-dom";
import CallToAction from "@/components/CallToAction";

const SmartEventsPage = () => {
  // Data for the 5 pillars
  const pillars = [
    {
      icon: <Wifi size={36} />,
      title: "Smart Connect",
      description: "Always-on para 10.000+ dispositivos com FWA 5G e WiFi especializado para eventos.",
      features: ["Conexão 5G", "WiFi de alta densidade", "Transmissões Ao Vivo", "Multi-dispositivos"]
    },
    {
      icon: <Radio size={36} />,
      title: "Smart Sense",
      description: "Sensores e visão 360° do evento com mapas de calor e reconhecimento em tempo real.",
      features: ["IoT avançado", "Mapas de calor", "Localização indoor", "Visão computacional"]
    },
    {
      icon: <Activity size={36} />,
      title: "Smart Flow",
      description: "Operações e credenciamento autônomos com reconhecimento facial e fluxos inteligentes.",
      features: ["Credenciamento facial", "Fluxos automatizados", "Filas inteligentes", "Operação autônoma"]
    },
    {
      icon: <Layers size={36} />,
      title: "Smart Engage",
      description: "IA generativa e realidade aumentada para engajamento único e personalizado.",
      features: ["IA generativa", "Realidade aumentada", "Personalização inteligente", "Engajamento digital"]
    },
    {
      icon: <BarChart3 size={36} />,
      title: "Smart Insight",
      description: "ROI em tempo real com FitScore™ para métricas tangíveis e insights precisos.",
      features: ["Analytics em tempo real", "FitScore™", "Métricas de ROI", "Insights preditivos"]
    },
  ];

  // Data for maturity model
  const maturityLevels = [
    {
      level: "Tradicional",
      description: "Processos manuais, dados isolados, experiência analógica",
      features: ["Credenciamento manual", "WiFi básico ou inexistente", "Relatórios pós-evento", "Sem dados em tempo real"]
    },
    {
      level: "Digitalizado",
      description: "Algumas ferramentas digitais, mas sem integração",
      features: ["Credenciamento digital", "WiFi padrão", "Apps isolados", "Alguns relatórios digitais"]
    },
    {
      level: "Conectado",
      description: "Sistemas integrados e experiência digital ampliada",
      features: ["QR codes e NFC", "WiFi estruturado", "Apps integrados", "Dashboard unificado"]
    },
    {
      level: "Smart",
      description: "Totalmente autônomo, dados em tempo real, experiência sem atrito",
      features: ["Reconhecimento facial", "5G dedicado", "IA e AR/VR", "ROI em tempo real"]
    },
  ];

  // Data for implementation roadmap
  const phases = [
    {
      name: "Foundation",
      period: "0-30 dias",
      title: "Conectividade + credenciamento facial",
      description: "Estabelecemos a base tecnológica com infraestrutura de conectividade robusta e sistema de credenciamento facial que elimina filas.",
      tasks: [
        "Instalação da infraestrutura FWA 5G",
        "Configuração do WiFi de alta densidade",
        "Implementação do FacePass para credenciamento",
        "Treinamento da equipe operacional",
        "Setup dos dashboards básicos"
      ]
    },
    {
      name: "Intelligence",
      period: "30-90 dias",
      title: "Sensores IoT, IA, dashboards em tempo real",
      description: "Expandimos as capacidades com sensores IoT, sistemas de IA para matchmaking e análises avançadas em tempo real.",
      tasks: [
        "Implementação de sensores IoT para mapeamento",
        "Ativação do sistema LinkAI de matchmaking",
        "Configuração dos painéis de BI em tempo real",
        "Integração com sistemas de gestão de eventos",
        "Setup de análises preditivas"
      ]
    },
    {
      name: "Immersive & Autonomous",
      period: "90-180 dias",
      title: "Drones, AR, relatórios preditivos",
      description: "Transformamos o evento com experiências imersivas, serviços autônomos de drones e insights preditivos avançados.",
      tasks: [
        "Integração de drones para delivery e monitoramento",
        "Implementação de experiências em realidade aumentada",
        "Configuração de relatórios preditivos",
        "Automação completa de fluxos operacionais",
        "Mensuração avançada de ROI com FitScore™"
      ]
    }
  ];

  // Data for comparative metrics
  const comparativeMetrics = [
    {
      metric: "Tempo em filas",
      traditional: "45+ minutos",
      smart: "0 minutos",
      improvement: "100%"
    },
    {
      metric: "Leads qualificados",
      traditional: "20% do total",
      smart: "55% do total",
      improvement: "+35%"
    },
    {
      metric: "Engajamento",
      traditional: "22% dos conteúdos",
      smart: "67% dos conteúdos",
      improvement: "+45%"
    },
    {
      metric: "Custo operacional",
      traditional: "Base 100%",
      smart: "Redução de 30%",
      improvement: "-30%"
    },
    {
      metric: "Satisfação (CSAT)",
      traditional: "72%",
      smart: "95%+",
      improvement: "+23%"
    }
  ];

  // Data for use cases
  const useCases = [
    {
      title: "Congressos e Fóruns",
      description: "Credenciamento facial, matchmaking inteligente e engajamento por IA em tempo real.",
      benefits: ["Experiência sem atrito", "Networking qualificado", "Conteúdo personalizado"]
    },
    {
      title: "Feiras e Exposições",
      description: "Mapeamento de fluxo, análise de leads e medição precisa de ROI para expositores.",
      benefits: ["Geração de leads qualificados", "Dashboard para expositores", "Análise em tempo real"]
    },
    {
      title: "Lançamentos e Ativações",
      description: "Experiências imersivas com RA/RV, drones para delivery e engajamento digital amplificado.",
      benefits: ["Experiências memoráveis", "Ativações digitais", "Alcance expandido"]
    },
    {
      title: "Convenções Internas",
      description: "Votação segura, feedback em tempo real e análise comportamental para decisões estratégicas.",
      benefits: ["Tomada de decisão ágil", "Participação amplificada", "Análise de engajamento"]
    }
  ];

  // Data for integrations
  const integrations = [
    {
      name: "CRMs",
      systems: ["Salesforce", "HubSpot", "Pipedrive"],
      benefits: ["Leads em tempo real", "Automação de follow-up", "Qualificação inteligente"]
    },
    {
      name: "ERPs",
      systems: ["SAP", "Oracle", "Microsoft Dynamics"],
      benefits: ["Faturamento automático", "Controle de estoque", "Gestão de contratos"]
    },
    {
      name: "Marketing Automation",
      systems: ["Marketo", "Pardot", "RD Station"],
      benefits: ["Jornadas personalizadas", "Nurturing automático", "Scoring de leads"]
    },
    {
      name: "Analytics",
      systems: ["PowerBI", "Tableau", "Google Data Studio"],
      benefits: ["Dashboards personalizados", "Insights em tempo real", "Relatórios automatizados"]
    }
  ];

  // Data for global benchmarks
  const benchmarks = [
    {
      event: "Consumer Electronics Show (CES)",
      location: "Las Vegas, EUA",
      smartFeatures: ["Credenciamento biométrico", "Navegação AR", "Matching por IA"]
    },
    {
      event: "Web Summit",
      location: "Lisboa, Portugal",
      smartFeatures: ["App com ML para networking", "Análise de tráfego em tempo real", "QR codes dinâmicos"]
    },
    {
      event: "South by Southwest (SXSW)",
      location: "Austin, EUA",
      smartFeatures: ["Experiências imersivas", "Blockchain para credenciamento", "Áreas com IoT"]
    },
    {
      event: "Mobile World Congress (MWC)",
      location: "Barcelona, Espanha",
      smartFeatures: ["Demonstrações 5G", "Digital twins", "Robôs de atendimento"]
    }
  ];

  // Data for stakeholders (moved from HomePage)
  const stakeholders = [
    {
      icon: <Users size={36} />,
      title: "Organizador",
      metrics: [
        { label: "Aumento de receita por m²", value: "+22%" },
        { label: "RevPAM", value: "Elevado" },
        { label: "EBITDA", value: "Melhorado" }
      ],
      benefits: [
        "Aumento da lucratividade com novos modelos de negócio",
        "Operações otimizadas com menos recursos humanos",
        "Dados precisos para planejamento de futuras edições",
        "Diferenciação competitiva no mercado"
      ]
    },
    {
      icon: <ShoppingBag size={36} />,
      title: "Expositor",
      metrics: [
        { label: "Leads qualificados", value: "+35%" },
        { label: "CPL", value: "Reduzido" },
        { label: "SQL rate", value: "Otimizado" }
      ],
      benefits: [
        "Maior qualidade e conversão de leads",
        "Melhor ROI em participação de eventos",
        "Insights precisos sobre interações no estande",
        "Matching inteligente com visitantes ideais"
      ]
    },
    {
      icon: <User size={36} />,
      title: "Participante",
      metrics: [
        { label: "Tempo em filas", value: "0 min" },
        { label: "Agenda personalizada", value: "100%" },
        { label: "CSAT", value: "≥ 95%" }
      ],
      benefits: [
        "Experiência sem atritos desde o credenciamento",
        "Agenda e recomendações personalizadas via IA",
        "Networking mais eficiente e qualificado",
        "Experiências imersivas e memoráveis"
      ]
    },
    {
      icon: <DollarSign size={36} />,
      title: "Patrocinador",
      metrics: [
        { label: "Métricas em tempo real", value: "100%" },
        { label: "AR impressions", value: "Elevado" },
        { label: "CPM on-site", value: "Otimizado" }
      ],
      benefits: [
        "Visibilidade mensurada com precisão",
        "Novas superfícies de branding via AR",
        "Dados granulares sobre interações",
        "Maior justificativa para investimento"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Smart Events™ - O novo padrão para eventos inteligentes | LEGAL</title>
        <meta name="description" content="Smart Events™ são eventos com infraestrutura tecnológica 100% integrada — IA, 5G, drones, IoT e dados em tempo real. Transforme eventos em experiências 10x mais conectadas, imersivas e lucrativas." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-legal text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Smart Events™
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              O novo padrão para eventos com tecnologia 100% integrada — IA, 5G, drones, IoT e dados em tempo real.
            </p>
            <p className="text-lg mb-12 text-gray-100">
              Criado pela LEGAL — pioneira no Brasil no conceito de eventos inteligentes.
            </p>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <p className="text-xl font-semibold">
                "Transforme eventos em experiências 10x mais conectadas, imersivas e lucrativas."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5 Pillars Section */}
      <section className="py-20 bg-white" id="pilares">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Os 5 Pilares Smart Events™"
            subtitle="Uma abordagem revolucionária para eventos que integra tecnologias avançadas para criar experiências mais inteligentes, conectadas e lucrativas."
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {pillars.map((pillar, index) => (
              <Card
                key={index}
                title={pillar.title}
                subtitle={pillar.description}
                icon={pillar.icon}
                className="flex flex-col h-full"
              >
                <ul className="styled-list mt-4 mb-6 flex-grow">
                  {pillar.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section - Moved from HomePage */}
      <section className="py-20 bg-legal-gray" id="beneficios">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Benefícios e ROI por Stakeholder"
            subtitle="Smart Events™ geram valor tangível e mensurável para todos os envolvidos no ecossistema de eventos."
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {stakeholders.map((stakeholder, index) => (
              <Card
                key={index}
                title={stakeholder.title}
                icon={stakeholder.icon}
                className="flex flex-col h-full"
              >
                <div className="grid grid-cols-3 gap-2 mb-6 mt-2">
                  {stakeholder.metrics.map((metric, i) => (
                    <div key={i} className="bg-gray-50 p-3 rounded-lg text-center">
                      <p className="text-sm text-gray-500">{metric.label}</p>
                      <p className="text-legal-green font-bold text-xl">{metric.value}</p>
                    </div>
                  ))}
                </div>
                
                <ul className="styled-list mb-6 flex-grow">
                  {stakeholder.benefits.map((benefit, i) => (
                    <li key={i}>{benefit}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button 
              asChild
              className="bg-legal hover:bg-legal/90 text-white px-8 py-6 text-lg h-auto"
            >
              <Link to="/beneficios">
                Ver análise completa de ROI
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Maturity Model Section */}
      <section className="py-20 bg-white" id="maturidade">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Modelo de Maturidade Smart Events™"
            subtitle="Identifique em que nível seu evento está hoje e descubra o caminho para transformá-lo em um Smart Event™."
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
            {maturityLevels.map((level, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl ${
                  index === 3
                    ? "bg-legal text-white"
                    : index === 2
                    ? "bg-white border-2 border-legal"
                    : "bg-white"
                } transition-all hover:shadow-lg`}
              >
                <div className="flex items-center mb-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                    index === 3 ? "bg-white text-legal" : "bg-legal text-white"
                  }`}>
                    {index + 1}
                  </div>
                  <h3 className={`text-xl font-bold ${
                    index === 3 ? "text-white" : "text-legal"
                  }`}>
                    {level.level}
                  </h3>
                </div>
                <p className={`mb-4 ${
                  index === 3 ? "text-gray-100" : "text-gray-600"
                }`}>
                  {level.description}
                </p>
                <ul className={`space-y-2 ${
                  index === 3 ? "text-white" : ""
                }`}>
                  {level.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className={`w-5 h-5 mr-2 flex-shrink-0 ${
                        index === 3 ? "text-white" : "text-legal-cyan"
                      }`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Roadmap Section */}
      <section className="py-20 bg-legal-gray" id="roadmap">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Roadmap de Implantação Smart Events™"
            subtitle="Um plano estruturado de 90-180 dias para transformar seu evento em um Smart Event™ completo."
            center
          />

          <div className="max-w-4xl mx-auto mt-12">
            {/* Timeline visualization */}
            <div className="relative flex justify-between mb-12">
              <div className="absolute h-1 bg-gray-200 left-0 right-0 top-1/2 transform -translate-y-1/2"></div>
              
              {phases.map((phase, index) => (
                <div key={index} className="relative flex flex-col items-center z-10">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center 
                    ${index === 0 ? "bg-legal-cyan" : index === 1 ? "bg-legal" : "bg-legal-purple"} 
                    text-white`}>
                    {index + 1}
                  </div>
                  <p className="mt-2 font-semibold">{phase.name}</p>
                  <span className="text-sm text-gray-500">{phase.period}</span>
                </div>
              ))}
            </div>

            {/* Phase details */}
            {phases.map((phase, index) => (
              <div key={index} className="bg-legal-gray p-6 rounded-xl mb-8">
                <h3 className="text-2xl font-bold mb-2 text-legal flex items-center">
                  <span className="text-legal-cyan mr-2">{phase.name}</span>
                  {phase.title}
                </h3>
                <p className="text-gray-600 mb-4">{phase.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {phase.tasks.map((task, taskIndex) => (
                    <div key={taskIndex} className="flex items-center">
                      <CheckCircle className="text-legal-cyan mr-2" size={18} />
                      <span>{task}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparative Metrics Section */}
      <section className="py-20 bg-legal text-white" id="comparativo">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Tradicional vs Smart Event™"
            subtitle="Compare os resultados e descubra como os Smart Events™ superam eventos tradicionais em métricas-chave."
            center
            light
          />

          <div className="max-w-4xl mx-auto mt-12 bg-legal-black bg-opacity-30 rounded-xl p-6">
            <div className="grid grid-cols-4 gap-4 font-semibold border-b border-white/20 pb-4 mb-6">
              <div>Métrica</div>
              <div>Evento Tradicional</div>
              <div>Smart Event™</div>
              <div>Melhoria</div>
            </div>

            {comparativeMetrics.map((item, index) => (
              <div 
                key={index} 
                className={`grid grid-cols-4 gap-4 py-4 ${
                  index < comparativeMetrics.length - 1 ? "border-b border-white/10" : ""
                }`}
              >
                <div className="font-medium">{item.metric}</div>
                <div className="text-gray-300">{item.traditional}</div>
                <div className="text-legal-cyan font-medium">{item.smart}</div>
                <div className="text-legal-cyan font-bold">{item.improvement}</div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-xl mb-6">
              Os Smart Events™ proporcionam ROI mensurável para todos os stakeholders do ecossistema.
            </p>
            <Button 
              asChild
              className="bg-white text-legal hover:bg-white/90"
            >
              <Link to="/beneficios">
                Ver análise completa de ROI por stakeholder
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-legal-gray" id="casos">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Casos de Uso"
            subtitle="Como as tecnologias Smart Events™ se aplicam a diferentes tipos de eventos."
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {useCases.map((useCase, index) => (
              <Card
                key={index}
                title={useCase.title}
                subtitle={useCase.description}
                className="h-full"
              >
                <div className="mt-4">
                  <p className="font-medium text-legal mb-2">Principais benefícios:</p>
                  <ul className="styled-list">
                    {useCase.benefits.map((benefit, i) => (
                      <li key={i}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ESG Section */}
      <section className="py-20 bg-white" id="esg">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="ESG e Acessibilidade"
            subtitle="Smart Events™ seguem princípios ESG e promovem inclusão e eficiência ambiental."
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <Card
              title="Ambiental"
              icon={<Globe size={36} />}
              className="h-full"
            >
              <ul className="styled-list mt-4">
                <li>Credenciais 100% digitais eliminam plástico e impressões</li>
                <li>Sensores de consumo otimizam uso de energia e água</li>
                <li>Logística inteligente reduz emissões de carbono</li>
                <li>Relatórios digitais eliminam uso de papel</li>
              </ul>
            </Card>

            <Card
              title="Social"
              icon={<Users size={36} />}
              className="h-full"
            >
              <ul className="styled-list mt-4">
                <li>Acessibilidade digital para todos os públicos</li>
                <li>Suporte a LIBRAS via realidade aumentada</li>
                <li>Audiodescrição integrada para conteúdos</li>
                <li>Inclusão e diversidade em todas as ações</li>
              </ul>
            </Card>

            <Card
              title="Governança"
              icon={<Shield size={36} />}
              className="h-full"
            >
              <ul className="styled-list mt-4">
                <li>Dados protegidos com criptografia avançada</li>
                <li>Conformidade total com LGPD</li>
                <li>Métricas transparentes e auditáveis</li>
                <li>Rastreabilidade completa de processos</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 bg-legal-gray" id="integracoes">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Integrações com CRMs e ERPs"
            subtitle="Relatórios e leads direto no seu CRM, sem fricção."
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {integrations.map((integration, index) => (
              <Card
                key={index}
                title={integration.name}
                icon={<LinkIcon size={36} />}
                className="h-full"
              >
                <div className="mt-4 mb-4">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {integration.systems.map((system, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 bg-legal-gray rounded-full text-sm font-medium"
                      >
                        {system}
                      </span>
                    ))}
                  </div>
                  
                  <ul className="styled-list">
                    {integration.benefits.map((benefit, i) => (
                      <li key={i}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg mb-6">
              Precisa de uma integração específica? Nosso time de especialistas pode desenvolver soluções personalizadas.
            </p>
            <Button 
              asChild
              className="bg-legal hover:bg-legal/90 text-white"
            >
              <Link to="/contato">
                Fale com nossos especialistas
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Global Benchmarks */}
      <section className="py-20 bg-white" id="benchmarks">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Benchmarks Globais"
            subtitle="A LEGAL democratiza no Brasil as tecnologias já utilizadas nos maiores eventos do mundo."
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {benchmarks.map((benchmark, index) => (
              <Card
                key={index}
                title={benchmark.event}
                subtitle={benchmark.location}
                icon={<Target size={36} />}
                className="h-full"
              >
                <div className="mt-4">
                  <p className="font-medium text-legal mb-2">Smart Features:</p>
                  <ul className="styled-list">
                    {benchmark.smartFeatures.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CallToAction
        title="Quer levar seu evento para o próximo nível?"
        subtitle="Transforme seu evento em um Smart Event™ e ofereça uma experiência inovadora, conectada e mais lucrativa."
        buttonText="Fale com um especialista"
        buttonLink="/contato"
        secondaryButtonText="Baixe o whitepaper"
        secondaryButtonLink="#"
        background="gradient"
        fullWidth
      />

      {/* Final CTA Options */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Button
              asChild
              variant="outline"
              className="h-auto p-6 border-legal text-legal hover:bg-legal hover:text-white flex flex-col items-center text-center"
            >
              <Link to="/contato">
                <MessageCircle size={36} className="mb-4" />
                <span className="text-xl font-medium">Fale com um especialista</span>
                <span className="text-sm mt-2">Agende uma consulta personalizada</span>
              </Link>
            </Button>
            
            <Button
              asChild
              variant="outline"
              className="h-auto p-6 border-legal text-legal hover:bg-legal hover:text-white flex flex-col items-center text-center"
            >
              <Link to="#">
                <Download size={36} className="mb-4" />
                <span className="text-xl font-medium">Baixe o whitepaper completo</span>
                <span className="text-sm mt-2">Smart Events™: O Futuro dos Eventos no Brasil</span>
              </Link>
            </Button>
            
            <Button
              asChild
              variant="outline"
              className="h-auto p-6 border-legal text-legal hover:bg-legal hover:text-white flex flex-col items-center text-center"
            >
              <Link to="/smart-events">
                <Target size={36} className="mb-4" />
                <span className="text-xl font-medium">Acesse o Portal Smart Events™</span>
                <span className="text-sm mt-2">Conteúdos exclusivos e ferramentas</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default SmartEventsPage;
