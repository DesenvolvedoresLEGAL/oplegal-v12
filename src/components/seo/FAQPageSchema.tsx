import React from 'react';

interface FAQItem {
  question: string;
  answer: string;
  author?: string;
  dateCreated?: string;
  upvoteCount?: number;
  answerCount?: number;
}

interface FAQPageSchemaProps {
  faqs: FAQItem[];
  pageUrl?: string;
  name?: string;
  description?: string;
  author?: {
    name: string;
    url?: string;
  };
  publisher?: {
    name: string;
    logo?: string;
    url?: string;
  };
  datePublished?: string;
  dateModified?: string;
  inLanguage?: string;
}

const FAQPageSchema: React.FC<FAQPageSchemaProps> = ({ 
  faqs, 
  pageUrl,
  name,
  description,
  author,
  publisher,
  datePublished,
  dateModified,
  inLanguage = "pt-BR"
}) => {
  const currentDate = new Date().toISOString();
  
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "name": name || "Perguntas Frequentes",
    "description": description || "Perguntas e respostas frequentes",
    "url": pageUrl,
    "inLanguage": inLanguage,
    "datePublished": datePublished || currentDate,
    "dateModified": dateModified || currentDate,
    "author": author ? {
      "@type": "Organization",
      "name": author.name,
      "url": author.url
    } : {
      "@type": "Organization",
      "name": "LEGAL",
      "url": "https://operadora.legal"
    },
    "publisher": publisher ? {
      "@type": "Organization",
      "name": publisher.name,
      "logo": {
        "@type": "ImageObject",
        "url": publisher.logo || "https://operadora.legal/images/legal-logo.png"
      },
      "url": publisher.url
    } : {
      "@type": "Organization",
      "name": "LEGAL",
      "logo": {
        "@type": "ImageObject",
        "url": "https://operadora.legal/images/legal-logo.png"
      },
      "url": "https://operadora.legal"
    },
    "mainEntity": faqs.map((faq, index) => ({
      "@type": "Question",
      "name": faq.question,
      "text": faq.question,
      "answerCount": faq.answerCount || 1,
      "upvoteCount": faq.upvoteCount || 0,
      "dateCreated": faq.dateCreated || currentDate,
      "author": faq.author ? {
        "@type": "Person",
        "name": faq.author
      } : {
        "@type": "Organization",
        "name": "LEGAL"
      },
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
        "dateCreated": faq.dateCreated || currentDate,
        "upvoteCount": faq.upvoteCount || 0,
        "url": pageUrl ? `${pageUrl}#faq-${index + 1}` : undefined,
        "author": {
          "@type": "Organization",
          "name": "LEGAL"
        }
      }
    })),
    "about": {
      "@type": "Thing",
      "name": name || "Perguntas Frequentes sobre LEGAL"
    },
    "audience": {
      "@type": "Audience",
      "audienceType": "customers"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default FAQPageSchema;