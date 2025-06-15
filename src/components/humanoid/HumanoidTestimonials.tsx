
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const HumanoidTestimonials = () => {
  const testimonials = [
    {
      name: "Roberto Silva",
      role: "Diretor de Eventos",
      company: "InnovaCorp",
      image: "/placeholder.svg",
      rating: 5,
      quote: "O Humanoid foi o diferencial do nosso evento. Os participantes ficaram impressionados com a naturalidade da interação. Nunca vi tanto engajamento!"
    },
    {
      name: "Ana Beatriz",
      role: "Gerente de Marketing",
      company: "TechExpo",
      image: "/placeholder.svg",
      rating: 5,
      quote: "Superou todas as expectativas. O Humanoid não apenas atraiu visitantes, mas criou uma experiência memorável que gerou muito buzz nas redes sociais."
    },
    {
      name: "Carlos Mendes",
      role: "CEO",
      company: "FutureEvents",
      image: "/placeholder.svg",
      rating: 5,
      quote: "Tecnologia impressionante! O Humanoid atendeu mais de 500 pessoas durante o evento com personalização total. ROI excepcional."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Cases de Sucesso"
          subtitle="Empresas que transformaram seus eventos com tecnologia Humanoid"
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
