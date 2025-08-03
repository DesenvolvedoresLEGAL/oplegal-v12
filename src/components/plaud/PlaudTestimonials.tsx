import React from "react";
import SectionTitle from "../SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const PlaudTestimonials = () => {
  const testimonials = [
    {
      name: "Ana Silva",
      role: "Diretora de Vendas",
      company: "TechSolutions",
      content: "O Plaud revolucionou nossas reuniões comerciais. Agora posso focar 100% no cliente enquanto a IA captura tudo. Nossa taxa de conversão aumentou 30%.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Carlos Mendes",
      role: "Gerente de Projetos",
      company: "StartupXYZ",
      content: "Economizo 5 horas por semana que gastava transcrevendo reuniões. Os resumos automáticos são perfeitos para manter a equipe alinhada.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Marina Costa",
      role: "Consultora de RH",
      company: "PeopleFirst",
      content: "Uso o Plaud em todas as entrevistas. A identificação de speakers e análise de sentimento me ajudam a tomar decisões mais assertivas.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Roberto Lima",
      role: "Professor Universitário",
      company: "Universidade Federal",
      content: "Meus alunos adoram receber os resumos estruturados das aulas. O Plaud tornou meu ensino mais eficiente e acessível.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Fernanda Oliveira",
      role: "UX Researcher",
      company: "DesignLab",
      content: "Indispensável para pesquisas qualitativas. A análise automática por temas me economiza dias de trabalho manual.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Paulo Santos",
      role: "CEO",
      company: "Innovation Corp",
      content: "O ROI foi imediato. Em 3 meses, o investimento se pagou só com a economia de tempo da minha equipe executiva.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="O que Nossos Clientes Dizem"
          subtitle="Profissionais de diferentes áreas já transformaram sua produtividade com o Plaud"
          center={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                {/* Quote */}
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-legal/20" />
                  <p className="text-gray-700 italic mb-6 pl-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                </div>
                
                {/* Author */}
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-legal">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-xs text-gray-500">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 bg-legal/5 rounded-2xl p-8 text-center">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-bold text-legal mb-2">4.9/5</div>
              <div className="text-sm text-gray-600">Avaliação média</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-legal mb-2">50k+</div>
              <div className="text-sm text-gray-600">Usuários ativos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-legal mb-2">98%</div>
              <div className="text-sm text-gray-600">Recomendam o Plaud</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-legal mb-2">24/7</div>
              <div className="text-sm text-gray-600">Suporte especializado</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlaudTestimonials;