
import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '@/components/SectionTitle';
import CallToAction from '@/components/CallToAction';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Rocket, Camera, Package, Sparkles, Shield, Clock, Users, CheckCircle, Star, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const services = [
  {
    id: "foto-filmagem",
    name: "Foto e Filmagem Aérea",
    description: "Capture imagens e vídeos impressionantes de ângulos únicos com nossos drones de alta resolução. Ideal para eventos, inspeções, marketing imobiliário e produções audiovisuais.",
    icon: <Camera className="w-12 h-12 text-legal-cyan mb-4" />,
    features: [
      "Qualidade cinematográfica 4K/8K HDR",
      "Pilotos experientes e certificados ANAC",
      "Cobertura completa de eventos corporativos",
      "Inspeções técnicas com relatórios detalhados",
      "Fotografia e vídeos para marketing digital",
      "Transmissão ao vivo para redes sociais"
    ],
    applications: [
      "Eventos corporativos e sociais",
      "Marketing imobiliário de luxo",
      "Inspeções industriais e de infraestrutura",
      "Produção audiovisual profissional",
      "Documentários e campanhas publicitárias"
    ],
    ctaLink: "/contato?service=aero-foto-filmagem",
    price: "A partir de R$ 850/hora"
  },
  {
    id: "delivery",
    name: "Delivery com Drone",
    description: "Soluções inovadoras para entregas rápidas e eficientes em áreas urbanas ou de difícil acesso. Ideal para logística de última milha, entregas emergenciais e transporte de itens leves.",
    icon: <Package className="w-12 h-12 text-legal-cyan mb-4" />,
    features: [
      "Redução de 70% no tempo de entrega",
      "Acesso a locais remotos e de difícil alcance",
      "Monitoramento GPS em tempo real",
      "Sustentabilidade com 90% menos emissão de carbono",
      "Operações seguras e regulamentadas",
      "Capacidade de carga até 5kg"
    ],
    applications: [
      "Delivery de medicamentos e materiais médicos",
      "Entrega de documentos urgentes",
      "Suprimentos para obras e canteiros",
      "Produtos de e-commerce em áreas remotas",
      "Entregas de emergência e socorro"
    ],
    ctaLink: "/contato?service=aero-delivery",
    price: "A partir de R$ 25/km"
  },
  {
    id: "lavagem-estruturas",
    name: "Lavagem de Estruturas Verticais",
    description: "Limpeza especializada de fachadas, vidraças e outras estruturas verticais utilizando drones. Mais segurança, eficiência e menor custo em comparação com métodos tradicionais.",
    icon: <Sparkles className="w-12 h-12 text-legal-cyan mb-4" />,
    features: [
      "100% de segurança para operadores (sem andaimes)",
      "Redução de 60% no tempo de limpeza",
      "Acesso a áreas de difícil alcance",
      "Economia de 40% em água e produtos químicos",
      "Ideal para edifícios altos e estruturas complexas",
      "Limpeza ecológica com produtos biodegradáveis"
    ],
    applications: [
      "Fachadas de edifícios corporativos",
      "Vidraças de prédios comerciais",
      "Estruturas industriais e torres",
      "Monumentos e patrimônios históricos",
      "Painéis solares e estruturas energéticas"
    ],
    ctaLink: "/contato?service=aero-lavagem",
    price: "A partir de R$ 12/m²"
  },
];

const benefits = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Segurança Garantida",
    description: "Pilotos certificados ANAC e seguros contra terceiros"
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Agilidade Operacional",
    description: "Execução rápida com resultados em tempo real"
  },
  {
    icon: <Star className="w-8 h-8" />,
    title: "Qualidade Premium",
    description: "Equipamentos de última geração e alta resolução"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Suporte Especializado",
    description: "Equipe técnica disponível 24/7 para suporte"
  }
];

const stats = [
  { number: "500+", label: "Projetos Realizados" },
  { number: "98%", label: "Satisfação do Cliente" },
  { number: "15+", label: "Pilotos Certificados" },
  { number: "50+", label: "Drones Disponíveis" }
];

const AeroPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "LEGAL AERO - Soluções com Drones",
    "description": "Serviços profissionais com drones: foto e filmagem aérea, delivery inteligente e limpeza de estruturas verticais no Brasil",
    "provider": {
      "@type": "Organization",
      "name": "LEGAL",
      "url": "https://legal.com.br",
      "logo": "https://legal.com.br/logo.png"
    },
    "serviceType": ["Fotografia Aérea", "Filmagem com Drone", "Delivery com Drone", "Limpeza de Estruturas"],
    "areaServed": {
      "@type": "Country",
      "name": "Brasil"
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "Foto e Filmagem Aérea",
        "price": "850",
        "priceCurrency": "BRL",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "850",
          "priceCurrency": "BRL",
          "unitText": "por hora"
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>LEGAL AERO - Serviços Profissionais com Drones | Foto, Filmagem, Delivery e Limpeza</title>
        <meta name="description" content="Serviços profissionais com drones no Brasil: fotografia e filmagem aérea 4K/8K, delivery inteligente e limpeza de estruturas verticais. Pilotos certificados ANAC." />
        <meta name="keywords" content="drone profissional, fotografia aérea, filmagem drone, delivery drone, limpeza fachadas drone, inspeção aérea, ANAC, 4K, 8K, Brasil" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="LEGAL AERO - Serviços Profissionais com Drones" />
        <meta property="og:description" content="Transforme sua perspectiva com nossos serviços de drone: foto/filmagem aérea, delivery inteligente e limpeza de estruturas. Qualidade 4K/8K garantida." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1487887235947-a955ef187fcc?auto=format&fit=crop&w=1200&h=630" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="LEGAL AERO - Serviços Profissionais com Drones" />
        <meta property="twitter:description" content="Fotografia aérea, delivery inteligente e limpeza de estruturas com drones profissionais. Pilotos certificados ANAC." />
        <meta property="twitter:image" content="https://images.unsplash.com/photo-1487887235947-a955ef187fcc?auto=format&fit=crop&w=1200&h=630" />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="LEGAL" />
        <link rel="canonical" href="https://legal.com.br/negocios/aero" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="bg-background text-foreground font-unica">
        {/* Hero Section */}
        <section className="py-24 md:py-32 text-center bg-gradient-to-br from-legal to-legal-purple text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <Rocket className="absolute top-1/4 left-1/4 w-64 h-64 text-white/10 animate-pulse transform -translate-x-1/2 -translate-y-1/2" />
            <Rocket className="absolute bottom-10 right-10 w-32 h-32 text-white/10 animate-ping" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-wider mb-6 animate-fade-in" style={{ letterSpacing: '0.05em' }}>
              LEGAL AERO
            </h1>
            <p className="text-lg md:text-xl font-light max-w-4xl mx-auto mb-4 animate-fade-in animation-delay-300">
              Soluções aéreas inovadoras com drones profissionais para <strong className="text-legal-cyan">transformar sua perspectiva</strong>. 
              Fotografia e filmagem 4K/8K, delivery inteligente e limpeza de estruturas verticais.
            </p>
            <p className="text-base md:text-lg font-light max-w-3xl mx-auto mb-8 text-gray-200 animate-fade-in animation-delay-400">
              Pilotos certificados ANAC • Equipamentos de última geração • Cobertura nacional • Resultados garantidos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-600">
              <Button asChild size="lg" className="bg-legal-cyan hover:bg-legal-cyan/90 text-legal font-bold">
                <Link to="/contato?subject=legal-aero">Solicitar Orçamento Gratuito</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-legal">
                <Link to="#servicos">Ver Nossos Serviços</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="group">
                  <div className="text-3xl md:text-4xl font-black text-legal mb-2 group-hover:text-legal-purple transition-colors">
                    {stat.number}
                  </div>
                  <div className="text-sm md:text-base text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="servicos" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container mx-auto px-4">
            <SectionTitle
              title="Nossos Serviços com Drones"
              subtitle="Tecnologia de vanguarda para fotografia aérea, entregas inteligentes e limpeza de estruturas. Cada serviço é executado por pilotos certificados com equipamentos de última geração."
              center
            />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {services.map((service) => (
                <Card key={service.id} className="bg-white border-legal/20 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col overflow-hidden group">
                  <CardHeader className="bg-gradient-to-r from-legal/5 to-legal-purple/5 p-6 group-hover:from-legal/10 group-hover:to-legal-purple/10 transition-all">
                    <div className="flex items-center gap-4 mb-4">
                      {service.icon}
                      <div>
                        <CardTitle className="text-2xl font-black text-legal uppercase tracking-wide group-hover:text-legal-purple transition-colors">
                          {service.name}
                        </CardTitle>
                        <div className="text-lg font-bold text-legal-cyan">{service.price}</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 flex-grow flex flex-col">
                    <p className="text-gray-700 mb-6 text-base leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-bold text-legal mb-3 text-lg flex items-center">
                        <CheckCircle className="w-5 h-5 mr-2 text-legal-cyan" />
                        Recursos Inclusos
                      </h4>
                      <ul className="space-y-2 text-sm">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <Rocket className="w-4 h-4 text-legal-cyan mr-2 mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-bold text-legal mb-3 text-lg flex items-center">
                        <Star className="w-5 h-5 mr-2 text-legal-cyan" />
                        Aplicações
                      </h4>
                      <ul className="space-y-1 text-sm">
                        {service.applications.map((application, index) => (
                          <li key={index} className="flex items-start text-gray-600">
                            <div className="w-2 h-2 bg-legal-cyan rounded-full mr-2 mt-2 flex-shrink-0"></div>
                            {application}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-auto pt-4">
                      <Button asChild className="w-full bg-gradient-to-r from-legal to-legal-purple hover:from-legal-purple hover:to-legal text-white font-bold group-hover:scale-105 transition-transform">
                        <Link to={service.ctaLink} className="flex items-center justify-center">
                          Solicitar {service.name}
                          <Rocket className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <SectionTitle
              title="Por Que Escolher a LEGAL AERO?"
              subtitle="Experiência comprovada, tecnologia avançada e compromisso com a excelência em todos os nossos serviços aéreos."
              center
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 bg-legal text-white rounded-full flex items-center justify-center group-hover:bg-legal-purple transition-colors duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-legal mb-2 group-hover:text-legal-purple transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-gradient-to-br from-legal/5 to-legal-purple/5">
          <div className="container mx-auto px-4">
            <SectionTitle
              title="Como Funciona Nosso Processo"
              subtitle="Do primeiro contato à entrega final, garantimos excelência em cada etapa do seu projeto aéreo."
              center
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Consulta Inicial",
                  description: "Análise das suas necessidades e definição do escopo do projeto"
                },
                {
                  step: "2", 
                  title: "Planejamento",
                  description: "Elaboração do plano de voo e obtenção das autorizações necessárias"
                },
                {
                  step: "3",
                  title: "Execução",
                  description: "Operação segura com equipamentos de última geração e pilotos certificados"
                },
                {
                  step: "4",
                  title: "Entrega",
                  description: "Processamento e entrega do material final em alta qualidade"
                }
              ].map((process, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 bg-legal text-white rounded-full flex items-center justify-center text-2xl font-bold group-hover:bg-legal-purple transition-colors">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-bold text-legal mb-2">{process.title}</h3>
                  <p className="text-gray-600">{process.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="py-12 bg-white border-t">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-legal-cyan mb-3" />
                <h3 className="font-bold text-legal mb-2">Cobertura Nacional</h3>
                <p className="text-gray-600">Atendemos todo o território brasileiro</p>
              </div>
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-legal-cyan mb-3" />
                <h3 className="font-bold text-legal mb-2">Atendimento 24/7</h3>
                <p className="text-gray-600">Suporte técnico disponível sempre</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-legal-cyan mb-3" />
                <h3 className="font-bold text-legal mb-2">Resposta Rápida</h3>
                <p className="text-gray-600">Orçamento em até 2 horas úteis</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action Section */}
        <CallToAction
          title="Pronto para Voar Mais Alto com a LEGAL AERO?"
          subtitle="Entre em contato com nossos especialistas e descubra como nossas soluções com drones podem transformar seus projetos. Orçamento gratuito e sem compromisso."
          buttonText="Solicitar Orçamento Gratuito"
          buttonLink="/contato?subject=legal-aero-orcamento"
          secondaryButtonText="Falar com Especialista"
          secondaryButtonLink="/contato?subject=legal-aero-especialista"
          background="gradient"
        />
      </div>
    </>
  );
};

export default AeroPage;
