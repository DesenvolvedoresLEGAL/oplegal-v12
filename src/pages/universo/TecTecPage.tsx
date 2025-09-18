
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import SEOHead from '@/components/SEOHead';
import TecTecHero from '@/components/tectec/TecTecHero';
import FeaturedPosts from '@/components/tectec/FeaturedPosts';
import PostsList from '@/components/tectec/PostsList';
import TecTecSidebar from '@/components/tectec/TecTecSidebar';
import { blogPosts, blogSchema } from '@/data/TecTecData';
import AIKnowledgeProvider from '@/components/seo/AIKnowledgeProvider';
import VoiceSearchOptimization from '@/components/optimization/VoiceSearchOptimization';
import GEOAdvancedOptimization from '@/components/seo/GEOAdvancedOptimization';
import RealUserMonitoring from '@/components/seo/RealUserMonitoring';
import CoreWebVitalsMonitor from '@/components/seo/CoreWebVitalsMonitor';
import AIFeedbackSystem from '@/components/optimization/AIFeedbackSystem';
import AdvancedFeaturedSnippets from '@/components/seo/AdvancedFeaturedSnippets';
import SEOCrawlerOptimization from '@/components/optimization/SEOCrawlerOptimization';

const TecTecPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [email, setEmail] = useState('');

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'Todos' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const popularPosts = [...blogPosts].sort((a, b) => b.views - a.views).slice(0, 3);

  return (
    <>
      <SEOHead
        title="TecTec | Blog de Tecnologia e Conectividade"
        description="Explore o blog TecTec da LEGAL: insights, tendências e análises sobre tecnologia, inovação e conectividade para eventos e negócios. Mantenha-se atualizado!"
        keywords="blog tecnologia, conectividade 5G, inteligência artificial eventos, IoT empresarial, automação corporativa, tendências tech 2024, drones eventos, empreendedorismo digital"
        url="https://operadora.legal/universo/tectec"
        type="website"
        image="https://operadora.legal/images/tectec-blog-og.jpg"
        schemaData={blogSchema}
        preconnect={['https://fonts.googleapis.com', 'https://images.unsplash.com']}
        prefetch={['/universo/tectec/1', '/universo/tectec/2']}
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
        focusKeyword="blog tecnologia conectividade"
      />
      <SEOCrawlerOptimization />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Breadcrumb com rich snippets */}
        <section className="pt-24 pb-8 px-4">
          <div className="container mx-auto">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/universo">Universo</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbPage>TecTec</BreadcrumbPage>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </section>

        <TecTecHero
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <FeaturedPosts />

        {/* Main Content com melhor estrutura */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              <PostsList posts={filteredPosts} />
              
              <TecTecSidebar
                popularPosts={popularPosts}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                email={email}
                setEmail={setEmail}
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TecTecPage;
