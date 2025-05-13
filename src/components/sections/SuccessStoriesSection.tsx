
import React from "react";
import { ArrowRight } from "lucide-react";
import SectionTitle from "../SectionTitle";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const SuccessStoriesSection = () => {
  const stories = [
    {
      title: "Hospital Sírio-Libanês",
      description: "Implementação do Smart Events™ no congresso médico anual com mais de 5.000 participantes, resultando em 40% mais interações e redução de 30% nos custos operacionais.",
      image: "https://images.unsplash.com/photo-1631549916768-4119b4220292?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVkaWNhbCUyMGNvbmdyZXNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      link: "/universo/historias/sirio-libanes"
    },
    {
      title: "VTEX DAY",
      description: "Maior evento de varejo e tecnologia da América Latina utilizou soluções AERO para conectar mais de 15.000 pessoas com zero falhas de rede mesmo em picos de uso.",
      image: "https://images.unsplash.com/photo-1540304453527-62f979142a17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29uZmVyZW5jZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
      link: "/universo/historias/vtex-day"
    },
    {
      title: "Campus Party Brasil",
      description: "Implementação de FacePass™ reduziu o tempo de checkin em 80% e melhorou a experiência do visitante com IA para recomendações personalizadas.",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dGVjaG5vbG9neSUyMGV2ZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      link: "/universo/historias/campus-party"
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
                <img 
                  src={story.image} 
                  alt={story.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <CardContent className="p-6 flex-grow">
                <h3 className="text-xl font-bold mb-2 text-legal">{story.title}</h3>
                <p className="text-gray-700">{story.description}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Link to={story.link}>
                  <Button variant="ghost" className="text-legal hover:text-legal/90 p-0 flex items-center">
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
