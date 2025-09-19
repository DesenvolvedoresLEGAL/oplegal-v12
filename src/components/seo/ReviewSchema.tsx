import React from 'react';

interface ReviewData {
  author: string;
  rating: number;
  reviewBody: string;
  datePublished?: string;
  title?: string;
  pros?: string[];
  cons?: string[];
  wouldRecommend?: boolean;
}

interface ReviewSchemaProps {
  productName: string;
  productUrl?: string;
  reviews: ReviewData[];
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
    bestRating?: number;
    worstRating?: number;
  };
  brand?: string;
  manufacturer?: string;
}

const ReviewSchema: React.FC<ReviewSchemaProps> = ({
  productName,
  productUrl,
  reviews,
  aggregateRating,
  brand = "LEGAL",
  manufacturer = "LEGAL TechCo"
}) => {
  const currentDate = new Date().toISOString();
  
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": productName,
    "url": productUrl || `https://operadora.legal/produtos/${productName.toLowerCase().replace(/\s+/g, '-')}`,
    "brand": {
      "@type": "Brand",
      "name": brand
    },
    "manufacturer": {
      "@type": "Organization",
      "name": manufacturer,
      "url": "https://operadora.legal"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": aggregateRating?.ratingValue || 4.8,
      "reviewCount": aggregateRating?.reviewCount || reviews.length,
      "bestRating": aggregateRating?.bestRating || 5,
      "worstRating": aggregateRating?.worstRating || 1
    },
    "review": reviews.map((review, index) => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.author
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating,
        "bestRating": 5,
        "worstRating": 1
      },
      "reviewBody": review.reviewBody,
      "name": review.title || `Avaliação ${productName}`,
      "datePublished": review.datePublished || currentDate,
      "publisher": {
        "@type": "Organization",
        "name": "LEGAL TechCo"
      },
      "itemReviewed": {
        "@type": "Product",
        "name": productName
      },
      "positiveNotes": review.pros ? {
        "@type": "ItemList",
        "itemListElement": review.pros.map((pro, idx) => ({
          "@type": "ListItem",
          "position": idx + 1,
          "name": pro
        }))
      } : undefined,
      "negativeNotes": review.cons ? {
        "@type": "ItemList", 
        "itemListElement": review.cons.map((con, idx) => ({
          "@type": "ListItem",
          "position": idx + 1,
          "name": con
        }))
      } : undefined,
      "reviewAspect": "Overall satisfaction",
      "inLanguage": "pt-BR"
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
    />
  );
};

export default ReviewSchema;