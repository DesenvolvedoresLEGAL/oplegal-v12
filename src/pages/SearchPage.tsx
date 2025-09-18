import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, ArrowRight, Calendar, User, Tag, ExternalLink } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import SEOHead from '@/components/SEOHead';
import WebPageSchema from '@/components/seo/WebPageSchema';
import BreadcrumbsSchema from '@/components/seo/BreadcrumbsSchema';
import SearchResultsPageSchema from '@/components/seo/SearchResultsPageSchema';
import { blogPosts, featuredPosts } from '@/data/TecTecData';

// Dados dos produtos para busca
const products = [
  { id: 'blue6', name: 'Blue6', description: 'Hotspot com Gestão WiFi', category: 'Conectividade', url: '/produtos/blue6', keywords: ['wifi', 'hotspot', 'conectividade', 'internet'] },
  { id: 'speedy5g', name: 'Speedy 5G', description: 'Internet Plug and Play', category: 'Conectividade', url: '/produtos/speedy5g', keywords: ['5g', 'internet', 'plug and play', 'velocidade'] },
  { id: 'plaud', name: 'Plaud', description: 'Gravação de Voz com IA', category: 'IA', url: '/produtos/plaud', keywords: ['gravação', 'voz', 'ia', 'áudio', 'transcrição'] },
  { id: 'eventrix', name: 'Eventrix', description: 'Plataforma de Gestão de Eventos', category: 'Eventos', url: '/produtos/eventrix', keywords: ['eventos', 'gestão', 'plataforma', 'organização'] },
  { id: 'magicpass', name: 'MAGICPASS', description: 'Credenciamento e Acesso Rápido', category: 'Eventos', url: '/produtos/magicpass', keywords: ['credenciamento', 'acesso', 'reconhecimento facial', 'segurança'] },
  { id: 'linkai', name: 'LinkAI', description: 'Matchmaking Inteligente', category: 'IA', url: '/produtos/linkai', keywords: ['matchmaking', 'networking', 'ia', 'conexões'] },
  { id: 'fitscore', name: 'FitScore', description: 'Contratação e People Analytics', category: 'IA', url: '/produtos/fitscore', keywords: ['rh', 'contratação', 'analytics', 'pessoas'] },
  { id: 'humanoid', name: 'Humanoid', description: 'Robô para Geração de Negócios', category: 'IA', url: '/produtos/humanoid', keywords: ['robô', 'automação', 'negócios', 'vendas'] },
  { id: 'ping', name: 'Ping', description: 'Atendimento Omnichannel', category: 'IA', url: '/produtos/ping', keywords: ['atendimento', 'chatbot', 'omnichannel', 'suporte'] },
  { id: 'brilix', name: 'Brilix', description: 'Limpeza em Altura', category: 'Drones', url: '/produtos/brilix', keywords: ['drone', 'limpeza', 'altura', 'manutenção'] },
  { id: 'nuvyo', name: 'Nuvyo', description: 'Filmagem e Fotografia', category: 'Drones', url: '/produtos/nuvyo', keywords: ['drone', 'filmagem', 'fotografia', 'aéreo'] },
  { id: 'sonix', name: 'Sonix', description: 'Delivery de Tudo', category: 'Drones', url: '/produtos/sonix', keywords: ['drone', 'delivery', 'entrega', 'logística'] },
  { id: 'neurafit', name: 'NeuraFit', description: 'Musculação para o Cérebro', category: 'IA', url: '/produtos/neurafit', keywords: ['cérebro', 'treinamento', 'cognição', 'mental'] }
];

// Dados de recursos/páginas para busca
const resources = [
  { id: 'smart-events', name: 'SmartEvents', description: 'Plataforma de Eventos Inteligentes', category: 'Plataforma', url: '/smart-events', keywords: ['smart events', 'eventos inteligentes', 'tecnologia'] },
  { id: 'missao-visao-valores', name: 'Missão, Visão e Valores', description: 'Conheça nosso propósito e valores', category: 'Empresa', url: '/missao-visao-valores', keywords: ['missão', 'visão', 'valores', 'cultura', 'propósito'] },
  { id: 'universo-bits', name: 'BITS', description: 'Programa de Recompensas', category: 'Programa', url: '/universo/bits', keywords: ['bits', 'recompensas', 'programa', 'pontos'] },
  { id: 'negocios-ai', name: 'Negócios IA', description: 'Soluções de Inteligência Artificial', category: 'Negócios', url: '/negocios/ai', keywords: ['ia', 'inteligência artificial', 'automação'] },
  { id: 'negocios-aero', name: 'Negócios AERO', description: 'Serviços com Drone', category: 'Negócios', url: '/negocios/aero', keywords: ['drone', 'aero', 'serviços aéreos'] }
];

