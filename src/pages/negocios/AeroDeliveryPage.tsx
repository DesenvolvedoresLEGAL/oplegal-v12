import React from 'react';
import SEOHead from '@/components/SEOHead';
import WebPageSchema from '@/components/seo/WebPageSchema';
import BreadcrumbsSchema from '@/components/seo/BreadcrumbsSchema';
import ServiceSchema from '@/components/seo/ServiceSchema';
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema';
import SectionTitle from '@/components/SectionTitle';
import CallToAction from '@/components/CallToAction';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Package,
  Shield, 
  Clock, 
  DollarSign, 
  CheckCircle, 
  Star, 
  MapPin, 
  Phone, 
  Mail,
  ArrowLeft,
  Building,
  Truck,
  Leaf,
  Users,
  TrendingUp,
  Award,
  Zap
} from 'lucide-react';
import AIKnowledgeProvider from '@/components/seo/AIKnowledgeProvider';
import VoiceSearchOptimization from '@/components/optimization/VoiceSearchOptimization';
import GEOAdvancedOptimization from '@/components/seo/GEOAdvancedOptimization';
import RealUserMonitoring from '@/components/seo/RealUserMonitoring';
import CoreWebVitalsMonitor from '@/components/seo/CoreWebVitalsMonitor';
import AIFeedbackSystem from '@/components/optimization/AIFeedbackSystem';
import AdvancedFeaturedSnippets from '@/components/seo/AdvancedFeaturedSnippets';
import SEOCrawlerOptimization from '@/components/optimization/SEOCrawlerOptimization';

const AeroDeliveryPage = () => {
  return (
    <>
      <SEOHead
        title="Delivery com Drones | LEGAL AERO - Pioneiros no Brasil com 50+ Entregas Realizadas"
        description="Serviço pioneiro de delivery com drones no Brasil. 70% mais rápido, 50% mais econômico. Mais de 50 entregas realizadas durante a pandemia. Pilotos certificados ANAC."
        keywords="delivery drone, entrega drone, drone delivery Brasil, logística drone, Amburgui, pandemia, ANAC, sustentável, rápido, econômico"
        url="https://operadora.legal/negocios/aero/delivery"
        image="https://operadora.legal/images/aero-delivery-og.jpg"
        type="website"
      />
      <WebPageSchema
        name="LEGAL AERO - Delivery com Drones"
        description="Serviço pioneiro de entrega com drones no Brasil. Rápido, econômico e sustentável para entregas urbanas e rurais"
        url="https://operadora.legal/negocios/aero/delivery"
      />
      <BreadcrumbsSchema />
      <ServiceSchema
        serviceName="LEGAL AERO - Delivery com Drones"
        description="Serviço pioneiro de entrega com drones no Brasil. Rápido, econômico e sustentável para entregas urbanas e rurais"
        serviceType="DeliveryService"
        areaServed={["Brasil"]}
        priceRange="A partir de R$ 25/km"
        url="https://operadora.legal/negocios/aero/delivery"
      />
      <LocalBusinessSchema
        name="LEGAL AERO - Delivery Drones"
        description="Serviço pioneiro de delivery com drones no Brasil"
        address={{
          streetAddress: "Endereço LEGAL",
          addressLocality: "São Paulo", 
          addressRegion: "SP",
          postalCode: "00000-000",
          addressCountry: "BR"
        }}
        telephone="+55 11 0000-0000"
        email="contato@operadora.legal"
        url="https://operadora.legal/negocios/aero/delivery"
        openingHours={["Mo-Fr 08:00-18:00"]}
        areaServed={["Brasil"]}
      />

      <AIKnowledgeProvider />
      <VoiceSearchOptimization />
      <GEOAdvancedOptimization 
        contentDomain="technology"
        entityType="service"
        optimizationLevel="advanced"
      />
      <RealUserMonitoring />
      <CoreWebVitalsMonitor enableReporting={true} />
      <AIFeedbackSystem enableRealTimeOptimization={true} />
      <AdvancedFeaturedSnippets 
        pageType="about"
        focusKeyword="delivery drone Brasil"
      />
      <SEOCrawlerOptimization />

      <div className="bg-background text-foreground font-unica">
        {/* Hero Section */}
        <section className="py-20 md:py-28 text-center bg-gradient-to-br from-legal to-legal-purple text-white relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-wider mb-6">
              Delivery com Drones
              <span className="block text-legal-cyan">LEGAL AERO</span>  
            </h1>
            <p className="text-lg md:text-xl font-light max-w-4xl mx-auto mb-8">
              <strong className="text-legal-cyan">Pioneiros no Brasil</strong> com mais de 50 entregas realizadas durante a pandemia. 
              70% mais rápido, 50% mais econômico e 90% mais sustentável.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-legal-cyan hover:bg-legal-cyan/90 text-legal font-bold">
                <Link to="/contato?service=aero-delivery">Solicitar Orçamento</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-legal text-legal hover:bg-legal hover:text-white">
                <Link to="/negocios/aero">Voltar para AERO</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="group">
                <div className="text-3xl md:text-4xl font-black text-legal mb-2">50+</div>
                <div className="text-sm md:text-base text-gray-600 font-medium">Entregas Realizadas</div>
              </div>
              <div className="group">
                <div className="text-3xl md:text-4xl font-black text-legal mb-2">70%</div>
                <div className="text-sm md:text-base text-gray-600 font-medium">Mais Rápido</div>
              </div>
              <div className="group">
                <div className="text-3xl md:text-4xl font-black text-legal mb-2">50%</div>
                <div className="text-sm md:text-base text-gray-600 font-medium">Mais Econômico</div>
              </div>
              <div className="group">
                <div className="text-3xl md:text-4xl font-black text-legal mb-2">90%</div>
                <div className="text-sm md:text-base text-gray-600 font-medium">Menos Emissões</div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <CallToAction
          title="Pronto para Revolucionar suas Entregas?"
          subtitle="Seja pioneiro e experimente o futuro das entregas com nossa tecnologia de drones"
          buttonText="Solicitar Demonstração"
          buttonLink="/contato?service=aero-delivery-demo"
          secondaryButtonText="Ver Outros Serviços AERO"
          secondaryButtonLink="/negocios/aero"
          background="gradient"
        />
      </div>
    </>
  );
};

export default AeroDeliveryPage;