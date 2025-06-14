
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
  Headphones
} from 'lucide-react';

const AluguelPage = () => {
  const mainSolutions = [
    {
      name: 'SPEEDY 5G',
      tagline: 'Internet 5G Plug-and-Play',
      description: 'Roteadores FWA 5G para internet ultra-rápida, estável e de fácil instalação. Ideal para eventos, feiras, transmissões e operações temporárias que exigem conectividade premium.',
      icon: <Zap className="w-8 h-8" />,
      features: [
        'Velocidade até 1 Gbps',
        'Latência ultra-baixa',
        'Instalação em minutos',
        'Cobertura nacional 5G',
        'Backup automático 4G',
        'Monitoramento 24/7'
      ],
      applications: ['Eventos corporativos', 'Feiras e exposições', 'Transmissões ao vivo', 'Obras temporárias'],
      color: 'from-legal to-legal-purple'
    },
    {
      name: 'BLUE6',
      tagline: 'WiFi 6 Profissional',
      description: 'Access points de última geração com WiFi 6, garantindo cobertura de alta densidade e performance premium para eventos de qualquer tamanho e complexidade.',
      icon: <Wifi className="w-8 h-8" />,
      features: [
        'Tecnologia WiFi 6 (802.11ax)',
        'Suporte a 1000+ dispositivos',
        'Roaming inteligente',
        'QoS avançado',
        'Gestão centralizada',
        'Análise de performance'
      ],
      applications: ['Congressos médicos', 'Conferências tech', 'Eventos esportivos', 'Festivais'],
      color: 'from-legal-purple to-legal-cyan'
    }
  ];

  const additionalEquipment = [
    { name: 'Switches Gerenciáveis', icon: <Server className="w-6 h-6" />, description: 'Switches profissionais para infraestrutura de rede robusta' },
    { name: 'Firewalls Empresariais', icon: <Shield className="w-6 h-6" />, description: 'Proteção avançada para redes corporativas' },
    { name: 'Notebooks Premium', icon: <Laptop className="w-6 h-6" />, description: 'Laptops de alta performance para equipes técnicas' },
    { name: 'Totens Interativos', icon: <Monitor className="w-6 h-6" />, description: 'Displays touch para credenciamento e informações' },
    { name: 'Tablets Corporativos', icon: <Smartphone className="w-6 h-6" />, description: 'Dispositivos móveis para gestão e controle' },
    { name: 'Rádios Comunicação', icon: <Radio className="w-6 h-6" />, description: 'Sistema de comunicação para equipes operacionais' },
    { name: 'Servidores Locais', icon: <HardDrive className="w-6 h-6" />, description: 'Infraestrutura de dados local para eventos' },
    { name: 'Headsets Profissionais', icon: <Headphones className="w-6 h-6" />, description: 'Equipamentos de áudio para transmissões' }
  ];

  const whyChooseAluguel = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Implementação Rápida',
      description: 'Instalação e configuração em até 24 horas'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Suporte 24/7',
      description: 'Equipe técnica disponível durante todo o evento'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Equipamentos Premium',
      description: 'Sempre as últimas tecnologias do mercado'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Custo-Benefício',
      description: 'Sem investimento inicial, apenas locação'
    }
  ];

  const stats = [
    { number: '5000+', label: 'Eventos Atendidos', description: 'Mais de 5 mil eventos com conectividade garantida' },
    { number: '99.9%', label: 'Uptime Garantido', description: 'Disponibilidade de rede com SLA premium' },
    { number: '24h', label: 'Suporte Técnico', description: 'Equipe especializada disponível sempre' },
    { number: '1M+', label: 'Dispositivos Conectados', description: 'Mais de 1 milhão de dispositivos já conectados' }
  ];

  return (
    <>
      <Helmet>
        <title>LEGAL ALUGUE | Locação de Conectividade e Tecnologia para Eventos</title>
        <meta
          name="description"
          content="Alugue conectividade e tecnologia premium para eventos corporativos com a LEGAL. Equipamentos de ponta, instalação rápida e suporte 24/7 para o sucesso do seu evento."
        />
        <meta name="keywords" content="locação equipamentos eventos, aluguel roteador 5G, WiFi 6 eventos, SPEEDY 5G, BLUE6, conectividade eventos, infraestrutura TI temporária, switches aluguel, notebooks corporativos" />
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
        <link rel="alternate" hrefLang="pt-BR" href="https://legal.com.br/negocios/alugue" />
        <link rel="alternate" hrefLang="x-default" href="https://legal.com.br/negocios/alugue" />
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
                <strong className="font-bold text-legal-cyan">Locação de Conectividade e Tecnologia</strong> para eventos corporativos. 
                Equipamentos premium, instalação rápida e suporte técnico especializado 24/7.
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

        {/* Main Solutions */}
        <section id="solucoes" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <SectionTitle 
              title="Nossas Principais Soluções"
              subtitle="Conectividade de ponta para eventos que exigem performance máxima e confiabilidade total."
              center
            />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {mainSolutions.map((solution, index) => (
                <Card key={index} className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className={`h-2 bg-gradient-to-r ${solution.color}`}></div>
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4 mb-3">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${solution.color} text-white`}>
                        {solution.icon}
                      </div>
                      <div>
                        <CardTitle className="text-2xl font-black text-legal uppercase tracking-wide">
                          {solution.name}
                        </CardTitle>
                        <p className="text-sm font-medium text-legal-purple">{solution.tagline}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {solution.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-bold text-legal mb-3">Características Técnicas:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {solution.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                            <CheckCircle className="w-4 h-4 text-legal-cyan mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-bold text-legal mb-3">Aplicações Ideais:</h4>
                      <div className="flex flex-wrap gap-2">
                        {solution.applications.map((app, appIndex) => (
                          <span key={appIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Equipment */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container mx-auto px-4">
            <SectionTitle 
              title="Outros Equipamentos Sob Demanda"
              subtitle="Infraestrutura completa de TI para eventos de qualquer complexidade, personalizada conforme sua necessidade."
              center
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {additionalEquipment.map((equipment, index) => (
                <Card key={index} className="text-center p-6 border-0 shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-4 bg-legal text-white rounded-full flex items-center justify-center">
                    {equipment.icon}
                  </div>
                  <h3 className="text-lg font-bold text-legal mb-2">{equipment.name}</h3>
                  <p className="text-gray-600 text-sm">{equipment.description}</p>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Não encontrou o equipamento que precisa? Nossa equipe pode providenciar praticamente qualquer solução tecnológica para seu evento.
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

        {/* Why Choose Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <SectionTitle 
              title="Por Que Escolher LEGAL ALUGUE?"
              subtitle="Mais de uma década conectando eventos com tecnologia de ponta e serviço especializado."
              center
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {whyChooseAluguel.map((item, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 bg-legal text-white rounded-full flex items-center justify-center group-hover:bg-legal-purple transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-legal mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
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

        {/* Process Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <SectionTitle 
              title="Como Funciona o Processo"
              subtitle="Do planejamento à desmontagem, cuidamos de toda a infraestrutura tecnológica do seu evento."
              center
            />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Análise', description: 'Avaliamos suas necessidades e dimensionamos a solução ideal' },
                { step: '02', title: 'Planejamento', description: 'Definimos cronograma, equipamentos e configurações técnicas' },
                { step: '03', title: 'Instalação', description: 'Montamos e configuramos toda infraestrutura em até 24h' },
                { step: '04', title: 'Suporte', description: 'Acompanhamos o evento com suporte técnico especializado' }
              ].map((process, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-legal to-legal-purple text-white rounded-full flex items-center justify-center text-xl font-bold">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-bold text-legal mb-2">{process.title}</h3>
                  <p className="text-gray-600">{process.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <CallToAction
          title="Pronto para Conectar seu Evento?"
          subtitle="Nossa equipe está pronta para dimensionar a solução perfeita para seu evento. Fale conosco e receba um orçamento personalizado em até 24 horas."
          buttonText="Solicitar Orçamento Agora"
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
