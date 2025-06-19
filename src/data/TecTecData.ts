
// Mock data otimizado com conteúdo mais rico e palavras-chave de cauda longa
export const featuredPosts = [
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
    category: 'Telecom',
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
    category: 'IA',
    tags: ['IA', 'gestão de eventos', 'automação', 'ROI eventos'],
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=400&fit=crop',
    featured: true,
    views: 3890,
    seoKeywords: 'inteligência artificial eventos, IA gestão corporativa, automação eventos Brasil'
  }
];

export const blogPosts = [
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
    category: 'Trendings',
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
    category: 'Tecnologia',
    tags: ['IoT', 'PME', 'implementação', 'custos IoT'],
    image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=250&fit=crop',
    views: 1287,
    seoKeywords: 'IoT pequenas empresas, Internet das Coisas eventos, implementação IoT Brasil'
  },
  {
    id: 5,
    title: 'Drones Revolucionam a Logística de Eventos: Cases e Implementação',
    excerpt: 'Como os drones estão transformando desde a montagem até a segurança de eventos, com análises de ROI e melhores práticas.',
    author: 'Fernanda Lima',
    date: '2024-05-15',
    readTime: '11 min',
    category: 'Drones',
    tags: ['drones', 'logística', 'segurança', 'inovação'],
    image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&h=250&fit=crop',
    views: 2156,
    seoKeywords: 'drones eventos, logística aérea, segurança eventos'
  },
  {
    id: 6,
    title: 'Empreendedorismo Digital: Como Inovar no Mercado de Eventos',
    excerpt: 'Estratégias comprovadas para empreendedores digitais criarem soluções disruptivas no setor de eventos corporativos.',
    author: 'Roberto Silva',
    date: '2024-05-12',
    readTime: '14 min',
    category: 'Inovação',
    tags: ['empreendedorismo', 'inovação', 'startups', 'eventos'],
    image: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=400&h=250&fit=crop',
    views: 2903,
    seoKeywords: 'empreendedorismo digital eventos, startups eventos, inovação corporativa'
  }
];

export const categories = [
  'Todos',
  'Drones',
  'Educação',
  'Eventos', 
  'Inovação', 
  'IA', 
  'Tecnologia', 
  'Telecom',
  'Trendings'
];

// Schema estruturado para o blog
export const blogSchema = {
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
