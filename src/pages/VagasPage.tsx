
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import CallToAction from '@/components/CallToAction';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  MapPin, 
  Clock, 
  Users, 
  Heart, 
  Zap, 
  Target, 
  Coffee,
  Laptop,
  Car,
  GraduationCap,
  Briefcase,
  Send
} from 'lucide-react';

const openPositions = [
  {
    title: "Consultor(a) de Tecnologia",
    department: "Comercial",
    location: "Presencial",
    type: "PJ",
    level: "Pleno",
    salary: "A partir de R$ 7.000",
    description: "Desenvolvimento de relacionamentos comerciais e apresentação de soluções tecnológicas para clientes no setor de eventos.",
    requirements: ["Experiência em vendas B2B", "Conhecimento em tecnologia", "Relacionamento interpessoal", "Negociação"],
    values: ["Execução Energizada", "Resultados com Ressonância"],
    quantity: "3 vagas"
  },
  {
    title: "Gerente de Customer Success",
    department: "Customer Success",
    location: "Presencial",
    type: "CLT",
    level: "Pleno",
    salary: "A partir de R$ 8.000",
    description: "Liderança do time de CS e garantia da satisfação e retenção de clientes, focando em resultados e crescimento.",
    requirements: ["Experiência em CS", "Liderança de equipes", "Análise de dados", "Relacionamento com clientes"],
    values: ["Resultados com Ressonância", "Alinhamento com Alma"],
    quantity: "1 vaga"
  },
  {
    title: "Desenvolvedor(a) Full Stack",
    department: "Tecnologia",
    location: "Presencial",
    type: "CLT",
    level: "Pleno",
    description: "Desenvolvimento de soluções tecnológicas para eventos e negócios utilizando React, Node.js e tecnologias modernas.",
    requirements: ["React", "Node.js", "TypeScript", "PostgreSQL"],
    values: ["Execução Energizada", "Visão Viva"],
    quantity: "1 vaga"
  },
  {
    title: "Desenvolvedor(a) Full Stack",
    department: "Tecnologia",
    location: "Presencial",
    type: "CLT",
    level: "Sênior",
    description: "Desenvolvimento e arquitetura de soluções tecnológicas complexas, mentoria de desenvolvedores e liderança técnica.",
    requirements: ["React", "Node.js", "TypeScript", "PostgreSQL", "Arquitetura de software", "Liderança técnica"],
    values: ["Execução Energizada", "Visão Viva"],
    quantity: "1 vaga"
  },
  {
    title: "Analista Financeiro",
    department: "Financeiro",
    location: "Presencial",
    type: "CLT",
    level: "Pleno",
    description: "Análise financeira, controle de fluxo de caixa, relatórios gerenciais e apoio à tomada de decisões estratégicas.",
    requirements: ["Graduação em Contabilidade/Administração", "Excel avançado", "Análise financeira", "Relatórios gerenciais"],
    values: ["Resultados com Ressonância", "Execução Energizada"],
    quantity: "1 vaga"
  },
  {
    title: "Assistente Administrativo",
    department: "Administrativo",
    location: "Presencial",
    type: "CLT",
    level: "Júnior",
    description: "Suporte administrativo geral, organização de documentos, atendimento e apoio às operações do dia a dia.",
    requirements: ["Ensino médio completo", "Pacote Office", "Organização", "Comunicação"],
    values: ["Alinhamento com Alma", "Execução Energizada"],
    quantity: "1 vaga"
  }
];

const benefits = [
  {
    icon: <Laptop className="w-6 h-6" />,
    title: "Setup Completo",
    description: "Notebook, monitor e equipamentos de trabalho"
  },
  {
    icon: <Coffee className="w-6 h-6" />,
    title: "Vale Alimentação",
    description: "VR/VA para você se alimentar bem"
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Plano de Saúde",
    description: "Assistência médica e odontológica (após 6 meses)"
  },
  {
    icon: <Car className="w-6 h-6" />,
    title: "Vale Transporte",
    description: "Auxílio para deslocamento ou combustível"
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: "Desenvolvimento",
    description: "Cursos, certificações e eventos pagos"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Bônus Anual",
    description: "Até 2 salários a mais no ano"
  }
];

const processSteps = [
  {
    step: "01",
    title: "Candidatura",
    description: "Envie seu currículo e conte sobre sua motivação para fazer parte do time LEGAL."
  },
  {
    step: "02",
    title: "Etapa 1: Triagem",
    description: "Nossa equipe de People analisa seu perfil e experiências."
  },
  {
    step: "03",
    title: "Etapa 2: Entrevista Online",
    description: "Conversa online para conhecer suas habilidades e experiências."
  },
  {
    step: "04",
    title: "Etapa 3: Entrevista Presencial",
    description: "Bate-papo presencial sobre fit cultural e alinhamento com nossos valores."
  },
  {
    step: "05",
    title: "Análise FitScore",
    description: "Avaliação completa do seu perfil e compatibilidade com a vaga."
  },
  {
    step: "06",
    title: "Contratação",
    description: "Apresentação da proposta e boas-vindas ao time LEGAL!"
  }
];

