
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Search, BookOpen, Users, Zap, Newspaper, Activity, HelpCircle, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import SectionTitle from '@/components/SectionTitle';

const UniversoPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const universoSections = [
    {
      title: 'TecTec (Blog)',
      description: 'Novidades, tendências e insights do mundo da tecnologia e conectividade. Mantenha-se atualizado com as últimas inovações.',
      icon: <BookOpen className="w-8 h-8 text-legal" />,
      link: '/universo/tectec',
      color: 'from-legal to-legal-purple'
    },
    {
      title: 'Histórias',
      description: 'Casos de sucesso reais de clientes que transformaram seus negócios com as soluções LEGAL. Inspire-se.',
      icon: <Users className="w-8 h-8 text-legal" />,
      link: '/universo/historias',
      color: 'from-legal-purple to-legal-green'
    },
    {
      title: 'BITS',
      description: 'Programa de Fidelidade da LEGAL',
      icon: <Zap className="w-8 h-8 text-legal" />,
      link: '/universo/bits',
      color: 'from-legal-green to-legal',
      featured: true
    },
    {
      title: 'Recursos',
      description: 'Conteúdos, Dicas e Ferramentas',
      icon: <BookOpen className="w-8 h-8 text-legal" />,
      link: '/universo/recursos',
      color: 'from-legal to-legal-purple'
    },
    {
      title: 'Imprensa',
      description: 'Notícias, releases e materiais para imprensa. Acompanhe os principais marcos da LEGAL.',
      icon: <Newspaper className="w-8 h-8 text-legal" />,
      link: '/universo/imprensa',
      color: 'from-legal to-legal-purple'
    },
    {
      title: 'Status',
      description: 'Monitore em tempo real o status dos nossos servidores e serviços. Transparência total.',
      icon: <Activity className="w-8 h-8 text-legal" />,
      link: '/universo/status',
      color: 'from-legal-purple to-legal-green'
    },
    {
      title: 'FAQ',
      description: 'Perguntas frequentes e respostas detalhadas sobre nossos produtos e serviços.',
      icon: <HelpCircle className="w-8 h-8 text-legal" />,
      link: '/universo/faq',
      color: 'from-legal-green to-legal'
    }
  ];

  const filteredSections = universoSections.filter(section =>
    section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    section.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Helmet>
        <title>Universo LEGAL | Blog, Histórias, BITS e Muito Mais</title>
        <meta name="description" content="Explore o Universo LEGAL: blog TecTec, histórias de sucesso, programa BITS, notícias da imprensa, status dos serviços e FAQ." />
        <meta property="og:title" content="Universo LEGAL | Conteúdos e Comunidade" />
        <meta property="og:description" content="Descubra tudo sobre tecnologia, casos de sucesso e faça parte da comunidade LEGAL." />
        <meta property="og:url" content="https://operadora.legal/universo" />
        <meta name="keywords" content="LEGAL blog, casos de sucesso, programa fidelidade, tecnologia, conectividade" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4">
          <div className="container mx-auto text-center">
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-legal-green bg-opacity-10 text-legal-green rounded-full text-sm font-medium mb-4">
                Universo LEGAL
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-legal mb-6 font-unica">
                Explore o Universo
                <span className="text-legal-green block">LEGAL</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 font-unica">
                Descubra conteúdos exclusivos, histórias inspiradoras e faça parte da maior comunidade de tecnologia e conectividade do Brasil.
              </p>
            </div>

            {/* Search Bar */}
            <div className="max-w-md mx-auto mb-12">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Buscar no Universo LEGAL..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-12 text-lg border-legal focus:ring-legal"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Sections Grid */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredSections.map((section, index) => (
                <Card 
                  key={section.title}
                  className={`group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden ${
                    section.featured ? 'md:col-span-2 lg:col-span-1' : ''
                  }`}
                >
                  <div className={`h-2 bg-gradient-to-r ${section.color}`} />
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-3">
                      {section.icon}
                      {section.featured && (
                        <span className="bg-legal-green text-white text-xs px-2 py-1 rounded-full">
                          Destaque
                        </span>
                      )}
                    </div>
                    <CardTitle className="text-xl font-bold text-legal group-hover:text-legal-purple transition-colors">
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {section.description}
                    </p>
                    <Button 
                      asChild 
                      variant="outline" 
                      className="w-full border-legal text-legal hover:bg-legal hover:text-white group-hover:border-legal-purple group-hover:text-legal-purple hover:group-hover:bg-legal-purple hover:group-hover:text-white transition-all"
                    >
                      <Link to={section.link} className="flex items-center justify-center">
                        Explorar
                        <ExternalLink className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredSections.length === 0 && searchQuery && (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  Nenhum resultado encontrado
                </h3>
                <p className="text-gray-500">
                  Tente buscar por outros termos relacionados ao Universo LEGAL.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4 bg-gradient-to-r from-legal to-legal-purple">
          <div className="container mx-auto text-center">
            <SectionTitle
              title="Conecte-se ao Futuro"
              subtitle="Faça parte da revolução tecnológica que está transformando o Brasil"
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
                <a href="https://blue.operadora.legal" target="_blank" rel="noopener noreferrer">
                  Acesso BLUE
                  <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default UniversoPage;
