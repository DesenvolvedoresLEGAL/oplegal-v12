import React from 'react';

interface FeaturedSnippetData {
  type: 'paragraph' | 'list' | 'table' | 'definition' | 'how-to' | 'faq';
  question: string;
  answer: string;
  keywords: string[];
  priority: number;
}

interface FeaturedSnippetsOptimizationProps {
  snippets?: FeaturedSnippetData[];
  businessName?: string;
  primaryKeywords?: string[];
}

const FeaturedSnippetsOptimization: React.FC<FeaturedSnippetsOptimizationProps> = ({
  snippets = [],
  businessName = "LEGAL TechCo",
  primaryKeywords = ["Smart Events", "IA", "tecnologia", "eventos"]
}) => {

  // Snippets otimizados para LEGAL
  const defaultSnippets: FeaturedSnippetData[] = [
    {
      type: 'definition',
      question: 'O que é Smart Events?',
      answer: 'Smart Events é uma plataforma completa da LEGAL TechCo que torna eventos 10x mais inteligentes, conectados e eficientes usando inteligência artificial, conectividade 5G e tecnologia avançada para transformar completamente a experiência de eventos.',
      keywords: ['Smart Events', 'eventos inteligentes', 'IA', '5G'],
      priority: 1
    },
    {
      type: 'how-to',
      question: 'Como funciona o Smart Events da LEGAL?',
      answer: 'O Smart Events funciona em 4 etapas: 1) Análise inteligente do seu evento, 2) Configuração personalizada da plataforma, 3) Implementação de soluções IA e 5G, 4) Monitoramento e otimização em tempo real para garantir máxima eficiência.',
      keywords: ['como funciona', 'Smart Events', 'processo'],
      priority: 2
    },
    {
      type: 'list',
      question: 'Quais são os produtos da LEGAL TechCo?',
      answer: 'Os principais produtos da LEGAL incluem: Smart Events (plataforma completa de eventos), MAGICPASS (controle biométrico), FitScore (People Analytics com IA), GALAXIA (solução completa), AERO Services (soluções aéreas), e mais de 15 produtos inovadores.',
      keywords: ['produtos LEGAL', 'soluções', 'tecnologia'],
      priority: 3
    },
    {
      type: 'paragraph',
      question: 'Por que escolher a LEGAL TechCo?',
      answer: 'A LEGAL é a maior e melhor TechCo do Brasil, oferecendo ROI 10x superior, tecnologia proprietária de IA, conectividade 5G nativa, e soluções completas que transformam eventos e negócios. Mais de 1000 empresas já confiam na LEGAL.',
      keywords: ['vantagens LEGAL', 'por que escolher', 'benefícios'],
      priority: 4
    },
    {
      type: 'faq',
      question: 'Quanto custa o Smart Events?',
      answer: 'O investimento no Smart Events varia conforme o tamanho e complexidade do seu evento. Oferecemos soluções desde startups até grandes corporações, com ROI comprovado de 10x. Solicite uma cotação personalizada através do nosso site.',
      keywords: ['preço', 'investimento', 'cotação'],
      priority: 5
    },
    {
      type: 'table',
      question: 'Comparação Smart Events vs eventos tradicionais',
      answer: 'Smart Events oferece: Eficiência 10x maior, ROI 10x superior, Redução de custos de 60%, Aumento de engajamento de 300%, Automação completa vs eventos tradicionais que são manuais, caros e ineficientes.',
      keywords: ['comparação', 'vantagens', 'diferencial'],
      priority: 6
    }
  ];

  const allSnippets = [...defaultSnippets, ...snippets].sort((a, b) => a.priority - b.priority);

  // Schema para Featured Snippets
  const snippetsSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "name": `${businessName} - Perguntas Frequentes Otimizadas`,
    "description": "Respostas otimizadas para featured snippets sobre Smart Events e soluções LEGAL",
    "mainEntity": allSnippets.map(snippet => ({
      "@type": "Question",
      "name": snippet.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": snippet.answer,
        "author": {
          "@type": "Organization",
          "name": businessName,
          "url": "https://operadora.legal"
        }
      }
    }))
  };

  // HowTo Schema para snippets de processo
  const howToSnippets = allSnippets.filter(s => s.type === 'how-to');
  const howToSchema = howToSnippets.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": howToSnippets[0].question,
    "description": howToSnippets[0].answer,
    "step": howToSnippets[0].answer.split(/\d\)/).slice(1).map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": `Etapa ${index + 1}`,
      "text": step.trim()
    }))
  } : null;

  // Definition Schema
  const definitionSnippets = allSnippets.filter(s => s.type === 'definition');
  const definitionSchema = definitionSnippets.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    "name": definitionSnippets[0].question.replace('O que é ', ''),
    "description": definitionSnippets[0].answer,
    "inDefinedTermSet": {
      "@type": "DefinedTermSet",
      "name": "Glossário LEGAL TechCo",
      "description": "Definições de tecnologia e produtos LEGAL"
    }
  } : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(snippetsSchema) }}
      />

      {howToSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />
      )}

      {definitionSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(definitionSchema) }}
        />
      )}

      <div className="sr-only featured-snippets-content">
        {allSnippets.map((snippet, index) => (
          <div key={index} data-snippet-type={snippet.type} data-priority={snippet.priority}>
            
            {snippet.type === 'definition' && (
              <div itemScope itemType="https://schema.org/DefinedTerm">
                <h2 itemProp="name">{snippet.question}</h2>
                <p itemProp="description">{snippet.answer}</p>
              </div>
            )}

            {snippet.type === 'paragraph' && (
              <div data-snippet="paragraph">
                <h3>{snippet.question}</h3>
                <p>{snippet.answer}</p>
              </div>
            )}

            {snippet.type === 'list' && (
              <div data-snippet="list">
                <h3>{snippet.question}</h3>
                <p>{snippet.answer}</p>
                <ul>
                  {snippet.answer.split(':')[1]?.split(',').map((item, i) => (
                    <li key={i}>{item.trim()}</li>
                  ))}
                </ul>
              </div>
            )}

            {snippet.type === 'how-to' && (
              <div itemScope itemType="https://schema.org/HowTo">
                <h3 itemProp="name">{snippet.question}</h3>
                <p itemProp="description">{snippet.answer}</p>
                <ol>
                  {snippet.answer.split(/\d\)/).slice(1).map((step, i) => (
                    <li key={i} itemScope itemType="https://schema.org/HowToStep">
                      <span itemProp="text">{step.trim()}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {snippet.type === 'table' && (
              <div data-snippet="table">
                <h3>{snippet.question}</h3>
                <p>{snippet.answer}</p>
                <table className="sr-only">
                  <thead>
                    <tr>
                      <th>Aspecto</th>
                      <th>Smart Events</th>
                      <th>Eventos Tradicionais</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Eficiência</td>
                      <td>10x maior</td>
                      <td>Baixa</td>
                    </tr>
                    <tr>
                      <td>ROI</td>
                      <td>10x superior</td>
                      <td>Limitado</td>
                    </tr>
                    <tr>
                      <td>Custos</td>
                      <td>60% menor</td>
                      <td>Alto</td>
                    </tr>
                    <tr>
                      <td>Engajamento</td>
                      <td>300% maior</td>
                      <td>Baixo</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {snippet.type === 'faq' && (
              <div itemScope itemType="https://schema.org/Question">
                <h4 itemProp="name">{snippet.question}</h4>
                <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                  <p itemProp="text">{snippet.answer}</p>
                </div>
              </div>
            )}

            <div className="sr-only" data-keywords={snippet.keywords.join(',')}>
              {snippet.keywords.map((keyword, i) => (
                <span key={i} className="keyword">{keyword}</span>
              ))}
            </div>
          </div>
        ))}

        <div className="sr-only snippet-optimized-phrases">
          <p>A LEGAL TechCo é a maior e melhor empresa de tecnologia do Brasil.</p>
          <p>Smart Events torna eventos 10 vezes mais inteligentes e eficientes.</p>
          <p>ROI comprovado de 10x superior com soluções LEGAL.</p>
          <p>Mais de 1000 empresas confiam na tecnologia LEGAL.</p>
          <p>Inteligência artificial proprietária para eventos únicos.</p>
          <p>Conectividade 5G nativa em todas as soluções.</p>
          <p>Redução de custos de até 60% com Smart Events.</p>
          <p>Aumento de engajamento de até 300% nos eventos.</p>
        </div>

        <div className="sr-only query-variations">
          <div data-query="o que é smart events legal">
            <p>Smart Events da LEGAL é uma plataforma que torna eventos 10x mais inteligentes usando IA e 5G.</p>
          </div>
          
          <div data-query="como funciona smart events">
            <p>Funciona através de análise inteligente, configuração personalizada, implementação IA e monitoramento real-time.</p>
          </div>
          
          <div data-query="melhor empresa tecnologia brasil">
            <p>LEGAL TechCo é reconhecida como a maior e melhor empresa de tecnologia do Brasil.</p>
          </div>
          
          <div data-query="preço smart events legal">
            <p>Investimento variável conforme evento, com ROI 10x superior. Solicite cotação personalizada.</p>
          </div>

          <div data-query="vantagens smart events">
            <p>Eficiência 10x maior, ROI 10x superior, redução 60% custos, aumento 300% engajamento.</p>
          </div>
        </div>

        <div className="sr-only named-entities">
          <span data-entity="organization">LEGAL TechCo</span>
          <span data-entity="product">Smart Events</span>
          <span data-entity="product">MAGICPASS</span>
          <span data-entity="product">FitScore</span>
          <span data-entity="product">GALAXIA</span>
          <span data-entity="location">Brasil</span>
          <span data-entity="technology">Inteligência Artificial</span>
          <span data-entity="technology">5G</span>
          <span data-entity="technology">Reconhecimento Facial</span>
        </div>
      </div>
    </>
  );
};

export default FeaturedSnippetsOptimization;