interface SearchResult {
  id: string;
  type: 'produto' | 'artigo' | 'recurso';
  title: string;
  description: string;
  category: string;
  url: string;
  author?: string;
  date?: string;
  tags?: string[];
  relevanceScore: number;
}

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const performSearch = (query: string) => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    setIsLoading(true);
    
    // Simular um pequeno delay para mostrar loading
    setTimeout(() => {
      const searchResults: SearchResult[] = [];
      const queryLower = query.toLowerCase();

      // Buscar em produtos
      products.forEach(product => {
        let relevanceScore = 0;
        
        // Título exato = alta relevância
        if (product.name.toLowerCase().includes(queryLower)) relevanceScore += 100;
        
        // Descrição = média relevância
        if (product.description.toLowerCase().includes(queryLower)) relevanceScore += 70;
        
        // Keywords = baixa relevância
        product.keywords.forEach(keyword => {
          if (keyword.toLowerCase().includes(queryLower)) relevanceScore += 30;
        });
        
        // Categoria = baixa relevância
        if (product.category.toLowerCase().includes(queryLower)) relevanceScore += 20;

        if (relevanceScore > 0) {
          searchResults.push({
            id: product.id,
            type: 'produto',
            title: product.name,
            description: product.description,
            category: product.category,
            url: product.url,
            relevanceScore
          });
        }
      });

      // Buscar em artigos do blog
      [...blogPosts, ...featuredPosts].forEach(post => {
        let relevanceScore = 0;
        
        if (post.title.toLowerCase().includes(queryLower)) relevanceScore += 100;
        if (post.excerpt?.toLowerCase().includes(queryLower)) relevanceScore += 70;
        if (post.category.toLowerCase().includes(queryLower)) relevanceScore += 50;
        
        post.tags?.forEach(tag => {
          if (tag.toLowerCase().includes(queryLower)) relevanceScore += 30;
        });

        if (relevanceScore > 0) {
          searchResults.push({
            id: post.id.toString(),
            type: 'artigo',
            title: post.title,
            description: post.excerpt || '',
            category: post.category,
            url: `/universo/tectec/${post.id}`,
            author: post.author,
            date: post.date,
            tags: post.tags,
            relevanceScore
          });
        }
      });

      // Buscar em recursos
      resources.forEach(resource => {
        let relevanceScore = 0;
        
        if (resource.name.toLowerCase().includes(queryLower)) relevanceScore += 100;
        if (resource.description.toLowerCase().includes(queryLower)) relevanceScore += 70;
        if (resource.category.toLowerCase().includes(queryLower)) relevanceScore += 50;
        
        resource.keywords.forEach(keyword => {
          if (keyword.toLowerCase().includes(queryLower)) relevanceScore += 30;
        });

        if (relevanceScore > 0) {
          searchResults.push({
            id: resource.id,
            type: 'recurso',
            title: resource.name,
            description: resource.description,
            category: resource.category,
            url: resource.url,
            relevanceScore
          });
        }
      });

      // Ordenar por relevância
      searchResults.sort((a, b) => b.relevanceScore - a.relevanceScore);
      
      setResults(searchResults);
      setIsLoading(false);
    }, 300);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setSearchParams(query ? { q: query } : {});
    performSearch(query);
  };

  useEffect(() => {
    const query = searchParams.get('q');
    if (query) {
      setSearchQuery(query);
      performSearch(query);
    }
  }, [searchParams]);

  const getTypeIcon = (type: SearchResult['type']) => {
    switch (type) {
      case 'produto': return '🚀';
      case 'artigo': return '📰';
      case 'recurso': return '🔗';
      default: return '📄';
    }
  };

  const getTypeLabel = (type: SearchResult['type']) => {
    switch (type) {
      case 'produto': return 'Produto';
      case 'artigo': return 'Artigo';
      case 'recurso': return 'Recurso';
      default: return 'Conteúdo';
    }
  };

  return (
    <>
      <SEOHead
        title={searchQuery ? `Busca: ${searchQuery} | LEGAL` : 'Buscar | LEGAL'}
        description={searchQuery ? 
          `Resultados de busca para "${searchQuery}" - Produtos, artigos e recursos da LEGAL` :
          'Busque por produtos, artigos e recursos da LEGAL. Encontre soluções em conectividade, IA, drones e muito mais.'
        }
        keywords="busca LEGAL, produtos tecnologia, artigos inovação, recursos conectividade"
        url={`https://operadora.legal/busca${searchQuery ? `?q=${encodeURIComponent(searchQuery)}` : ''}`}
        type="website"
      />
      <WebPageSchema
        name={searchQuery ? `Busca: ${searchQuery}` : 'Buscar LEGAL'}
        description={searchQuery ? `Resultados de busca para "${searchQuery}" no site da LEGAL` : 'Página de busca do site da LEGAL'}
        url={`https://operadora.legal/busca${searchQuery ? `?q=${encodeURIComponent(searchQuery)}` : ''}`}
      />
      <BreadcrumbsSchema />
      <SearchResultsPageSchema
        searchQuery={searchQuery}
        numberOfResults={results.length}
        results={results.map(result => ({
          name: result.title,
          url: `https://operadora.legal${result.url}`,
          description: result.description
        }))}
        url={`https://operadora.legal/busca${searchQuery ? `?q=${encodeURIComponent(searchQuery)}` : ''}`}
      />

      <div className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumbs */}
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Início</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Buscar</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Header da Busca */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4">Buscar</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Encontre produtos, artigos e recursos da LEGAL
            </p>
          </div>

          {/* Campo de Busca */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                type="text"
                placeholder="Digite sua busca aqui..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch(searchQuery)}
                className="pl-12 pr-4 py-4 text-lg border-2 focus:border-primary"
              />
            </div>
          </div>

          {/* Resultados */}
          {searchQuery && (
            <div className="max-w-4xl mx-auto">
              {isLoading ? (
                <div className="text-center py-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                  <p className="text-muted-foreground">Buscando...</p>
                </div>
              ) : results.length > 0 ? (
                <>
                  <div className="mb-6">
                    <p className="text-muted-foreground">
                      {results.length} resultado{results.length !== 1 ? 's' : ''} encontrado{results.length !== 1 ? 's' : ''} para "{searchQuery}"
                    </p>
                  </div>

                  <div className="space-y-6">
                    {results.map((result) => (
                      <Card key={`${result.type}-${result.id}`} className="p-6 hover:shadow-lg transition-shadow">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <span className="text-xl">{getTypeIcon(result.type)}</span>
                            <Badge variant="outline" className="text-xs">
                              {getTypeLabel(result.type)}
                            </Badge>
                            <Badge variant="secondary" className="text-xs">
                              {result.category}
                            </Badge>
                          </div>
                        </div>

                        <h3 className="text-xl font-semibold text-primary mb-2 hover:text-primary/80">
                          <a href={result.url} className="flex items-center gap-2">
                            {result.title}
                            <ArrowRight className="h-4 w-4" />
                          </a>
                        </h3>

                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {result.description}
                        </p>

                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                          {result.author && (
                            <div className="flex items-center gap-1">
                              <User className="h-4 w-4" />
                              {result.author}
                            </div>
                          )}
                          
                          {result.date && (
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {new Date(result.date).toLocaleDateString('pt-BR')}
                            </div>
                          )}

                          {result.tags && result.tags.length > 0 && (
                            <div className="flex items-center gap-2">
                              <Tag className="h-4 w-4" />
                              <div className="flex gap-1">
                                {result.tags.slice(0, 3).map((tag) => (
                                  <Badge key={tag} variant="outline" className="text-xs">
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>

                        <Separator className="my-4" />
                        
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-primary hover:underline">
                            {result.url}
                          </span>
                          
                          <Button variant="outline" size="sm" asChild>
                            <a href={result.url}>
                              Ver mais
                              <ExternalLink className="ml-2 h-4 w-4" />
                            </a>
                          </Button>
                        </div>
                      </Card>
                    ))}
                  </div>
                </>
              ) : (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-xl font-semibold mb-2">Nenhum resultado encontrado</h3>
                  <p className="text-muted-foreground mb-6">
                    Não encontramos resultados para "{searchQuery}". Tente usar termos diferentes ou mais gerais.
                  </p>
                  
                  <div className="max-w-md mx-auto text-left">
                    <h4 className="font-medium mb-2">Sugestões:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Verifique a ortografia das palavras</li>
                      <li>• Use termos mais gerais</li>
                      <li>• Tente palavras-chave relacionadas</li>
                      <li>• Use sinônimos</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Sugestões quando não há busca */}
          {!searchQuery && (
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-semibold mb-4">Categorias Populares</h2>
                <div className="flex flex-wrap justify-center gap-2">
                  {['5G', 'IA', 'Drones', 'Eventos', 'Conectividade', 'Automação'].map((category) => (
                    <Button
                      key={category}
                      variant="outline"
                      onClick={() => handleSearch(category)}
                      className="mb-2"
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchPage;