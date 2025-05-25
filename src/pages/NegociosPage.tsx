
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import ProductsSection from '@/components/sections/ProductsSection';
import CallToAction from '@/components/CallToAction';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const NegociosPage = () => {
  return (
    <div className="bg-background text-foreground font-unica">
      {/* Hero Section */}
      <section className="py-24 md:py-32 text-center bg-gradient-to-br from-legal to-legal-purple text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-wider mb-6 animate-fade-in" style={{ letterSpacing: '0.05em' }}>
            Nossas Soluções de Negócios
          </h1>
          <p className="text-lg md:text-xl font-light max-w-3xl mx-auto animate-fade-in animation-delay-300">
            Tecnologia e inovação para impulsionar o crescimento da sua empresa. Descubra como a LEGAL pode transformar seus negócios.
          </p>
        </div>
      </section>

      {/* Products Section - Reusing the existing component */}
      <ProductsSection titleOverride="Conheça Nossas Unidades de Negócio" />

      {/* Detailed Links (Optional, if more emphasis is needed than ProductsSection cards) */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <SectionTitle 
            title="Explore Cada Solução em Detalhe"
            subtitle="Clique para saber mais sobre como cada unidade pode beneficiar sua operação."
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "AERO", link: "/negocios/aero", description: "Conectividade para eventos." },
              { name: "AI", link: "/negocios/ai", description: "Inteligência Artificial aplicada." },
              { name: "ALUGUE", link: "/negocios/alugue", description: "Equipamentos e tecnologia." },
              { name: "ASSINATURA", link: "/negocios/assinatura", description: "Conectividade contínua." },
            ].map(item => (
              <div key={item.name} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-legal mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <Button asChild variant="link" className="text-legal hover:text-legal-purple p-0">
                  <Link to={item.link}>Ver Detalhes &rarr;</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <CallToAction
        title="Pronto para Transformar seu Negócio?"
        subtitle="Entre em contato com nossos especialistas e descubra a solução LEGAL ideal para seus desafios."
        buttonText="Fale Conosco"
        buttonLink="/contato"
        background="gradient"
      />
    </div>
  );
};

export default NegociosPage;
