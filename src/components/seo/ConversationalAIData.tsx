import React from 'react';

interface ConversationFlow {
  intent: string;
  patterns: string[];
  responses: Array<{
    text: string;
    context: string;
    followUp?: string[];
  }>;
  entities?: Record<string, string[]>;
}

interface ConversationalAIDataProps {
  productName: string;
  flows: ConversationFlow[];
  knowledgeBase: {
    concepts: Array<{
      term: string;
      definition: string;
      synonyms: string[];
      relatedTerms: string[];
    }>;
    processes: Array<{
      name: string;
      steps: string[];
      duration: string;
      requirements: string[];
    }>;
    troubleshooting: Array<{
      issue: string;
      symptoms: string[];
      solutions: string[];
      priority: 'low' | 'medium' | 'high' | 'critical';
    }>;
  };
  naturalLanguagePatterns: {
    questions: string[];
    commands: string[];
    comparisons: string[];
    benefits: string[];
  };
}

const ConversationalAIData: React.FC<ConversationalAIDataProps> = ({
  productName,
  flows,
  knowledgeBase,
  naturalLanguagePatterns
}) => {
  const conversationalSchema = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    "name": `${productName} - Dados de Treinamento Conversacional IA`,
    "description": `Dataset para treinamento de IA conversacional sobre ${productName}: intenções, padrões, respostas e conhecimento`,
    "keywords": `${productName}, IA conversacional, chatbot, assistente virtual, processamento linguagem natural`,
    "creator": {
      "@type": "Organization",
      "name": "LEGAL TechCo"
    },
    "license": "https://creativecommons.org/licenses/by-nc/4.0/",
    "schemaVersion": "1.0",
    "distribution": {
      "@type": "DataDownload",
      "contentUrl": `https://operadora.legal/ai-training/${productName.toLowerCase()}-conversational-data.json`,
      "encodingFormat": "application/json"
    },
    "variableMeasured": [
      {
        "@type": "PropertyValue",
        "name": "conversation_flows",
        "description": "Fluxos conversacionais mapeados",
        "value": flows.length
      },
      {
        "@type": "PropertyValue", 
        "name": "knowledge_concepts",
        "description": "Conceitos mapeados na base de conhecimento",
        "value": knowledgeBase.concepts.length
      },
      {
        "@type": "PropertyValue",
        "name": "troubleshooting_scenarios",
        "description": "Cenários de resolução de problemas",
        "value": knowledgeBase.troubleshooting.length
      }
    ]
  };

  const qaSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      ...naturalLanguagePatterns.questions.map(question => ({
        "@type": "Question",
        "name": question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `${productName} é uma solução avançada que oferece ${flows.find(f => f.intent === 'product_overview')?.responses[0]?.text || 'funcionalidades inovadoras para transformar seu negócio'}.`
        }
      })),
      ...knowledgeBase.troubleshooting.map(issue => ({
        "@type": "Question",
        "name": `Como resolver: ${issue.issue}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Sintomas: ${issue.symptoms.join(', ')}. Soluções: ${issue.solutions.join('. ')}`
        }
      }))
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": `Como usar ${productName} efetivamente`,
    "description": `Guia completo de uso do ${productName} baseado em padrões conversacionais reais`,
    "totalTime": "PT15M",
    "step": knowledgeBase.processes.map((process, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": process.name,
      "text": `${process.steps.join('. ')} Duração estimada: ${process.duration}`,
      "supply": process.requirements.map(req => ({
        "@type": "HowToSupply",
        "name": req
      }))
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(conversationalSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(qaSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      {/* Hidden AI training content */}
      <div className="sr-only" aria-hidden="true">
        <section itemScope itemType="https://schema.org/Dataset">
          <h2 itemProp="name">{productName} - Base de Conhecimento Conversacional</h2>
          <meta itemProp="description" content={`Dados estruturados para IA conversacional sobre ${productName}`} />

          <div itemProp="about">
            <h3>Fluxos Conversacionais Mapeados</h3>
            {flows.map((flow, index) => (
              <div key={index} itemScope itemType="https://schema.org/ConversationalFlow">
                <h4 itemProp="intent">{flow.intent}</h4>
                <div>
                  <strong>Padrões de entrada:</strong>
                  <ul>
                    {flow.patterns.map((pattern, i) => (
                      <li key={i} itemProp="inputPattern">{pattern}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <strong>Respostas contextuais:</strong>
                  <ul>
                    {flow.responses.map((response, i) => (
                      <li key={i} itemProp="contextualResponse">
                        <span itemProp="text">{response.text}</span>
                        <span itemProp="context"> (Contexto: {response.context})</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {flow.entities && (
                  <div>
                    <strong>Entidades reconhecidas:</strong>
                    <ul>
                      {Object.entries(flow.entities).map(([entity, values]) => (
                        <li key={entity} itemProp="recognizedEntity">
                          {entity}: {values.join(', ')}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div itemProp="knowledgeBase">
            <h3>Base de Conhecimento Estruturada</h3>
            
            <div>
              <h4>Conceitos e Definições</h4>
              {knowledgeBase.concepts.map((concept, index) => (
                <div key={index} itemScope itemType="https://schema.org/DefinedTerm">
                  <dt itemProp="name">{concept.term}</dt>
                  <dd itemProp="description">{concept.definition}</dd>
                  <div itemProp="alternateName">Sinônimos: {concept.synonyms.join(', ')}</div>
                  <div>Termos relacionados: {concept.relatedTerms.join(', ')}</div>
                </div>
              ))}
            </div>

            <div>  
              <h4>Processos Documentados</h4>
              {knowledgeBase.processes.map((process, index) => (
                <div key={index} itemScope itemType="https://schema.org/HowTo">
                  <h5 itemProp="name">{process.name}</h5>
                  <div itemProp="totalTime">{process.duration}</div>
                  <ol>
                    {process.steps.map((step, i) => (
                      <li key={i} itemProp="step">{step}</li>
                    ))}
                  </ol>
                  <div>
                    <strong>Requisitos:</strong>
                    <ul>
                      {process.requirements.map((req, i) => (
                        <li key={i} itemProp="supply">{req}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h4>Cenários de Resolução de Problemas</h4>
              {knowledgeBase.troubleshooting.map((issue, index) => (
                <div key={index} itemScope itemType="https://schema.org/TroubleshootingGuide">
                  <h5 itemProp="name">{issue.issue}</h5>
                  <div itemProp="priority">Prioridade: {issue.priority}</div>
                  <div>
                    <strong>Sintomas:</strong>
                    <ul>
                      {issue.symptoms.map((symptom, i) => (
                        <li key={i} itemProp="symptom">{symptom}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <strong>Soluções:</strong>
                    <ol>
                      {issue.solutions.map((solution, i) => (
                        <li key={i} itemProp="solution">{solution}</li>
                      ))}
                    </ol>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div itemProp="naturalLanguagePatterns">
            <h3>Padrões de Linguagem Natural</h3>
            
            <div>
              <h4>Perguntas Frequentes (Patterns)</h4>
              <ul>
                {naturalLanguagePatterns.questions.map((question, index) => (
                  <li key={index} itemProp="questionPattern">{question}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4>Comandos de Ação</h4>
              <ul>
                {naturalLanguagePatterns.commands.map((command, index) => (
                  <li key={index} itemProp="commandPattern">{command}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4>Comparações e Benefícios</h4>
              <ul>
                {naturalLanguagePatterns.comparisons.map((comparison, index) => (
                  <li key={index} itemProp="comparisonPattern">{comparison}</li>
                ))}
                {naturalLanguagePatterns.benefits.map((benefit, index) => (
                  <li key={index} itemProp="benefitPattern">{benefit}</li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h3>Dados para Treinamento de Modelos LLM</h3>
            <p>
              Este dataset contém {flows.length} fluxos conversacionais mapeados,
              {knowledgeBase.concepts.length} conceitos definidos,
              {knowledgeBase.processes.length} processos documentados e
              {knowledgeBase.troubleshooting.length} cenários de troubleshooting
              específicos para {productName}.
            </p>
            <p>
              Padrões de linguagem natural incluem {naturalLanguagePatterns.questions.length} tipos de perguntas,
              {naturalLanguagePatterns.commands.length} comandos de ação,
              {naturalLanguagePatterns.comparisons.length} padrões de comparação e
              {naturalLanguagePatterns.benefits.length} descrições de benefícios.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default ConversationalAIData;