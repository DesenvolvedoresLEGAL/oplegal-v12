
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const FacePassTestimonials = () => {
  const testimonials = [
    {
      name: "Carlos Mendes",
      role: "Diretor de Eventos",
      company: "TechCorp",
      image: "/placeholder.svg",
      rating: 5,
      quote: "O FacePass eliminou completamente as filas no nosso evento. Credenciamento instantâneo para 5.000 participantes sem nenhum problema."
    },
    {
      name: "Ana Silva",
      role: "Gerente de Operações",
      company: "EventMax",
      image: "/placeholder.svg",
      rating: 5,
      quote: "A precisão do reconhecimento facial é impressionante. Zero falsos positivos em 6 meses de uso contínuo."
    },
    {
      name: "Roberto Costa",
      role: "CEO",
      company: "FestBrasil",
      image: "/placeholder.svg",
      rating: 5,
      quote: "Implementamos em nosso festival e a experiência dos participantes melhorou drasticamente. Tecnologia que realmente funciona."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Casos de Sucesso"
          subtitle="Empresas que já transformaram seus eventos com FacePass"
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

export default FacePassTestimonials;
