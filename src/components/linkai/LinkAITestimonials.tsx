
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const LinkAITestimonials = () => {
  const testimonials = [
    {
      name: "Carlos Oliveira",
      role: "CEO, TechStart",
      company: "Startup de Fintech",
      content: "LinkAI transformou completamente nosso networking em eventos. Conseguimos 3 investidores qualificados em uma única feira, algo que nunca havia acontecido antes.",
      rating: 5
    },
    {
      name: "Marina Santos",
      role: "Diretora de Vendas",
      company: "Empresa de Software B2B",
      content: "A precisão das conexões sugeridas pelo LinkAI é impressionante. 90% dos matches resultaram em oportunidades reais de negócio para nossa equipe.",
      rating: 5
    },
    {
      name: "Roberto Silva",
      role: "Founder",
      company: "Agência de Marketing",
      content: "Costumávamos perder muito tempo em networking improdutivo. Com LinkAI, cada conversa é estratégica e direcionada. ROI de eventos aumentou 400%.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Depoimentos de Sucesso"
          subtitle="Veja como LinkAI está transformando o networking para empresas de todos os portes"
          center
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-gray-600 mb-4 italic">
                  "{testimonial.content}"
                </blockquote>
                <div>
                  <div className="font-semibold text-legal">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                  <div className="text-sm text-legal-purple">{testimonial.company}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LinkAITestimonials;
