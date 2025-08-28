// Service Worker para otimização específica de crawlers de IA
const CACHE_NAME = 'ai-crawler-cache-v1';
const AI_CRAWLER_CACHE = 'ai-data-cache-v1';

// URLs prioritárias para crawlers de IA
const AI_PRIORITY_URLS = [
  '/',
  '/smart-events',
  '/api/ai-data-feed',
  '/api/knowledge-base',
  '/sitemap.xml',
  '/robots.txt'
];

// Detectar se é um crawler de IA
const isAICrawler = (userAgent) => {
  const aiCrawlers = [
    'googlebot',
    'bingbot',
    'slurp',
    'facebookexternalhit',
    'twitterbot',
    'linkedinbot',
    'claude',
    'gpt',
    'openai',
    'anthropic'
  ];
  
  return aiCrawlers.some(crawler => 
    userAgent.toLowerCase().includes(crawler)
  );
};

// Instalar service worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(AI_PRIORITY_URLS);
      })
  );
});

// Interceptar requests
self.addEventListener('fetch', (event) => {
  const userAgent = event.request.headers.get('user-agent') || '';
  const isCrawler = isAICrawler(userAgent);
  
  if (isCrawler) {
    // Estratégia especial para crawlers de IA
    event.respondWith(handleAICrawlerRequest(event.request));
  } else {
    // Estratégia normal para usuários
    event.respondWith(handleUserRequest(event.request));
  }
});

// Lidar com requests de crawlers de IA
async function handleAICrawlerRequest(request) {
  const url = new URL(request.url);
  
  try {
    // Para crawlers de IA, sempre servir conteúdo fresco e otimizado
    const response = await fetch(request, {
      cache: 'no-cache'
    });
    
    if (response.ok) {
      // Otimizar response para IA
      const optimizedResponse = await optimizeForAI(response.clone(), url);
      
      // Cache para próximas requests
      const cache = await caches.open(AI_CRAWLER_CACHE);
      cache.put(request, optimizedResponse.clone());
      
      return optimizedResponse;
    }
    
    // Fallback para cache se request falhar
    return await caches.match(request) || response;
    
  } catch (error) {
    // Retornar do cache em caso de erro
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // Resposta de fallback para crawlers
    return new Response(
      JSON.stringify({
        error: 'Content temporarily unavailable',
        message: 'LEGAL TechCo - Smart Events™ platform',
        timestamp: new Date().toISOString()
      }),
      {
        status: 503,
        headers: {
          'Content-Type': 'application/json',
          'X-AI-Crawler-Fallback': 'true'
        }
      }
    );
  }
}

// Lidar com requests de usuários
async function handleUserRequest(request) {
  return caches.match(request)
    .then((response) => {
      if (response) {
        return response;
      }
      return fetch(request);
    });
}

// Otimizar response para IA
async function optimizeForAI(response, url) {
  const contentType = response.headers.get('content-type');
  
  if (contentType && contentType.includes('text/html')) {
    // Otimizar HTML para crawlers de IA
    const html = await response.text();
    const optimizedHtml = await optimizeHTML(html, url);
    
    return new Response(optimizedHtml, {
      status: response.status,
      statusText: response.statusText,
      headers: {
        ...Object.fromEntries(response.headers.entries()),
        'X-AI-Optimized': 'true',
        'X-Optimization-Timestamp': new Date().toISOString(),
        'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400'
      }
    });
  }
  
  if (contentType && contentType.includes('application/json')) {
    // Otimizar JSON para IA
    const data = await response.json();
    const optimizedData = await optimizeJSON(data, url);
    
    return new Response(JSON.stringify(optimizedData), {
      status: response.status,
      statusText: response.statusText,
      headers: {
        ...Object.fromEntries(response.headers.entries()),
        'X-AI-Optimized': 'true',
        'Content-Type': 'application/json'
      }
    });
  }
  
  return response;
}

// Otimizar HTML para IA
async function optimizeHTML(html, url) {
  let optimizedHtml = html;
  
  // Adicionar metadados específicos para IA
  const aiMetadata = `
    <meta name="ai-crawler-optimized" content="true">
    <meta name="ai-content-type" content="smart-events-technology">
    <meta name="ai-company" content="LEGAL TechCo">
    <meta name="ai-last-updated" content="${new Date().toISOString()}">
    <meta name="ai-priority" content="high">
  `;
  
  optimizedHtml = optimizedHtml.replace(
    '</head>',
    `${aiMetadata}</head>`
  );
  
  // Adicionar estrutura semântica se não existir
  if (!optimizedHtml.includes('itemscope')) {
    optimizedHtml = optimizedHtml.replace(
      '<body',
      '<body itemscope itemtype="https://schema.org/WebPage"'
    );
  }
  
  // Otimizar images para IA
  optimizedHtml = optimizedHtml.replace(
    /<img([^>]*?)>/g,
    (match, attrs) => {
      if (!attrs.includes('alt=')) {
        return `<img${attrs} alt="LEGAL TechCo Smart Events technology">`;
      }
      return match;
    }
  );
  
  // Adicionar dados estruturados de navegação se não existir
  if (!optimizedHtml.includes('BreadcrumbList')) {
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [{
        "@type": "ListItem",
        "position": 1,
        "name": "LEGAL TechCo",
        "item": "https://operadora.legal"
      }]
    };
    
    const breadcrumbScript = `
      <script type="application/ld+json">
        ${JSON.stringify(breadcrumbSchema)}
      </script>
    `;
    
    optimizedHtml = optimizedHtml.replace(
      '</head>',
      `${breadcrumbScript}</head>`
    );
  }
  
  return optimizedHtml;
}

// Otimizar JSON para IA
async function optimizeJSON(data, url) {
  const optimizedData = {
    ...data,
    _aiMetadata: {
      optimizedForAI: true,
      timestamp: new Date().toISOString(),
      url: url.toString(),
      company: 'LEGAL TechCo',
      domain: 'smart-events-technology'
    }
  };
  
  // Adicionar contexto semântico se for dados de produtos
  if (data.products || data.name) {
    optimizedData._semanticContext = {
      "@context": "https://schema.org",
      "@type": data.products ? "ItemList" : "Service",
      "provider": {
        "@type": "Organization", 
        "name": "LEGAL TechCo",
        "url": "https://operadora.legal"
      }
    };
  }
  
  return optimizedData;
}

// Limpar cache antigo
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME && cacheName !== AI_CRAWLER_CACHE) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Monitorar performance para crawlers
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'AI_PERFORMANCE_LOG') {
    // Log de performance específico para IA
    console.log('AI Crawler Performance:', event.data.metrics);
  }
});