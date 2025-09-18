
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Search, Calendar, ArrowRight, Users, TrendingUp, Star, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import SectionTitle from '@/components/SectionTitle';
import SEOHead from '@/components/SEOHead';
import OptimizedImage from '@/components/OptimizedImage';
import AIKnowledgeProvider from '@/components/seo/AIKnowledgeProvider';
import VoiceSearchOptimization from '@/components/optimization/VoiceSearchOptimization';
import GEOAdvancedOptimization from '@/components/seo/GEOAdvancedOptimization';
import RealUserMonitoring from '@/components/seo/RealUserMonitoring';
import CoreWebVitalsMonitor from '@/components/seo/CoreWebVitalsMonitor';
import AIFeedbackSystem from '@/components/optimization/AIFeedbackSystem';
import AdvancedFeaturedSnippets from '@/components/seo/AdvancedFeaturedSnippets';
import SEOCrawlerOptimization from '@/components/optimization/SEOCrawlerOptimization';

interface Historia {
  id: string;
  title: string;
  company: string;
  industry: string;
  description: string;
  image: string;
  featured: boolean;
  metrics: {
    label: string;
    value: string;
  }[];
  publishedDate: string;
  readTime: string;
  tags: string[];
}

const HistoriasPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('');

  const historias: Historia[] = [
    {
      id: 'sirio-libanes',
      title: 'Hospital Sírio-Libanês revoluciona congresso médico com Smart Events™',
      company: 'Hospital Sírio-Libanês',
      industry: 'Saúde',
      description: 'Implementação do Smart Events™ no congresso médico anual com mais de 5.000 participantes, resultando em 40% mais interações e redução de 30% nos custos operacionais.',
      image: 'https://images.unsplash.com/photo-1631549916768-4119b4220292?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
      featured: true,
      metrics: [
        { label: 'Aumento de Interações', value: '+40%' },
        { label: 'Redução de Custos', value: '-30%' },
        { label: 'Participantes', value: '5.000+' }
      ],
      publishedDate: '2024-03-15',
      readTime: '8 min',
      tags: ['Smart Events', 'MAGICPASS', 'Saúde', 'Congresso']
    },
    {
      id: 'vtex-day',
      title: 'VTEX DAY: Maior evento de varejo conecta 15 mil pessoas sem falhas',
      company: 'VTEX',
      industry: 'Tecnologia',
      description: 'Maior evento de varejo e tecnologia da América Latina utilizou soluções AERO para conectar mais de 15.000 pessoas com zero falhas de rede mesmo em picos de uso.',
      image: 'https://images.unsplash.com/photo-1540304453527-62f979142a17?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
      featured: true,
      metrics: [
        { label: 'Conectividade', value: '100%' },
        { label: 'Participantes', value: '15.000+' },
        { label: 'Uptime', value: '99.9%' }
      ],
      publishedDate: '2024-02-20',
      readTime: '6 min',
      tags: ['AERO', 'Conectividade', 'E-commerce', 'Varejo']
    },
    {
      id: 'campus-party',
      title: 'Campus Party Brasil acelera check-in em 80% com MAGICPASS™',
      company: 'Campus Party Brasil',
      industry: 'Educação',
      description: 'Implementação de MAGICPASS™ reduziu o tempo de check-in em 80% e melhorou a experiência do visitante com IA para recomendações personalizadas.',
      image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
      featured: false,
      metrics: [
        { label: 'Redução Tempo Check-in', value: '-80%' },
        { label: 'NPS', value: '9.2/10' },
        { label: 'Participantes', value: '8.000+' }
      ],
      publishedDate: '2024-01-10',
      readTime: '5 min',
      tags: ['MAGICPASS', 'IA', 'Educação', 'Campus Party']
    },
    {
      id: 'rock-in-rio',
      title: 'Rock in Rio 2024: Conectividade 5G para 700 mil pessoas',
      company: 'Rock in Rio',
      industry: 'Entretenimento',
      description: 'Implementação da rede SPEEDY 5G garantiu conectividade ultra-rápida para mais de 700 mil pessoas durante os 7 dias de festival.',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
      featured: false,
      metrics: [
        { label: 'Velocidade Média', value: '1Gbps' },
        { label: 'Cobertura', value: '100%' },
        { label: 'Público Total', value: '700k+' }
      ],
      publishedDate: '2023-12-05',
      readTime: '7 min',
      tags: ['SPEEDY 5G', 'Entretenimento', 'Festival', 'Conectividade']
    },
    {
      id: 'forbes-summit',
      title: 'Forbes Under 30 Summit otimiza networking com BLUE',
      company: 'Forbes Brasil',
      industry: 'Mídia',
      description: 'Plataforma BLUE conectou empreendedores e investidores, gerando mais de R$ 50 milhões em negócios fechados durante o evento.',
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
      featured: false,
      metrics: [
        { label: 'Negócios Gerados', value: 'R$ 50M+' },
        { label: 'Conexões', value: '2.500+' },
        { label: 'Taxa de Match', value: '85%' }
      ],
      publishedDate: '2023-11-18',
      readTime: '4 min',
      tags: ['BLUE', 'Networking', 'Empreendedorismo', 'Investimentos']
    },
    {
      id: 'bienal-livro',
      title: 'Bienal do Livro SP: Experiência digital para 600 mil visitantes',
      company: 'Bienal do Livro SP',
      industry: 'Cultura',
      description: 'Implementação completa do ecossistema Smart Events™ transformou a experiência de 600 mil visitantes com mapas inteligentes e recomendações personalizadas.',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
      featured: false,
      metrics: [
        { label: 'Visitantes', value: '600k+' },
        { label: 'Engagement', value: '+65%' },
        { label: 'Satisfação', value: '9.4/10' }
      ],
      publishedDate: '2023-10-25',
      readTime: '6 min',
      tags: ['Smart Events', 'Cultura', 'Livros', 'Experiência Digital']
    }
  ];

  const industries = ['Todas', 'Saúde', 'Tecnologia', 'Educação', 'Entretenimento', 'Mídia', 'Cultura'];

  const filteredHistorias = historias.filter(historia => {
    const matchesSearch = historia.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         historia.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         historia.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesIndustry = !selectedIndustry || selectedIndustry === 'Todas' || historia.industry === selectedIndustry;
    return matchesSearch && matchesIndustry;
  });

  const featuredHistorias = filteredHistorias.filter(h => h.featured);
  const regularHistorias = filteredHistorias.filter(h => !h.featured);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Histórias de Sucesso LEGAL",
    "description": "Casos de sucesso reais de empresas que transformaram seus eventos e negócios com as soluções tecnológicas da LEGAL",
    "url": "https://operadora.legal/universo/historias",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": historias.map((historia, index) => ({
        "@type": "Article",
        "position": index + 1,
        "name": historia.title,
        "description": historia.description,
        "url": `https://operadora.legal/universo/historias/${historia.id}`,
        "datePublished": historia.publishedDate,
        "author": {
          "@type": "Organization",
          "name": "LEGAL"
        },
        "publisher": {
          "@type": "Organization",
          "name": "LEGAL",
          "logo": "https://operadora.legal/images/legal-logo.png"
        }
      }))
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://operadora.legal"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Universo",
          "item": "https://operadora.legal/universo"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Histórias de Sucesso",
          "item": "https://operadora.legal/universo/historias"
        }
      ]
    }
  };

  return (
    <>
      <SEOHead
        title="Histórias de Sucesso | Casos Reais de Transformação Digital"
        description="Descubra como empresas líderes como Hospital Sírio-Libanês, VTEX e Campus Party transformaram seus eventos com Smart Events™ e soluções LEGAL. Casos reais com resultados comprovados."
        keywords="casos de sucesso LEGAL, Smart Events casos, transformação digital eventos, MAGICPASS resultados, AERO conectividade, histórias clientes LEGAL"
        url="https://operadora.legal/universo/historias"
        type="website"
        schemaData={schemaData}
      />

      <AIKnowledgeProvider />
      <VoiceSearchOptimization />
      <GEOAdvancedOptimization 
        contentDomain="business"
        entityType="service"
        optimizationLevel="advanced"
      />
      <RealUserMonitoring />
      <CoreWebVitalsMonitor enableReporting={true} />
      <AIFeedbackSystem enableRealTimeOptimization={true} />
      <AdvancedFeaturedSnippets 
        pageType="about"
        focusKeyword="casos sucesso transformação digital"
      />
      <SEOCrawlerOptimization />

      <Helmet>
        <link rel="preload" href="https://images.unsplash.com/photo-1631549916768-4119b4220292" as="image" />
        <link rel="preload" href="https://images.unsplash.com/photo-1540304453527-62f979142a17" as="image" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-legal-green bg-opacity-10 text-legal-green rounded-full text-sm font-medium mb-4">
                Histórias de Sucesso
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-legal mb-6 font-unica">
                Transformações
                <span className="text-legal-green block">Reais</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 font-unica">
                Descubra como empresas líderes estão revolucionando seus eventos e negócios 
                com as soluções tecnológicas da LEGAL. Casos reais, resultados comprovados.
              </p>
            </div>

            {/* Search and Filter */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    type="text"
                    placeholder="Buscar por empresa, setor ou solução..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 h-12 text-lg border-legal focus:ring-legal"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Filter className="w-5 h-5 text-gray-400" />
                  <select
                    value={selectedIndustry}
                    onChange={(e) => setSelectedIndustry(e.target.value)}
                    className="h-12 px-4 border border-gray-300 rounded-md focus:ring-legal focus:border-legal bg-white"
                  >
                    {industries.map(industry => (
                      <option key={industry} value={industry}>{industry}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Stories */}
        {featuredHistorias.length > 0 && (
          <section className="py-16 px-4">
            <div className="container mx-auto">
              <SectionTitle
                title="Histórias em Destaque"
                subtitle="Os casos mais impactantes de transformação digital"
                center
              />
              <div className="grid md:grid-cols-2 gap-8">
                {featuredHistorias.map((historia) => (
                  <Card key={historia.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-0">
                    <div className="relative">
                      <OptimizedImage
                        src={historia.image}
                        alt={`Caso de sucesso: ${historia.company}`}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                        width={800}
                        height={400}
                        priority={true}
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-legal text-white">
                          <Star className="w-3 h-3 mr-1" />
                          Destaque
                        </Badge>
                      </div>
                      <div className="absolute top-4 right-4">
                        <Badge variant="outline" className="bg-white/90 backdrop-blur-sm">
                          {historia.industry}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <CardHeader className="p-0 mb-4">
                        <CardTitle className="text-xl font-bold text-legal group-hover:text-legal-purple transition-colors leading-tight">
                          {historia.title}
                        </CardTitle>
                        <p className="text-legal-green font-semibold">{historia.company}</p>
                      </CardHeader>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {historia.description}
                      </p>

                      {/* Metrics */}
                      <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                        {historia.metrics.map((metric, index) => (
                          <div key={index} className="text-center">
                            <div className="text-2xl font-bold text-legal">{metric.value}</div>
                            <div className="text-xs text-gray-500">{metric.label}</div>
                          </div>
                        ))}
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {historia.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {/* Footer */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-500 space-x-4">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            <time dateTime={historia.publishedDate}>
                              {new Date(historia.publishedDate).toLocaleDateString('pt-BR')}
                            </time>
                          </div>
                          <div>{historia.readTime} de leitura</div>
                        </div>
                        <Button 
                          asChild 
                          className="bg-legal text-white hover:bg-legal-purple"
                        >
                          <Link to={`/universo/historias/${historia.id}`} className="flex items-center">
                            Ler História Completa
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Regular Stories */}
        {regularHistorias.length > 0 && (
          <section className="py-16 px-4 bg-white">
            <div className="container mx-auto">
              <SectionTitle
                title="Todas as Histórias"
                subtitle="Mais casos de transformação digital com a LEGAL"
                center
              />
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularHistorias.map((historia) => (
                  <Card key={historia.id} className="group hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                    <div className="relative">
                      <OptimizedImage
                        src={historia.image}
                        alt={`Caso de sucesso: ${historia.company}`}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        width={600}
                        height={300}
                      />
                      <Badge variant="outline" className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm">
                        {historia.industry}
                      </Badge>
                    </div>
                    <CardContent className="p-6 flex-grow flex flex-col">
                      <CardHeader className="p-0 mb-4">
                        <CardTitle className="text-lg font-bold text-legal group-hover:text-legal-purple transition-colors leading-tight">
                          {historia.title}
                        </CardTitle>
                        <p className="text-legal-green font-medium text-sm">{historia.company}</p>
                      </CardHeader>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed text-sm flex-grow">
                        {historia.description}
                      </p>

                      {/* Key Metric */}
                      <div className="flex justify-center mb-4 p-3 bg-gray-50 rounded-lg">
                        <div className="text-center">
                          <div className="text-xl font-bold text-legal">{historia.metrics[0].value}</div>
                          <div className="text-xs text-gray-500">{historia.metrics[0].label}</div>
                        </div>
                      </div>

                      {/* Footer */}
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                        <div className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          <time dateTime={historia.publishedDate}>
                            {new Date(historia.publishedDate).toLocaleDateString('pt-BR')}
                          </time>
                        </div>
                        <div>{historia.readTime}</div>
                      </div>

                      <Button 
                        asChild 
                        variant="outline" 
                        size="sm"
                        className="w-full border-legal text-legal hover:bg-legal hover:text-white"
                      >
                        <Link to={`/universo/historias/${historia.id}`} className="flex items-center justify-center">
                          Ler Mais
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
        {filteredHistorias.length === 0 && (
          <section className="py-20 px-4">
            <div className="container mx-auto text-center">
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Nenhuma história encontrada
              </h3>
              <p className="text-gray-500 mb-6">
                Tente ajustar sua busca ou filtros para encontrar mais casos de sucesso.
              </p>
              <Button onClick={() => { setSearchQuery(''); setSelectedIndustry(''); }}>
                Limpar Filtros
              </Button>
            </div>
          </section>
        )}

        {/* Call to Action */}
        <section className="py-20 px-4 bg-gradient-to-r from-legal to-legal-purple">
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
                  Fale com Especialista
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
