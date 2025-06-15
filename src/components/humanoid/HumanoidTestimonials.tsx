
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const HumanoidTestimonials = () => {
  const testimonials = [
    {
      name: "Carlos Mendes",
      role: "Diretor Comercial",
      company: "TechSolutions",
      image: "/placeholder.svg",
      rating: 5,
      quote: "Humanoid triplicou nossa geração de leads qualificados. Em 3 meses, fechamos 40% mais negócios com leads de melhor qualidade."
    },
    {
      name: "Ana Beatriz",
      role: "Head de Vendas",
      company: "GrowthCorp",
      image: "/placeholder.svg",
      rating: 5,
      quote: "A qualificação via IA é impressionante. Os leads chegam com contexto completo e alta probabilidade de conversão. ROI fantástico!"
    },
    {
      name: "Roberto Silva",
      role: "CEO",
      company: "ScaleUp",
      image: "/placeholder.svg",
      rating: 5,
      quote: "Transformou nossa prospecção. Enquanto a concorrência gasta horas prospectando, recebemos oportunidades qualificadas automaticamente."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Cases de Sucesso"
          subtitle="Empresas que transformaram suas vendas com captação automatizada e SDR inteligente"
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <blockquote className="text-gray-600 mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center">
                  <Avatar className="mr-4">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-legal">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                    <div className="text-sm text-legal-purple">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HumanoidTestimonials;
