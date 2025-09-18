import React from 'react';
import SEOHead from '@/components/SEOHead';
import WebPageSchema from '@/components/seo/WebPageSchema';
import BreadcrumbsSchema from '@/components/seo/BreadcrumbsSchema';
import ServiceSchema from '@/components/seo/ServiceSchema';
import OfferSchema from '@/components/seo/OfferSchema';
import { Link } from 'react-router-dom';
import { Wifi, Shield, Clock, Users, Headphones, Settings, Building2, Stethoscope } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import Card from '@/components/Card';
import CallToAction from '@/components/CallToAction';
import { Button } from '@/components/ui/button';

const AssinaturaPage = () => {
  const benefits = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Instalação Ágil',
      description: 'Ativação em até 24 horas com tecnologia plug-and-play'
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: 'Suporte 24/7',
      description: 'Atendimento especializado disponível todos os dias da semana'
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'Gestão Remota',
      description: 'Monitoramento e configuração remotos para máxima eficiência'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Segurança Avançada',
      description: 'Protocolos de segurança empresariais integrados'
    }
  ];

  const sectors = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: 'Empresas e Escritórios',
      description: 'Conectividade robusta para operações corporativas'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Lojas e Varejo',
      description: 'Internet estável para PDVs e sistemas de gestão'
    },
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: 'Clínicas e Consultórios',
      description: 'Conectividade confiável para sistemas médicos'
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: 'Indústrias e Filiais',
      description: 'Soluções escaláveis para múltiplas unidades'
    }
  ];

  const plans = [
    {
      name: 'SPEEDY 5G Básico',
      speed: '100 Mbps',
      price: 'A partir de R$ 299',
      features: [
        'Internet 5G dedicada',
        'Instalação inclusa',
        'Suporte técnico 24/7',
        'Gestão remota básica'
      ]
    },
    {
      name: 'SPEEDY 5G Profissional',
      speed: '300 Mbps',
      price: 'A partir de R$ 599',
      features: [
        'Internet 5G dedicada',
        'Instalação e configuração',
        'Suporte técnico prioritário',
        'Gestão remota avançada',
        'Backup de conectividade'
      ],
      highlighted: true
    },
    {
      name: 'SPEEDY 5G Enterprise',
      speed: '500+ Mbps',
      price: 'Sob consulta',
      features: [
        'Internet 5G dedicada',
        'Instalação customizada',
        'Suporte dedicado 24/7',
        'Gestão remota completa',
        'Redundância garantida',
        'SLA empresarial'
      ]
    }
  ];

  return (
    <>
      <SEOHead
        title="LEGAL Assinatura | Internet 5G Empresarial Recorrente"
        description="Conectividade empresarial recorrente com SPEEDY 5G. Planos mensais de internet 5G para empresas, lojas, escritórios, clínicas e indústrias. Instalação ágil e suporte 24/7."
        keywords="internet 5G empresarial, conectividade empresarial, SPEEDY 5G assinatura, internet para empresas, conectividade recorrente, internet corporativa 5G, LEGAL assinatura"
        url="https://operadora.legal/negocios/assinatura"
        image="https://operadora.legal/images/legal-assinatura-og.jpg"
        type="website"
      />
      <WebPageSchema
        name="LEGAL Assinatura - Internet 5G Empresarial"
        description="Conectividade empresarial recorrente com tecnologia 5G, instalação ágil e suporte 24/7"
        url="https://operadora.legal/negocios/assinatura"
      />
      <BreadcrumbsSchema />
      <ServiceSchema
        serviceName="LEGAL Assinatura - Internet 5G Empresarial"
        description="Conectividade empresarial recorrente com tecnologia 5G, instalação ágil e suporte 24/7"
        serviceType="TelecommunicationsService"
        areaServed={["Brasil"]}
        priceRange="R$ 299 - R$ 999+"
        url="https://operadora.legal/negocios/assinatura"
      />
      <OfferSchema
        name="Planos SPEEDY 5G"
        description="Planos mensais de internet 5G empresarial com instalação ágil e suporte 24/7"
        itemOffered={{
          type: "Service",
          name: "SPEEDY 5G",
          description: "Internet 5G empresarial",
          category: "Conectividade"
        }}
        seller={{
          name: "LEGAL",
          type: "Organization",
          url: "https://operadora.legal"
        }}
        priceSpecification={{
          price: 299,
          priceCurrency: "BRL"
        }}
        availability="InStock"
      />

      <div className="bg-background text-foreground font-unica">
        {/* Hero Section - Igual ao LEGAL AI */}
        <section className="relative min-h-screen flex items-center justify-center bg-legal text-white overflow-hidden">
          <div className="container mx-auto px-4 relative z-10 py-24">
            <div className="text-center max-w-5xl mx-auto">
              <header>
                <h1 className="text-5xl md:text-7xl font-black uppercase tracking-wider mb-6" style={{ letterSpacing: '0.05em' }}>
                  LEGAL <span className="text-legal-cyan">Assinatura</span>
                </h1>
                <p className="text-lg md:text-xl font-light max-w-4xl mx-auto mb-4">
                  <strong className="font-bold text-legal-cyan">Conectividade Empresarial Recorrente</strong> com Tecnologia 5G
                </p>
                <p className="text-base md:text-lg font-light max-w-3xl mx-auto mb-8 text-gray-200">
                  Planos mensais de internet 5G empresarial com instalação ágil, suporte 24/7 e gestão remota para empresas de todos os portes
                </p>
              </header>
              <nav className="flex flex-col sm:flex-row justify-center gap-4" role="navigation" aria-label="Ações principais">
                <Button asChild size="lg" className="bg-legal-cyan hover:bg-legal-cyan/90 text-legal font-bold">
                  <Link to="/contato?solution=assinatura-5g">Solicitar Proposta</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-legal hover:bg-white hover:text-legal/80">
                  <Link to="#planos">Ver Planos</Link>
                </Button>
              </nav>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="text-sm text-gray-400 mb-2">Scroll</span>
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <div className="w-1 h-2 bg-gray-400 rounded-full mt-2"></div>
            </div>
          </div>
        </section>

        {/* SPEEDY 5G Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <SectionTitle
              title="SPEEDY 5G Assinatura"
              subtitle="Internet 5G empresarial com conectividade robusta e confiável para o dia a dia do seu negócio"
              center
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
              {benefits.map((benefit, index) => (
                <Card
                  key={index}
                  title={benefit.title}
                  subtitle={benefit.description}
                  icon={benefit.icon}
                  className="text-center"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Target Sectors */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <SectionTitle
              title="Ideal para Diversos Setores"
              subtitle="Soluções flexíveis que se adaptam às necessidades específicas de cada segmento"
              center
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
              {sectors.map((sector, index) => (
                <Card
                  key={index}
                  title={sector.title}
                  subtitle={sector.description}
                  icon={sector.icon}
                  className="text-center bg-white"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Plans Section */}
        <section id="planos" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <SectionTitle
              title="Planos SPEEDY 5G"
              subtitle="Escolha o plano ideal para o seu negócio com conectividade garantida"
              center
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-xl shadow-lg p-8 ${
                    plan.highlighted ? 'ring-4 ring-legal scale-105' : ''
                  }`}
                >
                  {plan.highlighted && (
                    <div className="bg-legal text-white text-center py-2 px-4 rounded-lg mb-6 text-sm font-bold">
                      MAIS POPULAR
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-legal mb-2">{plan.name}</h3>
                  <div className="text-4xl font-black text-legal mb-2">{plan.speed}</div>
                  <div className="text-lg text-gray-600 mb-6">{plan.price}/mês</div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Wifi className="w-5 h-5 text-legal-cyan mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href={`/contato?solution=speedy-5g-${plan.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className={`block w-full text-center py-3 px-6 rounded-lg font-bold transition-colors ${
                      plan.highlighted
                        ? 'bg-legal text-white hover:bg-legal/90'
                        : 'bg-gray-100 text-legal hover:bg-legal hover:text-white'
                    }`}
                  >
                    Contratar Plano
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Specs */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <SectionTitle
              title="Especificações Técnicas"
              subtitle="Tecnologia de ponta para garantir a melhor experiência"
              center
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              <Card
                title="Tecnologia 5G"
                subtitle="Última geração de conectividade móvel com baixa latência e alta velocidade"
                icon={<Wifi className="w-8 h-8" />}
              />
              <Card
                title="SLA Garantido"
                subtitle="Acordo de nível de serviço com 99,5% de disponibilidade"
                icon={<Shield className="w-8 h-8" />}
              />
              <Card
                title="Monitoramento 24/7"
                subtitle="Acompanhamento contínuo da qualidade e performance da conexão"
                icon={<Settings className="w-8 h-8" />}
              />
            </div>
          </div>
        </section>

        <CallToAction
          title="Pronto para Conectar sua Empresa?"
          subtitle="Fale com nossos especialistas e descubra como o SPEEDY 5G Assinatura pode transformar a conectividade do seu negócio."
          buttonText="Solicitar Proposta"
          buttonLink="/contato?solution=assinatura-speedy-5g"
          secondaryButtonText="Falar com Especialista"
          secondaryButtonLink="/contato?type=consultoria-assinatura"
          background="gradient"
        />
      </div>
    </>
  );
};

export default AssinaturaPage;
