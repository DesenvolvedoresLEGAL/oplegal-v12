import React from 'react';

interface FAQItem {
  question: string;
  answer: string;
  author?: string;
  dateCreated?: string;
  upvoteCount?: number;
  answerCount?: number;
}

interface ProductFAQSchemaProps {
  productName: string;
  faqs: FAQItem[];
  productUrl?: string;
  productDescription?: string;
  author?: {
    name: string;
    url?: string;
  };
  publisher?: {
    name: string;
    logo?: string;
    url?: string;
  };
}

const ProductFAQSchema: React.FC<ProductFAQSchemaProps> = ({ 
  productName, 
  faqs, 
  productUrl,
  productDescription,
  author,
  publisher
}) => {
  const currentDate = new Date().toISOString();
  
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "name": `Perguntas Frequentes - ${productName}`,
    "description": productDescription || `Perguntas e respostas sobre ${productName}`,
    "url": productUrl || `https://operadora.legal/produtos/${productName.toLowerCase().replace(/\s+/g, '-')}`,
    "inLanguage": "pt-BR",
    "datePublished": currentDate,
    "dateModified": currentDate,
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
        "url": productUrl ? `${productUrl}#faq-${index + 1}` : undefined,
        "author": {
          "@type": "Organization",
          "name": "LEGAL"
        }
      }
    })),
    "about": {
      "@type": "Product",
      "name": productName,
      "url": productUrl || `https://operadora.legal/produtos/${productName.toLowerCase().replace(/\s+/g, '-')}`
    },
    "audience": {
      "@type": "Audience",
      "audienceType": "customers"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
};

export default ProductFAQSchema;