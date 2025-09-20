import React from 'react';
import { useLocation } from 'react-router-dom';
import { getPageSEOConfig, DISABLE_ALL_AUTO_DATASETS } from '@/config/seoConfig';
import OrganizationSchema from './OrganizationSchema';
import HomePageSEO from './HomePageSEO';
import CoreWebVitalsMonitor from './CoreWebVitalsMonitor';
import ConsolidatedFAQSchema from './ConsolidatedFAQSchema';

interface SEODatasetManagerProps {
  // Props específicas para controle manual se necessário
  forceEnable?: string[];
  forceDisable?: string[];
}

const SEODatasetManager: React.FC<SEODatasetManagerProps> = ({
  forceEnable = [],
  forceDisable = []
}) => {
  const location = useLocation();
  
  // Se o master switch estiver ativado, não renderizar nenhum dataset
  if (DISABLE_ALL_AUTO_DATASETS) {
    return null;
  }
  
  const config = getPageSEOConfig(location.pathname);
  
  // Aplicar overrides manuais se fornecidos
  const shouldRender = (datasetType: string): boolean => {
    if (forceDisable.includes(datasetType)) return false;
    if (forceEnable.includes(datasetType)) return true;
    return (config as any)[datasetType] || false;
  };
  
  return (
    <>
      {/* Schemas organizacionais básicos */}
      {shouldRender('organization') && <OrganizationSchema />}
      
      {/* Schemas da homepage */}
      {shouldRender('website') && location.pathname === '/' && <HomePageSEO />}
      
      {/* Core Web Vitals apenas quando configurado */}
      {shouldRender('coreWebVitals') && (
        <CoreWebVitalsMonitor 
          enableReporting={true}
          enableDataset={true}
        />
      )}
      
      {/* FAQ consolidado apenas quando configurado */}
      {shouldRender('faq') && (
        <ConsolidatedFAQSchema 
          pageUrl={`https://operadora.legal${location.pathname}`}
          pageName={getPageName(location.pathname)}
        />
      )}
    </>
  );
};

// Helper para obter nome amigável da página
const getPageName = (pathname: string): string => {
  const pageNames: Record<string, string> = {
    '/': 'LEGAL TechCo - Smart Events™',
    '/produtos/magicpass': 'MAGICPASS™ - Credenciamento Facial',
    '/produtos/fitscore': 'FitScore™ - People Analytics',
    '/produtos/eventrix': 'Eventrix™ - Gestão de Eventos',
    '/smart-events': 'Smart Events™ - Eventos Inteligentes'
  };
  
  return pageNames[pathname] || 'LEGAL TechCo';
};

export default SEODatasetManager;