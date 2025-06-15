
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const NeuraFitTestimonials = () => {
  const testimonials = [
    {
      name: "Carlos Mendes",
      role: "Executivo",
      company: "Multinacional Tech",
      image: "/placeholder.svg",
      rating: 5,
      quote: "NeuraFit transformou minha capacidade de liderança. Aprendi a regular emoções e tomar decisões mais assertivas. Gamificação genial!"
    },
    {
      name: "Dra. Patricia Lima",
      role: "Psicóloga",
      company: "Clínica Bem-Estar",
      image: "/placeholder.svg",
      rating: 5,
      quote: "Como profissional da área, fiquei impressionada com a base científica. Uso NeuraFit pessoalmente e recomendo para meus pacientes."
    },
    {
      name: "Roberto Silva",
      role: "Estudante",
      company: "Medicina - USP",
      image: "/placeholder.svg",
      rating: 5,
      quote: "Minha concentração e memória melhoraram drasticamente. Os jogos são viciantes no melhor sentido! Nota máxima em todas as provas."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Transformações Reais"
          subtitle="Pessoas que revolucionaram suas capacidades mentais com NeuraFit"
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

export default NeuraFitTestimonials;
