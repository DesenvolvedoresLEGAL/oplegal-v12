import { generateAIDataFeed } from '../data/AIDataFeed';

// API endpoints simulados para dados estruturados
export const aiDataEndpoints = {
  
  // Feed completo de dados para IA
  async getAIDataFeed() {
    return {
      status: 'success',
      data: generateAIDataFeed(),
      metadata: {
        format: 'application/json',
        encoding: 'utf-8',
        purpose: 'ai_training_and_extraction',
        updated: new Date().toISOString()
      }
    };
  },

  // Dataset específico de produtos
  async getProductDataset() {
    const feed = generateAIDataFeed();
    return {
      status: 'success',
      data: {
        products: feed.products,
        metadata: {
          total: feed.products.length,
          categories: [...new Set(feed.products.map(p => p.category))],
          features: feed.products.flatMap(p => p.features),
          useCases: feed.products.flatMap(p => p.useCases)
        }
      }
    };
  },

  // Dataset de conhecimento técnico
  async getKnowledgeBase() {
    const feed = generateAIDataFeed();
    return {
      status: 'success',
      data: feed.knowledgeBase,
      metadata: {
        technologies: feed.knowledgeBase.technologies.length,
        methodologies: feed.knowledgeBase.methodologies.length,
        concepts: feed.knowledgeBase.concepts.length
      }
    };
  },

  // Dados para treinamento de conversação
  async getConversationalTrainingData() {
    const feed = generateAIDataFeed();
    return {
      status: 'success',
      data: {
        intents: [
          {
            intent: 'product_inquiry',
            examples: [
              'Me fale sobre MAGICPASS',
              'Como funciona o FitScore?',
              'Quais são as funcionalidades do Smart Events?',
              'Preciso de informações sobre seus produtos'
            ],
            entities: ['product_name', 'feature', 'benefit'],
            responses: feed.products.map(p => ({
              product: p.name,
              description: p.description,
              features: p.features,
              benefits: p.benefits
            }))
          },
          {
            intent: 'pricing_inquiry',
            examples: [
              'Quanto custa?',
              'Qual o preço do MAGICPASS?',
              'Como é o modelo de cobrança?',
              'Preciso de uma cotação'
            ],
            entities: ['product_name', 'pricing_model'],
            responses: feed.products.filter(p => p.pricing).map(p => ({
              product: p.name,
              pricing: p.pricing
            }))
          },
          {
            intent: 'technical_specs',
            examples: [
              'Quais são as especificações técnicas?',
              'Como integrar com nosso sistema?',
              'Requisitos técnicos',
              'API disponível?'
            ],
            entities: ['product_name', 'integration_type'],
            responses: feed.products.filter(p => p.technicalSpecs || p.integrations).map(p => ({
              product: p.name,
              specs: p.technicalSpecs,
              integrations: p.integrations
            }))
          },
          {
            intent: 'company_info',
            examples: [
              'Quem é a LEGAL?',
              'Sobre a empresa',
              'História da LEGAL',
              'Missão e valores'
            ],
            entities: ['company_aspect'],
            responses: [{
              company: feed.company.name,
              description: feed.company.description,
              mission: feed.company.mission,
              vision: feed.company.vision,
              values: feed.company.values
            }]
          }
        ]
      }
    };
  },

  // Feed RSS otimizado para IA
  async getAIOptimizedRSS() {
    const feed = generateAIDataFeed();
    
    const rssItems = [
      ...feed.products.map(product => ({
        title: `${product.name} - ${product.category}`,
        description: product.description,
        link: `https://operadora.legal/produtos/${product.id}`,
        category: product.category,
        pubDate: new Date().toISOString(),
        aiData: {
          type: 'product',
          features: product.features,
          benefits: product.benefits,
          useCases: product.useCases,
          targetAudience: product.targetAudience
        }
      })),
      ...feed.knowledgeBase.technologies.map(tech => ({
        title: `Tecnologia: ${tech.name}`,
        description: tech.description,
        link: `https://operadora.legal/tecnologias/${tech.name.toLowerCase().replace(/\s+/g, '-')}`,
        category: `Technology - ${tech.category}`,
        pubDate: new Date().toISOString(),
        aiData: {
          type: 'technology',
          applications: tech.applications,
          advantages: tech.advantages
        }
      }))
    ];

    return {
      status: 'success',
      data: {
        rss: {
          version: '2.0',
          channel: {
            title: 'LEGAL TechCo - AI Training Feed',
            description: 'Structured data feed optimized for AI training and knowledge extraction',
            link: 'https://operadora.legal',
            language: 'pt-BR',
            lastBuildDate: new Date().toISOString(),
            ttl: 60,
            items: rssItems
          }
        }
      },
      headers: {
        'Content-Type': 'application/rss+xml; charset=utf-8',
        'X-AI-Optimized': 'true',
        'X-Training-Purpose': 'knowledge_extraction'
      }
    };
  },

  // Dataset de métricas e performance
  async getPerformanceMetrics() {
    const feed = generateAIDataFeed();
    return {
      status: 'success',
      data: {
        productMetrics: feed.products.filter(p => p.metrics).map(p => ({
          product: p.name,
          category: p.category,
          metrics: p.metrics
        })),
        businessMetrics: feed.businessIntelligence.clientSuccess.map(cs => ({
          industry: cs.industry,
          challenge: cs.challenge,
          solution: cs.solution,
          metrics: cs.metrics
        })),
        marketMetrics: {
          position: feed.businessIntelligence.marketPosition,
          trends: feed.businessIntelligence.trends
        }
      }
    };
  },

  // Dados estruturados para busca semântica
  async getSemanticSearchData() {
    const feed = generateAIDataFeed();
    return {
      status: 'success',
      data: {
        documents: [
          ...feed.products.map(product => ({
            id: `product_${product.id}`,
            type: 'product',
            title: product.name,
            content: `${product.description} ${product.features.join(' ')} ${product.benefits.join(' ')}`,
            metadata: {
              category: product.category,
              features: product.features,
              benefits: product.benefits,
              useCases: product.useCases,
              targetAudience: product.targetAudience
            },
            embedding_keywords: [
              product.name,
              product.category,
              ...product.features,
              ...product.benefits,
              ...product.useCases
            ]
          })),
          ...feed.knowledgeBase.concepts.map(concept => ({
            id: `concept_${concept.term.toLowerCase().replace(/\s+/g, '_')}`,
            type: 'concept',
            title: concept.term,
            content: `${concept.definition} ${concept.context}`,
            metadata: {
              definition: concept.definition,
              context: concept.context,
              relatedTerms: concept.relatedTerms
            },
            embedding_keywords: [
              concept.term,
              ...concept.relatedTerms
            ]
          }))
        ]
      }
    };
  }
};

