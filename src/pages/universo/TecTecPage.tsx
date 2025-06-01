
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
  ChevronRight
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

// Mock data - será substituído por dados reais do CMS
const featuredPosts = [
  {
    id: 1,
    title: 'O Futuro da Conectividade 5G no Brasil: Transformando Negócios',
    excerpt: 'Descubra como a tecnologia 5G está revolucionando o cenário empresarial brasileiro e criando novas oportunidades de crescimento.',
    author: 'Maria Silva',
    date: '2024-05-28',
    readTime: '8 min',
    category: 'Tecnologia',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop',
    featured: true,
    views: 2340
  },
  {
    id: 2,
    title: 'Inteligência Artificial na Gestão de Eventos: Cases de Sucesso',
    excerpt: 'Como a IA está otimizando processos e melhorando a experiência em eventos corporativos.',
    author: 'João Santos',
    date: '2024-05-25',
    readTime: '6 min',
    category: 'IA',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=400&fit=crop',
    featured: true,
    views: 1890
  }
];

const blogPosts = [
  {
    id: 3,
    title: 'Tendências de Conectividade para 2024: O que Esperar',
    excerpt: 'Uma análise completa das principais tendências tecnológicas que moldarão o futuro da conectividade empresarial.',
    author: 'Ana Costa',
    date: '2024-05-20',
    readTime: '5 min',
    category: 'Tendências',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop',
    views: 1245
  },
  {
    id: 4,
    title: 'Como Implementar IoT em Pequenas e Médias Empresas',
    excerpt: 'Guia prático para PMEs que desejam aproveitar o poder da Internet das Coisas.',
    author: 'Carlos Oliveira',
    date: '2024-05-18',
    readTime: '7 min',
    category: 'IoT',
    image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=250&fit=crop',
    views: 987
  },
  {
    id: 5,
    title: 'Segurança Digital: Protegendo Dados em um Mundo Conectado',
    excerpt: 'Estratégias essenciais para manter sua empresa segura na era digital.',
    author: 'Fernanda Lima',
    date: '2024-05-15',
    readTime: '6 min',
    category: 'Segurança',
    image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&h=250&fit=crop',
    views: 1456
  },
  {
    id: 6,
    title: 'Automação Empresarial: Reduzindo Custos e Aumentando Eficiência',
    excerpt: 'Como a automação pode transformar operações empresariais e gerar ROI significativo.',
    author: 'Roberto Silva',
    date: '2024-05-12',
    readTime: '9 min',
    category: 'Automação',
    image: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=400&h=250&fit=crop',
    views: 2103
  }
];

const categories = ['Todos', 'Tecnologia', 'IA', 'Tendências', 'IoT', 'Segurança', 'Automação'];

const TecTecPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [currentPage, setCurrentPage] = useState(1);
  const [email, setEmail] = useState('');

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'Todos' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const popularPosts = [...blogPosts].sort((a, b) => b.views - a.views).slice(0, 3);

  return (
    <>
      <Helmet>
        <title>TecTec | Blog LEGAL - Tecnologia e Conectividade</title>
        <meta name="description" content="Blog TecTec da LEGAL: tendências em tecnologia, 5G, IoT, IA e conectividade empresarial. Insights e análises para o futuro dos negócios." />
        <meta property="og:title" content="TecTec | Blog de Tecnologia e Conectividade" />
        <meta property="og:description" content="Explore o futuro da tecnologia com o blog TecTec da LEGAL. Artigos sobre 5G, IA, IoT e muito mais." />
        <meta property="og:url" content="https://operadora.legal/universo/tectec" />
        <meta name="keywords" content="blog tecnologia, 5G, IoT, inteligência artificial, conectividade, LEGAL, tendências tech" />
        <link rel="canonical" href="https://operadora.legal/universo/tectec" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Breadcrumb */}
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

        {/* Hero Section */}
        <section className="pb-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-legal-green bg-opacity-10 text-legal-green rounded-full text-sm font-medium mb-4">
                <TrendingUp className="w-4 h-4 mr-2" />
                Blog TecTec
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-legal mb-6 font-unica">
                Tecnologia que
                <span className="text-legal-green block">Transforma</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 font-unica">
                Insights, tendências e análises sobre o futuro da conectividade empresarial.
                Mantenha-se à frente com conteúdo exclusivo da LEGAL.
              </p>
            </div>

            {/* Search and Filter */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    type="text"
                    placeholder="Buscar artigos..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 h-12 text-lg border-legal focus:ring-legal"
                  />
                </div>
                <Button variant="outline" className="h-12 border-legal text-legal hover:bg-legal hover:text-white">
                  <Filter className="w-4 h-4 mr-2" />
                  Filtros
                </Button>
              </div>

              {/* Categories */}
              <div className="flex flex-wrap gap-2 justify-center">
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
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-legal mb-8 font-unica">Artigos em Destaque</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Card key={post.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-0">
                  <div className="relative">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4 bg-legal text-white">
                      {post.category}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-legal mb-3 group-hover:text-legal-purple transition-colors leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {post.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(post.date).toLocaleDateString('pt-BR')}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                    </div>
                    <Button 
                      asChild 
                      className="w-full bg-legal text-white hover:bg-legal-purple"
                    >
                      <Link to={`/universo/tectec/${post.id}`} className="flex items-center justify-center">
                        Ler Artigo
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Posts Grid */}
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-legal mb-8 font-unica">Últimos Artigos</h2>
                
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
                        <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                          <div className="md:flex">
                            <div className="md:w-1/3">
                              <img 
                                src={post.image} 
                                alt={post.title}
                                className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                            <div className="md:w-2/3 p-6">
                              <div className="flex items-center justify-between mb-3">
                                <Badge variant="outline" className="border-legal text-legal">
                                  {post.category}
                                </Badge>
                                <div className="flex items-center space-x-2">
                                  <Button variant="ghost" size="sm">
                                    <Bookmark className="w-4 h-4" />
                                  </Button>
                                  <Button variant="ghost" size="sm">
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
                              <div className="flex items-center justify-between text-sm text-gray-500">
                                <div className="flex items-center space-x-4">
                                  <div className="flex items-center">
                                    <User className="w-4 h-4 mr-1" />
                                    {post.author}
                                  </div>
                                  <div className="flex items-center">
                                    <Calendar className="w-4 h-4 mr-1" />
                                    {new Date(post.date).toLocaleDateString('pt-BR')}
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
                              </div>
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>

                    {/* Pagination */}
                    <div className="mt-12">
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
                    </div>
                  </>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Popular Posts */}
                <Card className="p-6">
                  <h3 className="text-xl font-bold text-legal mb-6 font-unica">Mais Populares</h3>
                  <div className="space-y-4">
                    {popularPosts.map((post, index) => (
                      <div key={post.id} className="flex items-start space-x-3 group">
                        <div className="text-2xl font-bold text-legal-green">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-legal group-hover:text-legal-purple transition-colors leading-tight mb-1">
                            {post.title}
                          </h4>
                          <div className="flex items-center text-xs text-gray-500 space-x-2">
                            <span>{post.views} visualizações</span>
                            <span>•</span>
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Newsletter Signup */}
                <Card className="p-6 bg-gradient-to-br from-legal to-legal-purple text-white">
                  <div className="text-center">
                    <Mail className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2 font-unica">Newsletter TecTec</h3>
                    <p className="text-sm opacity-90 mb-4">
                      Receba os melhores insights sobre tecnologia diretamente no seu e-mail.
                    </p>
                    <div className="space-y-3">
                      <Input
                        type="email"
                        placeholder="Seu melhor e-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-white text-legal border-0"
                      />
                      <Button 
                        className="w-full bg-legal-green hover:bg-legal-green/90 text-white"
                        onClick={() => {
                          console.log('Newsletter signup:', email);
                          setEmail('');
                        }}
                      >
                        Assinar Newsletter
                      </Button>
                    </div>
                  </div>
                </Card>

                {/* Categories Widget */}
                <Card className="p-6">
                  <h3 className="text-xl font-bold text-legal mb-6 font-unica">Categorias</h3>
                  <div className="space-y-2">
                    {categories.slice(1).map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className="flex items-center justify-between w-full text-left p-2 rounded hover:bg-gray-50 transition-colors"
                      >
                        <span className={`${selectedCategory === category ? 'text-legal font-medium' : 'text-gray-600'}`}>
                          {category}
                        </span>
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                      </button>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TecTecPage;
