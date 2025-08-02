
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
      description: "Participante do FORUM ECOMMERCE BRASIL 2025 destacou a excelência da conectividade LEGAL, que permitiu apresentações fluidas e networking eficiente durante todo o evento.",
      image: "https://images.unsplash.com/photo-1631549916768-4119b4220292",
      link: "/universo/historias/monks",
      logo: "https://via.placeholder.com/120x60/020cbc/ffffff?text=MONKS",
      testimonial: {
        author: "Lincon",
        role: "Marketing",
        company: "MONKS"
      }
    },
    {
      title: "ONFLY",
      description: "No FORUM ECOMMERCE BRASIL 2025, a ONFLY experimentou conectividade de classe mundial que suportou todas as suas atividades digitais sem interrupções.",
      image: "https://images.unsplash.com/photo-1540304453527-62f979142a17",
      link: "/universo/historias/onfly",
      logo: "https://via.placeholder.com/120x60/4d2bfb/ffffff?text=ONFLY",
      testimonial: {
        author: "Carol",
        role: "Marketing",
        company: "ONFLY"
      }
    },
    {
      title: "CHINA LINK",
      description: "Participação no FORUM ECOMMERCE BRASIL 2025 foi marcada pela infraestrutura tecnológica robusta da LEGAL, garantindo conexões estáveis para todas as operações.",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678",
      link: "/universo/historias/china-link",
      logo: "https://via.placeholder.com/120x60/03f9ff/000000?text=CHINA+LINK",
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
              <div className="h-48 overflow-hidden">
                <OptimizedImage
                  src={story.image}
                  alt={story.title}
                  width={400}
                  height={240}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <CardContent className="p-6 flex-grow">
                {/* Logo da empresa */}
                <div className="mb-4 flex justify-center">
                  <img 
                    src={story.logo} 
                    alt={`Logo ${story.title}`}
                    className="h-12 object-contain"
                  />
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-legal text-center">{story.title}</h3>
                <p className="text-gray-700 mb-4 text-center italic">"{story.description}"</p>
                
                {/* Depoimento */}
                <div className="text-center border-t pt-4">
                  <p className="font-semibold text-legal">{story.testimonial.author}</p>
                  <p className="text-sm text-gray-600">{story.testimonial.role}</p>
                  <p className="text-xs text-gray-500 mt-1">{story.testimonial.company}</p>
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
