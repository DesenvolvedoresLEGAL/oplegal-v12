
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import CallToAction from '@/components/CallToAction';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Users, Heart, Target, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const leadership = [
  {
    name: "Wagner",
    role: "CEO & Fundador",
    bio: "Visionário que transformou uma ideia de WiFi no carro na maior TechCo de eventos e negócios do Brasil.",
    avatar: "/lovable-uploads/220ece05-0c66-4a13-9776-2fc0ba324a1f.png",
    values: ["Visão Viva", "Execução Energizada"]
  },
  {
    name: "Glaucia",
    role: "CFO & Co-fundadora",
    bio: "Responsável pela reestruturação financeira e crescimento sustentável da LEGAL desde 2018.",
    avatar: "/lovable-uploads/fc9c1929-37eb-4943-b588-95dc78d59dc6.png",
    values: ["Resultados com Ressonância", "Alinhamento com Alma"]
  }
];

const teamMembers = [
  {
    name: "Bruno Sabino",
    role: "Analista de Suporte",
    department: "Tecnologia",
    avatar: "/lovable-uploads/4791a962-75ca-4df1-a2cf-06458c7a50f9.png"
  },
  {
    name: "João Parolini",
    role: "Assistente de Suporte",
    department: "Tecnologia",
    avatar: "/lovable-uploads/409a6cff-65e1-4ae6-afc3-41bc8ba21267.png"
  },
  {
    name: "Jessica Machado",
    role: "Consultora de Tecnologia",
    department: "Comercial",
    avatar: "/lovable-uploads/9147b3a6-7fde-4630-b72b-6de52176b2ae.png"
  },
  {
    name: "Ionara Nobre",
    role: "Consultora de Tecnologia",
    department: "Comercial",
    avatar: "/lovable-uploads/ec8585f2-9fa4-4e5e-8828-2b478bc0fa8a.png"
  },
  {
    name: "Paulla Emanuella",
    role: "Consultora de Tecnologia",
    department: "Comercial",
    avatar: "/lovable-uploads/ab6e9137-1847-43f1-ba36-fe48fc86f960.png"
  },
  {
    name: "Gustavo Macedo",
    role: "Dev Full Stack 1",
    department: "Tecnologia",
    avatar: "/lovable-uploads/37354c92-0e52-4334-b1df-6e0df95df322.png"
  }
];

const values = [
  {
    icon: <Target className="w-8 h-8 text-legal-cyan" />,
    title: "Visão Viva",
    description: "Clareza estratégica, metas ousadas e liderança com direção."
  },
  {
    icon: <Zap className="w-8 h-8 text-legal-purple" />,
    title: "Execução Energizada",
    description: "Ritmo diário, foco na entrega e ação com intensidade."
  },
  {
    icon: <Target className="w-8 h-8 text-legal" />,
    title: "Resultados com Ressonância",
    description: "Impacto real, métrica viva e celebração de conquistas."
  },
  {
    icon: <Heart className="w-8 h-8 text-legal-cyan" />,
    title: "Alinhamento com Alma",
    description: "Cultura viva, gente de verdade, conexão e propósito."
  }
];

const TimePage = () => {
  return (
    <div className="bg-background text-foreground font-unica">
      {/* Hero Section */}
      <section className="py-24 md:py-32 text-center bg-gradient-to-br from-legal to-legal-purple text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Users className="absolute top-1/4 left-1/4 w-64 h-64 text-white/10 animate-pulse transform -translate-x-1/2 -translate-y-1/2" />
          <Heart className="absolute bottom-10 right-10 w-32 h-32 text-white/10 animate-ping" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-wider mb-6 animate-fade-in" style={{ letterSpacing: '0.05em' }}>
            NOSSO TIME
          </h1>
          <p className="text-lg md:text-xl font-light max-w-3xl mx-auto mb-8 animate-fade-in animation-delay-300">
            Somos visionários, executores, criadores de valor e cultivadores de alma. Aqui, transformar ideias em realidade é regra.
          </p>
          <Button asChild size="lg" className="bg-legal-cyan hover:bg-legal-cyan/90 text-legal font-bold animate-fade-in animation-delay-600">
            <Link to="/vagas">Faça Parte do Time</Link>
          </Button>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="LIDERANÇA LEGAL"
            subtitle="Os visionários que transformaram uma ideia em realidade e continuam moldando o futuro da tecnologia no Brasil."
            center
          />
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {leadership.map((leader, index) => (
              <Card key={index} className="bg-card border-legal/30 shadow-xl hover:shadow-legal-cyan/30 transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <Avatar className="w-24 h-24 mx-auto mb-6">
                    <AvatarImage src={leader.avatar} alt={leader.name} className="object-cover" />
                    <AvatarFallback className="bg-legal text-white text-2xl font-bold">
                      {leader.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-2xl font-black text-legal mb-2 uppercase tracking-wide">{leader.name}</h3>
                  <p className="text-legal-purple font-bold mb-4">{leader.role}</p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{leader.bio}</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {leader.values.map((value, valueIndex) => (
                      <span key={valueIndex} className="px-3 py-1 bg-legal-cyan/10 text-legal-cyan text-xs font-bold rounded-full">
                        {value}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Framework V.E.R.A. Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="FRAMEWORK V.E.R.A.™"
            subtitle="Nossos valores que guiam cada decisão, cada projeto e cada conexão que fazemos."
            center
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-white border-legal/20 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-black text-legal mb-3 uppercase tracking-wide">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="NOSSO TIME LEGAL"
            subtitle="Cada pessoa do nosso time contribui para conectar pessoas, negócios e coisas em todo o Brasil."
            center
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-card border-legal/20 shadow-lg hover:shadow-legal-cyan/20 transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <Avatar className="w-16 h-16 mx-auto mb-4">
                    <AvatarImage src={member.avatar} alt={member.name} className="object-cover" />
                    <AvatarFallback className="bg-legal-purple text-white font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-lg font-bold text-legal mb-1">{member.name}</h3>
                  <p className="text-legal-purple font-semibold text-sm mb-2">{member.role}</p>
                  <span className="inline-block px-3 py-1 bg-legal-cyan/10 text-legal-cyan text-xs font-bold rounded-full">
                    {member.department}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-legal text-white">
        <div className="container mx-auto px-4 text-center">
          <SectionTitle
            title="SOMOS LEGAL EM NÚMEROS"
            subtitle="Dados que mostram nossa força e crescimento constante."
            center
            light
          />
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-legal-cyan mb-2">11+</div>
              <p className="text-lg font-light">Anos de Experiência</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-legal-cyan mb-2">8+</div>
              <p className="text-lg font-light">Colaboradores</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-legal-cyan mb-2">7K+</div>
              <p className="text-lg font-light">Clientes Atendidos</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-legal-cyan mb-2">170K+</div>
              <p className="text-lg font-light">Conexões Criadas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <CallToAction
        title="Pronto para Fazer Parte do Time LEGAL?"
        subtitle="Estamos sempre em busca de pessoas talentosas que compartilhem nossos valores e queiram transformar o futuro da tecnologia no Brasil."
        buttonText="Ver Vagas Abertas"
        buttonLink="/vagas"
        background="gradient"
      />
    </div>
  );
};

export default TimePage;
