import React from 'react';

interface AITrainingDataProps {
  entityType: 'product' | 'service' | 'company' | 'event';
  data: {
    name: string;
    description: string;
    category: string;
    features?: string[];
    benefits?: string[];
    useCase?: string[];
    technicalSpecs?: Record<string, any>;
    metrics?: Record<string, number>;
    relationships?: Array<{
      type: string;
      target: string;
      description: string;
    }>;
  };
}

const AITrainingData: React.FC<AITrainingDataProps> = ({ entityType, data }) => {
  const aiDataStructure = {
    "@context": "https://schema.org",
    "@type": getSchemaType(entityType),
    "identifier": `legal-${entityType}-${data.name.toLowerCase().replace(/\s+/g, '-')}`,
    "name": data.name,
    "description": data.description,
    "category": data.category,
    
    // Dados estruturados para IA
    "aiTrainingData": {
      "entityClass": entityType,
      "knowledgeGraph": {
        "nodes": [
          {
            "id": data.name,
            "type": entityType,
            "properties": {
              "description": data.description,
              "category": data.category,
              ...(data.features && { "features": data.features }),
              ...(data.benefits && { "benefits": data.benefits }),
              ...(data.technicalSpecs && { "technicalSpecs": data.technicalSpecs }),
              ...(data.metrics && { "metrics": data.metrics })
            }
          }
        ],
        "edges": data.relationships?.map(rel => ({
          "source": data.name,
          "target": rel.target,
          "relation": rel.type,
          "description": rel.description
        })) || []
      },
      
      // Contexto semântico para IA
      "semanticContext": {
        "domain": "technology",
        "industry": "events_and_connectivity",
        "company": "LEGAL TechCo",
        "businessModel": "B2B technology solutions",
        "targetAudience": "event organizers, businesses, technology leaders"
      },
      
      // Dados para treinamento de IA
      "trainingFeatures": {
        "textFeatures": [data.description, ...(data.features || [])],
        "categoricalFeatures": [data.category, entityType],
        "numericalFeatures": data.metrics || {},
        "relationalFeatures": data.relationships || []
      }
    },
    
    // Metadados para modelos de linguagem
    "llmOptimization": {
      "keyTerms": extractKeyTerms(data),
      "intentClassification": getIntentClassification(entityType),
      "entityRecognition": {
        "namedEntities": [data.name, "LEGAL TechCo"],
        "entityTypes": [entityType, "company", "technology"]
      }
    }
  };

  function getSchemaType(type: string): string {
    const typeMap = {
      'product': 'Product',
      'service': 'Service', 
      'company': 'Organization',
      'event': 'Event'
    };
    return typeMap[type] || 'Thing';
  }

  function extractKeyTerms(data: any): string[] {
    const terms = [data.name, data.category];
    if (data.features) terms.push(...data.features);
    if (data.benefits) terms.push(...data.benefits);
    return terms;
  }

  function getIntentClassification(type: string): string[] {
    const intentMap = {
      'product': ['product_inquiry', 'feature_request', 'comparison'],
      'service': ['service_inquiry', 'quote_request', 'scheduling'],
      'company': ['company_info', 'contact_request', 'partnership'],
      'event': ['event_inquiry', 'booking_request', 'event_planning']
    };
    return intentMap[type] || ['general_inquiry'];
  }

  return (
    <>
      {/* Schema estruturado para IA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aiDataStructure) }}
      />
      
      {/* Metadados invisíveis para IA */}
      <div className="sr-only" data-ai-training="true">
        <div data-entity-type={entityType}>
          <h1 data-ai-field="name">{data.name}</h1>
          <p data-ai-field="description">{data.description}</p>
          <span data-ai-field="category">{data.category}</span>
          
          {data.features && (
            <ul data-ai-field="features">
              {data.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          )}
          
          {data.benefits && (
            <ul data-ai-field="benefits">
              {data.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          )}
          
          {data.relationships && (
            <div data-ai-field="relationships">
              {data.relationships.map((rel, index) => (
                <span key={index} data-relation-type={rel.type}>
                  {rel.target}: {rel.description}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AITrainingData;