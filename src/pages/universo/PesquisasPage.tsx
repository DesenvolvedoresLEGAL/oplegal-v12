import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Download, ExternalLink, FileText, TrendingUp, Users, Calendar, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Research {
  id: string;
  title: string;
  description: string;
  type: 'whitepaper' | 'market-research' | 'industry-report';
  category: string;
  publishDate: string;
  readTime: string;
  downloads: number;
  views: number;
  thumbnail: string;
  downloadUrl: string;
  previewUrl?: string;
  tags: string[];
}

const researches: Research[] = [
  {
    id: '1',
    title: 'O Futuro dos Smart Events no Brasil',
    description: 'Análise abrangente sobre tendências e oportunidades no mercado de eventos inteligentes brasileiro, incluindo projeções para 2025-2030.',
    type: 'market-research',
    category: 'Mercado de Eventos',
    publishDate: '2024-01-15',
    readTime: '25 min',
    downloads: 1247,
    views: 3821,
    thumbnail: '/lovable-uploads/0de2869f-f080-4ad5-9ba8-575aea2f9695.png',
    downloadUrl: '#',
    previewUrl: '#',
    tags: ['Smart Events', 'Mercado', 'Tendências', 'Brasil']
  },
  {
    id: '2',
    title: 'Inteligência Artificial em Eventos: Guia Completo',
    description: 'Whitepaper técnico sobre implementação de IA em eventos corporativos, cases práticos e ROI comprovado.',
    type: 'whitepaper',
    category: 'Tecnologia',
    publishDate: '2024-02-20',
    readTime: '35 min',
    downloads: 892,
    views: 2156,
    thumbnail: '/lovable-uploads/3f2fca6f-dacf-423f-8d06-20257b27a74e.png',
    downloadUrl: '#',
    previewUrl: '#',
    tags: ['IA', 'Eventos', 'Tecnologia', 'ROI']
  },
  {
    id: '3',
    title: 'Sustentabilidade e ESG em Eventos Corporativos',
    description: 'Pesquisa sobre práticas sustentáveis e métricas ESG aplicadas ao setor de eventos no Brasil.',
    type: 'industry-report',
    category: 'ESG',
    publishDate: '2024-03-10',
    readTime: '18 min',
    downloads: 654,
    views: 1832,
    thumbnail: '/lovable-uploads/0de2869f-f080-4ad5-9ba8-575aea2f9695.png',
    downloadUrl: '#',
    previewUrl: '#',
    tags: ['ESG', 'Sustentabilidade', 'Eventos', 'Corporativo']
  },
  {
    id: '4',
    title: 'Transformação Digital no Setor de Eventos',
    description: 'Relatório sobre o impacto da digitalização nos eventos pós-pandemia e as principais tecnologias adotadas.',
    type: 'market-research',
    category: 'Transformação Digital',
    publishDate: '2023-12-05',
    readTime: '30 min',
    downloads: 1523,
    views: 4267,
    thumbnail: '/lovable-uploads/3f2fca6f-dacf-423f-8d06-20257b27a74e.png',
    downloadUrl: '#',
    previewUrl: '#',
    tags: ['Transformação Digital', 'Eventos', 'Tecnologia', 'Pós-pandemia']
  }
];

const getTypeIcon = (type: Research['type']) => {
  switch (type) {
    case 'whitepaper':
      return <FileText className="w-5 h-5" />;
    case 'market-research':
      return <TrendingUp className="w-5 h-5" />;
    case 'industry-report':
      return <Users className="w-5 h-5" />;
    default:
      return <FileText className="w-5 h-5" />;
  }
};

const getTypeBadgeVariant = (type: Research['type']) => {
  switch (type) {
    case 'whitepaper':
      return 'default';
    case 'market-research':
      return 'secondary';
    case 'industry-report':
      return 'outline';
    default:
      return 'default';
  }
};

const getTypeLabel = (type: Research['type']) => {
  switch (type) {
    case 'whitepaper':
      return 'Whitepaper';
    case 'market-research':
      return 'Pesquisa de Mercado';
    case 'industry-report':
      return 'Relatório Setorial';
    default:
      return type;
  }
};

const PesquisasPage: React.FC = () => {
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

  return (
    <>
      <Helmet>
        <title>Pesquisas de Mercado e Whitepapers | LEGAL</title>
        <meta name="description" content="Acesse as principais pesquisas de mercado, whitepapers e relatórios setoriais da LEGAL sobre eventos inteligentes, tecnologia e inovação." />
        <meta name="keywords" content="pesquisas de mercado, whitepapers, relatórios, eventos inteligentes, tecnologia, inovação, LEGAL" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-r from-legal-purple via-legal to-legal-cyan">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Pesquisas & Whitepapers
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Conheça nossos insights exclusivos sobre o mercado de eventos inteligentes, 
              tendências tecnológicas e transformação digital.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-white/80">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                <span>{researches.length} Publicações</span>
              </div>
              <div className="flex items-center gap-2">
                <Download className="w-5 h-5" />
                <span>{formatNumber(researches.reduce((acc, r) => acc + r.downloads, 0))} Downloads</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="w-5 h-5" />
                <span>{formatNumber(researches.reduce((acc, r) => acc + r.views, 0))} Visualizações</span>
              </div>
            </div>
          </div>
        </section>

        {/* Research Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {researches.map((research) => (
                <Card key={research.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="relative">
                    <img 
                      src={research.thumbnail} 
                      alt={research.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant={getTypeBadgeVariant(research.type)} className="bg-white/90 text-gray-900">
                        {getTypeIcon(research.type)}
                        <span className="ml-1">{getTypeLabel(research.type)}</span>
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="outline" className="bg-white/90 text-gray-900">
                        {research.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-legal transition-colors">
                      {research.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {research.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {research.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Meta Information */}
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(research.publishDate)}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FileText className="w-4 h-4" />
                          <span>{research.readTime}</span>
                        </div>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Download className="w-4 h-4" />
                        <span>{formatNumber(research.downloads)} downloads</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        <span>{formatNumber(research.views)} views</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 pt-2">
                      <Button 
                        asChild 
                        className="flex-1 bg-legal hover:bg-legal-purple"
                      >
                        <a href={research.downloadUrl} download>
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </a>
                      </Button>
                      {research.previewUrl && (
                        <Button 
                          variant="outline" 
                          size="sm"
                          asChild
                        >
                          <a href={research.previewUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4" />
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

        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Quer receber nossas pesquisas em primeira mão?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Cadastre-se em nossa newsletter e seja o primeiro a acessar nossos 
              insights exclusivos sobre o futuro dos eventos inteligentes.
            </p>
            <Button 
              size="lg" 
              className="bg-legal hover:bg-legal-purple px-8 py-3"
              asChild
            >
              <a href="/contato">
                Quero me cadastrar
                <ExternalLink className="w-5 h-5 ml-2" />
              </a>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default PesquisasPage;