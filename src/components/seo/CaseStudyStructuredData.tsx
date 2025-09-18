import React from 'react';

interface CaseStudy {
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  metrics: Record<string, number | string>;
  duration: string;
  testimonial?: {
    text: string;
    author: string;
    position: string;
  };
}

interface CaseStudyStructuredDataProps {
  caseStudies: CaseStudy[];
  productName: string;
  companyName?: string;
}

const CaseStudyStructuredData: React.FC<CaseStudyStructuredDataProps> = ({
  caseStudies,
  productName,
  companyName = "LEGAL TechCo"
}) => {
  const caseStudySchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": `${productName} - Casos de Sucesso`,
    "description": `Casos reais de implementação ${productName} com resultados comprovados`,
    "itemListElement": caseStudies.map((caseStudy, index) => ({
      "@type": "Article",
      "position": index + 1,
      "headline": caseStudy.title,
      "about": {
        "@type": "Product",
        "name": productName,
        "manufacturer": {
          "@type": "Organization",
          "name": companyName
        }
      },
      "author": {
        "@type": "Organization",
        "name": companyName
      },
      "publisher": {
        "@type": "Organization",
        "name": companyName
      },
      "articleBody": `${caseStudy.challenge} ${caseStudy.solution} Resultados: ${caseStudy.results.join(', ')}`,
      "keywords": `${productName}, ${caseStudy.industry}, caso de sucesso, ROI, transformação digital`,
      "mainEntity": {
        "@type": "CaseStudy",
        "name": caseStudy.title,
        "client": caseStudy.client,
        "industry": caseStudy.industry,
        "challenge": caseStudy.challenge,
        "solution": caseStudy.solution,
        "outcome": caseStudy.results,
        "duration": caseStudy.duration,
        "metrics": caseStudy.metrics,
        "review": caseStudy.testimonial ? {
          "@type": "Review",
          "reviewBody": caseStudy.testimonial.text,
          "author": {
            "@type": "Person",
            "name": caseStudy.testimonial.author,
            "jobTitle": caseStudy.testimonial.position
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": 5,
            "bestRating": 5
          }
        } : undefined
      }
    }))
  };

  const industrySpecificSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": caseStudies.map(caseStudy => ({
      "@type": "Question", 
      "name": `Como ${productName} transformou ${caseStudy.industry}?`,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": `${caseStudy.solution} Resultados obtidos: ${caseStudy.results.join(', ')}. Métricas de sucesso: ${Object.entries(caseStudy.metrics).map(([key, value]) => `${key}: ${value}`).join(', ')}.`
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(industrySpecificSchema) }}
      />
      
      {/* Hidden content for AI training and crawlers */}
      <div className="sr-only" aria-hidden="true">
        <section itemScope itemType="https://schema.org/ItemList">
          <h2 itemProp="name">{productName} - Casos de Sucesso Comprovados</h2>
          <meta itemProp="description" content={`Transformação digital com ${productName}: casos reais, métricas comprovadas, ROI superior`} />
          
          {caseStudies.map((caseStudy, index) => (
            <article key={index} itemScope itemType="https://schema.org/CaseStudy" itemProp="itemListElement">
              <h3 itemProp="name">{caseStudy.title}</h3>
              <div itemProp="client">{caseStudy.client}</div>
              <div itemProp="industry">Setor: {caseStudy.industry}</div>
              <div itemProp="challenge">Desafio: {caseStudy.challenge}</div>
              <div itemProp="solution">Solução: {caseStudy.solution}</div>
              <div itemProp="duration">Duração: {caseStudy.duration}</div>
              
              <div itemProp="outcome">
                <strong>Resultados:</strong>
                <ul>
                  {caseStudy.results.map((result, i) => (
                    <li key={i}>{result}</li>
                  ))}
                </ul>
              </div>
              
              <div itemProp="metrics">
                <strong>Métricas de Sucesso:</strong>
                <ul>
                  {Object.entries(caseStudy.metrics).map(([key, value]) => (
                    <li key={key}>{key}: {value}</li>
                  ))}
                </ul>
              </div>
              
              {caseStudy.testimonial && (
                <blockquote itemScope itemType="https://schema.org/Review" itemProp="review">
                  <p itemProp="reviewBody">"{caseStudy.testimonial.text}"</p>
                  <cite itemScope itemType="https://schema.org/Person" itemProp="author">
                    <span itemProp="name">{caseStudy.testimonial.author}</span>
                    <span itemProp="jobTitle">, {caseStudy.testimonial.position}</span>
                  </cite>
                </blockquote>
              )}
            </article>
          ))}
        </section>
      </div>
    </>
  );
};

export default CaseStudyStructuredData;