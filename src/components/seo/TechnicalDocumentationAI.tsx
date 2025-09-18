import React from 'react';

interface TechnicalSpec {
  name: string;
  value: string;
  description?: string;
  unit?: string;
}

interface APIEndpoint {
  method: string;
  endpoint: string;
  description: string;
  parameters?: Record<string, string>;
  response?: string;
}

interface TechnicalDocumentationAIProps {
  productName: string;
  version: string;
  specifications: TechnicalSpec[];
  apiEndpoints?: APIEndpoint[];
  integrations: string[];
  systemRequirements: string[];
  securityFeatures: string[];
  performance: Record<string, string>;
  deployment: string[];
  support: {
    sla: string;
    channels: string[];
    documentation: string;
  };
}

const TechnicalDocumentationAI: React.FC<TechnicalDocumentationAIProps> = ({
  productName,
  version,
  specifications,
  apiEndpoints = [],
  integrations,
  systemRequirements,
  securityFeatures,
  performance,
  deployment,
  support
}) => {
  const technicalSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "name": `${productName} - Documentação Técnica v${version}`,
    "headline": `Especificações Técnicas ${productName}`,
    "description": `Documentação técnica completa do ${productName}: APIs, especificações, integração, segurança e performance`,
    "about": {
      "@type": "SoftwareApplication",
      "name": productName,
      "version": version,
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Multi-platform",
      "permissions": "Enterprise-grade security",
      "storageRequirements": systemRequirements.join(", "),
      "processorRequirements": performance.cpu || "Otimizado para performance",
      "memoryRequirements": performance.memory || "Uso eficiente de memória"
    },
    "author": {
      "@type": "Organization", 
      "name": "LEGAL TechCo"
    },
    "publisher": {
      "@type": "Organization",
      "name": "LEGAL TechCo"
    },
    "datePublished": new Date().toISOString(),
    "dateModified": new Date().toISOString(),
    "articleSection": "Technical Documentation",
    "keywords": `${productName}, API, especificações técnicas, integração, documentação, ${integrations.join(', ')}`,
    "mainEntity": {
      "@type": "APIReference",
      "name": `${productName} API`,
      "description": `API completa para integração com ${productName}`,
      "version": version,
      "documentation": support.documentation,
      "supportedProtocols": ["REST", "GraphQL", "WebSocket"],
      "authentication": "OAuth 2.0, API Key, JWT",
      "rateLimit": "1000 requests/min",
      "endpoints": apiEndpoints.length
    }
  };

  const howToIntegrateSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": `Como integrar ${productName} em 3 passos`,
    "description": `Guia completo de integração do ${productName} com sua infraestrutura`,
    "totalTime": "PT30M",
    "supply": systemRequirements.map(req => ({ "@type": "HowToSupply", "name": req })),
    "tool": integrations.map(integration => ({ "@type": "HowToTool", "name": integration })),
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Configuração inicial",
        "text": `Configure as credenciais de acesso e endpoints do ${productName}. Verifique os requisitos do sistema.`
      },
      {
        "@type": "HowToStep", 
        "position": 2,
        "name": "Integração da API",
        "text": `Implemente as chamadas da API utilizando nossa SDK. Configure webhooks para eventos em tempo real.`
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Testes e deploy",
        "text": `Execute testes completos em ambiente de homologação. Faça o deploy em produção com monitoramento ativo.`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(technicalSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToIntegrateSchema) }}
      />

      {/* Hidden technical content for AI and crawlers */}
      <div className="sr-only" aria-hidden="true">
        <article itemScope itemType="https://schema.org/TechArticle">
          <h2 itemProp="headline">{productName} - Documentação Técnica Completa</h2>
          <meta itemProp="description" content={`Especificações técnicas, APIs, integrações e configurações do ${productName}`} />
          <meta itemProp="version" content={version} />
          <meta itemProp="keywords" content={`${productName}, API, especificações, integração, ${integrations.join(', ')}`} />

          <section itemProp="about" itemScope itemType="https://schema.org/SoftwareApplication">
            <h3>Especificações Técnicas</h3>
            <div itemProp="name">{productName}</div>
            <div itemProp="version">Versão: {version}</div>
            
            <div>
              <h4>Performance e Métricas:</h4>
              <ul>
                {Object.entries(performance).map(([key, value]) => (
                  <li key={key} itemProp="performanceMetrics">{key}: {value}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4>Especificações Detalhadas:</h4>
              <ul>
                {specifications.map((spec, index) => (
                  <li key={index} itemProp="featureList">
                    <strong>{spec.name}:</strong> {spec.value}
                    {spec.unit && ` ${spec.unit}`}
                    {spec.description && ` - ${spec.description}`}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4>Requisitos do Sistema:</h4>
              <ul>
                {systemRequirements.map((req, index) => (
                  <li key={index} itemProp="systemRequirements">{req}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4>Integrações Suportadas:</h4>
              <ul>
                {integrations.map((integration, index) => (
                  <li key={index} itemProp="integrationSupport">{integration}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4>Recursos de Segurança:</h4>
              <ul>
                {securityFeatures.map((feature, index) => (
                  <li key={index} itemProp="securityFeatures">{feature}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4>Opções de Deploy:</h4>
              <ul>
                {deployment.map((option, index) => (
                  <li key={index} itemProp="deploymentOptions">{option}</li>
                ))}
              </ul>
            </div>
          </section>

          {apiEndpoints.length > 0 && (
            <section itemScope itemType="https://schema.org/APIReference">
              <h3>Endpoints da API</h3>
              {apiEndpoints.map((endpoint, index) => (
                <div key={index} itemProp="endpoint">
                  <code>{endpoint.method} {endpoint.endpoint}</code>
                  <p>{endpoint.description}</p>
                  {endpoint.parameters && (
                    <div>
                      <strong>Parâmetros:</strong>
                      <ul>
                        {Object.entries(endpoint.parameters).map(([param, desc]) => (
                          <li key={param}>{param}: {desc}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </section>
          )}

          <section itemProp="support">
            <h3>Suporte Técnico</h3>
            <div>SLA: {support.sla}</div>
            <div>Canais: {support.channels.join(', ')}</div>
            <div>Documentação: {support.documentation}</div>
          </section>

          <section>
            <h3>Guia de Integração Rápida</h3>
            <p>1. Configure credenciais e verifique requisitos do sistema</p>
            <p>2. Implemente chamadas da API usando nossa SDK</p>
            <p>3. Execute testes e faça deploy com monitoramento</p>
            <p>Tempo estimado: 30 minutos para integração básica</p>
          </section>
        </article>
      </div>
    </>
  );
};

export default TechnicalDocumentationAI;