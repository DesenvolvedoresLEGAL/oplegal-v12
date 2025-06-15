
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Calendar, 
  Clock, 
  User, 
  ArrowRight, 
  Bookmark, 
  Share2, 
  Filter,
  TrendingUp,
  Mail,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import SEOHead from '@/components/SEOHead';

// Mock data otimizado com conteúdo mais rico e palavras-chave de cauda longa
const featuredPosts = [
  {
    id: 1,
    title: 'Como a Conectividade 5G Revoluciona Eventos Corporativos no Brasil',
    excerpt: 'Análise completa sobre como a tecnologia 5G está transformando a experiência em eventos empresariais, desde transmissões ao vivo até interações em tempo real com o público.',
    fullContent: `
      <h2>A Revolução do 5G em Eventos Corporativos</h2>
      <p>A implementação da tecnologia 5G está redefinindo completamente o panorama de eventos corporativos no Brasil...</p>
      
      <h3>Principais Benefícios da Conectividade 5G para Eventos</h3>
      <ul>
        <li>Velocidade de download até 100x mais rápida que 4G</li>
        <li>Latência ultra-baixa para interações em tempo real</li>
        <li>Capacidade para conectar milhares de dispositivos simultaneamente</li>
      </ul>
      
      <h3>Cases de Sucesso em Eventos com 5G</h3>
      <p>Grandes corporações já estão colhendo os frutos desta tecnologia...</p>
    `,
    author: 'Maria Silva',
    authorBio: 'Especialista em Conectividade 5G na LEGAL com mais de 8 anos de experiência',
    date: '2024-05-28',
    readTime: '8 min',
    category: 'Conectividade 5G',
    tags: ['5G', 'eventos corporativos', 'tecnologia', 'conectividade empresarial'],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop',
    featured: true,
    views: 2340,
    seoKeywords: 'conectividade 5G eventos, tecnologia 5G corporativa, eventos inteligentes Brasil'
  },
  {
    id: 2,
    title: 'Inteligência Artificial Aplicada à Gestão de Eventos: Guia Completo 2024',
    excerpt: 'Descubra como algoritmos de IA estão otimizando desde o credenciamento até a análise pós-evento, aumentando o ROI em até 300%.',
    fullContent: `
      <h2>IA na Gestão de Eventos: O Futuro é Agora</h2>
      <p>A inteligência artificial não é mais ficção científica quando falamos de eventos...</p>
      
      <h3>Aplicações Práticas de IA em Eventos</h3>
      <p>Desde sistemas de reconhecimento facial até chatbots inteligentes...</p>
      
      <h3>ROI e Métricas de Sucesso</h3>
      <p>Eventos que implementam IA mostram aumentos significativos em engagement...</p>
    `,
    author: 'João Santos',
    authorBio: 'Diretor de IA da LEGAL e palestrante internacional sobre tecnologia em eventos',
    date: '2024-05-25',
    readTime: '12 min',
    category: 'Inteligência Artificial',
    tags: ['IA', 'gestão de eventos', 'automação', 'ROI eventos'],
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=400&fit=crop',
    featured: true,
    views: 3890,
    seoKeywords: 'inteligência artificial eventos, IA gestão corporativa, automação eventos Brasil'
  }
];

