
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import CallToAction from '@/components/CallToAction';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Drone, Camera, Package, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const services = [
  {
    id: "foto-filmagem",
    name: "Foto e Filmagem Aérea",
    description: "Capture imagens e vídeos impressionantes de ângulos únicos com nossos drones de alta resolução. Ideal para eventos, inspeções, marketing imobiliário e produções audiovisuais.",
    icon: <Camera className="w-12 h-12 text-legal-cyan mb-4" />,
    features: [
      "Qualidade cinematográfica 4K/8K",
      "Pilotos experientes e certificados",
      "Cobertura completa de eventos",
      "Inspeções técnicas detalhadas",
      "Fotografia e vídeos para marketing",
    ],
    ctaLink: "/contato?service=aero-foto-filmagem",
  },
  {
    id: "delivery",
    name: "Delivery com Drone",
    description: "Soluções inovadoras para entregas rápidas e eficientes em áreas urbanas ou de difícil acesso. Ideal para logística de última milha, entregas emergenciais e transporte de itens leves.",
    icon: <Package className="w-12 h-12 text-legal-cyan mb-4" />,
    features: [
      "Redução de tempo e custos de entrega",
      "Acesso a locais remotos",
      "Monitoramento em tempo real",
      "Sustentabilidade e menor emissão de carbono",
      "Operações seguras e regulamentadas",
    ],
    ctaLink: "/contato?service=aero-delivery",
  },
  {
    id: "lavagem-estruturas",
    name: "Lavagem de Estruturas Verticais",
    description: "Limpeza especializada de fachadas, vidraças e outras estruturas verticais utilizando drones. Mais segurança, eficiência e menor custo em comparação com métodos tradicionais.",
    icon: <Sparkles className="w-12 h-12 text-legal-cyan mb-4" />,
    features: [
      "Segurança para operadores (sem andaimes)",
      "Redução do tempo de limpeza",
      "Acesso a áreas de difícil alcance",
      "Menor consumo de água e produtos químicos",
      "Ideal para edifícios altos e estruturas complexas",
    ],
    ctaLink: "/contato?service=aero-lavagem",
  },
];

const AeroPage = () => {
  return (
    <div className="bg-background text-foreground font-unica">
      {/* Hero Section */}
      <section className="py-24 md:py-32 text-center bg-gradient-to-br from-legal to-legal-purple text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Drone className="absolute top-1/4 left-1/4 w-64 h-64 text-white/10 animate-pulse transform -translate-x-1/2 -translate-y-1/2" />
          <Drone className="absolute bottom-10 right-10 w-32 h-32 text-white/10 animate-ping" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-wider mb-6 animate-fade-in" style={{ letterSpacing: '0.05em' }}>
            LEGAL AERO
          </h1>
          <p className="text-lg md:text-xl font-light max-w-3xl mx-auto mb-8 animate-fade-in animation-delay-300">
            Soluções aéreas inovadoras com drones para transformar a maneira como você vê e interage com o mundo. Precisão, agilidade e tecnologia de ponta ao seu alcance.
          </p>
          <Button asChild size="lg" className="bg-legal-cyan hover:bg-legal-cyan/90 text-legal font-bold animate-fade-in animation-delay-600">
            <Link to="/contato?subject=legal-aero">Solicite um Orçamento</Link>
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Nossos Serviços com Drones"
            subtitle="Tecnologia de vanguarda para foto e filmagem, entregas e limpeza de estruturas."
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {services.map((service) => (
              <Card key={service.id} className="bg-card border-legal/30 shadow-xl hover:shadow-legal-cyan/30 transition-all duration-300 transform hover:-translate-y-1 flex flex-col overflow-hidden">
                <CardHeader className="bg-legal/5 p-6">
                  <div className="flex items-center gap-4">
                    {service.icon}
                    <CardTitle className="text-2xl font-black text-legal uppercase tracking-wide">{service.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-6 flex-grow flex flex-col">
                  <p className="text-muted-foreground mb-6 text-base leading-relaxed">
                    {service.description}
                  </p>
                  <h4 className="font-bold text-legal mb-2 text-lg">Destaques do Serviço:</h4>
                  <ul className="list-none space-y-2 mb-6 text-sm">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                         <Drone className="w-5 h-5 text-legal-cyan mr-2 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-4">
                    <Button asChild className="w-full bg-legal hover:bg-legal-purple text-white">
                      <Link to={service.ctaLink}>Saiba Mais sobre {service.name}</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <CallToAction
        title="Pronto para Voar Mais Alto com a LEGAL AERO?"
        subtitle="Entre em contato com nossos especialistas e descubra como nossas soluções com drones podem impulsionar seus projetos e negócios."
        buttonText="Fale com um Especialista AERO"
        buttonLink="/contato?subject=legal-aero-especialista"
        background="gradient"
      />
    </div>
  );
};

export default AeroPage;
