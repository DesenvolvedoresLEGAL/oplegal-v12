
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[];
  className?: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className = "" }) => {
  const location = useLocation();
  
  // Gerar breadcrumbs automaticamente baseado na URL se não fornecidos
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const pathSegments = location.pathname.split('/').filter(segment => segment);
    const breadcrumbs: BreadcrumbItem[] = [{ label: 'Início', href: '/' }];
    
    let currentPath = '';
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      
      // Mapear segmentos para labels amigáveis
      const labelMap: Record<string, string> = {
        'smart-events': 'Smart Events™',
        'negocios': 'Negócios',
        'universo': 'Universo LEGAL',
        'historias': 'Histórias de Sucesso',
        'tectec': 'TecTec',
        'missao-visao-valores': 'Missão, Visão e Valores',
        'ai': 'LEGAL AI',
        'aero': 'AERO',
        'alugue': 'LEGAL Alugue',
        'assinatura': 'LEGAL Assinatura',
        'facepass': 'FacePass™',
        'linkai': 'LinkAI',
        'fitscore': 'FitScore™',
        'eventrix': 'Eventrix',
        'wash': 'AERO Wash',
        'delivery': 'AERO Delivery',
        'contato': 'Contato',
        'time': 'Nosso Time',
        'vagas': 'Vagas'
      };
      
      const label = labelMap[segment] || segment.charAt(0).toUpperCase() + segment.slice(1);
      const isLast = index === pathSegments.length - 1;
      
      breadcrumbs.push({
        label,
        href: isLast ? undefined : currentPath
      });
    });
    
    return breadcrumbs;
  };

  const breadcrumbItems = items || generateBreadcrumbs();
  
  if (breadcrumbItems.length <= 1) {
    return null; // Não mostrar breadcrumbs na homepage
  }

  // Gerar schema estruturado para breadcrumbs
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      ...(item.href && { "item": `https://operadora.legal${item.href}` })
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <nav 
        aria-label="Breadcrumb" 
        className={`py-4 px-4 bg-gray-50 border-b ${className}`}
        itemScope 
        itemType="https://schema.org/BreadcrumbList"
      >
        <div className="container mx-auto">
          <ol className="flex items-center space-x-2 text-sm">
            {breadcrumbItems.map((item, index) => (
              <li 
                key={index} 
                className="flex items-center"
                itemProp="itemListElement" 
                itemScope 
                itemType="https://schema.org/ListItem"
              >
                <meta itemProp="position" content={(index + 1).toString()} />
                
                {index > 0 && (
                  <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
                )}
                
                {index === 0 && (
                  <Home className="w-4 h-4 text-gray-500 mr-1" />
                )}
                
                {item.href ? (
                  <Link 
                    to={item.href}
                    className="text-gray-600 hover:text-legal transition-colors"
                    itemProp="item"
                  >
                    <span itemProp="name">{item.label}</span>
                  </Link>
                ) : (
                  <span 
                    className="text-legal font-medium" 
                    aria-current="page"
                    itemProp="name"
                  >
                    {item.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
};

export default Breadcrumbs;
