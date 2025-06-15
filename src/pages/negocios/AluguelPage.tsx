
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import SectionTitle from '@/components/SectionTitle';
import CallToAction from '@/components/CallToAction';
import { 
  Wifi, 
  Zap, 
  Shield, 
  Clock, 
  CheckCircle, 
  Laptop, 
  Router, 
  Smartphone,
  Monitor,
  Server,
  Radio,
  HardDrive,
  ArrowRight,
  Users,
  TrendingUp,
  Award,
  Headphones,
  MapPin,
  Gauge,
  Signal,
  Network,
  Building,
  Calendar,
  Star,
  Battery,
  Antenna,
  Cog
} from 'lucide-react';

const AluguelPage = () => {
  const mainSolutions = [
    {
      name: 'SPEEDY 5G',
      tagline: 'Internet 5G Plug-and-Play',
      description: 'Nossa solução SPEEDY 5G revoluciona o aluguel de internet para eventos corporativos. Com roteadores FWA 5G de última geração, oferecemos conectividade ultra-rápida, estável e de fácil instalação. Ideal para transmissões ao vivo, credenciamento digital, e operações que exigem internet premium temporária.',
      icon: <Zap className="w-8 h-8" />,
      features: [
        'Velocidade até 1 Gbps simétrica',
        'Latência ultra-baixa (<20ms)',
        'Instalação plug-and-play em minutos',
        'Cobertura nacional 5G ampliada',
        'Backup automático 4G integrado',
        'Monitoramento 24/7 com alertas',
        'Gestão remota centralizada',
        'Suporte a múltiplos dispositivos simultâneos'
      ],
      applications: [
        'Eventos corporativos de grande porte',
        'Feiras e exposições industriais',
        'Transmissões ao vivo profissionais',
        'Obras temporárias e canteiros',
        'Congressos médicos e científicos',
        'Festivais e eventos culturais'
      ],
      technicalSpecs: [
        'Bandas: n1, n3, n7, n8, n28, n78',
        'Agregação de portadoras: até 4CC',
        'MIMO: 4x4 DL / 2x2 UL',
        'Antenas: Omnidirecionais integradas',
        'Consumo: <50W',
        'Temperatura: -20°C a +60°C'
      ],
      useCases: [
        {
          title: 'Feira Industrial',
          description: 'Conectividade para 500+ expositores com demonstrações IoT em tempo real'
        },
        {
          title: 'Transmissão Esportiva',
          description: 'Upload de conteúdo 4K simultâneo para múltiplas plataformas'
        },
        {
          title: 'Congresso Médico',
          description: 'Telemedicina e demonstrações cirúrgicas remotas em alta definição'
        }
      ],
      color: 'from-legal to-legal-purple'
    },
    {
      name: 'BLUE6',
      tagline: 'WiFi 6 Profissional',
      description: 'O BLUE6 estabelece o novo padrão para Wi-Fi para congressos e eventos de alta densidade. Nossa infraestrutura de rede para eventos combina access points WiFi 6 de última geração com gestão inteligente, garantindo conectividade premium para milhares de usuários simultâneos.',
      icon: <Wifi className="w-8 h-8" />,
      features: [
        'Tecnologia WiFi 6 (802.11ax) avançada',
        'Suporte robusto a 1000+ dispositivos',
        'Roaming inteligente sem interrupções',
        'QoS dinâmico com priorização',
        'Gestão centralizada em tempo real',
        'Análise de performance detalhada',
        'Segurança WPA3 Enterprise',
        'Balanceamento automático de carga'
      ],
      applications: [
        'Congressos e convenções médicas',
        'Conferências de tecnologia',
        'Eventos esportivos internacionais',
        'Festivais de música e cultura',
        'Centros de convenções',
        'Hotéis e resorts para eventos'
      ],
      technicalSpecs: [
        'Padrão: IEEE 802.11ax (WiFi 6)',
        'Velocidade: até 9.6 Gbps combinado',
        'Frequências: 2.4GHz + 5GHz dual-band',
        'MIMO: 8x8 MU-MIMO',
        'Usuários simultâneos: até 512 por AP',
        'Cobertura: até 150m² por access point'
      ],
      useCases: [
        {
          title: 'Congresso de Cardiologia',
          description: '3.000 médicos conectados simultaneamente para streaming de cirurgias'
        },
        {
          title: 'Tech Conference',
          description: 'Demonstrações de AR/VR com baixa latência para 2.000 participantes'
        },
        {
          title: 'Festival de Música',
          description: 'Compartilhamento social instantâneo para 15.000 visitantes'
        }
      ],
      color: 'from-legal-purple to-legal-cyan'
    }
  ];

  const additionalEquipment = [
    { 
      name: 'Switches Gerenciáveis', 
      icon: <Server className="w-6 h-6" />, 
      description: 'Switches profissionais Cisco e HP para infraestrutura de rede robusta e escalável',
      specs: 'Até 48 portas Gigabit, PoE+, gestão SNMP'
    },
    { 
      name: 'Firewalls Empresariais', 
      icon: <Shield className="w-6 h-6" />, 
      description: 'Proteção avançada FortiGate e SonicWall para redes corporativas',
      specs: 'Throughput até 10Gbps, VPN SSL, filtro de conteúdo'
    },
    { 
      name: 'Notebooks Premium', 
      icon: <Laptop className="w-6 h-6" />, 
      description: 'Laptops Dell, HP e Lenovo de alta performance para equipes técnicas',
      specs: 'Intel i7/i9, 16-32GB RAM, SSD NVMe, tela 4K'
    },
    { 
      name: 'Totens Interativos', 
      icon: <Monitor className="w-6 h-6" />, 
      description: 'Displays touch 4K para credenciamento, wayfinding e informações',
      specs: 'Telas 32-75", touch capacitivo, Windows/Android'
    },
    { 
      name: 'Tablets Corporativos', 
      icon: <Smartphone className="w-6 h-6" />, 
      description: 'iPad Pro e Samsung Galaxy Tab para gestão móvel e controle',
      specs: 'Tela 12.9", 5G/WiFi 6, aplicativos customizados'
    },
    { 
      name: 'Rádios Comunicação', 
      icon: <Radio className="w-6 h-6" />, 
      description: 'Sistema Motorola e Hytera para comunicação da equipe operacional',
      specs: 'Alcance 5km, canais criptografados, GPS integrado'
    },
    { 
      name: 'Servidores Locais', 
      icon: <HardDrive className="w-6 h-6" />, 
      description: 'Infraestrutura Dell PowerEdge para dados locais e aplicações críticas',
      specs: 'Processadores Xeon, até 1TB RAM, storage SSD'
    },
    { 
      name: 'Headsets Profissionais', 
      icon: <Headphones className="w-6 h-6" />, 
      description: 'Equipamentos Sennheiser e Audio-Technica para transmissões',
      specs: 'Cancelamento de ruído, wireless, qualidade broadcast'
    }
  ];

  const detailedBenefits = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Implementação Express',
      description: 'Instalação e configuração completa em até 24 horas',
      details: 'Nossa equipe especializada realiza site survey, instalação de equipamentos, configuração de rede e testes de performance em tempo recorde. Processo otimizado para eventos com cronogramas apertados.',
      keyPoints: [
        'Site survey gratuito em até 48h',
        'Instalação noturna para não interferir no evento',
        'Testes de stress antes do início do evento',
        'Documentação técnica completa entregue'
      ]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Suporte Técnico 24/7',
      description: 'Equipe técnica especializada disponível durante todo o evento',
      details: 'Monitoramento proativo com NOC dedicado, suporte on-site durante o evento e resposta a incidentes em menos de 15 minutos. Garantimos uptime superior a 99.9%.',
      keyPoints: [
        'NOC (Network Operations Center) dedicado',
        'Técnicos on-site durante todo o evento',
        'Tempo de resposta < 15 minutos',
        'Ferramentas de monitoramento em tempo real'
      ]
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Equipamentos de Ponta',
      description: 'Sempre as tecnologias mais recentes e confiáveis do mercado',
      details: 'Investimos continuamente em equipamentos de marcas líderes mundiais. Todo nosso inventário é renovado anualmente, garantindo performance máxima e compatibilidade com as últimas tecnologias.',
      keyPoints: [
        'Equipamentos renovados anualmente',
        'Marcas líderes: Cisco, Huawei, HP, Dell',
        'Certificações internacionais de qualidade',
        'Backup de equipamentos sempre disponível'
      ]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'ROI Otimizado',
      description: 'Máximo retorno com investimento mínimo em infraestrutura',
      details: 'Evite custos de aquisição, manutenção e obsolescência. Nossa locação de internet temporária oferece tecnologia de ponta com previsibilidade de custos e flexibilidade total.',
      keyPoints: [
        'Sem investimento inicial em equipamentos',
        'Custos previsíveis e transparentes',
        'Escalabilidade conforme demanda',
        'Manutenção e atualizações incluídas'
      ]
    }
  ];

  const industryUseCases = [
    {
      industry: 'Saúde & Medicina',
      icon: <Building className="w-6 h-6" />,
      description: 'Soluções especializadas para eventos médicos e hospitalares',
      applications: [
        'Congressos médicos com telemedicina',
        'Demonstrações cirúrgicas ao vivo',
        'Credenciamento médico seguro',
        'Streaming de palestras científicas'
      ],
      requirements: 'Baixa latência, alta segurança, compliance LGPD/HIPAA'
    },
    {
      industry: 'Tecnologia & Inovação',
      icon: <Cog className="w-6 h-6" />,
      description: 'Infraestrutura para eventos tech e demonstrações IoT',
      applications: [
        'Hackathons e competições',
        'Demonstrações de IoT e 5G',
        'Realidade virtual e aumentada',
        'Startups e pitch competitions'
      ],
      requirements: 'Ultra-baixa latência, alta largura de banda, IPv6'
    },
    {
      industry: 'Entretenimento & Cultura',
      icon: <Star className="w-6 h-6" />,
      description: 'Conectividade para festivais, shows e eventos culturais',
      applications: [
        'Festivais de música e arte',
        'Transmissões ao vivo de shows',
        'Aplicativos de engajamento',
        'Cashless payments e ingressos digitais'
      ],
      requirements: 'Alta densidade de usuários, QoS para streaming'
    },
    {
      industry: 'Corporativo & B2B',
      icon: <Users className="w-6 h-6" />,
      description: 'Soluções para eventos empresariais e feiras comerciais',
      applications: [
        'Convenções de vendas',
        'Feiras industriais B2B',
        'Workshops e treinamentos',
        'Videoconferências híbridas'
      ],
      requirements: 'Segurança empresarial, gestão de bandwidth'
    }
  ];

  const technicalAdvantages = [
    {
      title: 'Redundância Total',
      description: 'Múltiplos links e equipamentos de backup',
      icon: <Network className="w-6 h-6" />
    },
    {
      title: 'Monitoramento Proativo',
      description: 'NOC 24/7 com alertas automatizados',
      icon: <Gauge className="w-6 h-6" />
    },
    {
      title: 'Escalabilidade Dinâmica',
      description: 'Ajuste de capacidade em tempo real',
      icon: <Signal className="w-6 h-6" />
    },
    {
      title: 'Segurança Multicamada',
      description: 'Firewall, VPN e criptografia avançada',
      icon: <Shield className="w-6 h-6" />
    }
  ];

  const stats = [
    { number: '5000+', label: 'Eventos Conectados', description: 'Mais de 5 mil eventos com conectividade garantida em todo o Brasil' },
    { number: '99.9%', label: 'Uptime Garantido', description: 'Disponibilidade de rede com SLA premium e compensação por indisponibilidade' },
    { number: '24h', label: 'Suporte Especializado', description: 'Equipe técnica certificada disponível 24 horas por dia durante eventos' },
    { number: '1M+', label: 'Dispositivos Conectados', description: 'Mais de 1 milhão de dispositivos já conectados com sucesso às nossas redes' }
  ];

  return (
    <>
      <Helmet>
        <title>LEGAL ALUGUE | Locação de Conectividade e Tecnologia para Eventos</title>
        <meta
          name="description"
          content="Alugue conectividade e tecnologia premium para eventos corporativos com a LEGAL. Equipamentos de ponta, instalação rápida e suporte 24/7 para o sucesso do seu evento."
        />
        <meta name="keywords" content="aluguel de internet para eventos, locação de internet temporária, soluções de rede para eventos, infraestrutura de TI para feiras, Wi-Fi para congressos, equipamentos de TI para aluguel, locação conectividade, aluguel roteador 5G, WiFi 6 eventos" />
        <meta property="og:title" content="LEGAL ALUGUE | Locação de Conectividade e Tecnologia para Eventos" />
        <meta property="og:description" content="Aluguel de equipamentos premium para eventos: 5G, WiFi 6, notebooks, switches e mais. Instalação em 24h e suporte técnico especializado." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://legal.com.br/negocios/alugue" />
        <meta property="og:image" content="https://legal.com.br/images/legal-alugue-og.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="LEGAL ALUGUE | Locação de Conectividade para Eventos" />
        <meta name="twitter:description" content="Equipamentos premium para eventos: 5G, WiFi 6, infraestrutura completa com suporte 24/7." />
        <meta name="twitter:image" content="https://legal.com.br/images/legal-alugue-twitter.jpg" />
        <link rel="canonical" href="https://legal.com.br/negocios/alugue" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "LEGAL ALUGUE",
            "description": "Locação de equipamentos de conectividade e tecnologia para eventos corporativos",
            "provider": {
              "@type": "Organization",
              "name": "LEGAL",
              "url": "https://legal.com.br"
            },
            "serviceType": "Locação de Equipamentos Tecnológicos",
            "areaServed": {
              "@type": "Country",
              "name": "Brasil"
            },
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock",
              "priceCurrency": "BRL"
            }
          })}
        </script>
      </Helmet>

      <div className="bg-background text-foreground font-unica">
        {/* Hero Section */}
        <section className="py-24 md:py-32 text-center bg-gradient-to-br from-legal to-legal-purple text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" aria-hidden="true">
            <Router className="absolute top-10 left-10 w-32 h-32 text-white/10 animate-pulse" />
            <Wifi className="absolute bottom-10 right-10 w-24 h-24 text-white/10 animate-pulse animation-delay-500" />
            <Server className="absolute top-1/3 right-20 w-28 h-28 text-white/10 animate-ping" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <header>
              <h1 className="text-5xl md:text-7xl font-black uppercase tracking-wider mb-6 animate-fade-in" style={{ letterSpacing: '0.05em' }}>
                LEGAL ALUGUE
              </h1>
              <p className="text-lg md:text-xl font-light max-w-4xl mx-auto mb-8 animate-fade-in animation-delay-300">
                <strong className="font-bold text-legal-cyan">Aluguel de internet para eventos</strong> e 
                <strong className="font-bold text-legal-cyan"> locação de internet temporária</strong> com tecnologia de ponta. 
                Oferecemos <strong>soluções de rede para eventos</strong>, <strong>infraestrutura de TI para feiras</strong> 
                e <strong>Wi-Fi para congressos</strong> com instalação rápida e suporte técnico especializado 24/7.
              </p>
            </header>
            <nav className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in animation-delay-600" role="navigation" aria-label="Ações principais">
              <Button asChild size="lg" className="bg-legal-cyan hover:bg-legal-cyan/90 text-legal font-bold">
                <Link to="/contato?solution=legal-alugue" title="Solicite um orçamento para locação">Solicitar Orçamento</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-legal">
                <Link to="#solucoes" title="Conheça nossas soluções de locação">Ver Soluções</Link>
              </Button>
            </nav>
          </div>
        </section>

        {/* Main Solutions - Expanded */}
        <section id="solucoes" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <SectionTitle 
              title="Nossas Principais Soluções"
              subtitle="Equipamentos de TI para aluguel que garantem conectividade premium e performance máxima para eventos de qualquer porte e complexidade."
              center
            />
            
            <div className="space-y-16">
              {mainSolutions.map((solution, index) => (
                <Card key={index} className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
                  <div className={`h-2 bg-gradient-to-r ${solution.color}`}></div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Column - Main Info */}
                    <div className="p-8">
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`p-4 rounded-xl bg-gradient-to-r ${solution.color} text-white`}>
                          {solution.icon}
                        </div>
                        <div>
                          <h3 className="text-3xl font-black text-legal uppercase tracking-wide">
                            {solution.name}
                          </h3>
                          <p className="text-lg font-medium text-legal-purple">{solution.tagline}</p>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                        {solution.description}
                      </p>

                      {/* Technical Specifications */}
                      <div className="mb-8">
                        <h4 className="text-xl font-bold text-legal mb-4 flex items-center">
                          <Cog className="w-5 h-5 mr-2" />
                          Especificações Técnicas
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {solution.technicalSpecs.map((spec, specIndex) => (
                            <div key={specIndex} className="flex items-start text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
                              <Antenna className="w-4 h-4 text-legal-cyan mr-2 mt-0.5 flex-shrink-0" />
                              {spec}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Column - Features & Applications */}
                    <div className="p-8 bg-gray-50">
                      {/* Features */}
                      <div className="mb-8">
                        <h4 className="text-xl font-bold text-legal mb-4 flex items-center">
                          <CheckCircle className="w-5 h-5 mr-2" />
                          Características Avançadas
                        </h4>
                        <div className="grid grid-cols-1 gap-3">
                          {solution.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center text-sm text-gray-700 bg-white p-3 rounded-lg">
                              <CheckCircle className="w-4 h-4 text-legal-cyan mr-3 flex-shrink-0" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Applications */}
                      <div className="mb-8">
                        <h4 className="text-xl font-bold text-legal-purple mb-4 flex items-center">
                          <MapPin className="w-5 h-5 mr-2" />
                          Aplicações Ideais
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {solution.applications.map((app, appIndex) => (
                            <span key={appIndex} className="bg-legal-purple/10 text-legal-purple px-4 py-2 rounded-full text-sm font-medium border border-legal-purple/20">
                              {app}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Use Cases */}
                      <div>
                        <h4 className="text-xl font-bold text-legal mb-4 flex items-center">
                          <Star className="w-5 h-5 mr-2" />
                          Casos de Sucesso
                        </h4>
                        <div className="space-y-4">
                          {solution.useCases.map((useCase, useCaseIndex) => (
                            <div key={useCaseIndex} className="bg-white p-4 rounded-lg border-l-4 border-legal-cyan">
                              <h5 className="font-bold text-legal mb-2">{useCase.title}</h5>
                              <p className="text-sm text-gray-600">{useCase.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Use Cases */}
        <section className="py-16 bg-gradient-to-br from-legal/5 to-legal-purple/5">
          <div className="container mx-auto px-4">
            <SectionTitle 
              title="Soluções por Segmento"
              subtitle="Infraestrutura de TI especializada para diferentes tipos de eventos e necessidades específicas de cada setor."
              center
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {industryUseCases.map((industry, index) => (
                <Card key={index} className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-legal text-white rounded-lg flex items-center justify-center">
                      {industry.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-legal">{industry.industry}</h3>
                      <p className="text-gray-600 text-sm">{industry.description}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-bold text-legal-purple mb-2">Aplicações Específicas:</h4>
                    <ul className="space-y-1">
                      {industry.applications.map((app, appIndex) => (
                        <li key={appIndex} className="text-sm text-gray-700 flex items-center">
                          <ArrowRight className="w-3 h-3 text-legal-cyan mr-2" />
                          {app}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-legal/5 p-3 rounded-lg">
                    <h4 className="font-bold text-legal text-sm mb-1">Requisitos Técnicos:</h4>
                    <p className="text-xs text-gray-600">{industry.requirements}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Benefits */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <SectionTitle 
              title="Diferenciais LEGAL ALUGUE"
              subtitle="Por que somos a escolha preferida para locação de equipamentos de TI e soluções de conectividade temporária no Brasil."
              center
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {detailedBenefits.map((benefit, index) => (
                <Card key={index} className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-legal">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-legal">{benefit.title}</h3>
                      <p className="text-legal-purple font-medium">{benefit.description}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {benefit.details}
                  </p>
                  
                  <div>
                    <h4 className="font-bold text-legal mb-3">Pontos-chave:</h4>
                    <ul className="space-y-2">
                      {benefit.keyPoints.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-legal-cyan mr-2 mt-0.5 flex-shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Advantages */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container mx-auto px-4">
            <SectionTitle 
              title="Vantagens Tecnológicas"
              subtitle="Infraestrutura robusta e monitoramento avançado garantem performance superior em todos os eventos."
              center
            />
            
            <div className="grid gri-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {technicalAdvantages.map((advantage, index) => (
                <Card key={index} className="text-center p-6 border-0 shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-legal to-legal-purple text-white rounded-full flex items-center justify-center">
                    {advantage.icon}
                  </div>
                  <h3 className="text-lg font-bold text-legal mb-2">{advantage.title}</h3>
                  <p className="text-gray-600 text-sm">{advantage.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Equipment - Enhanced */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <SectionTitle 
              title="Equipamentos Complementares"
              subtitle="Infraestrutura completa de TI para eventos de qualquer complexidade, com especificações técnicas detalhadas e suporte especializado."
              center
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {additionalEquipment.map((equipment, index) => (
                <Card key={index} className="text-center p-6 border-0 shadow-md hover:shadow-lg transition-all duration-300 group">
                  <div className="w-16 h-16 mx-auto mb-4 bg-legal text-white rounded-full flex items-center justify-center group-hover:bg-legal-purple transition-colors">
                    {equipment.icon}
                  </div>
                  <h3 className="text-lg font-bold text-legal mb-2">{equipment.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{equipment.description}</p>
                  <div className="bg-legal/5 p-2 rounded text-xs text-gray-500 border border-legal/10">
                    <strong>Specs:</strong> {equipment.specs}
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center bg-gradient-to-r from-legal/5 to-legal-purple/5 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-legal mb-4">Equipamento Não Listado?</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Nossa equipe especializada pode providenciar praticamente qualquer solução tecnológica para seu evento. 
                Temos parcerias com os principais fornecedores globais e capacidade de importação expressa.
              </p>
              <Button asChild className="bg-legal hover:bg-legal/90 text-white">
                <Link to="/contato?solution=equipamentos-especiais">
                  Solicitar Equipamento Específico
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-br from-legal/5 to-legal-cyan/5">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <article key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-black text-legal mb-2" aria-label={`${stat.number} ${stat.label}`}>
                    {stat.number}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{stat.label}</h3>
                  <p className="text-sm text-gray-600">{stat.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section - Enhanced */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <SectionTitle 
              title="Nosso Processo Especializado"
              subtitle="Do planejamento à desmontagem, cuidamos de toda a infraestrutura tecnológica com metodologia comprovada e equipe certificada."
              center
            />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { 
                  step: '01', 
                  title: 'Análise Técnica', 
                  description: 'Site survey detalhado, dimensionamento de capacidade e análise de requisitos específicos',
                  details: ['Mapeamento do local', 'Cálculo de usuários simultâneos', 'Análise de interferências', 'Definição de SLAs']
                },
                { 
                  step: '02', 
                  title: 'Planejamento Avançado', 
                  description: 'Projeto técnico completo, cronograma detalhado e aprovisionamento de recursos',
                  details: ['Projeto de rede', 'Timeline de instalação', 'Plano de contingência', 'Testes de aceitação']
                },
                { 
                  step: '03', 
                  title: 'Instalação Express', 
                  description: 'Montagem profissional, configuração otimizada e testes rigorosos em até 24h',
                  details: ['Instalação física', 'Configuração de equipamentos', 'Testes de performance', 'Documentação técnica']
                },
                { 
                  step: '04', 
                  title: 'Suporte Premium', 
                  description: 'Monitoramento 24/7, suporte on-site e manutenção proativa durante todo o evento',
                  details: ['NOC dedicado', 'Técnicos on-site', 'Monitoramento proativo', 'Suporte 24/7']
                }
              ].map((process, index) => (
                <Card key={index} className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-legal to-legal-purple text-white rounded-full flex items-center justify-center text-xl font-bold">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-bold text-legal mb-2">{process.title}</h3>
                  <p className="text-gray-600 mb-4">{process.description}</p>
                  <div className="text-left">
                    <ul className="space-y-1">
                      {process.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="text-xs text-gray-500 flex items-center">
                          <CheckCircle className="w-3 h-3 text-legal-cyan mr-2" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <CallToAction
          title="Pronto para Conectar seu Evento?"
          subtitle="Nossa equipe especializada está pronta para dimensionar a solução perfeita para seu evento. Oferecemos orçamento detalhado, site survey gratuito e consultoria técnica especializada."
          buttonText="Solicitar Orçamento Personalizado"
          buttonLink="/contato?solution=legal-alugue"
          secondaryButtonText="Ver Outros Negócios"
          secondaryButtonLink="/negocios"
          background="gradient"
        />
      </div>
    </>
  );
};

export default AluguelPage;
