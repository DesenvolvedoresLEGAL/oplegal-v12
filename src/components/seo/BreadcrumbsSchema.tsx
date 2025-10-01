import React from 'react';
import { useLocation } from 'react-router-dom';

interface BreadcrumbItem {
  name: string;
  url: string;
  position: number;
}

interface BreadcrumbsSchemaProps {
  customBreadcrumbs?: BreadcrumbItem[];
}

const BreadcrumbsSchema: React.FC<BreadcrumbsSchemaProps> = ({ customBreadcrumbs }) => {
  const location = useLocation();

  // Generate breadcrumbs from URL if custom ones aren't provided
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    if (customBreadcrumbs) return customBreadcrumbs;

    const pathSegments = location.pathname.split('/').filter(segment => segment);
    const breadcrumbs: BreadcrumbItem[] = [
      {
        name: "Home",
        url: "https://operadora.legal",
        position: 1
      }
    ];

    let currentPath = "";
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const name = getSegmentName(segment);
      
      breadcrumbs.push({
        name,
        url: `https://operadora.legal${currentPath}`,
        position: index + 2
      });
    });

    return breadcrumbs;
  };

  const getSegmentName = (segment: string): string => {
    const segmentMap: Record<string, string> = {
      'produtos': 'Produtos',
      'negocios': 'Negócios',
      'universo': 'Universo',
      'smart-events': 'Smart Events™',
      'magicpass': 'MAGICPASS™',
      'galaxia': 'GALAXIA™',
      'fitscore': 'FitScore™',
      'eventrix': 'Eventrix™',
      'brilix': 'Brilix™',
      'blue6': 'Blue6™',
      'ping': 'Ping™',
      'sonix': 'Sonix™',
      'nuvyo': 'Nuvyo™',
      'humanoid': 'Humanoid™',
      'neurafit': 'NeuraFit™',
      'linkai': 'LinkAI™',
      'plaud': 'Plaud™',
      'speedy5g': 'Speedy™',
      'ai': 'Inteligência Artificial',
      'contato': 'Contato',
      'sobre': 'Sobre',
      'vagas': 'Vagas',
      'time': 'Time',
      'historias': 'Histórias de Sucesso',
      'tectec': 'TecTec Blog',
      'faq': 'Perguntas Frequentes',
      'missao-visao-valores': 'Missão, Visão e Valores'
    };

    return segmentMap[segment] || segment.charAt(0).toUpperCase() + segment.slice(1);
  };

  const breadcrumbs = generateBreadcrumbs();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map(breadcrumb => ({
      "@type": "ListItem",
      "position": breadcrumb.position,
      "name": breadcrumb.name,
      "item": breadcrumb.url
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
    />
  );
};

export default BreadcrumbsSchema;