
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, Download, ExternalLink, Calendar, Tag, FileText, Image, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import SectionTitle from '@/components/SectionTitle';

const ImprensaPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const pressReleases = [
    {
      id: 1,
      title: 'LEGAL Conquista Marco de 100 Mil Eventos Conectados',
      excerpt: 'A LEGAL anuncia o marco histórico de 100 mil eventos conectados através da plataforma Smart Events™, consolidando sua posição como líder em tecnologia para eventos.',
      date: '2024-05-15',
      category: 'milestone',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=400&fit=crop',
      downloadLink: '/press/release-100k-eventos.pdf'
    },
    {
      id: 2,
      title: 'Lançamento da IA LEGAL: Revolução na Automação de Eventos',
      excerpt: 'LEGAL apresenta sua nova solução de Inteligência Artificial que promete transformar completamente a gestão e automação de eventos no Brasil.',
      date: '2024-04-20',
      category: 'product',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop',
      downloadLink: '/press/lancamento-ia-legal.pdf'
    },
    {
      id: 3,
      title: 'LEGAL Recebe Investimento de R$ 50 Milhões para Expansão',
      excerpt: 'A empresa fecha rodada de investimentos para acelerar expansão nacional e desenvolvimento de novas tecnologias para o mercado de eventos.',
      date: '2024-03-10',
      category: 'investment',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=400&fit=crop',
      downloadLink: '/press/investimento-50mi.pdf'
    }
  ];

  const mediaKit = [
    {
      title: 'Logo LEGAL',
      description: 'Logotipos em alta resolução em diversos formatos',
      type: 'image',
      files: ['PNG', 'SVG', 'EPS'],
      downloadLink: '/media/logos-legal.zip'
    },
    {
      title: 'Fotos Executivos',
      description: 'Fotos oficiais da equipe executiva da LEGAL',
      type: 'image',
      files: ['JPG', 'PNG'],
      downloadLink: '/media/fotos-executivos.zip'
    },
    {
      title: 'Fact Sheet',
      description: 'Dados e informações essenciais sobre a LEGAL',
      type: 'document',
      files: ['PDF'],
      downloadLink: '/media/fact-sheet-legal.pdf'
    },
    {
      title: 'Vídeo Institucional',
      description: 'Vídeo apresentando a LEGAL e suas soluções',
      type: 'video',
      files: ['MP4'],
      downloadLink: '/media/video-institucional.mp4'
    }
  ];

  const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'milestone', label: 'Marcos' },
    { id: 'product', label: 'Produtos' },
    { id: 'investment', label: 'Investimentos' },
    { id: 'partnership', label: 'Parcerias' }
  ];

  const filteredReleases = pressReleases.filter(release => {
    const matchesSearch = release.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         release.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || release.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'image': return <Image className="w-5 h-5" />;
      case 'video': return <Video className="w-5 h-5" />;
      default: return <FileText className="w-5 h-5" />;
    }
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      milestone: 'bg-legal text-white',
      product: 'bg-legal-purple text-white',
      investment: 'bg-legal-green text-white',
      partnership: 'bg-blue-500 text-white'
    };
    return colors[category] || 'bg-gray-500 text-white';
  };

  return (
    <>
      <Helmet>
        <title>Imprensa LEGAL | Releases, Notícias e Kit de Mídia</title>
        <meta name="description" content="Centro de imprensa da LEGAL com releases, notícias, kit de mídia e materiais para jornalistas. Acompanhe os principais marcos da maior TechCo do Brasil." />
        <meta property="og:title" content="Imprensa LEGAL | Releases e Kit de Mídia" />
        <meta property="og:description" content="Materiais de imprensa, releases e notícias da LEGAL. Informações oficiais para jornalistas e mídia." />
        <meta property="og:url" content="https://operadora.legal/universo/imprensa" />
        <meta name="keywords" content="LEGAL imprensa, press release, kit mídia, notícias LEGAL, jornalistas" />
        <link rel="canonical" href="https://operadora.legal/universo/imprensa" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-legal-green bg-opacity-10 text-legal-green rounded-full text-sm font-medium mb-4">
                Centro de Imprensa
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-legal mb-6 font-unica">
                Imprensa
                <span className="text-legal-green block">LEGAL</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-unica">
                Materiais oficiais, releases e kit de mídia para jornalistas e veículos de comunicação.
              </p>
            </div>

            {/* Search and Filters */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    type="text"
                    placeholder="Buscar releases e notícias..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 h-12 border-legal focus:ring-legal"
                  />
                </div>
                <div className="flex gap-2 flex-wrap">
                  {categories.map((category) => (
                    <Button
                      key={category.id}
                      variant={selectedCategory === category.id ? "default" : "outline"}
                      onClick={() => setSelectedCategory(category.id)}
                      className={selectedCategory === category.id ? "bg-legal hover:bg-legal-purple" : "border-legal text-legal hover:bg-legal hover:text-white"}
                    >
                      {category.label}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Press Releases */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <SectionTitle
              title="Press Releases"
              subtitle="Últimas notícias e comunicados oficiais da LEGAL"
              center
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredReleases.map((release) => (
                <Card key={release.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={release.image} 
                      alt={release.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className={getCategoryColor(release.category)}>
                        {categories.find(cat => cat.id === release.category)?.label}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(release.date).toLocaleDateString('pt-BR')}
                    </div>
                    <h3 className="text-xl font-bold text-legal mb-3 group-hover:text-legal-purple transition-colors line-clamp-2">
                      {release.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {release.excerpt}
                    </p>
                    <Button 
                      className="w-full bg-legal hover:bg-legal-purple text-white"
                      asChild
                    >
                      <a href={release.downloadLink} download>
                        <Download className="w-4 h-4 mr-2" />
                        Download Release
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Media Kit */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <SectionTitle
              title="Kit de Mídia"
              subtitle="Materiais oficiais para uso em publicações"
              center
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {mediaKit.map((item, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-full bg-legal bg-opacity-10 flex items-center justify-center mx-auto mb-4">
                      {getTypeIcon(item.type)}
                    </div>
                    <CardTitle className="text-lg text-legal">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <div className="flex flex-wrap gap-1 justify-center mb-4">
                      {item.files.map((file) => (
                        <Badge key={file} variant="outline" className="text-xs">
                          {file}
                        </Badge>
                      ))}
                    </div>
                    <Button 
                      variant="outline" 
                      className="w-full border-legal text-legal hover:bg-legal hover:text-white"
                      asChild
                    >
                      <a href={item.downloadLink} download>
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact for Press */}
        <section className="py-16 px-4">
          <div className="container mx-auto text-center">
            <SectionTitle
              title="Contato para Imprensa"
              subtitle="Entre em contato conosco para mais informações"
              center
            />
            <div className="max-w-2xl mx-auto">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-legal mb-4">Assessoria de Imprensa</h3>
                  <p className="text-gray-600 mb-6">
                    Para entrevistas, declarações oficiais ou informações adicionais, entre em contato com nossa equipe de comunicação.
                  </p>
                  <div className="space-y-2 mb-6">
                    <p><strong>Email:</strong> imprensa@operadora.legal</p>
                    <p><strong>Telefone:</strong> (11) 9999-9999</p>
                    <p><strong>Horário:</strong> Segunda a sexta, 9h às 18h</p>
                  </div>
                  <Button className="bg-legal hover:bg-legal-purple text-white">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Entrar em Contato
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ImprensaPage;
