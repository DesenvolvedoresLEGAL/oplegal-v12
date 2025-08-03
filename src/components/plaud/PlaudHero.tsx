import React from "react";
import { Button } from "@/components/ui/button";
import { Mic, PlayCircle, Clock, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const PlaudHero = () => {
  return (
    <section className="pt-24 pb-12 bg-gradient-to-br from-legal via-legal-purple to-legal-secondary text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Mic className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Gravação Inteligente com IA</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-white">Plaud</span>
              <span className="block text-legal-cyan">Gravação de Voz</span>
              <span className="block text-white">com IA</span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-8 text-white/90 leading-relaxed">
              Transforme suas conversas em insights valiosos. Grave, transcreva e resuma automaticamente 
              em 112 idiomas para máxima produtividade.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button size="lg" className="bg-white text-legal hover:bg-white/90 font-semibold">
                <Link to="/contato?produto=plaud" className="flex items-center">
                  Solicitar Demonstração
                  <PlayCircle className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-legal"
              >
                Ver Especificações
              </Button>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <Clock className="w-5 h-5 mr-2 text-legal-cyan" />
                  <span className="text-2xl font-bold">30h</span>
                </div>
                <p className="text-sm text-white/80">Gravação contínua</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <Globe className="w-5 h-5 mr-2 text-legal-cyan" />
                  <span className="text-2xl font-bold">112</span>
                </div>
                <p className="text-sm text-white/80">Idiomas suportados</p>
              </div>
              <div className="text-center lg:text-left col-span-2 lg:col-span-1">
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <Mic className="w-5 h-5 mr-2 text-legal-cyan" />
                  <span className="text-2xl font-bold">60</span>
                </div>
                <p className="text-sm text-white/80">Dias de standby</p>
              </div>
            </div>
          </div>
          
          {/* Right Column - Product Image/Video */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1589254065878-42c9da997008?w=400&h=400&fit=crop"
                  alt="Plaud Note - Gravador de Voz com IA"
                  className="w-64 h-64 object-contain rounded-2xl"
                />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-legal-cyan text-legal px-3 py-1 rounded-full text-sm font-semibold animate-bounce">
                IA Avançada
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white text-legal px-3 py-1 rounded-full text-sm font-semibold">
                Ultra Portátil
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlaudHero;