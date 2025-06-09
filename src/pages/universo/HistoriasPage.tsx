
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Search, Calendar, Building2, Users, TrendingUp, ArrowRight, Filter, Clock, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import SectionTitle from '@/components/SectionTitle';

const HistoriasPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('todas');

  const categories = [
    { id: 'todas', label: 'Todas' },
    { id: 'saude', label: 'Saúde' },
    { id: 'tecnologia', label: 'Tecnologia' },
    { id: 'educacao', label: 'Educação' },
    { id: 'varejo', label: 'Varejo' },
    { id: 'eventos', label: 'Eventos' }
  ];

  const stories = [
    {
      id: 'sirio-libanes',
      title: 'Hospital Sírio-Libanês',
      subtitle: 'Congresso Médico Transformado pela Tecnologia',
      description: 'Implementação do Smart Events™ no congresso médico anual com mais de 5.000 participantes, resultando em 40% mais interações e redução de 30% nos custos operacionais.',
      image: 'https://images.unsplash.com/photo-1631549916768-4119b4220292?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVkaWNhbCUyMGNvbmdyZXNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
      category: 'saude',
      date: '2024-03-15',
      readTime: '8 min',
      stats: [
        { label: 'Participantes', value: '5.000+' },
        { label: 'Aumento de Interações', value: '40%' },
        { label: 'Redução de Custos', value: '30%' }
      ],
      featured: true
    },
    {
      id: 'vtex-day',
      title: 'VTEX DAY',
      subtitle: 'Zero Falhas em Picos de 15.000 Conexões',
      description: 'Maior evento de varejo e tecnologia da América Latina utilizou soluções AERO para conectar mais de 15.000 pessoas com zero falhas de rede mesmo em picos de uso.',
      image: 'https://images.unsplash.com/photo-1540304453527-62f979142a17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29uZmVyZW5jZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
      category: 'varejo',
      date: '2024-02-20',
      readTime: '6 min',
      stats: [
        { label: 'Participantes', value: '15.000+' },
        { label: 'Falhas de Rede', value: '0' },
        { label: 'Uptime', value: '100%' }
      ],
      featured: true
    },
    {
      id: 'campus-party',
      title: 'Campus Party Brasil',
      subtitle: 'IA Revoluciona Experiência do Visitante',
      description: 'Implementação de FacePass™ reduziu o tempo de checkin em 80% e melhorou a experiência do visitante com IA para recomendações personalizadas.',
      image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dGVjaG5vbG9neSUyMGV2ZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
      category: 'tecnologia',
      date: '2024-01-10',
      readTime: '7 min',
      stats: [
        { label: 'Redução Check-in', value: '80%' },
        { label: 'Satisfação', value: '95%' },
        { label: 'Recomendações IA', value: '10.000+' }
      ]
    },
    {
      id: 'usp-conecta',
      title: 'USP Conecta',
      subtitle: 'Transformação Digital na Educação',
      description: 'Universidade de São Paulo implementa Smart Events™ em semana acadêmica, conectando 8.000 estudantes com networking inteligente baseado em IA.',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
      category: 'educacao',
      date: '2023-11-25',
      readTime: '5 min',
      stats: [
        { label: 'Estudantes', value: '8.000+' },
        { label: 'Conexões IA', value: '95%' },
        { label: 'Engajamento', value: '+65%' }
      ]
    },
    {
      id: 'rock-in-rio',
      title: 'Rock in Rio',
      subtitle: 'Conectividade em Massa sem Precedentes',
      description: 'Maior festival de música do Brasil confia na LEGAL para garantir conectividade perfeita para 100.000 pessoas simultâneas por dia.',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
      category: 'eventos',
      date: '2023-09-15',
      readTime: '9 min',
      stats: [
        { label: 'Público Diário', value: '100.000' },
        { label: 'Dados Trafegados', value: '50TB' },
        { label: 'Satisfação', value: '98%' }
      ]
    },
    {
      id: 'magazine-luiza',
      title: 'Magazine Luiza',
      subtitle: 'Revolução no Atendimento ao Cliente',
      description: 'Implementação de soluções LEGAL em eventos corporativos resultou em experiência omnichannel única para colaboradores e clientes.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
      category: 'varejo',
      date: '2023-08-30',
      readTime: '6 min',
      stats: [
        { label: 'Lojas Conectadas', value: '1.200+' },
        { label: 'NPS', value: '85' },
        { label: 'ROI', value: '300%' }
      ]
    }
  ];

  const filteredStories = stories.filter(story => {
    const matchesSearch = story.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         story.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'todas' || story.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredStories = filteredStories.filter(story => story.featured);
  const regularStories = filteredStories.filter(story => !story.featured);

  return (
    <>
      <Helmet>
        <title>Histórias de Sucesso | LEGAL - Casos Reais de Transformação</title>
        <meta name="description" content="Descubra como empresas líderes transformaram seus eventos e negócios com as soluções LEGAL. Casos reais, resultados comprovados." />
        <meta property="og:title" content="Histórias de Sucesso LEGAL" />
        <meta property="og:description" content="Casos reais de transformação digital com Smart Events™ e soluções LEGAL" />
        <meta property="og:url" content="https://operadora.legal/universo/historias" />
        <meta name="keywords" content="casos de sucesso, LEGAL, Smart Events, transformação digital, eventos" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4">
          <div className="container mx-auto text-center">
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-legal-green bg-opacity-10 text-legal-green rounded-full text-sm font-medium mb-4">
                Histórias de Sucesso
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-legal mb-6 font-unica">
                Transformações
                <span className="text-legal-green block">Reais</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 font-unica">
                Descubra como empresas líderes estão revolucionando seus eventos e negócios com as soluções LEGAL. Casos reais, resultados comprovados.
              </p>
            </div>

            {/* Search and Filters */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    type="text"
                    placeholder="Buscar histórias..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 h-12 text-lg border-legal focus:ring-legal"
                  />
                </div>
                <div className="flex gap-2">
                  <Filter className="text-gray-400 w-5 h-5 mt-3.5" />
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <Button
                        key={category.id}
                        variant={selectedCategory === category.id ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedCategory(category.id)}
                        className={selectedCategory === category.id ? 
                          "bg-legal text-white" : 
                          "border-legal text-legal hover:bg-legal hover:text-white"
                        }
                      >
                        {category.label}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Stories */}
        {featuredStories.length > 0 && (
          <section className="py-16 px-4">
            <div className="container mx-auto">
              <SectionTitle
                title="Destaques"
                subtitle="Nossas histórias mais impactantes"
                center
              />
              
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                {featuredStories.map((story) => (
                  <Card key={story.id} className="group hover:shadow-2xl transition-all duration-300 overflow-hidden border-0">
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={story.image} 
                        alt={story.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-legal-green text-white">Destaque</Badge>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                          <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {new Date(story.date).toLocaleDateString('pt-BR')}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {story.readTime}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline" className="border-legal text-legal">
                          {categories.find(c => c.id === story.category)?.label}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl text-legal group-hover:text-legal-purple transition-colors">
                        {story.title}
                      </CardTitle>
                      <p className="text-legal-purple font-medium">{story.subtitle}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {story.description}
                      </p>
                      
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        {story.stats.map((stat, index) => (
                          <div key={index} className="text-center">
                            <div className="text-2xl font-bold text-legal">{stat.value}</div>
                            <div className="text-xs text-gray-500">{stat.label}</div>
                          </div>
                        ))}
                      </div>

                      <Button 
                        asChild 
                        className="w-full bg-legal hover:bg-legal-purple transition-colors"
                      >
                        <Link to={`/universo/historias/${story.id}`}>
                          Ler história completa
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Regular Stories */}
        {regularStories.length > 0 && (
          <section className="py-16 px-4 bg-gray-50">
            <div className="container mx-auto">
              <SectionTitle
                title="Todas as Histórias"
                subtitle="Explore todos os nossos casos de sucesso"
                center
              />
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularStories.map((story) => (
                  <Card key={story.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={story.image} 
                        alt={story.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge variant="outline" className="bg-white/90 border-legal text-legal">
                          {categories.find(c => c.id === story.category)?.label}
                        </Badge>
                      </div>
                    </div>
                    <CardHeader className="pb-4">
                      <CardTitle className="text-lg text-legal group-hover:text-legal-purple transition-colors">
                        {story.title}
                      </CardTitle>
                      <p className="text-sm text-legal-purple font-medium">{story.subtitle}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                        {story.description}
                      </p>
                      
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(story.date).toLocaleDateString('pt-BR')}
                        </span>
                        <span className="flex items-center gap-1">
                          <BookOpen className="w-3 h-3" />
                          {story.readTime}
                        </span>
                      </div>

                      <Button 
                        asChild 
                        variant="outline"
                        size="sm"
                        className="w-full border-legal text-legal hover:bg-legal hover:text-white"
                      >
                        <Link to={`/universo/historias/${story.id}`}>
                          Ler mais
                          <ArrowRight className="ml-2 w-3 h-3" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* No Results */}
        {filteredStories.length === 0 && (searchQuery || selectedCategory !== 'todas') && (
          <section className="py-16 px-4">
            <div className="container mx-auto text-center">
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Nenhuma história encontrada
              </h3>
              <p className="text-gray-500 mb-6">
                Tente ajustar os filtros ou termos de busca.
              </p>
              <Button 
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('todas');
                }}
                variant="outline"
                className="border-legal text-legal hover:bg-legal hover:text-white"
              >
                Limpar filtros
              </Button>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-legal to-legal-purple">
          <div className="container mx-auto text-center">
            <SectionTitle
              title="Sua História Pode Ser a Próxima"
              subtitle="Transforme seu evento ou negócio com as soluções LEGAL"
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
                  Fale com um Especialista
                </Link>
              </Button>
              <Button 
                size="lg" 
                className="bg-legal-green hover:bg-legal-green/90 text-white"
                asChild
              >
                <Link to="/smart-events">
                  Conhecer Smart Events™
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HistoriasPage;
