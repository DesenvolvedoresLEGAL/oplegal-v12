
import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '@/components/SectionTitle';
import CallToAction from '@/components/CallToAction';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Package, 
  Shield, 
  Clock, 
  DollarSign, 
  CheckCircle, 
  Star, 
  MapPin, 
  Phone, 
  Mail,
  ArrowLeft,
  Truck,
  Leaf,
  Users,
  TrendingUp,
  Award,
  Zap,
  Target,
  Globe
} from 'lucide-react';

const deliveryServices = [
  {
    name: "Delivery Urbano",
    description: "Entregas rápidas em centros urbanos com redução de 70% no tempo de entrega comparado ao transporte tradicional.",
    features: ["Raio de até 15km", "Capacidade até 5kg", "Monitoramento GPS em tempo real", "Entrega em até 30 minutos"],
    price: "A partir de R$ 25/km"
  },
  {
    name: "Entregas Emergenciais",
    description: "Serviço especializado para medicamentos, documentos urgentes e suprimentos médicos em situações críticas.",
    features: ["Disponibilidade 24/7", "Prioridade máxima", "Autorização para voos noturnos", "Protocolo de segurança médica"],
    price: "A partir de R$ 45/km"
  },
  {
    name: "Logística Industrial",
    description: "Transporte de ferramentas, peças e suprimentos para canteiros de obras e indústrias em locais de difícil acesso.",
    features: ["Acesso a áreas remotas", "Capacidade até 8kg", "Resistência a intempéries", "Integração com ERP"],
    price: "A partir de R$ 35/km"
  },
  {
    name: "E-commerce Rural",
    description: "Solução para últimos quilômetros em áreas rurais onde o transporte tradicional é limitado ou custoso.",
    features: ["Cobertura rural ampliada", "Entrega em propriedades", "Redução de custos logísticos", "Sustentabilidade ambiental"],
    price: "Sob consulta"
  }
];

const benefits = [
  {
    icon: <Clock className="w-8 h-8" />,
    title: "70% Mais Rápido",
    description: "Redução significativa no tempo de entrega comparado ao transporte terrestre"
  },
  {
    icon: <DollarSign className="w-8 h-8" />,
    title: "50% Mais Econômico",
    description: "Menor custo operacional, especialmente para áreas de difícil acesso"
  },
  {
    icon: <Leaf className="w-8 h-8" />,
    title: "Zero Emissão",
    description: "Transporte 100% elétrico com impacto ambiental mínimo"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Segurança Total",
    description: "Monitoramento GPS e protocolos rigorosos de segurança"
  }
];

const processSteps = [
  {
    step: "1",
    title: "Solicitação",
    description: "Pedido através do app ou plataforma web com endereços de origem e destino",
    icon: <Target className="w-6 h-6" />
  },
  {
    step: "2",
    title: "Confirmação",
    description: "Validação do pedido, peso e verificação de viabilidade da rota",
    icon: <CheckCircle className="w-6 h-6" />
  },
  {
    step: "3",
    title: "Coleta",
    description: "Drone autônomo realiza a coleta no ponto de origem",
    icon: <Package className="w-6 h-6" />
  },
  {
    step: "4",
    title: "Entrega",
    description: "Entrega automática no destino com confirmação em tempo real",
    icon: <Zap className="w-6 h-6" />
  }
];

const stats = [
  { number: "50+", label: "Entregas de Teste Realizadas" },
  { number: "100%", label: "Sucesso nas Entregas" },
  { number: "15km", label: "Raio de Cobertura" },
  { number: "30min", label: "Tempo Médio de Entrega" }
];

const whyChoose = [
  {
    icon: <Users className="w-6 h-6" />,
    title: "Experiência Comprovada",
    description: "Pioneiros no Brasil com mais de 50 entregas realizadas durante a pandemia"
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Tecnologia Avançada",
    description: "Drones autônomos com inteligência artificial e navegação precisa"
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Cobertura Ampla",
    description: "Atendimento em áreas urbanas e rurais com flexibilidade operacional"
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Certificação ANAC",
    description: "Operações regulamentadas e autorizadas pelos órgãos competentes"
  }
];

const AeroDeliveryPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "LEGAL AERO - Delivery com Drones",
    "description": "Serviço pioneiro de entrega com drones no Brasil. Rápido, econômico e sustentável para entregas urbanas e rurais.",
    "provider": {
      "@type": "Organization",
      "name": "LEGAL",
      "url": "https://legal.com.br",
      "logo": "https://legal.com.br/logo.png"
    },
    "serviceType": ["Delivery Urbano", "Entregas Emergenciais", "Logística Industrial", "E-commerce Rural"],
    "areaServed": {
      "@type": "Country",
      "name": "Brasil"
    },
    "offers": {
      "@type": "Offer",
      "name": "Delivery com Drones",
      "price": "25",
      "priceCurrency": "BRL",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "25",
        "priceCurrency": "BRL",
        "unitText": "por quilômetro"
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Delivery com Drones | LEGAL AERO - Pioneiros no Brasil com 50+ Entregas Realizadas</title>
        <meta name="description" content="Serviço pioneiro de delivery com drones no Brasil. 70% mais rápido, 50% mais econômico. Mais de 50 entregas realizadas durante a pandemia. Pilotos certificados ANAC." />
        <meta name="keywords" content="delivery drone, entrega drone, drone delivery Brasil, logística drone, Amburgui, pandemia, ANAC, sustentável, rápido, econômico" />
        
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Delivery com Drones | LEGAL AERO - Pioneiros no Brasil" />
        <meta property="og:description" content="Revolucione suas entregas com drones. Pioneiros no Brasil com mais de 50 entregas realizadas durante a pandemia." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1487887235947-a955ef187fcc?auto=format&fit=crop&w=1200&h=630" />
        
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Delivery com Drones | LEGAL AERO - Pioneiros no Brasil" />
        <meta property="twitter:description" content="Tecnologia de ponta para entregas rápidas, econômicas e sustentáveis com drones." />
        <meta property="twitter:image" content="https://images.unsplash.com/photo-1487887235947-a955ef187fcc?auto=format&fit=crop&w=1200&h=630" />
        
        <meta name="robots" content="index, follow" />
        <meta name="author" content="LEGAL" />
        <link rel="canonical" href="https://legal.com.br/negocios/aero/delivery" />
        
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
              <span className="text-legal font-medium">Delivery com Drones</span>
            </nav>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-20 md:py-28 text-center bg-gradient-to-br from-legal to-legal-purple text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <Package className="absolute top-1/4 left-1/4 w-64 h-64 text-white/10 animate-pulse transform -translate-x-1/2 -translate-y-1/2" />
            <Truck className="absolute bottom-10 right-10 w-32 h-32 text-white/10 animate-ping" />
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
              Delivery com
              <span className="block text-legal-cyan">Drones</span>
            </h1>
            <p className="text-lg md:text-xl font-light max-w-4xl mx-auto mb-4 animate-fade-in animation-delay-300">
              Pioneiros no Brasil com <strong className="text-legal-cyan">mais de 50 entregas realizadas</strong> durante a pandemia. 
              Revolucione sua logística com entregas 70% mais rápidas e 50% mais econômicas.
            </p>
            <p className="text-base md:text-lg font-light max-w-3xl mx-auto mb-8 text-gray-200 animate-fade-in animation-delay-400">
              Entrega Urbana • Emergencial • Industrial • E-commerce Rural • Zero Emissão
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-600">
              <Button asChild size="lg" className="bg-legal-cyan hover:bg-legal-cyan/90 text-legal font-bold">
                <Link to="/contato?service=aero-delivery">Solicitar Orçamento Gratuito</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-legal text-legal hover:bg-legal hover:text-white">
                <Link to="#primeira-fase">Ver Nossos Testes</Link>
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

        {/* Primeira Fase de Testes */}
        <section id="primeira-fase" className="py-20 bg-gradient-to-br from-legal/5 to-legal-purple/5">
          <div className="container mx-auto px-4">
            <SectionTitle
              title="Primeira Fase de Testes - Pioneiros no Brasil"
              subtitle="Em 2020, durante a pandemia, realizamos mais de 50 entregas com drones em parceria com a Amburgui Brasil, provando a viabilidade e eficiência do delivery aéreo."
              center
            />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-6">
                <Card className="bg-white shadow-xl border-legal/20">
                  <CardHeader className="bg-gradient-to-r from-legal/10 to-legal-purple/10">
                    <CardTitle className="text-2xl font-black text-legal flex items-center">
                      <Award className="w-8 h-8 mr-3 text-legal-cyan" />
                      Resultados da Primeira Fase
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-2 gap-6 mb-6">
                      <div className="text-center">
                        <div className="text-3xl font-black text-legal-cyan mb-2">50+</div>
                        <div className="text-sm text-gray-600">Entregas Realizadas</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-black text-legal-cyan mb-2">100%</div>
                        <div className="text-sm text-gray-600">Taxa de Sucesso</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-black text-legal-cyan mb-2">15min</div>
                        <div className="text-sm text-gray-600">Tempo Médio</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-black text-legal-cyan mb-2">2020</div>
                        <div className="text-sm text-gray-600">Ano dos Testes</div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="font-bold text-legal mb-3 flex items-center">
                        <CheckCircle className="w-5 h-5 mr-2 text-legal-cyan" />
                        Conquistas Alcançadas
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <Star className="w-4 h-4 text-legal-cyan mr-2 mt-0.5 flex-shrink-0" />
                          Primeira empresa a realizar delivery comercial com drones no Brasil
                        </li>
                        <li className="flex items-start">
                          <Star className="w-4 h-4 text-legal-cyan mr-2 mt-0.5 flex-shrink-0" />
                          Parceria bem-sucedida com a Amburgui Brasil
                        </li>
                        <li className="flex items-start">
                          <Star className="w-4 h-4 text-legal-cyan mr-2 mt-0.5 flex-shrink-0" />
                          Validação da tecnologia em condições reais de pandemia
                        </li>
                        <li className="flex items-start">
                          <Star className="w-4 h-4 text-legal-cyan mr-2 mt-0.5 flex-shrink-0" />
                          Desenvolvimento de protocolos de segurança específicos
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white p-8 rounded-xl shadow-xl border-l-4 border-legal-cyan">
                  <h3 className="text-2xl font-black text-legal mb-4">Parceria Amburgui Brasil</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Durante o período mais crítico da pandemia, quando o distanciamento social era essencial, 
                    nossa tecnologia de delivery com drones permitiu que a Amburgui Brasil continuasse 
                    atendendo seus clientes com segurança total, sem contato humano.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Shield className="w-6 h-6 text-legal-cyan mr-3" />
                      <span className="text-sm">Zero contato físico durante as entregas</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-6 h-6 text-legal-cyan mr-3" />
                      <span className="text-sm">Entregas em média 15 minutos mais rápidas</span>
                    </div>
                    <div className="flex items-center">
                      <Leaf className="w-6 h-6 text-legal-cyan mr-3" />
                      <span className="text-sm">Redução de 90% na pegada de carbono</span>
                    </div>
                    <div className="flex items-center">
                      <TrendingUp className="w-6 h-6 text-legal-cyan mr-3" />
                      <span className="text-sm">Aumento de 40% na satisfação do cliente</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-legal to-legal-purple p-1 rounded-xl">
                  <div className="bg-white p-6 rounded-lg">
                    <h4 className="font-bold text-legal mb-3">Impacto Social</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Nossos testes demonstraram que o delivery com drones não é apenas uma inovação tecnológica, 
                      mas uma solução essencial para manter serviços funcionando durante crises, 
                      protegendo tanto entregadores quanto clientes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <SectionTitle
              title="Por Que Escolher Delivery com Drones?"
              subtitle="Tecnologia comprovada que oferece velocidade, economia e sustentabilidade para suas entregas."
              center
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center group bg-gray-50 p-6 rounded-xl hover:bg-white hover:shadow-xl transition-all duration-300">
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
        <section id="servicos" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container mx-auto px-4">
            <SectionTitle
              title="Nossos Serviços de Delivery"
              subtitle="Soluções personalizadas para diferentes necessidades de entrega, desde o centro urbano até áreas rurais remotas."
              center
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {deliveryServices.map((service, index) => (
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
                        Características
                      </h4>
                      <ul className="space-y-2 text-sm">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <Package className="w-4 h-4 text-legal-cyan mr-2 mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button asChild className="w-full bg-gradient-to-r from-legal to-legal-purple hover:from-legal-purple hover:to-legal text-white font-bold">
                      <Link to="/contato?service=aero-delivery" className="flex items-center justify-center">
                        Solicitar {service.name}
                        <Package className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <SectionTitle
              title="Como Funciona o Processo"
              subtitle="Sistema simples e automatizado para solicitar e acompanhar suas entregas em tempo real."
              center
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((process, index) => (
                <div key={index} className="text-center group bg-gradient-to-br from-legal/5 to-legal-purple/5 p-6 rounded-xl hover:shadow-xl transition-all duration-300">
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
        <section className="py-16 bg-gradient-to-br from-legal/5 to-legal-purple/5">
          <div className="container mx-auto px-4">
            <SectionTitle
              title="Por Que Somos Líderes em Delivery com Drones?"
              subtitle="Experiência comprovada, tecnologia de ponta e o compromisso com a inovação que nos tornou pioneiros no Brasil."
              center
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChoose.map((item, index) => (
                <div key={index} className="text-center group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
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
        <section className="py-12 bg-white border-t">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-legal-cyan mb-3" />
                <h3 className="font-bold text-legal mb-2">Cobertura Nacional</h3>
                <p className="text-gray-600">Atendimento em todo território brasileiro</p>
              </div>
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-legal-cyan mb-3" />
                <h3 className="font-bold text-legal mb-2">Suporte 24/7</h3>
                <p className="text-gray-600">Atendimento técnico sempre disponível</p>
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
          title="Pronto para Revolucionar Suas Entregas?"
          subtitle="Junte-se aos pioneiros do delivery com drones no Brasil. Entre em contato e descubra como podemos transformar sua logística com velocidade, economia e sustentabilidade."
          buttonText="Solicitar Orçamento Gratuito"
          buttonLink="/contato?service=aero-delivery-quote"
          secondaryButtonText="Falar com Especialista"
          secondaryButtonLink="/contato?service=aero-delivery-specialist"
          background="gradient"
        />
      </div>
    </>
  );
};

export default AeroDeliveryPage;