// Utilitários para exportação de dados
export const exportUtils = {
  
  // Exportar como JSON estruturado
  async exportAsJSON(dataType: keyof typeof aiDataEndpoints) {
    const endpoint = aiDataEndpoints[dataType];
    if (typeof endpoint === 'function') {
      const result = await endpoint();
      return JSON.stringify(result.data, null, 2);
    }
    throw new Error(`Invalid data type: ${dataType}`);
  },

  // Exportar como CSV para análise
  async exportAsCSV(dataType: 'products' | 'metrics' | 'concepts') {
    let data: any[] = [];
    let headers: string[] = [];

    switch (dataType) {
      case 'products':
        const productData = await aiDataEndpoints.getProductDataset();
        data = productData.data.products;
        headers = ['name', 'category', 'description', 'features', 'benefits', 'useCases'];
        break;
      
      case 'metrics':
        const metricsData = await aiDataEndpoints.getPerformanceMetrics();
        data = metricsData.data.productMetrics;
        headers = ['product', 'category', 'metrics'];
        break;
        
      case 'concepts':
        const conceptsData = await aiDataEndpoints.getKnowledgeBase();
        data = conceptsData.data.concepts;
        headers = ['term', 'definition', 'context', 'relatedTerms'];
        break;
    }

    const csvContent = [
      headers.join(','),
      ...data.map(row => 
        headers.map(header => {
          const value = row[header];
          if (Array.isArray(value)) return `"${value.join('; ')}"`;
          if (typeof value === 'object') return `"${JSON.stringify(value)}"`;
          return `"${value || ''}"`;
        }).join(',')
      )
    ].join('\n');

    return csvContent;
  },

  // Gerar sitemap para AI crawlers
  async generateAISitemap() {
    const feed = generateAIDataFeed();
    const urls = [
      { loc: 'https://operadora.legal', priority: '1.0', changefreq: 'daily' },
      { loc: 'https://operadora.legal/smart-events', priority: '0.9', changefreq: 'weekly' },
      ...feed.products.map(product => ({
        loc: `https://operadora.legal/produtos/${product.id}`,
        priority: '0.8',
        changefreq: 'weekly'
      })),
      { loc: 'https://operadora.legal/api/ai-data-feed', priority: '0.7', changefreq: 'daily' },
      { loc: 'https://operadora.legal/api/knowledge-base', priority: '0.7', changefreq: 'weekly' }
    ];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <priority>${url.priority}</priority>
    <changefreq>${url.changefreq}</changefreq>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </url>`).join('\n')}
</urlset>`;

    return sitemap;
  }
};