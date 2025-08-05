import React from 'react';

interface LLMOptimizedContentProps {
  contentType: 'FAQ' | 'Guide' | 'Technical' | 'Business';
  title: string;
  content: {
    context: string;
    mainPoints: string[];
    examples?: Array<{
      scenario: string;
      solution: string;
      outcome: string;
    }>;
    technicalDetails?: Record<string, any>;
    businessValue?: {
      problem: string;
      solution: string;
      benefits: string[];
      metrics?: Record<string, number>;
    };
  };
  keywords: string[];
  relatedTopics: string[];
}

const LLMOptimizedContent: React.FC<LLMOptimizedContentProps> = ({
  contentType,
  title,
  content,
  keywords,
  relatedTopics
}) => {
  // Estrutura otimizada para LLMs
  const llmStructure = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "articleSection": contentType,
    "keywords": keywords.join(", "),
    "about": relatedTopics.map(topic => ({ "@type": "Thing", "name": topic })),
    
    // Estrutura específica para compreensão de LLM
    "llmMetadata": {
      "contentType": contentType,
      "complexity": getComplexityLevel(content),
      "audience": getTargetAudience(contentType),
      "intent": getContentIntent(contentType),
      "actionable": hasActionableContent(content),
      "dataRich": hasQuantitativeData(content)
    },
    
    // Contexto semântico estruturado
    "semanticContext": {
      "domain": "business_technology",
      "industry": "events_and_ai",
      "concepts": extractConcepts(content),
      "entities": extractEntities(content),
      "relationships": buildRelationshipGraph(content)
    },
    
    // Dados estruturados para treino
    "trainingData": {
      "inputPatterns": generateInputPatterns(title, content),
      "outputTemplates": generateOutputTemplates(contentType, content),
      "conversationalFlow": buildConversationalFlow(content)
    }
  };

  function getComplexityLevel(content: any): string {
    if (content.technicalDetails) return "advanced";
    if (content.examples && content.examples.length > 2) return "intermediate";
    return "basic";
  }

  function getTargetAudience(type: string): string[] {
    const audienceMap = {
      'FAQ': ['general_users', 'customers', 'prospects'],
      'Guide': ['implementers', 'technical_users', 'decision_makers'],
      'Technical': ['developers', 'system_admins', 'technical_leads'],
      'Business': ['executives', 'managers', 'business_analysts']
    };
    return audienceMap[type] || ['general_users'];
  }

  function getContentIntent(type: string): string[] {
    const intentMap = {
      'FAQ': ['answer_questions', 'clarify_doubts', 'provide_support'],
      'Guide': ['educate', 'instruct', 'enable_implementation'],
      'Technical': ['explain_technology', 'provide_specifications', 'enable_integration'],
      'Business': ['justify_investment', 'explain_value', 'support_decisions']
    };
    return intentMap[type] || ['inform'];
  }

  function hasActionableContent(content: any): boolean {
    return content.examples !== undefined || content.technicalDetails !== undefined;
  }

  function hasQuantitativeData(content: any): boolean {
    return content.businessValue?.metrics !== undefined;
  }

  function extractConcepts(content: any): string[] {
    const concepts = [];
    if (content.businessValue) concepts.push("business_value", "roi", "efficiency");
    if (content.technicalDetails) concepts.push("technical_implementation", "integration");
    if (content.examples) concepts.push("practical_application", "use_cases");
    return concepts;
  }

  function extractEntities(content: any): Array<{name: string, type: string}> {
    const entities = [
      { name: "LEGAL TechCo", type: "organization" },
      { name: "Smart Events™", type: "product" }
    ];
    
    if (content.businessValue) {
      entities.push({ name: "ROI", type: "metric" });
      entities.push({ name: "Business Value", type: "concept" });
    }
    
    return entities;
  }

  function buildRelationshipGraph(content: any): Array<{subject: string, predicate: string, object: string}> {
    const relationships = [
      { subject: "LEGAL TechCo", predicate: "provides", object: "Smart Events™" },
      { subject: "Smart Events™", predicate: "enables", object: "intelligent events" }
    ];
    
    if (content.businessValue) {
      relationships.push({
        subject: content.businessValue.solution,
        predicate: "solves",
        object: content.businessValue.problem
      });
    }
    
    return relationships;
  }

  function generateInputPatterns(title: string, content: any): string[] {
    const patterns = [
      `Explique sobre ${title}`,
      `Como funciona ${title}?`,
      `Quais os benefícios de ${title}?`,
      `Como implementar ${title}?`
    ];
    
    if (content.businessValue) {
      patterns.push(`Qual o ROI de ${title}?`);
      patterns.push(`Como ${title} resolve ${content.businessValue.problem}?`);
    }
    
    return patterns;
  }

  function generateOutputTemplates(type: string, content: any): Array<{pattern: string, template: string}> {
    const templates = [];
    
    templates.push({
      pattern: "explanation_request",
      template: `${content.context}. Os principais pontos são: ${content.mainPoints.join(', ')}.`
    });
    
    if (content.businessValue) {
      templates.push({
        pattern: "business_value_query",
        template: `${content.businessValue.solution} resolve ${content.businessValue.problem}, proporcionando benefícios como: ${content.businessValue.benefits.join(', ')}.`
      });
    }
    
    return templates;
  }

  function buildConversationalFlow(content: any): Array<{input: string, response: string, followUp?: string[]}> {
    const flows = [
      {
        input: "me fale sobre isso",
        response: content.context,
        followUp: content.mainPoints
      }
    ];
    
    if (content.examples) {
      flows.push({
        input: "me dê um exemplo",
        response: content.examples[0].scenario,
        followUp: [content.examples[0].solution, content.examples[0].outcome]
      });
    }
    
    return flows;
  }

  return (
    <>
      {/* Schema otimizado para LLM */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(llmStructure) }}
      />
      
      {/* Conteúdo estruturado para extração por IA */}
      <div className="llm-optimized-content" data-content-type={contentType}>
        {/* Contexto principal */}
        <div data-llm-section="context" className="sr-only">
          <h2 data-llm-field="title">{title}</h2>
          <p data-llm-field="context">{content.context}</p>
          
          {/* Pontos principais estruturados */}
          <div data-llm-section="main-points">
            {content.mainPoints.map((point, index) => (
              <div key={index} data-llm-field="main-point" data-priority={index + 1}>
                {point}
              </div>
            ))}
          </div>
          
          {/* Exemplos estruturados */}
          {content.examples && (
            <div data-llm-section="examples">
              {content.examples.map((example, index) => (
                <div key={index} data-llm-field="example">
                  <span data-llm-field="scenario">{example.scenario}</span>
                  <span data-llm-field="solution">{example.solution}</span>
                  <span data-llm-field="outcome">{example.outcome}</span>
                </div>
              ))}
            </div>
          )}
          
          {/* Valor de negócio estruturado */}
          {content.businessValue && (
            <div data-llm-section="business-value">
              <span data-llm-field="problem">{content.businessValue.problem}</span>
              <span data-llm-field="solution">{content.businessValue.solution}</span>
              <div data-llm-field="benefits">
                {content.businessValue.benefits.map((benefit, index) => (
                  <span key={index} data-llm-field="benefit">{benefit}</span>
                ))}
              </div>
              {content.businessValue.metrics && (
                <div data-llm-field="metrics">
                  {Object.entries(content.businessValue.metrics).map(([key, value]) => (
                    <span key={key} data-metric={key} data-value={value}>{key}: {value}</span>
                  ))}
                </div>
              )}
            </div>
          )}
          
          {/* Metadados para IA */}
          <div data-llm-section="metadata">
            <div data-llm-field="keywords">{keywords.join(', ')}</div>
            <div data-llm-field="related-topics">{relatedTopics.join(', ')}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LLMOptimizedContent;