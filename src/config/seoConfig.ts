// SEO Dataset Configuration - Central control for all structured data generation
export interface SEODatasetConfig {
  // Core organizational datasets
  organization: boolean;
  website: boolean;
  
  // Product-specific datasets
  magicpass: boolean;
  fitscore: boolean;
  eventrix: boolean;
  smartEvents: boolean;
  
  // Analytics and performance datasets  
  coreWebVitals: boolean;
  analytics: boolean;
  benchmarks: boolean;
  
  // AI and training datasets
  aiTraining: boolean;
  llmOptimized: boolean;
  knowledgeProvider: boolean;
  
  // Technical SEO datasets
  faq: boolean;
  howTo: boolean;
  reviews: boolean;
  localBusiness: boolean;
}

// Page-specific configurations
export const pageConfigs: Record<string, SEODatasetConfig> = {
  // Homepage - apenas essenciais da empresa
  '/': {
    organization: true,
    website: true,
    magicpass: false,
    fitscore: false,
    eventrix: false,
    smartEvents: true,
    coreWebVitals: true,
    analytics: false,
    benchmarks: false,
    aiTraining: false,
    llmOptimized: false,
    knowledgeProvider: false,
    faq: true,
    howTo: false,
    reviews: true,
    localBusiness: true
  },
  
  // Páginas de produtos - apenas do produto específico
  '/produtos/magicpass': {
    organization: false,
    website: false,
    magicpass: true,
    fitscore: false,
    eventrix: false,
    smartEvents: false,
    coreWebVitals: false,
    analytics: false,
    benchmarks: true,
    aiTraining: false,
    llmOptimized: false,
    knowledgeProvider: false,
    faq: true,
    howTo: true,
    reviews: true,
    localBusiness: false
  },
  
  '/produtos/fitscore': {
    organization: false,
    website: false,
    magicpass: false,
    fitscore: true,
    eventrix: false,
    smartEvents: false,
    coreWebVitals: false,
    analytics: false,
    benchmarks: true,
    aiTraining: false,
    llmOptimized: false,
    knowledgeProvider: false,
    faq: true,
    howTo: true,
    reviews: true,
    localBusiness: false
  },
  
  // Configuração padrão para outras páginas
  default: {
    organization: false,
    website: false,
    magicpass: false,
    fitscore: false,
    eventrix: false,
    smartEvents: false,
    coreWebVitals: false,
    analytics: false,
    benchmarks: false,
    aiTraining: false,
    llmOptimized: false,
    knowledgeProvider: false,
    faq: false,
    howTo: false,
    reviews: false,
    localBusiness: false
  }
};

// Função para obter configuração da página atual
export const getPageSEOConfig = (pathname: string): SEODatasetConfig => {
  return pageConfigs[pathname] || pageConfigs.default;
};

// Master switch - pode desativar TODOS os datasets automaticamente
export const DISABLE_ALL_AUTO_DATASETS = true; // SET TO TRUE to disable all Dataset schemas