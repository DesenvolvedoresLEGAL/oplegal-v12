
import React from 'react';

interface Article {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  image: string;
  seoKeywords?: string;
}

interface BlogArticleSchemaProps {
  article: Article;
}

const BlogArticleSchema: React.FC<BlogArticleSchemaProps> = ({ article }) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": article.title,
    "description": article.excerpt,
    "author": {
      "@type": "Person",
      "name": article.author
    },
    "datePublished": article.date,
    "dateModified": article.date,
    "publisher": {
      "@type": "Organization",
      "name": "LEGAL",
      "logo": {
        "@type": "ImageObject",
        "url": "https://operadora.legal/images/legal-logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://operadora.legal/universo/tectec/${article.id}`
    },
    "image": {
      "@type": "ImageObject",
      "url": article.image,
      "width": 800,
      "height": 400
    },
    "articleSection": article.category,
    "keywords": article.seoKeywords || article.title
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default BlogArticleSchema;
