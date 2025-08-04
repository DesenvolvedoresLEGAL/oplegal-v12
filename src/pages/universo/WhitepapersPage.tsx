import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Download, ExternalLink, FileText, Calendar, Clock, Eye, Users, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

interface Whitepaper {
  id: string;
  title: string;
  description: string;
  category: string;
  publishDate: string;
  readTime: string;
  downloads: number;
  views: number;
  pages: number;
  thumbnail: string;
  downloadUrl: string;
  previewUrl?: string;
  tags: string[];
  author: string;
  featured?: boolean;
}

const whitepapers: Whitepaper[] = [
  {
    id: '1',
    title: 'LEGAL WHATS NEXT REPORT 2025',
    description: 'O futuro da conectividade FWA 5G no Brasil — insights estratégicos para empresas e eventos que querem liderar a nova era da internet sem fio.',
    category: 'Conectividade 5G',
    publishDate: '2025-03-02',
    readTime: '15 min',
    downloads: 166,
    views: 1234,
    pages: 9,
    thumbnail: '/lovable-uploads/498773ad-6c8f-4974-ae6b-8e2542cb81d1.png',
    downloadUrl: '#',
    previewUrl: '/universo/pesquisas/whitepapers/whats-next-report-2025',
    tags: ['5G', 'FWA', 'Conectividade', 'Tendências'],
    author: 'Equipe LEGAL',
    featured: true
  },
  {
    id: '2',
    title: 'O Futuro dos Smart Events: Guia Completo para Transformação Digital',
    description: 'Um guia abrangente sobre como implementar tecnologias inteligentes em eventos corporativos, incluindo IA, IoT, analytics e automação. Cases reais e métricas de ROI comprovado.',
    category: 'Smart Events',
    publishDate: '2024-12-15',
    readTime: '25 min',
    downloads: 1847,
    views: 5234,
    pages: 42,
    thumbnail: '/lovable-uploads/0de2869f-f080-4ad5-9ba8-575aea2f9695.png',
    downloadUrl: '#',
    previewUrl: '#',
    tags: ['Smart Events', 'Transformação Digital', 'IA', 'ROI'],
    author: 'Equipe LEGAL'
  },
  {
    id: '3',
    title: 'ESG e Sustentabilidade em Eventos Corporativos',
    description: 'Estratégias práticas para implementar critérios ESG em eventos, reduzir pegada de carbono e gerar impacto social positivo. Métricas e benchmarks do setor.',
    category: 'ESG & Sustentabilidade',
    publishDate: '2024-10-10',
    readTime: '20 min',
    downloads: 892,
    views: 2156,
    pages: 35,
    thumbnail: '/lovable-uploads/0de2869f-f080-4ad5-9ba8-575aea2f9695.png',
    downloadUrl: '#',
    previewUrl: '#',
    tags: ['ESG', 'Sustentabilidade', 'Impacto Social', 'Métricas'],
    author: 'Marina Costa, Head de ESG'
  },
  {
    id: '4',
    title: 'Segurança e Privacidade em Eventos Digitais',
    description: 'Guia completo sobre proteção de dados, LGPD, cibersegurança e compliance em eventos híbridos e digitais. Checklist de implementação incluído.',
    category: 'Segurança Digital',
    publishDate: '2024-09-05',
    readTime: '30 min',
    downloads: 1156,
    views: 2834,
    pages: 48,
    thumbnail: '/lovable-uploads/3f2fca6f-dacf-423f-8d06-20257b27a74e.png',
    downloadUrl: '#',
    previewUrl: '#',
    tags: ['LGPD', 'Cibersegurança', 'Compliance', 'Privacidade'],
    author: 'Carlos Mendes, CISO'
  },
  {
    id: '5',
    title: 'ROI em Eventos: Métricas que Realmente Importam',
    description: 'Framework completo para medir retorno sobre investimento em eventos, incluindo métricas avançadas, dashboards e análise de dados comportamentais.',
    category: 'Analytics & ROI',
    publishDate: '2024-08-18',
    readTime: '28 min',
    downloads: 2103,
    views: 4567,
    pages: 52,
    thumbnail: '/lovable-uploads/0de2869f-f080-4ad5-9ba8-575aea2f9695.png',
    downloadUrl: '#',
    previewUrl: '#',
    tags: ['ROI', 'Métricas', 'Analytics', 'Dashboard'],
    author: 'Rafael Santos, Head de Analytics'
  }
];