const VagasPage = () => {
  return (
    <div className="bg-background text-foreground font-unica">
      {/* Hero Section */}
      <section className="py-24 md:py-32 text-center bg-gradient-to-br from-legal to-legal-purple text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Briefcase className="absolute top-1/4 left-1/4 w-64 h-64 text-white/10 animate-pulse transform -translate-x-1/2 -translate-y-1/2" />
          <Users className="absolute bottom-10 right-10 w-32 h-32 text-white/10 animate-ping" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-wider mb-6 animate-fade-in" style={{ letterSpacing: '0.05em' }}>
            VAGAS ABERTAS
          </h1>
          <p className="text-lg md:text-xl font-light max-w-3xl mx-auto mb-8 animate-fade-in animation-delay-300">
            Faça parte da maior TechCo de eventos e negócios do Brasil. Aqui, transformar ideias em realidade é regra.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in animation-delay-600">
            <Button 
              size="lg" 
              className="bg-legal-cyan hover:bg-legal-cyan/90 text-legal font-bold"
              onClick={() => document.getElementById('oportunidades')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Oportunidades
            </Button>
            <Button size="lg" variant="outline" className="border-white text-legal hover:bg-white hover:text-legal/80">
              Cadastro de Talentos
            </Button>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="oportunidades" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="OPORTUNIDADES ABERTAS"
            subtitle="Encontre a vaga ideal para fazer parte da nossa jornada de conectar 1 milhão de pessoas, negócios e coisas no Brasil até 2030."
            center
          />
          <div className="grid lg:grid-cols-2 gap-8">
            {openPositions.map((position, index) => (
              <Card key={index} className="bg-card border-legal/20 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-black text-legal mb-2">{position.title}</h3>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge variant="secondary" className="bg-legal-purple/10 text-legal-purple">
                          {position.department}
                        </Badge>
                        <Badge variant="outline" className="border-legal/30">
                          {position.level}
                        </Badge>
                        {position.quantity && (
                          <Badge variant="outline" className="border-legal-cyan/30 text-legal-cyan">
                            {position.quantity}
                          </Badge>
                        )}
                      </div>
                      {position.salary && (
                        <p className="text-legal font-semibold">{position.salary}</p>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {position.description}
                  </p>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{position.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{position.type}</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-legal mb-2">Requisitos:</h4>
                    <div className="flex flex-wrap gap-2">
                      {position.requirements.map((req, reqIndex) => (
                        <span key={reqIndex} className="px-2 py-1 bg-legal-cyan/10 text-legal-cyan text-xs font-medium rounded">
                          {req}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-legal mb-2">Valores V.E.R.A.:</h4>
                    <div className="flex flex-wrap gap-2">
                      {position.values.map((value, valueIndex) => (
                        <span key={valueIndex} className="px-2 py-1 bg-legal/10 text-legal text-xs font-medium rounded">
                          {value}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full bg-legal hover:bg-legal/90 text-white"
                    onClick={() => window.location.href = '/candidatura'}
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Candidatar-se
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="BENEFÍCIOS LEGAIS"
            subtitle="Cuidamos do nosso time CLT com benefícios que fazem a diferença no dia a dia e no crescimento profissional."
            center
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-white border-legal/20 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4 text-legal-cyan">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-bold text-legal mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="PROCESSO SELETIVO"
            subtitle="Nossa seleção é transparente e focada em encontrar pessoas que se conectem com nossos valores e propósito."
            center
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-legal text-white rounded-full flex items-center justify-center text-xl font-black mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-legal mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-legal text-white">
        <div className="container mx-auto px-4 text-center">
          <SectionTitle
            title="FRAMEWORK V.E.R.A.™"
            subtitle="Nossos valores guiam cada contratação e cada decisão. Se você se identifica com eles, queremos você no nosso time."
            center
            light
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Target className="w-12 h-12 text-legal-cyan mx-auto mb-4" />
              <h3 className="text-xl font-black mb-2 uppercase tracking-wide">Visão Viva</h3>
              <p className="text-gray-200 text-sm">Clareza estratégica e metas ousadas</p>
            </div>
            <div className="text-center">
              <Zap className="w-12 h-12 text-legal-cyan mx-auto mb-4" />
              <h3 className="text-xl font-black mb-2 uppercase tracking-wide">Execução Energizada</h3>
              <p className="text-gray-200 text-sm">Ritmo diário e foco na entrega</p>
            </div>
            <div className="text-center">
              <Target className="w-12 h-12 text-legal-cyan mx-auto mb-4" />
              <h3 className="text-xl font-black mb-2 uppercase tracking-wide">Resultados com Ressonância</h3>
              <p className="text-gray-200 text-sm">Impacto real e métricas vivas</p>
            </div>
            <div className="text-center">
              <Heart className="w-12 h-12 text-legal-cyan mx-auto mb-4" />
              <h3 className="text-xl font-black mb-2 uppercase tracking-wide">Alinhamento com Alma</h3>
              <p className="text-gray-200 text-sm">Cultura viva e conexão genuína</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <CallToAction
        title="Não Encontrou a Vaga Ideal?"
        subtitle="Cadastre-se no nosso banco de talentos e seja o primeiro a saber sobre novas oportunidades na LEGAL."
        buttonText="Cadastro de Talentos"
        buttonLink="/contato"
        secondaryButtonText="Fale Conosco"
        secondaryButtonLink="/contato"
        background="gradient"
      />
    </div>
  );
};

export default VagasPage;
