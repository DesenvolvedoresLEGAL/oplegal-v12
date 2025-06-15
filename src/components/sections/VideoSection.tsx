
import React, { useState } from "react";
import { Play, CheckCircle } from "lucide-react";
import SectionTitle from "../SectionTitle";
import { Button } from "@/components/ui/button";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const benefits = [
    "Credenciamento facial em segundos",
    "Conectividade 5G sem falhas",
    "Networking inteligente com IA",
    "Análises e ROI em tempo real",
    "Operações automatizadas",
    "Experiências imersivas com AR"
  ];

  const handlePlayVideo = () => {
    setIsPlaying(true);
  };

  return (
    <section className="py-20 bg-legal text-white" id="demonstracao-video">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Veja o Smart Events™ em Ação"
          subtitle="Descubra em 3 minutos como transformamos eventos tradicionais em experiências inteligentes e conectadas que geram resultados reais."
          center
          light
        />

        <div className="max-w-4xl mx-auto mt-12">
          <div className="relative bg-black rounded-xl overflow-hidden shadow-2xl aspect-video">
            {!isPlaying ? (
              <div className="absolute inset-0 bg-gradient-to-br from-legal-purple/80 to-legal-cyan/80 flex items-center justify-center cursor-pointer group" onClick={handlePlayVideo}>
                <div className="text-center">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-8 h-8 text-legal ml-1" fill="currentColor" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Smart Events™ Demo</h3>
                  <p className="text-white/90">3 minutos que vão mudar sua visão sobre eventos</p>
                </div>
                
                {/* Background preview image */}
                <img 
                  src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Smart Events em ação"
                  className="absolute inset-0 w-full h-full object-cover -z-10 opacity-30"
                />
              </div>
            ) : (
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0&modestbranding=1"
                title="Smart Events™ - Demonstração Completa"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center bg-legal-black bg-opacity-30 rounded-lg p-4">
                <CheckCircle className="text-legal-green w-5 h-5 mr-3 flex-shrink-0" />
                <span className="text-sm">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA abaixo do vídeo */}
          <div className="text-center mt-8">
            <p className="text-white/90 mb-6">
              Quer ver uma demonstração personalizada para seu evento?
            </p>
            <Button 
              asChild
              className="bg-legal-cyan hover:bg-legal-cyan/90 text-legal px-8 py-6 text-lg h-auto"
            >
              <a href="/contato?demo=personalizada">
                Agendar Demo Personalizada
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
