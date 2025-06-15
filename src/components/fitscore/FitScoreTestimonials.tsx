
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const FitScoreTestimonials = () => {
  const testimonials = [
    {
      name: "Mariana Santos",
      role: "Diretora de RH",
      company: "TechStart",
      image: "/placeholder.svg",
      rating: 5,
      quote: "O FitScore reduziu nosso tempo de contratação em 70%. A precisão do matching é impressionante e contratamos candidatos muito mais alinhados com nossa cultura."
    },
    {
      name: "Pedro Lima",
      role: "Head de People",
      company: "InnovateCorp",
      image: "/placeholder.svg",
      rating: 5,
      quote: "A análise preditiva do FitScore nos ajudou a aumentar a retenção de talentos em 40%. Ferramenta indispensável para RH estratégico."
    },
    {
      name: "Carolina Ferreira",
      role: "Gerente de Talentos",
      company: "ScaleUp",
      image: "/placeholder.svg",
      rating: 5,
      quote: "Com o FitScore, nosso sourcing ficou muito mais eficiente. Encontramos candidatos ideais que não apareceriam em buscas tradicionais."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Cases de Sucesso"
          subtitle="Empresas que transformaram seus processos de RH com FitScore"
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

export default FitScoreTestimonials;