const WhitepapersPage: React.FC = () => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatNumber = (num: number) => {
    return num.toLocaleString('pt-BR');
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Conectividade 5G': 'bg-legal-cyan/10 text-legal-cyan',
      'Smart Events': 'bg-legal/10 text-legal',
      'Inteligência Artificial': 'bg-legal-purple/10 text-legal-purple',
      'ESG & Sustentabilidade': 'bg-green-100 text-green-800',
      'Segurança Digital': 'bg-red-100 text-red-800',
      'Analytics & ROI': 'bg-legal-cyan/10 text-legal-cyan'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <>
      <Helmet>
        <title>Whitepapers Técnicos | LEGAL</title>
        <meta name="description" content="Acesse whitepapers técnicos exclusivos da LEGAL sobre eventos inteligentes, IA, transformação digital e inovação." />
        <meta name="keywords" content="whitepapers, eventos inteligentes, IA, transformação digital, ROI, ESG, LEGAL" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Link to="/universo" className="hover:text-legal">Universo</Link>
              <ChevronRight className="w-4 h-4" />
              <Link to="/universo/pesquisas" className="hover:text-legal">Pesquisas</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-gray-900">Whitepapers</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-legal-purple via-legal to-legal-cyan">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-4 mb-6">
              <Link 
                to="/universo/pesquisas" 
                className="text-white/80 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-6 h-6" />
              </Link>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Whitepapers Técnicos
                </h1>
                <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
                  Guias detalhados e insights técnicos para implementar tecnologias 
                  avançadas em eventos corporativos.
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-white/80 mt-8">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                <span>{whitepapers.length} Whitepapers</span>
              </div>
              <div className="flex items-center gap-2">
                <Download className="w-5 h-5" />
                <span>{formatNumber(whitepapers.reduce((acc, w) => acc + w.downloads, 0))} Downloads</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="w-5 h-5" />
                <span>{formatNumber(whitepapers.reduce((acc, w) => acc + w.views, 0))} Visualizações</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>{whitepapers.reduce((acc, w) => acc + w.pages, 0)} Páginas Totais</span>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Whitepaper */}
        {whitepapers.filter(w => w.featured).map(whitepaper => (
          <section key={whitepaper.id} className="py-8 bg-white border-b">
            <div className="container mx-auto px-4">
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-legal text-white">Destaque</Badge>
                <span className="text-sm text-gray-500">Whitepaper mais baixado</span>
              </div>
              
              <Card className="overflow-hidden border-l-4 border-l-legal">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-1">
                    <img 
                      src={whitepaper.thumbnail} 
                      alt={whitepaper.title}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                  </div>
                  
                  <div className="lg:col-span-2">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-4">
                        <Badge className={getCategoryColor(whitepaper.category)}>
                          {whitepaper.category}
                        </Badge>
                        <div className="text-sm text-gray-500">
                          Por {whitepaper.author}
                        </div>
                      </div>
                      
                      <CardTitle className="text-2xl lg:text-3xl mb-3">
                        {whitepaper.title}
                      </CardTitle>
                      
                      <CardDescription className="text-base leading-relaxed">
                        {whitepaper.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-6">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-legal" />
                          <div>
                            <p className="text-gray-500">Publicado</p>
                            <p className="font-medium">{formatDate(whitepaper.publishDate)}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-legal" />
                          <div>
                            <p className="text-gray-500">Leitura</p>
                            <p className="font-medium">{whitepaper.readTime}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <FileText className="w-4 h-4 text-legal" />
                          <div>
                            <p className="text-gray-500">Páginas</p>
                            <p className="font-medium">{whitepaper.pages}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <Download className="w-4 h-4 text-legal" />
                          <div>
                            <p className="text-gray-500">Downloads</p>
                            <p className="font-medium">{formatNumber(whitepaper.downloads)}</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <Button 
                          asChild 
                          size="lg" 
                          className="bg-legal hover:bg-legal-purple flex-1 lg:flex-none"
                        >
                          <a href={whitepaper.downloadUrl} download>
                            <Download className="w-4 h-4 mr-2" />
                            Download Gratuito
                          </a>
                        </Button>
                        
                        {whitepaper.previewUrl && (
                          <Button 
                            variant="outline" 
                            size="lg"
                            asChild
                          >
                            <a href={whitepaper.previewUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Preview
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </div>
          </section>
        ))}

        {/* Whitepapers Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Todos os Whitepapers
              </h2>
              <p className="text-gray-600">
                Conhecimento técnico e estratégico para transformar seus eventos.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whitepapers.filter(w => !w.featured).map((whitepaper) => (
                <Card key={whitepaper.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="relative">
                    <img 
                      src={whitepaper.thumbnail} 
                      alt={whitepaper.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className={getCategoryColor(whitepaper.category)}>
                        {whitepaper.category}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-black/60 text-white px-2 py-1 rounded text-sm">
                      {whitepaper.pages} páginas
                    </div>
                  </div>
                  
                  <CardHeader>
                    <div className="text-sm text-gray-500 mb-2">
                      Por {whitepaper.author}
                    </div>
                    <CardTitle className="text-lg group-hover:text-legal transition-colors line-clamp-2">
                      {whitepaper.title}
                    </CardTitle>
                    <CardDescription className="text-sm line-clamp-3">
                      {whitepaper.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {whitepaper.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {whitepaper.tags.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{whitepaper.tags.length - 3}
                        </Badge>
                      )}
                    </div>

                    {/* Meta Information */}
                    <div className="grid grid-cols-2 gap-4 text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{formatDate(whitepaper.publishDate)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{whitepaper.readTime}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Download className="w-3 h-3" />
                        <span>{formatNumber(whitepaper.downloads)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        <span>{formatNumber(whitepaper.views)}</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 pt-2">
                      <Button 
                        asChild 
                        className="flex-1 bg-legal hover:bg-legal-purple text-sm"
                        size="sm"
                      >
                        <a href={whitepaper.downloadUrl} download>
                          <Download className="w-3 h-3 mr-2" />
                          Download
                        </a>
                      </Button>
                      {whitepaper.previewUrl && (
                        <Button 
                          variant="outline" 
                          size="sm"
                          asChild
                        >
                          <a href={whitepaper.previewUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Novos whitepapers toda semana
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Cadastre-se em nossa newsletter e receba os melhores conteúdos 
              técnicos sobre eventos inteligentes diretamente no seu e-mail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Button 
                size="lg" 
                className="bg-legal hover:bg-legal-purple flex-1"
                asChild
              >
                <Link to="/contato">
                  Quero receber whitepapers
                  <ExternalLink className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Custom Request CTA */}
        <section className="py-16 bg-legal text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Precisa de um whitepaper personalizado?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Nossa equipe pode desenvolver conteúdo técnico exclusivo 
              para as necessidades específicas da sua empresa.
            </p>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-legal"
              asChild
            >
              <Link to="/contato">
                Solicitar Whitepaper Customizado
                <ExternalLink className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default WhitepapersPage;