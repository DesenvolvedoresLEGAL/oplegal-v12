
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const NeurahackTestimonials = () => {
  const testimonials = [
    {
      name: "Maria Santos",
      role: "CISO",
      company: "Banco Digital",
      image: "/placeholder.svg",
      rating: 5,
      quote: "Neurahack revolucionou nossa postura de segurança. Detectamos e corrigimos vulnerabilidades que passaram despercebidas por anos. ROI excepcional."
    },
    {
      name: "João Pereira",
      role: "CTO",
      company: "FinTech Líder",
      image: "/placeholder.svg",
      rating: 5,
      quote: "A capacidade preditiva da IA é impressionante. Conseguimos antecipar ameaças e manter nossos sistemas seguros 24/7. Ferramenta indispensável."
    },
    {
      name: "Ana Costa",
      role: "Diretora de TI",
      company: "Hospital Regional",
      image: "/placeholder.svg",
      rating: 5,
      quote: "Compliance LGPD e proteção de dados médicos garantidos. Neurahack nos deu a tranquilidade necessária para focar no cuidado aos pacientes."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Casos de Sucesso"
          subtitle="Organizações que fortaleceram sua segurança digital com Neurahack"
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

export default NeurahackTestimonials;
