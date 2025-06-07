
import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '@/components/SectionTitle';
import CallToAction from '@/components/CallToAction';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Sparkles, 
  Shield, 
  Clock, 
  DollarSign, 
  CheckCircle, 
  Star, 
  MapPin, 
  Phone, 
  Mail,
  ArrowLeft,
  Building,
  Droplets,
  Leaf,
  Users,
  TrendingUp,
  Award
} from 'lucide-react';

const washServices = [
  {
    name: "Fachadas de Edifícios",
    description: "Limpeza profissional de fachadas corporativas e residenciais com precisão e segurança total.",
    features: ["Vidros e esquadrias", "Revestimentos cerâmicos", "Estruturas metálicas", "ACM e materiais compostos"],
    price: "A partir de R$ 12/m²"
  },
  {
    name: "Estruturas Industriais",
    description: "Limpeza especializada de torres, silos, tanques e outras estruturas industriais complexas.",
    features: ["Torres de telecomunicações", "Silos e tanques", "Estruturas petroquímicas", "Equipamentos industriais"],
    price: "A partir de R$ 18/m²"
  },
  {
    name: "Painéis Solares",
    description: "Manutenção e limpeza de painéis fotovoltaicos para máxima eficiência energética.",
    features: ["Limpeza sem riscos", "Produtos específicos", "Aumento de 15% na eficiência", "Relatório de performance"],
    price: "A partir de R$ 8/m²"
  },
  {
    name: "Monumentos e Patrimônio",
    description: "Conservação delicada de monumentos históricos e patrimônios arquitetônicos.",
    features: ["Técnicas preservativas", "Produtos biodegradáveis", "Documentação fotográfica", "Relatório técnico"],
    price: "Sob consulta"
  }
];

const benefits = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: "100% Seguro",
    description: "Sem riscos para operadores, eliminando necessidade de andaimes e rappel"
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "60% Mais Rápido",
    description: "Redução significativa no tempo de execução comparado a métodos tradicionais"
  },
  {
    icon: <DollarSign className="w-8 h-8" />,
    title: "40% Mais Econômico",
    description: "Menor custo operacional com economia em água e produtos químicos"
  },
  {
    icon: <Leaf className="w-8 h-8" />,
    title: "Ecológico",
    description: "Produtos biodegradáveis e redução de 70% no consumo de água"
  }
];

const processSteps = [
  {
    step: "1",
    title: "Inspeção Técnica",
    description: "Análise detalhada da estrutura e definição da melhor estratégia de limpeza",
    icon: <Building className="w-6 h-6" />
  },
  {
    step: "2",
    title: "Planejamento",
    description: "Elaboração do plano de voo e obtenção das autorizações necessárias",
    icon: <MapPin className="w-6 h-6" />
  },
  {
    step: "3",
    title: "Execução Segura",
    description: "Limpeza profissional com drones especializados e produtos ecológicos",
    icon: <Sparkles className="w-6 h-6" />
  },
  {
    step: "4",
    title: "Relatório Final",
    description: "Documentação completa com antes/depois e certificado de qualidade",
    icon: <Award className="w-6 h-6" />
  }
];

const stats = [
  { number: "200+", label: "Estruturas Limpas" },
  { number: "98%", label: "Satisfação do Cliente" },
  { number: "100%", label: "Segurança Operacional" },
  { number: "40%", label: "Economia de Custos" }
];

const whyChoose = [
  {
    icon: <Users className="w-6 h-6" />,
    title: "Equipe Especializada",
    description: "Pilotos certificados ANAC com experiência em limpeza industrial"
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Tecnologia Avançada",
    description: "Drones especializados com sistemas de pulverização de precisão"
  },
  {
    icon: <Droplets className="w-6 h-6" />,
    title: "Produtos Ecológicos",
    description: "Detergentes biodegradáveis seguros para meio ambiente"
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: "Qualidade Garantida",
    description: "Certificado de qualidade e garantia de satisfação"
  }
];

const AeroWashPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "LEGAL AERO - Limpeza em Altura com Drones",
    "description": "Serviço especializado de limpeza de estruturas verticais utilizando drones. Seguro, rápido e ecológico.",
    "provider": {
      "@type": "Organization",
      "name": "LEGAL",
      "url": "https://legal.com.br",
      "logo": "https://legal.com.br/logo.png"
    },
    "serviceType": ["Limpeza de Fachadas", "Limpeza Industrial", "Limpeza de Painéis Solares", "Conservação de Monumentos"],
    "areaServed": {
      "@type": "Country",
      "name": "Brasil"
    },
    "offers": {
      "@type": "Offer",
      "name": "Limpeza em Altura com Drones",
      "price": "12",
      "priceCurrency": "BRL",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "12",
        "priceCurrency": "BRL",
        "unitText": "por metro quadrado"
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Limpeza em Altura com Drones | LEGAL AERO - Seguro, Rápido e Ecológico</title>
        <meta name="description" content="Serviço especializado de limpeza de fachadas e estruturas verticais com drones. 100% seguro, 60% mais rápido e 40% mais econômico. Pilotos certificados ANAC." />
        <meta name="keywords" content="limpeza fachadas drone, limpeza altura drone, limpeza industrial drone, painéis solares drone, conservação monumentos, ANAC, ecológico, seguro" />
        
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Limpeza em Altura com Drones | LEGAL AERO" />
        <meta property="og:description" content="Revolucione a limpeza de estruturas verticais com nossa tecnologia de drones. Mais seguro, rápido e econômico." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1487887235947-a955ef187fcc?auto=format&fit=crop&w=1200&h=630" />
        
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Limpeza em Altura com Drones | LEGAL AERO" />
        <meta property="twitter:description" content="Tecnologia de drones para limpeza segura e eficiente de fachadas e estruturas verticais." />
        <meta property="twitter:image" content="https://images.unsplash.com/photo-1487887235947-a955ef187fcc?auto=format&fit=crop&w=1200&h=630" />
        
        <meta name="robots" content="index, follow" />
        <meta name="author" content="LEGAL" />
        <link rel="canonical" href="https://legal.com.br/negocios/aero/wash" />
        
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="bg-background text-foreground font-unica">
        {/* Breadcrumb Navigation */}
        <section className="py-4 bg-gray-50 border-b">
          <div className="container mx-auto px-4">
            <nav className="flex items-center space-x-2 text-sm">
              <Link to="/" className="text-gray-500 hover:text-legal transition-colors">Home</Link>
              <span className="text-gray-400">/</span>
              <Link to="/negocios" className="text-gray-500 hover:text-legal transition-colors">Negócios</Link>
              <span className="text-gray-400">/</span>
              <Link to="/negocios/aero" className="text-gray-500 hover:text-legal transition-colors">LEGAL AERO</Link>
              <span className="text-gray-400">/</span>
              <span className="text-legal font-medium">Limpeza em Altura</span>
            </nav>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-20 md:py-28 text-center bg-gradient-to-br from-legal to-legal-purple text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <Sparkles className="absolute top-1/4 left-1/4 w-64 h-64 text-white/10 animate-pulse transform -translate-x-1/2 -translate-y-1/2" />
            <Building className="absolute bottom-10 right-10 w-32 h-32 text-white/10 animate-ping" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex items-center justify-center mb-6">
              <Button asChild variant="outline" className="border-legal-cyan text-legal-cyan hover:bg-legal-cyan hover:text-white mr-4">
                <Link to="/negocios/aero" className="flex items-center">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Voltar para AERO
                </Link>
              </Button>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-wider mb-6 animate-fade-in" style={{ letterSpacing: '0.05em' }}>
              Limpeza em Altura
              <span className="block text-legal-cyan">com Drones</span>
            </h1>
            <p className="text-lg md:text-xl font-light max-w-4xl mx-auto mb-4 animate-fade-in animation-delay-300">
              Revolucione a manutenção de estruturas verticais com nossa <strong className="text-legal-cyan">tecnologia especializada em drones</strong>. 
              100% seguro, 60% mais rápido e 40% mais econômico que métodos tradicionais.
            </p>
            <p className="text-base md:text-lg font-light max-w-3xl mx-auto mb-8 text-gray-200 animate-fade-in animation-delay-400">
              Fachadas • Estruturas Industriais • Painéis Solares • Monumentos Históricos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-600">
              <Button asChild size="lg" className="bg-legal-cyan hover:bg-legal-cyan/90 text-legal font-bold">
                <Link to="/contato?service=aero-wash">Solicitar Orçamento Gratuito</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-legal text-legal hover:bg-legal hover:text-white">
                <Link to="#servicos">Ver Todos os Serviços</Link>
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

        {/* Benefits Section */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container mx-auto px-4">
            <SectionTitle
              title="Por Que Escolher Limpeza com Drones?"
              subtitle="Tecnologia revolucionária que garante segurança máxima, eficiência superior e sustentabilidade ambiental."
              center
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
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

        {/* Services Section */}
        <section id="servicos" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <SectionTitle
              title="Nossos Serviços de Limpeza"
              subtitle="Soluções especializadas para diferentes tipos de estruturas, sempre com a máxima qualidade e segurança."
              center
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {washServices.map((service, index) => (
                <Card key={index} className="bg-white border-legal/20 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <CardHeader className="bg-gradient-to-r from-legal/5 to-legal-purple/5 p-6">
                    <div className="flex items-center justify-between mb-4">
                      <CardTitle className="text-2xl font-black text-legal">
                        {service.name}
                      </CardTitle>
                      <div className="text-lg font-bold text-legal-cyan">{service.price}</div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-gray-700 mb-6 text-base leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-bold text-legal mb-3 text-lg flex items-center">
                        <CheckCircle className="w-5 h-5 mr-2 text-legal-cyan" />
                        Inclusos no Serviço
                      </h4>
                      <ul className="space-y-2 text-sm">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <Sparkles className="w-4 h-4 text-legal-cyan mr-2 mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button asChild className="w-full bg-gradient-to-r from-legal to-legal-purple hover:from-legal-purple hover:to-legal text-white font-bold">
                      <Link to="/contato?service=aero-wash" className="flex items-center justify-center">
                        Solicitar {service.name}
                        <Sparkles className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-gradient-to-br from-legal/5 to-legal-purple/5">
          <div className="container mx-auto px-4">
            <SectionTitle
              title="Como Funciona Nosso Processo"
              subtitle="Metodologia comprovada que garante resultados excepcionais em cada projeto de limpeza."
              center
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((process, index) => (
                <div key={index} className="text-center group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-4 bg-legal text-white rounded-full flex items-center justify-center text-2xl font-bold group-hover:bg-legal-purple transition-colors">
                    {process.step}
                  </div>
                  <div className="w-12 h-12 mx-auto mb-3 text-legal-cyan">
                    {process.icon}
                  </div>
                  <h3 className="text-xl font-bold text-legal mb-2">{process.title}</h3>
                  <p className="text-gray-600">{process.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <SectionTitle
              title="Por Que a LEGAL AERO?"
              subtitle="Experiência, tecnologia e compromisso com a excelência em cada projeto."
              center
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChoose.map((item, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 bg-legal text-white rounded-full flex items-center justify-center group-hover:bg-legal-purple transition-colors duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-legal mb-2 group-hover:text-legal-purple transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="py-12 bg-gradient-to-br from-gray-50 to-gray-100 border-t">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-legal-cyan mb-3" />
                <h3 className="font-bold text-legal mb-2">Atendimento Nacional</h3>
                <p className="text-gray-600">Cobertura em todo território brasileiro</p>
              </div>
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-legal-cyan mb-3" />
                <h3 className="font-bold text-legal mb-2">Suporte 24/7</h3>
                <p className="text-gray-600">Atendimento técnico sempre disponível</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-legal-cyan mb-3" />
                <h3 className="font-bold text-legal mb-2">Orçamento Rápido</h3>
                <p className="text-gray-600">Resposta em até 2 horas úteis</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action Section */}
        <CallToAction
          title="Pronto para Revolucionar a Limpeza das Suas Estruturas?"
          subtitle="Entre em contato com nossos especialistas e descubra como nossa tecnologia de drones pode transformar a manutenção dos seus edifícios. Orçamento gratuito e sem compromisso."
          buttonText="Solicitar Orçamento Gratuito"
          buttonLink="/contato?service=aero-wash-quote"
          secondaryButtonText="Falar com Especialista"
          secondaryButtonLink="/contato?service=aero-wash-specialist"
          background="gradient"
        />
      </div>
    </>
  );
};

export default AeroWashPage;
