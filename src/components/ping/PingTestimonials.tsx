
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const PingTestimonials = () => {
  const testimonials = [
    {
      name: "Mariana Costa",
      role: "Gerente de Atendimento, ShopTech",
      content: "Ping revolucionou nosso atendimento. Conseguimos atender 5x mais clientes com a mesma equipe, e a satisfação aumentou 40%.",
      rating: 5
    },
    {
      name: "Pedro Santos",
      role: "CEO, HealthCare+",
      content: "A integração com WhatsApp via META foi perfeita. Nossos pacientes adoram o atendimento rápido e humanizado 24h.",
      rating: 5
    },
    {
      name: "Ana Oliveira",
      role: "Diretora de CX, VendaOnline",
      content: "O dashboard do Blue integrado ao Ping nos dá insights incríveis. Sabemos exatamente como melhorar nosso atendimento.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Depoimentos de Clientes"
          subtitle="Veja como o Ping transformou o atendimento ao cliente de empresas líderes em seus segmentos"
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
