import React from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface ProductFAQSchemaProps {
  productName: string;
  faqs: FAQItem[];
  productUrl?: string;
}

const ProductFAQSchema: React.FC<ProductFAQSchemaProps> = ({ 
  productName, 
  faqs, 
  productUrl 
}) => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    })),
    "about": {
      "@type": "Product",
      "name": productName,
      "url": productUrl || `https://operadora.legal/produtos/${productName.toLowerCase().replace(/\s+/g, '-')}`
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