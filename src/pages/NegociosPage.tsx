
import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '@/components/SectionTitle';
import CallToAction from '@/components/CallToAction';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Zap, Wifi, Cpu, Package, Users, TrendingUp, Shield, Clock } from 'lucide-react';

const businessUnits = [
  {
    id: 'aero',
    name: 'LEGAL AERO',
    tagline: 'Conectividade que Voa Alto',
    description: 'Soluções aéreas inovadoras com drones para foto, filmagem, delivery e limpeza de estruturas. Transforme sua perspectiva com tecnologia de ponta.',
    icon: <Zap className="w-8 h-8" />,
    features: ['Foto e Filmagem 4K/8K', 'Delivery Inteligente', 'Limpeza de Estruturas', 'Inspeções Técnicas'],
    link: '/negocios/aero',
    color: 'from-blue-500 to-purple-600'
  },
  {
    id: 'ai',
    name: 'LEGAL AI',
    tagline: 'Inteligência que Conecta',
    description: 'Plataforma de IA integrada ao SmartEvents com HubX, LinkAI, FacePass e FitScore™. Transforme dados em insights estratégicos.',
    icon: <Cpu className="w-8 h-8" />,
    features: ['HubX Analytics', 'LinkAI Networking', 'FacePass Biométrico', 'FitScore™ RH'],
    link: '/negocios/ai',
    color: 'from-purple-500 to-pink-600'
  },
  {
    id: 'alugue',
    name: 'LEGAL ALUGUE',
    tagline: 'Equipamentos Quando Precisar',
    description: 'Aluguel de equipamentos tecnológicos para eventos e produtividade. Acesso à tecnologia de ponta sem investimento inicial.',
    icon: <Package className="w-8 h-8" />,
    features: ['Equipamentos Premium', 'Suporte Técnico 24/7', 'Logística Integrada', 'Manutenção Inclusa'],
    link: '/negocios/alugue',
    color: 'from-green-500 to-teal-600'
  },
  {
    id: 'assinatura',
    name: 'LEGAL ASSINATURA',
    tagline: 'Conectividade Contínua',
    description: 'Fixed Wireless Access (FWA) de alta performance para empresas. Internet ultra-rápida e estável para seu negócio crescer.',
    icon: <Wifi className="w-8 h-8" />,
    features: ['FWA Ultra-Rápido', 'SLA Garantido', 'Suporte Especializado', 'Escalabilidade Total'],
    link: '/negocios/assinatura',
    color: 'from-orange-500 to-red-600'
  }
];

const whyChooseLegal = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Confiabilidade',
    description: 'Soluções testadas e aprovadas por grandes empresas brasileiras'
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: 'Crescimento',
    description: 'Tecnologia que escala junto com seu negócio'
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Suporte',
    description: 'Equipe especializada disponível quando você precisar'
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: 'Agilidade',
    description: 'Implementação rápida e resultados imediatos'
  }
];

const NegociosPage = () => {
  return (
    <>
      <Helmet>
        <title>Negócios LEGAL | Soluções Tecnológicas para Empresas</title>
        <meta name="description" content="Descubra as unidades de negócio da LEGAL: AERO (drones), AI (inteligência artificial), ALUGUE (equipamentos) e ASSINATURA (conectividade FWA). Tecnologia que transforma empresas." />
        <meta name="keywords" content="LEGAL negócios, soluções empresariais, drones, inteligência artificial, aluguel equipamentos, conectividade FWA, tecnologia empresarial" />
        <meta property="og:title" content="Negócios LEGAL | Soluções Tecnológicas para Empresas" />
        <meta property="og:description" content="Transforme seu negócio com nossas 4 unidades: AERO, AI, ALUGUE e ASSINATURA. Tecnologia de ponta para empresas que querem crescer." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/negocios" />
      </Helmet>

      <div className="bg-background text-foreground font-unica">
        {/* Hero Section */}
        <section className="py-24 md:py-32 text-center bg-gradient-to-br from-legal to-legal-purple text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 bg-legal-cyan rounded-full animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-24 h-24 bg-white rounded-full animate-ping"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-legal-cyan rounded-full animate-bounce"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-wider mb-6 animate-fade-in" style={{ letterSpacing: '0.05em' }}>
              Negócios LEGAL
            </h1>
            <p className="text-lg md:text-xl font-light max-w-4xl mx-auto mb-8 animate-fade-in animation-delay-300">
              Conectamos <strong className="font-bold text-legal-cyan">pessoas, negócios e tecnologia</strong> através de 4 unidades especializadas. 
              Descubra como a LEGAL pode impulsionar o crescimento da sua empresa com soluções inovadoras e resultados comprovados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-600">
              <Button asChild size="lg" className="bg-legal-cyan hover:bg-legal-cyan/90 text-legal font-bold">
                <Link to="#unidades">Conhecer Nossas Unidades</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-legal hover:bg-white hover:text-legal/80">
                <Link to="/contato">Falar com Especialista</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Business Units Section */}
        <section id="unidades" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <SectionTitle 
              title="Nossas Unidades de Negócio"
              subtitle="Quatro pilares tecnológicos que transformam a forma como empresas crescem e se conectam no mercado brasileiro."
              center
            />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {businessUnits.map((unit) => (
                <Card key={unit.id} className="group overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className={`h-2 bg-gradient-to-r ${unit.color}`}></div>
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4 mb-3">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${unit.color} text-white`}>
                        {unit.icon}
                      </div>
                      <div>
                        <CardTitle className="text-2xl font-black text-legal uppercase tracking-wide">
                          {unit.name}
                        </CardTitle>
                        <p className="text-sm font-medium text-legal-purple">{unit.tagline}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {unit.description}
                    </p>
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {unit.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-700">
                          <div className="w-2 h-2 bg-legal-cyan rounded-full mr-2 flex-shrink-0"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                    <Button asChild className={`w-full bg-gradient-to-r ${unit.color} hover:opacity-90 text-white font-bold group-hover:scale-105 transition-transform`}>
                      <Link to={unit.link} className="flex items-center justify-center">
                        Explorar {unit.name}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose LEGAL Section */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container mx-auto px-4">
            <SectionTitle 
              title="Por Que Escolher a LEGAL?"
              subtitle="Mais de uma década conectando empresas ao futuro com tecnologia de ponta e resultados comprovados."
              center
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {whyChooseLegal.map((item, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 bg-legal text-white rounded-full flex items-center justify-center group-hover:bg-legal-purple transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-legal mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-legal mb-4">
                Conectamos <span className="text-legal-cyan">1 milhão de pessoas</span> até 2030
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Nossa meta audaciosa (BHAG) é transformar o mercado brasileiro, criando conexões que geram valor real para pessoas, negócios e tecnologia.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-black text-legal-purple">10+</div>
                  <div className="text-sm text-gray-600">Anos de Experiência</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-legal-purple">1000+</div>
                  <div className="text-sm text-gray-600">Eventos Conectados</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-legal-purple">98%</div>
                  <div className="text-sm text-gray-600">Satisfação do Cliente</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <CallToAction
          title="Pronto para Transformar seu Negócio?"
          subtitle="Descubra como nossas unidades de negócio podem impulsionar o crescimento da sua empresa. Entre em contato com nossos especialistas e receba uma consultoria personalizada."
          buttonText="Solicitar Consultoria Gratuita"
          buttonLink="/contato"
          secondaryButtonText="Conhecer SmartEvents"
          secondaryButtonLink="/smart-events"
          background="gradient"
        />
      </div>
    </>
  );
};

export default NegociosPage;