const blogPosts = [
  {
    id: 3,
    title: 'Tendências de Conectividade para Eventos em 2024: O que os Organizadores Precisam Saber',
    excerpt: 'Análise detalhada das 10 principais tendências tecnológicas que moldarão o futuro da conectividade em eventos corporativos e como se preparar para elas.',
    fullContent: `
      <h2>As 10 Principais Tendências de Conectividade para 2024</h2>
      <h3>1. Edge Computing em Eventos</h3>
      <p>Processamento local de dados para reduzir latência...</p>
      <h3>2. WiFi 6E e WiFi 7</h3>
      <p>Novas gerações de WiFi prometem velocidades inéditas...</p>
    `,
    author: 'Ana Costa',
    date: '2024-05-20',
    readTime: '10 min',
    category: 'Tendências Tecnológicas',
    tags: ['tendências 2024', 'conectividade', 'WiFi 6E', 'edge computing'],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop',
    views: 1845,
    seoKeywords: 'tendências conectividade 2024, WiFi eventos, edge computing Brasil'
  },
  {
    id: 4,
    title: 'IoT para Pequenas e Médias Empresas: Implementação Prática em Eventos',
    excerpt: 'Guia step-by-step para PMEs implementarem Internet das Coisas em seus eventos, com cases reais e custos detalhados.',
    author: 'Carlos Oliveira',
    date: '2024-05-18',
    readTime: '15 min',
    category: 'Internet das Coisas',
    tags: ['IoT', 'PME', 'implementação', 'custos IoT'],
    image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=250&fit=crop',
    views: 1287,
    seoKeywords: 'IoT pequenas empresas, Internet das Coisas eventos, implementação IoT Brasil'
  },
  {
    id: 5,
    title: 'Segurança Digital em Eventos: Protocolos Essenciais para 2024',
    excerpt: 'Framework completo de segurança digital para eventos, incluindo proteção de dados, compliance LGPD e melhores práticas internacionais.',
    author: 'Fernanda Lima',
    date: '2024-05-15',
    readTime: '11 min',
    category: 'Segurança Digital',
    tags: ['segurança digital', 'LGPD', 'proteção dados', 'compliance'],
    image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&h=250&fit=crop',
    views: 2156,
    seoKeywords: 'segurança digital eventos, LGPD eventos, proteção dados corporativos'
  },
  {
    id: 6,
    title: 'Automação de Eventos: Como Reduzir Custos Operacionais em até 60%',
    excerpt: 'Estratégias comprovadas de automação que grandes corporações usam para otimizar custos sem comprometer a qualidade dos eventos.',
    author: 'Roberto Silva',
    date: '2024-05-12',
    readTime: '14 min',
    category: 'Automação Empresarial',
    tags: ['automação eventos', 'redução custos', 'otimização', 'ROI'],
    image: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=400&h=250&fit=crop',
    views: 2903,
    seoKeywords: 'automação eventos corporativos, redução custos eventos, otimização operacional'
  }
];

const categories = [
  'Todos', 
  'Conectividade 5G', 
  'Inteligência Artificial', 
  'Tendências Tecnológicas', 
  'Internet das Coisas', 
  'Segurança Digital', 
  'Automação Empresarial'
];

// Schema estruturado para o blog
const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "TecTec - Blog LEGAL",
  "description": "Blog especializado em tecnologia, inovação e conectividade para eventos e negócios",
  "url": "https://operadora.legal/universo/tectec",
  "publisher": {
    "@type": "Organization",
    "name": "LEGAL",
    "logo": "https://operadora.legal/images/legal-logo.png"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://operadora.legal/universo/tectec"
  }
};

const TecTecPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [currentPage, setCurrentPage] = useState(1);
  const [email, setEmail] = useState('');

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'Todos' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const popularPosts = [...blogPosts].sort((a, b) => b.views - a.views).slice(0, 3);

  return (
    <>
      <SEOHead
        title="TecTec | Blog de Tecnologia e Conectividade"
        description="Explore o blog TecTec da LEGAL: insights, tendências e análises sobre tecnologia, inovação e conectividade para eventos e negócios. Mantenha-se atualizado!"
        keywords="blog tecnologia, conectividade 5G, inteligência artificial eventos, IoT empresarial, automação corporativa, tendências tech 2024, segurança digital eventos"
        url="https://operadora.legal/universo/tectec"
        type="website"
        image="https://operadora.legal/images/tectec-blog-og.jpg"
        schemaData={blogSchema}
        preconnect={['https://fonts.googleapis.com', 'https://images.unsplash.com']}
        prefetch={['/universo/tectec/1', '/universo/tectec/2']}
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Breadcrumb com rich snippets */}
        <section className="pt-24 pb-8 px-4">
          <div className="container mx-auto">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/universo">Universo</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbPage>TecTec</BreadcrumbPage>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </section>

        {/* Hero Section otimizado */}
        <section className="pb-16 px-4">
          <div className="container mx-auto">
            <header className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-legal-green bg-opacity-10 text-legal-green rounded-full text-sm font-medium mb-4">
                <TrendingUp className="w-4 h-4 mr-2" />
                Blog TecTec
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-legal mb-6 font-unica">
                Tecnologia que
                <span className="text-legal-green block">Transforma Eventos</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 font-unica">
                Insights exclusivos, análises aprofundadas e tendências sobre conectividade, 
                inteligência artificial e inovação para eventos corporativos. 
                O futuro dos negócios começa aqui.
              </p>
            </header>

            {/* Search otimizado */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    type="text"
                    placeholder="Buscar por tecnologia, IA, 5G, IoT..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 h-12 text-lg border-legal focus:ring-legal"
                    aria-label="Buscar artigos do blog TecTec"
                  />
                </div>
                <Button variant="outline" className="h-12 border-legal text-legal hover:bg-legal hover:text-white">
                  <Filter className="w-4 h-4 mr-2" />
                  Filtros
                </Button>
              </div>

              {/* Categories com melhor semântica */}
              <nav aria-label="Categorias do blog" className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={`${
                      selectedCategory === category 
                        ? 'bg-legal text-white' 
                        : 'border-legal text-legal hover:bg-legal hover:text-white'
                    }`}
                    aria-pressed={selectedCategory === category}
                  >
                    {category}
                  </Button>
                ))}
              </nav>
            </div>
          </div>
        </section>

        {/* Featured Posts com estrutura semântica melhorada */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto">
            <header className="mb-8">
              <h2 className="text-3xl font-bold text-legal mb-4 font-unica">Artigos em Destaque</h2>
              <p className="text-gray-600">Conteúdos especiais selecionados pela nossa equipe de especialistas</p>
            </header>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <article key={post.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-0">
                  <Card className="h-full">
                    <div className="relative">
                      <img 
                        src={post.image} 
                        alt={`Imagem ilustrativa do artigo: ${post.title}`}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <Badge className="absolute top-4 left-4 bg-legal text-white">
                        {post.category}
                      </Badge>
                    </div>
                    <CardContent className="p-6">
                      <header className="mb-4">
                        <h3 className="text-2xl font-bold text-legal mb-3 group-hover:text-legal-purple transition-colors leading-tight">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {post.excerpt}
                        </p>
                      </header>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags?.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <footer className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            <User className="w-4 h-4 mr-1" />
                            {post.author}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            <time dateTime={post.date}>
                              {new Date(post.date).toLocaleDateString('pt-BR')}
                            </time>
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {post.readTime}
                          </div>
                        </div>
                      </footer>
                      
                      <Button 
                        asChild 
                        className="w-full bg-legal text-white hover:bg-legal-purple"
                      >
                        <Link to={`/universo/tectec/${post.id}`} className="flex items-center justify-center">
                          Ler Artigo Completo
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content com melhor estrutura */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Posts Grid */}
              <main className="lg:col-span-2">
                <header className="mb-8">
                  <h2 className="text-3xl font-bold text-legal mb-4 font-unica">Últimos Artigos</h2>
                  <p className="text-gray-600">Mantenha-se atualizado com as últimas tendências e insights do mercado</p>
                </header>
                
                {filteredPosts.length === 0 ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                      <Search className="w-8 h-8 text-gray-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">
                      Nenhum artigo encontrado
                    </h3>
                    <p className="text-gray-500">
                      Tente ajustar sua busca ou categoria selecionada.
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="space-y-8">
                      {filteredPosts.map((post) => (
                        <article key={post.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                          <Card>
                            <div className="md:flex">
                              <div className="md:w-1/3">
                                <img 
                                  src={post.image} 
                                  alt={`Imagem do artigo: ${post.title}`}
                                  className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                  loading="lazy"
                                />
                              </div>
                              <div className="md:w-2/3 p-6">
                                <header className="mb-4">
                                  <div className="flex items-center justify-between mb-3">
                                    <Badge variant="outline" className="border-legal text-legal">
                                      {post.category}
                                    </Badge>
                                    <div className="flex items-center space-x-2">
                                      <Button variant="ghost" size="sm" aria-label="Salvar artigo">
                                        <Bookmark className="w-4 h-4" />
                                      </Button>
                                      <Button variant="ghost" size="sm" aria-label="Compartilhar artigo">
                                        <Share2 className="w-4 h-4" />
                                      </Button>
                                    </div>
                                  </div>
                                  <h3 className="text-xl font-bold text-legal mb-2 group-hover:text-legal-purple transition-colors">
                                    {post.title}
                                  </h3>
                                  <p className="text-gray-600 mb-4 leading-relaxed">
                                    {post.excerpt}
                                  </p>
                                </header>
                                
                                <footer className="flex items-center justify-between text-sm text-gray-500">
                                  <div className="flex items-center space-x-4">
                                    <div className="flex items-center">
                                      <User className="w-4 h-4 mr-1" />
                                      {post.author}
                                    </div>
                                    <div className="flex items-center">
                                      <Calendar className="w-4 h-4 mr-1" />
                                      <time dateTime={post.date}>
                                        {new Date(post.date).toLocaleDateString('pt-BR')}
                                      </time>
                                    </div>
                                    <div className="flex items-center">
                                      <Clock className="w-4 h-4 mr-1" />
                                      {post.readTime}
                                    </div>
                                  </div>
                                  <Button 
                                    asChild 
                                    variant="outline" 
                                    size="sm"
                                    className="border-legal text-legal hover:bg-legal hover:text-white"
                                  >
                                    <Link to={`/universo/tectec/${post.id}`}>
                                      Ler Mais
                                    </Link>
                                  </Button>
                                </footer>
                              </div>
                            </div>
                          </Card>
                        </article>
                      ))}
                    </div>

                    {/* Pagination */}
                    <nav aria-label="Navegação de páginas" className="mt-12">
                      <Pagination>
                        <PaginationContent>
                          <PaginationItem>
                            <PaginationPrevious href="#" />
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationLink href="#" isActive>1</PaginationLink>
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationLink href="#">2</PaginationLink>
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationLink href="#">3</PaginationLink>
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationEllipsis />
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationNext href="#" />
                          </PaginationItem>
                        </PaginationContent>
                      </Pagination>
                    </nav>
                  </>
                )}
              </main>

              {/* Sidebar otimizada */}
              <aside className="space-y-8">
                {/* Popular Posts */}
                <Card className="p-6">
                  <header className="mb-6">
                    <h3 className="text-xl font-bold text-legal font-unica">Mais Populares</h3>
                  </header>
                  <div className="space-y-4">
                    {popularPosts.map((post, index) => (
                      <article key={post.id} className="flex items-start space-x-3 group">
                        <div className="text-2xl font-bold text-legal-green">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-legal group-hover:text-legal-purple transition-colors leading-tight mb-1">
                            <Link to={`/universo/tectec/${post.id}`}>
                              {post.title}
                            </Link>
                          </h4>
                          <div className="flex items-center text-xs text-gray-500 space-x-2">
                            <span>{post.views.toLocaleString()} visualizações</span>
                            <span>•</span>
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </Card>

                {/* Newsletter Signup */}
                <Card className="p-6 bg-gradient-to-br from-legal to-legal-purple text-white">
                  <div className="text-center">
                    <Mail className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2 font-unica">Newsletter TecTec</h3>
                    <p className="text-sm opacity-90 mb-4">
                      Receba semanalmente insights exclusivos sobre tecnologia, 
                      inovação e tendências para eventos corporativos.
                    </p>
                    <form className="space-y-3" onSubmit={(e) => {
                      e.preventDefault();
                      console.log('Newsletter signup:', email);
                      setEmail('');
                    }}>
                      <Input
                        type="email"
                        placeholder="Seu melhor e-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-white text-legal border-0"
                        required
                        aria-label="Digite seu e-mail para newsletter"
                      />
                      <Button 
                        type="submit"
                        className="w-full bg-legal-green hover:bg-legal-green/90 text-white"
                      >
                        Assinar Newsletter Gratuita
                      </Button>
                    </form>
                  </div>
                </Card>

                {/* Categories Widget */}
                <Card className="p-6">
                  <header className="mb-6">
                    <h3 className="text-xl font-bold text-legal font-unica">Categorias</h3>
                  </header>
                  <nav className="space-y-2">
                    {categories.slice(1).map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className="flex items-center justify-between w-full text-left p-2 rounded hover:bg-gray-50 transition-colors"
                        aria-pressed={selectedCategory === category}
                      >
                        <span className={`${selectedCategory === category ? 'text-legal font-medium' : 'text-gray-600'}`}>
                          {category}
                        </span>
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                      </button>
                    ))}
                  </nav>
                </Card>

                {/* Links úteis */}
                <Card className="p-6">
                  <header className="mb-6">
                    <h3 className="text-xl font-bold text-legal font-unica">Links Úteis</h3>
                  </header>
                  <nav className="space-y-3">
                    <Link 
                      to="/negocios/ai" 
                      className="flex items-center text-gray-600 hover:text-legal transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Soluções de IA da LEGAL
                    </Link>
                    <Link 
                      to="/smart-events" 
                      className="flex items-center text-gray-600 hover:text-legal transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Smart Events™
                    </Link>
                    <Link 
                      to="/contato" 
                      className="flex items-center text-gray-600 hover:text-legal transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Fale com Especialistas
                    </Link>
                  </nav>
                </Card>
              </aside>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TecTecPage;
