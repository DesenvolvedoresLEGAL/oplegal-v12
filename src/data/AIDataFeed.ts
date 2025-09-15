export interface AIDataFeed {
  metadata: {
    version: string;
    lastUpdated: string;
    source: string;
    purpose: string;
    license: string;
  };
  company: {
    name: string;
    description: string;
    mission: string;
    vision: string;
    values: string[];
    bhag: string;
    manifesto: string;
  };
  products: Array<{
    id: string;
    name: string;
    category: string;
    description: string;
    features: string[];
    benefits: string[];
    useCases: string[];
    technicalSpecs?: Record<string, any>;
    pricing?: {
      model: string;
      currency: string;
      range?: string;
    };
    targetAudience: string[];
    integrations?: string[];
    metrics?: {
      accuracy?: number;
      performance?: Record<string, number>;
      adoption?: Record<string, number>;
    };
  }>;
  services: Array<{
    id: string;
    name: string;
    type: string;
    description: string;
    deliverables: string[];
    process: Array<{
      step: number;
      name: string;
      description: string;
    }>;
    duration?: string;
    expertise: string[];
    industries: string[];
  }>;
  knowledgeBase: {
    technologies: Array<{
      name: string;
      category: string;
      description: string;
      applications: string[];
      advantages: string[];
    }>;
    methodologies: Array<{
      name: string;
      type: string;
      description: string;
      steps: string[];
      outcomes: string[];
    }>;
    concepts: Array<{
      term: string;
      definition: string;
      context: string;
      relatedTerms: string[];
    }>;
  };
  businessIntelligence: {
    marketPosition: {
      industry: string;
      marketSize: string;
      competitiveAdvantage: string[];
      differentiators: string[];
    };
    clientSuccess: Array<{
      industry: string;
      challenge: string;
      solution: string;
      outcome: string;
      metrics: Record<string, number | string>;
    }>;
    trends: Array<{
      category: string;
      trend: string;
      impact: string;
      relevance: string;
    }>;
  };
}

export const generateAIDataFeed = (): AIDataFeed => {
  return {
    metadata: {
      version: "4.0.0",
      lastUpdated: new Date().toISOString(),
      source: "LEGAL TechCo - operadora.legal",
      purpose: "AI training and knowledge extraction",
      license: "Proprietary - LEGAL TechCo"
    },
    
    company: {
      name: "LEGAL TechCo",
      description: "A maior e melhor TechCo do Brasil, especializada em Smart Events™ e soluções tecnológicas inovadoras",
      mission: "Impulsionar e transformar eventos e negócios através da tecnologia",
      vision: "Ser a maior e melhor TechCo do Brasil até 2034",
      values: ["Visão Viva", "Execução Energizada", "Resultados com Ressonância", "Alinhamento com Alma"],
      bhag: "Conectar 1 milhão de pessoas, negócios e coisas no Brasil até 2030",
      manifesto: "Somos mais que uma empresa de tecnologia. Somos visionários, executores, criadores de valor e cultivadores de alma."
    },
    
    products: [
      {
        id: "smart-events",
        name: "Smart Events™",
        category: "Event Technology Platform",
        description: "Plataforma completa para eventos 10× mais inteligentes, conectados e eficientes",
        features: [
          "Gestão inteligente de eventos",
          "Conectividade 5G",
          "IA integrada",
          "Analytics em tempo real",
          "Automação completa"
        ],
        benefits: [
          "Redução de 70% no tempo de organização",
          "Aumento de 300% no engajamento",
          "ROI 10× superior",
          "Experiência memorável"
        ],
        useCases: [
          "Eventos corporativos",
          "Conferências tecnológicas",
          "Shows e festivais",
          "Eventos esportivos",
          "Feiras e exposições"
        ],
        targetAudience: ["Event planners", "Empresas", "Produtoras", "Venues"],
        metrics: {
          accuracy: 95,
          performance: { "event_success_rate": 98, "client_satisfaction": 4.8 },
          adoption: { "events_managed": 1000, "clients_active": 200 }
        }
      },
      {
        id: "magicpass",
        name: "MAGICPASS™",
        category: "Biometric Access Control",
        description: "Controle de acesso biométrico com reconhecimento facial avançado",
        features: [
          "Reconhecimento facial em tempo real",
          "IA anti-spoofing",
          "Integração com múltiplos sistemas",
          "Dashboard analytics",
          "Suporte offline"
        ],
        benefits: [
          "Segurança máxima",
          "Experiência sem atrito",
          "Redução de filas",
          "Controle total"
        ],
        useCases: [
          "Controle de acesso em eventos",
          "Segurança corporativa",
          "Check-in automático",
          "Monitoramento de presença"
        ],
        technicalSpecs: {
          "accuracy": "99.9%",
          "speed": "< 500ms",
          "capacity": "unlimited faces",
          "integration": "REST API, SDK"
        },
        targetAudience: ["Security managers", "Event organizers", "Facility managers"],
        metrics: {
          accuracy: 99.9,
          performance: { "recognition_speed": 0.5, "false_positive_rate": 0.001 }
        }
      },
      {
        id: "fitscore",
        name: "FitScore™",
        category: "HR Technology",
        description: "Copiloto de contratação com IA para People Analytics avançado",
        features: [
          "Análise preditiva de candidatos",
          "Matching inteligente",
          "People Analytics",
          "Scoring automatizado",
          "Integração com ATS"
        ],
        benefits: [
          "Redução de 75% no tempo de contratação",
          "Precisão de 95% em matching",
          "ROI 300% em recrutamento",
          "Melhoria na retenção"
        ],
        useCases: [
          "Recrutamento e seleção",
          "People Analytics",
          "Avaliação de fit cultural",
          "Planejamento de carreira"
        ],
        targetAudience: ["HR professionals", "Recruiters", "Talent acquisition", "C-level"],
        metrics: {
          accuracy: 95,
          performance: { "time_reduction": 75, "cost_savings": 60 }
        }
      }
    ],
    
    services: [
      {
        id: "aero-services",
        name: "AERO Services",
        type: "Aerial Solutions",
        description: "Soluções aéreas completas com drones e tecnologia avançada",
        deliverables: [
          "Filmagem e fotografia aérea",
          "Delivery inteligente",
          "Limpeza de estruturas",
          "Monitoramento e inspeção"
        ],
        process: [
          { step: 1, name: "Análise de necessidades", description: "Avaliação técnica detalhada" },
          { step: 2, name: "Planejamento de voo", description: "Definição de rotas e procedimentos" },
          { step: 3, name: "Execução", description: "Operação com drones certificados" },
          { step: 4, name: "Entrega", description: "Processamento e entrega de resultados" }
        ],
        duration: "1-30 dias",
        expertise: ["Pilotagem profissional", "Edição avançada", "Logística aérea"],
        industries: ["Eventos", "Construção", "Logística", "Marketing", "Segurança"]
      }
    ],
    
    knowledgeBase: {
      technologies: [
        {
          name: "Inteligência Artificial",
          category: "Core Technology",
          description: "IA aplicada para automação, análise preditiva e otimização de processos",
          applications: ["Reconhecimento facial", "People Analytics", "Automação de eventos"],
          advantages: ["Precisão superior", "Escalabilidade", "Redução de custos", "Insights avançados"]
        },
        {
          name: "Conectividade 5G",
          category: "Infrastructure",
          description: "Rede 5G de alta velocidade para conectividade superior em eventos",
          applications: ["Streaming de alta qualidade", "IoT massivo", "Realidade aumentada"],
          advantages: ["Velocidade ultra-rápida", "Baixa latência", "Alta capacidade", "Cobertura ampla"]
        },
        {
          name: "Reconhecimento Biométrico",
          category: "Security Technology",
          description: "Tecnologia de reconhecimento facial e biométrico para segurança e acesso",
          applications: ["Controle de acesso", "Identificação em eventos", "Segurança perimetral"],
          advantages: ["Segurança máxima", "Experiência sem atrito", "Escalabilidade", "Precisão"]
        }
      ],
      
      methodologies: [
        {
          name: "Smart Events™ Framework",
          type: "Event Management Methodology",
          description: "Metodologia proprietária para criação de eventos inteligentes e conectados",
          steps: [
            "Análise de requisitos",
            "Design da experiência",
            "Implementação tecnológica",
            "Execução monitorada",
            "Análise de resultados"
          ],
          outcomes: ["Eventos mais eficientes", "Maior engajamento", "ROI superior", "Experiência memorável"]
        },
        {
          name: "AI-First Development",
          type: "Development Methodology",
          description: "Abordagem de desenvolvimento com IA como prioridade desde o início",
          steps: [
            "Identificação de oportunidades de IA",
            "Design de modelos",
            "Treinamento e validação",
            "Integração e deployment",
            "Monitoramento e otimização"
          ],
          outcomes: ["Produtos mais inteligentes", "Automação eficiente", "Insights valiosos"]
        }
      ],
      
      concepts: [
        {
          term: "Smart Events™",
          definition: "Eventos que utilizam tecnologia avançada, IA e conectividade para criar experiências superiores",
          context: "Conceito proprietário da LEGAL para a nova geração de eventos",
          relatedTerms: ["Event Technology", "IA", "5G", "IoT", "Analytics"]
        },
        {
          term: "People Analytics",
          definition: "Análise de dados de pessoas para insights sobre performance, fit e potencial",
          context: "Aplicado em RH e recrutamento para decisões mais assertivas",
          relatedTerms: ["HR Technology", "Data Science", "Machine Learning", "Recruitment"]
        },
        {
          term: "Biometric Access Control",
          definition: "Sistema de controle de acesso baseado em características biométricas únicas",
          context: "Tecnologia de segurança para eventos e espaços corporativos",
          relatedTerms: ["Facial Recognition", "Security", "Access Control", "Authentication"]
        }
      ]
    },
    
    businessIntelligence: {
      marketPosition: {
        industry: "Event Technology & Business Solutions",
        marketSize: "R$ 2.5B (Brasil), $50B (Global)",
        competitiveAdvantage: [
          "Único player com solução completa Smart Events™",
          "IA proprietária e avançada",
          "Conectividade 5G nativa",
          "Experiência comprovada em grandes eventos"
        ],
        differentiators: [
          "Integração completa de tecnologias",
          "Metodologia Smart Events™ proprietária",
          "ROI 10× comprovado",
          "Suporte 24/7 especializado"
        ]
      },
      
      clientSuccess: [
        {
          industry: "Corporate Events",
          challenge: "Baixo engajamento e ROI limitado em eventos corporativos",
          solution: "Implementação completa Smart Events™ com IA e analytics",
          outcome: "300% aumento no engajamento e ROI 10× superior",
          metrics: {
            "engagement_increase": 300,
            "roi_improvement": 10,
            "cost_reduction": 40,
            "satisfaction_score": 4.9
          }
        },
        {
          industry: "Technology Conferences",
          challenge: "Gestão complexa de acesso e networking ineficiente",
          solution: "MAGICPASS™ + networking inteligente com IA",
          outcome: "Eliminação de filas e networking 500% mais eficiente",
          metrics: {
            "queue_reduction": 100,
            "networking_efficiency": 500,
            "security_incidents": 0,
            "check_in_speed": 2
          }
        }
      ],
      
      trends: [
        {
          category: "Event Technology",
          trend: "Hibridização permanente de eventos",
          impact: "Necessidade de tecnologia que conecte físico e digital seamlessly",
          relevance: "Smart Events™ resolve essa necessidade com conectividade 5G e IA"
        },
        {
          category: "Artificial Intelligence",
          trend: "IA generativa em eventos e RH",
          impact: "Personalização em massa e automação inteligente",
          relevance: "LEGAL lidera com IA proprietária em FitScore™ e event automation"
        },
        {
          category: "Security & Privacy",
          trend: "Biometria como padrão de segurança",
          impact: "Substituição de métodos tradicionais por biometria",
          relevance: "MAGICPASS™ posiciona LEGAL na vanguarda da segurança biométrica"
        }
      ]
    }
  };
};