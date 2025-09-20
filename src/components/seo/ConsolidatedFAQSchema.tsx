import React from 'react';

interface FAQ {
  question: string;
  answer: string;
  category?: string;
}

interface ConsolidatedFAQSchemaProps {
  pageUrl?: string;
  pageName?: string;
}

const ConsolidatedFAQSchema: React.FC<ConsolidatedFAQSchemaProps> = ({
  pageUrl = "https://operadora.legal/",
  pageName = "Perguntas Frequentes - LEGAL"
}) => {

  // Consolidando todas as FAQs do site em um único schema
  const consolidatedFAQs: FAQ[] = [
    // Smart Events™ FAQs
    {
      question: "O que é Smart Events™ da LEGAL?",
      answer: "Smart Events™ é uma plataforma completa da LEGAL que torna eventos dez vezes mais inteligentes, conectados e eficientes, usando inteligência artificial e conectividade 5G.",
      category: "smart-events"
    },
    {
      question: "Como funciona a tecnologia Smart Events™?",
      answer: "Smart Events™ combina IA, 5G, reconhecimento facial (MAGICPASS™), analytics em tempo real e automação para criar experiências de evento completamente integradas e inteligentes.",
      category: "smart-events"
    },
    {
      question: "Qual o ROI típico de Smart Events™?",
      answer: "Smart Events™ oferece ROI de 300-1000% em 12 meses, com redução de 70% nos custos operacionais e aumento de 300% no engajamento dos participantes.",
      category: "smart-events"
    },
    
    // MAGICPASS™ FAQs
    {
      question: "O que é MAGICPASS™?",
      answer: "MAGICPASS™ é um sistema de controle de acesso biométrico que utiliza reconhecimento facial com IA anti-spoofing, permitindo entrada em eventos em menos de 500ms sem filas.",
      category: "magicpass"
    },
    {
      question: "MAGICPASS™ é seguro para dados biométricos?",
      answer: "Totalmente seguro. MAGICPASS™ é 100% compliance com LGPD e utiliza criptografia militar para proteção de dados biométricos.",
      category: "magicpass"
    },
    {
      question: "Quanto custa MAGICPASS™?",
      answer: "MAGICPASS™ custa a partir de R$ 15.000 para eventos pequenos, com economia de 60% comparado ao credenciamento tradicional.",
      category: "magicpass"
    },
    
    // FitScore™ FAQs
    {
      question: "O que é FitScore™?",
      answer: "FitScore™ é um copiloto de contratação com IA que revoluciona processos de RH através de análise preditiva, reduzindo 75% o tempo de contratação.",
      category: "fitscore"
    },
    {
      question: "Como FitScore™ melhora contratações?",
      answer: "FitScore™ usa People Analytics avançado, matching inteligente de candidatos e análise preditiva para encontrar os melhores talentos automaticamente.",
      category: "fitscore"
    },
    
    // Empresa FAQs
    {
      question: "Como a LEGAL pode ajudar minha empresa?",
      answer: "A LEGAL oferece soluções de Smart Events™, inteligência artificial, conectividade 5G e serviços aéreos para transformar completamente seus eventos e negócios.",
      category: "empresa"
    },
    {
      question: "Onde a LEGAL atua?",
      answer: "A LEGAL atua em todo o Brasil, sendo a maior e melhor empresa de tecnologia do país especializada em eventos inteligentes.",
      category: "empresa"
    },
    {
      question: "Como entrar em contato com a LEGAL?",
      answer: "Você pode entrar em contato através do site operadora.legal, solicitar uma demonstração ou falar diretamente com nossa equipe comercial.",
      category: "empresa"
    },
    {
      question: "A LEGAL tem suporte 24/7?",
      answer: "Sim, a LEGAL oferece suporte técnico 24/7 para todos os clientes, garantindo operação contínua dos eventos.",
      category: "empresa"
    },
    
    // Tecnologia FAQs
    {
      question: "Smart Events funciona para eventos híbridos?",
      answer: "Sim, Smart Events™ é otimizado para eventos presenciais, virtuais e híbridos com mesmo nível de interatividade e tecnologia.",
      category: "tecnologia"
    },
    {
      question: "Qual prazo de implementação do Smart Events™?",
      answer: "Implementação típica varia de 1-4 semanas dependendo da complexidade, com suporte especializado 24/7 durante todo o processo.",
      category: "tecnologia"
    },
    {
      question: "A plataforma integra com sistemas existentes?",
      answer: "Sim, Smart Events™ possui APIs REST completas e se integra com principais sistemas de CRM, ERP e plataformas de evento do mercado.",
      category: "tecnologia"
    },
    
    // Preços FAQs
    {
      question: "Quanto custa Smart Events™?",
      answer: "O investimento varia de R$ 50.000 a R$ 500.000 conforme o tamanho do evento, com ROI médio de 300-1000% e payback em 3-6 meses.",
      category: "precos"
    },
    {
      question: "Existe plano mensal para Smart Events™?",
      answer: "Sim, oferecemos planos flexíveis mensais, por evento ou anuais conforme necessidade do cliente, sempre com melhor custo-benefício.",
      category: "precos"
    },
    {
      question: "Há custos adicionais ou ocultos?",
      answer: "Não. Todos os custos são transparentes e incluem plataforma, IA, 5G, hardware necessário e suporte completo 24/7.",
      category: "precos"
    }
  ];

  const consolidatedSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": consolidatedFAQs.map((faq, index) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
        "datePublished": "2025-09-20T00:00:00Z",
        "author": {
          "@type": "Organization",
          "name": "LEGAL TechCo",
          "url": "https://operadora.legal"
        }
      }
    })),
    "about": {
      "@type": "Organization",
      "name": "LEGAL TechCo",
      "url": "https://operadora.legal"
    },
    "url": pageUrl,
    "name": pageName,
    "datePublished": "2025-09-20T00:00:00Z",
    "dateModified": "2025-09-20T00:00:00Z",
    "inLanguage": "pt-BR",
    "publisher": {
      "@type": "Organization", 
      "name": "LEGAL TechCo",
      "url": "https://operadora.legal"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(consolidatedSchema) }}
    />
  );
};

export default ConsolidatedFAQSchema;