
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const PingTestimonials = () => {
  const testimonials = [
    {
      name: "Carlos Silva",
      role: "CTO, TechCorp",
      content: "Ping revolucionou nosso monitoramento. Detectamos e resolvemos problemas antes mesmo dos usuários perceberem. ROI excepcional.",
      rating: 5
    },
    {
      name: "Ana Rodrigues",
      role: "Gerente de Infraestrutura, DataFlow",
      content: "A IA preditiva do Ping nos ajudou a reduzir downtime em 90%. Ferramenta indispensável para nossa operação crítica.",
      rating: 5
    },
    {
      name: "Roberto Lima",
      role: "Diretor de TI, CloudTech",
      content: "Dashboard intuitivo e alertas precisos. Ping transformou como gerenciamos nossa infraestrutura multi-cloud.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Depoimentos de Clientes"
          subtitle="Veja como o Ping transformou a gestão de infraestrutura de empresas líderes"
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-bold text-legal">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PingTestimonials;
