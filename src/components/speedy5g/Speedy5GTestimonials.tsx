
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const Speedy5GTestimonials = () => {
  const testimonials = [
    {
      name: "Eduardo Santos",
      role: "CTO, MediaTech",
      content: "Speedy5G transformou nossa produção. Upload de vídeos 4K que levava horas agora acontece em minutos. Produtividade revolucionária.",
      rating: 5
    },
    {
      name: "Patricia Lima",
      role: "Diretora de TI, FinanceGroup",
      content: "Latência de 1ms mudou nossas operações de trading. Velocidade e confiabilidade excepcionais para ambientes críticos.",
      rating: 5
    },
    {
      name: "Carlos Rodrigues",
      role: "CEO, GameStudio",
      content: "Para e-sports profissional, Speedy5G é game changer. Zero lag, máxima performance. Nossos jogadores têm vantagem competitiva real.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Depoimentos de Clientes"
          subtitle="Veja como o Speedy5G transformou a conectividade de empresas líderes"
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

export default Speedy5GTestimonials;
