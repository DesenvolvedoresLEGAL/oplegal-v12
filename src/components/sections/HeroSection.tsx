
import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Immediate visibility for LCP optimization - no delay
    setIsVisible(true);
  }, []);
  
  return (
    <section 
      className="hero-instant relative min-h-screen flex items-center justify-center bg-legal-black text-white overflow-hidden"
      itemScope 
      itemType="https://schema.org/Organization"
    >
      {/* Simplified background for faster paint */}
      <div className="absolute inset-0 bg-gradient-to-b from-legal to-legal-black opacity-80"></div>
      
      {/* Defer non-critical visual elements */}
      {isVisible && (
        <>
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 0 60 L 60 60' stroke='%23191970' stroke-opacity='0.2' fill='none' /%3E%3Cpath d='M 60 0 L 60 60' stroke='%23191970' stroke-opacity='0.2' fill='none' /%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)' /%3E%3C/svg%3E")`,
            }}
          />
          <div className="absolute w-64 h-64 rounded-full bg-legal-green blur-[100px] top-20 -left-20 opacity-20 animate-pulse will-change-transform"></div>
          <div className="absolute w-96 h-96 rounded-full bg-legal blur-[120px] bottom-0 right-0 opacity-20 animate-pulse will-change-transform" style={{
            animationDelay: "1s"
          }}></div>
        </>
      )}

      <div className="container mx-auto px-4 z-10 py-24">
        <div className="text-center max-w-5xl mx-auto">
          <div className="mb-6 opacity-100">
            <span className="inline-block bg-legal-green bg-opacity-20 text-legal-green px-4 py-2 rounded-full text-sm font-medium mb-6">A maior e melhor TechCo do Brasil</span>
          </div>
          
          <h1 
            className="hero-title text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 opacity-100"
            itemProp="headline"
          >
            <span className="text-legal-green" itemProp="brand">Smart Events™</span> — o novo padrão para eventos{" "}
            <span className="relative inline-block">
              <span className="relative z-10" itemProp="description">10× mais inteligentes,</span>
              <span className="absolute bottom-1 left-0 w-full h-2 bg-legal-green opacity-30"></span>
            </span>{" "}
            <br className="hidden md:block" />
            conectados e eficientes.
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto opacity-100">
            Da gestão inteligente até a conectividade super rápida: 
            a LEGAL ajuda a criar eventos surpreendentes e com experiência superior.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 opacity-100">
            <Button asChild className="bg-legal-green hover:bg-legal-green/90 text-white px-8 py-6 text-lg h-auto">
              <Link to="/contato">
                Quero transformar meu evento
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-legal text-legal hover:bg-legal hover:text-white transition-all duration-300 px-8 py-6 text-lg h-auto">
              <Link to="/smart-events">
                Conheça Smart Events™
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-gray-400 mb-2">Scroll</span>
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-gray-400 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
