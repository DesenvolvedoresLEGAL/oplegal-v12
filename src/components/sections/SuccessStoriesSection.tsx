
import React from "react";
import { ArrowRight } from "lucide-react";
import SectionTitle from "../SectionTitle";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import OptimizedImage from "../OptimizedImage";

const SuccessStoriesSection = () => {
  const stories = [
    {
      title: "MONKS",
      description: "A LEGAL foi nossa parceira pelo 2º ano no FORUM ECOMMERCE BRASIL em 2025. O atendimento com excelência e a conectividade super rápida nos permitiu conetar totem, realizar apresentações fluidas durante todo o evento.",
      image: "https://images.unsplash.com/photo-1631549916768-4119b4220292",
      link: "/universo/historias/monks",
      logo: "/lovable-uploads/99ea6d28-584d-43c5-9f73-e2ff2b1a6539.png",
      testimonial: {
        author: "Lincon",
        role: "Marketing",
        company: "MONKS"
      }
    },
    {
      title: "ONFLY",
      description: "Tivemos a primeira experiência com a LEGAL no FORUM ECOMMERCE BRASIL 2025. Experimentamos o serviço de internet e não decepcionou. O evento foi um  sucesso e a parceria com a LEGAL se extenderá para outros eventos, obrigado time.",
      image: "https://images.unsplash.com/photo-1540304453527-62f979142a17",
      link: "/universo/historias/onfly",
      logo: "/lovable-uploads/ea530ee5-86cf-42fb-994c-a41dbcaafa9f.png",
      testimonial: {
        author: "Carol",
        role: "Marketing",
        company: "ONFLY"
      }
    },
    {
      title: "CHINA LINK",
      description: "Depois da decepção do ano passado com a internet do pavilhão, esse ano decidimos mudar para a LEGAL e o evento foi marcado por muitos negócios e a infraestrutura tecnológica robusta da LEGAL nos garantiu conexões estáveis para todas as operações.",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678",
      link: "/universo/historias/china-link",
      logo: "/lovable-uploads/0f248c93-9f57-4742-9d91-2b001c6e6dad.png",
      testimonial: {
        author: "Jéssica",
        role: "Marketing",
        company: "CHINA LINK"
      }
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Histórias de Sucesso"
          subtitle="Conheça como empresas líderes estão transformando seus eventos e negócios com soluções LEGAL"
          center={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {stories.map((story, index) => (
            <Card key={index} className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-all">
              <CardContent className="p-8 flex-grow text-center">
                {/* Logo da empresa - MAIOR DESTAQUE */}
                <div className="mb-8 flex justify-center">
                  <img 
                    src={story.logo} 
                    alt={`Logo ${story.title}`}
                    className="h-20 w-auto object-contain"
                  />
                </div>
                
                <h3 className="text-2xl font-bold mb-6 text-legal">{story.title}</h3>
                <p className="text-gray-700 mb-6 text-lg italic leading-relaxed">"{story.description}"</p>
                
                {/* Depoimento */}
                <div className="border-t pt-6">
                  <p className="font-semibold text-legal text-lg">{story.testimonial.author}</p>
                  <p className="text-gray-600">{story.testimonial.role}</p>
                  <p className="text-gray-500 mt-1">{story.testimonial.company}</p>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Link to={story.link} className="w-full">
                  <Button variant="ghost" className="text-legal hover:text-legal/90 p-0 flex items-center justify-center w-full">
                    Ler caso completo <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="outline" className="border-legal text-legal hover:bg-legal hover:text-white">
            <Link to="/universo/historias">
              Ver todas as histórias <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
