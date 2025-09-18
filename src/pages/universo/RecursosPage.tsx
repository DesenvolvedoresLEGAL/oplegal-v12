import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Zap, 
  Users, 
  Code, 
  PlayCircle,
  FileText,
  MessageSquare,
  ArrowRight,
  ExternalLink,
  Download
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import SectionTitle from '@/components/SectionTitle';
import SEOHead from '@/components/SEOHead';
import WebPageSchema from '@/components/seo/WebPageSchema';
import BreadcrumbsSchema from '@/components/seo/BreadcrumbsSchema';

const RecursosPage = () => {
  const quickStartCards = [
    {
      title: 'Primeiros Passos',
      description: 'Tutorial passo a passo para criar seu primeiro projeto na LEGAL.',
      icon: <PlayCircle className="w-6 h-6" />,
      link: '#',
      color: 'from-legal to-legal-purple'
    },
    {
      title: 'Funcionalidades',
      description: 'Principais recursos da plataforma LEGAL.',
      icon: <Zap className="w-6 h-6" />,
      link: '#',
      color: 'from-legal-purple to-legal-green'
    },
    {
      title: 'Integrações',
      description: 'Estenda funcionalidades com integrações.',
      icon: <Code className="w-6 h-6" />,
      link: '#',
      color: 'from-legal-green to-legal'
    },
    {
      title: 'Dicas & Truques',
      description: 'Aproveite ao máximo a plataforma LEGAL.',
      icon: <BookOpen className="w-6 h-6" />,
      link: '#',
      color: 'from-legal to-legal-purple'
    },
    {
      title: 'Casos de Uso',
      description: 'Veja tutoriais em vídeo e inspiração.',
      icon: <Users className="w-6 h-6" />,
      link: '#',
      color: 'from-legal-purple to-legal-green'
    },
    {
      title: 'Glossário',
      description: 'Definições e conceitos importantes.',
      icon: <FileText className="w-6 h-6" />,
      link: '#',
      color: 'from-legal-green to-legal'
    }
  ];

  const announcements = [
    {
      title: 'Novidades da Plataforma',
      description: 'Acompanhe as últimas atualizações e lançamentos',
      date: '2025-01-18'
    },
    {
      title: 'Status dos Serviços',
      description: 'Monitore em tempo real o status dos serviços LEGAL',
      date: '2025-01-17'
    },
    {
      title: 'Solicitações de Recursos',
      description: 'Sugira novas funcionalidades para a plataforma',
      date: '2025-01-16'
    }
  ];

  const resources = [
    {
      title: 'Documentação Técnica',
      description: 'Guias completos e referências da API',
      icon: <FileText className="w-5 h-5" />,
      items: ['API Reference', 'SDK Documentation', 'Integration Guides']
    },
    {
      title: 'Suporte',
      description: 'Obtenha ajuda quando precisar',
      icon: <MessageSquare className="w-5 h-5" />,
      items: ['FAQ', 'Ticket de Suporte', 'Chat ao Vivo']
    },
    {
      title: 'Downloads',
      description: 'Ferramentas e materiais para download',
      icon: <Download className="w-5 h-5" />,
      items: ['SDKs', 'Logos e Assets', 'Templates']
    }
  ];

  return (
    <>
      <SEOHead
        title="Recursos LEGAL | Central de Conhecimento"
        description="Centro de recursos da LEGAL: documentação, tutoriais, ferramentas e conteúdos para maximizar seu uso da plataforma."
        keywords="LEGAL recursos, documentação, tutoriais, ferramentas, suporte, central conhecimento"
        url="https://operadora.legal/universo/recursos"
        type="website"
      />
      <WebPageSchema
        name="Recursos LEGAL | Central de Conhecimento"
        description="Centro de recursos da LEGAL: documentação, tutoriais, ferramentas e conteúdos para maximizar seu uso da plataforma."
        url="https://operadora.legal/universo/recursos"
        breadcrumb={[
          { name: "Universo", url: "https://operadora.legal/universo" },
          { name: "Recursos", url: "https://operadora.legal/universo/recursos" }
        ]}
      />
      <BreadcrumbsSchema />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-legal-green bg-opacity-10 text-legal-green rounded-full text-sm font-medium mb-4">
                Recursos LEGAL
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-legal mb-6 font-unica">
                Central de
                <span className="text-legal-green block">Conhecimento</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 font-unica">
                Conteúdos, dicas e ferramentas para maximizar seu uso da plataforma LEGAL. 
                Tudo que você precisa para ter sucesso.
              </p>
            </div>

            {/* Quick Start Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {quickStartCards.map((card, index) => (
                <Card key={card.title} className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${card.color}`} />
                  <CardHeader className="pb-4">
                    <div className="flex items-center mb-3">
                      <div className="p-2 rounded-lg bg-legal bg-opacity-10 text-legal mr-3">
                        {card.icon}
                      </div>
                    </div>
                    <CardTitle className="text-lg font-bold text-legal group-hover:text-legal-purple transition-colors">
                      {card.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {card.description}
                    </p>
                    <Button 
                      asChild 
                      variant="ghost" 
                      size="sm"
                      className="text-legal hover:bg-legal hover:text-white p-0 h-auto font-medium"
                    >
                      <Link to={card.link} className="flex items-center">
                        Acessar
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content Grid */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-8 space-y-6">
                  {/* Announcements */}
                  <Card className="border border-gray-200">
                    <CardHeader className="pb-4">
                      <CardTitle className="text-lg font-bold text-legal flex items-center">
                        <MessageSquare className="w-5 h-5 mr-2" />
                        Avisos
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {announcements.map((announcement, index) => (
                        <div key={index} className="border-l-2 border-legal-green pl-3">
                          <h4 className="font-medium text-sm text-legal mb-1">
                            {announcement.title}
                          </h4>
                          <p className="text-xs text-gray-600 mb-2">
                            {announcement.description}
                          </p>
                          <span className="text-xs text-gray-400">
                            {announcement.date}
                          </span>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  {/* Quick Links */}
                  <Card className="border border-gray-200">
                    <CardHeader className="pb-4">
                      <CardTitle className="text-lg font-bold text-legal flex items-center">
                        <ExternalLink className="w-5 h-5 mr-2" />
                        Links Rápidos
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {resources.map((resource, index) => (
                        <div key={index}>
                          <div className="flex items-center mb-2">
                            <div className="text-legal mr-2">
                              {resource.icon}
                            </div>
                            <h4 className="font-medium text-sm text-legal">
                              {resource.title}
                            </h4>
                          </div>
                          <p className="text-xs text-gray-600 mb-2">
                            {resource.description}
                          </p>
                          <ul className="space-y-1">
                            {resource.items.map((item, itemIndex) => (
                              <li key={itemIndex}>
                                <Link 
                                  to="#" 
                                  className="text-xs text-legal hover:text-legal-purple transition-colors"
                                >
                                  {item}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-3">
                <div className="prose prose-lg max-w-none">
                  <div className="bg-gradient-to-r from-legal to-legal-purple rounded-xl p-8 text-white mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-white">
                      Bem-vindo aos Recursos LEGAL
                    </h2>
                    <p className="text-white/90 mb-6">
                      A LEGAL é uma plataforma de tecnologia avançada que permite a criação e gestão 
                      de soluções de conectividade, IA e automação. Explore nossos recursos para 
                      maximizar o potencial da sua operação.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <Button 
                        variant="outline" 
                        className="bg-white text-legal border-white hover:bg-gray-100"
                        asChild
                      >
                        <Link to="/universo/tectec">
                          Ver Blog TecTec
                        </Link>
                      </Button>
                      <Button 
                        variant="outline" 
                        className="bg-transparent text-white border-white hover:bg-white/10"
                        asChild
                      >
                        <a href="https://blue.operadora.legal" target="_blank" rel="noopener noreferrer">
                          Acesso BLUE
                          <ExternalLink className="ml-2 w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </div>

                  {/* Content Sections */}
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <Card className="border border-gray-200">
                      <CardHeader>
                        <CardTitle className="text-xl font-bold text-legal">
                          Primeiros Passos
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 mb-4">
                          Tutorial passo a passo para começar a usar a plataforma LEGAL e configurar 
                          suas primeiras soluções.
                        </p>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center">
                            <div className="w-2 h-2 bg-legal-green rounded-full mr-3"></div>
                            Configuração inicial da conta
                          </li>
                          <li className="flex items-center">
                            <div className="w-2 h-2 bg-legal-green rounded-full mr-3"></div>
                            Primeiro projeto
                          </li>
                          <li className="flex items-center">
                            <div className="w-2 h-2 bg-legal-green rounded-full mr-3"></div>
                            Configurações avançadas
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border border-gray-200">
                      <CardHeader>
                        <CardTitle className="text-xl font-bold text-legal">
                          Principais Recursos
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 mb-4">
                          Conheça as funcionalidades core da plataforma LEGAL e como utilizá-las 
                          para maximizar seus resultados.
                        </p>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center">
                            <div className="w-2 h-2 bg-legal-purple rounded-full mr-3"></div>
                            Conectividade 5G
                          </li>
                          <li className="flex items-center">
                            <div className="w-2 h-2 bg-legal-purple rounded-full mr-3"></div>
                            Inteligência Artificial
                          </li>
                          <li className="flex items-center">
                            <div className="w-2 h-2 bg-legal-purple rounded-full mr-3"></div>
                            Automação de Processos
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4 bg-gradient-to-r from-legal to-legal-purple">
          <div className="container mx-auto text-center">
            <SectionTitle
              title="Precisa de Ajuda?"
              subtitle="Nossa equipe está pronta para apoiar seu sucesso com a plataforma LEGAL"
              center
              light
            />
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="outline"
                className="bg-white text-legal border-white hover:bg-gray-100"
                asChild
              >
                <Link to="/contato">
                  Fale Conosco
                </Link>
              </Button>
              <Button 
                size="lg" 
                className="bg-legal-green hover:bg-legal-green/90 text-white"
                asChild
              >
                <Link to="/universo/faq">
                  Ver FAQ
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default RecursosPage;