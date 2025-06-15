
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const SonixTestimonials = () => {
  const testimonials = [
    {
      name: "Marina Costa",
      role: "Diretora de RH, InnovaCorp",
      content: "Sonix revolucionou nossas reuniões. Agora temos transcrições perfeitas e insights valiosos sobre o engajamento da equipe. ROI fantástico.",
      rating: 5
    },
    {
      name: "Ricardo Santos",
      role: "Gerente de Atendimento, ServicePro",
      content: "A análise de sentimentos em tempo real nos ajudou a melhorar drasticamente a satisfação dos clientes. Ferramenta indispensável.",
      rating: 5
    },
    {
      name: "Fernanda Lima",
      role: "Head de Treinamento, EduTech",
      content: "Com Sonix, conseguimos otimizar nossos cursos baseado em dados reais de engajamento. Precisão impressionante na transcrição.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Depoimentos de Clientes"
          subtitle="Veja como o Sonix transformou a gestão de conteúdo de áudio em empresas líderes"
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

export default SonixTestimonials;
