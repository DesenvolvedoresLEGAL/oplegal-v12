
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const Blue6Testimonials = () => {
  const testimonials = [
    {
      name: "Pedro Martins",
      role: "Gerente de TI",
      company: "EventMax",
      content: "O Blue6 revolucionou nossos eventos. Conseguimos atender 800 pessoas simultâneas sem qualquer instabilidade. O captive portal nos trouxe dados valiosos de participantes.",
      rating: 5,
      results: "800 usuários simultâneos"
    },
    {
      name: "Carla Souza",
      role: "Diretora de Facilities",
      company: "CorporateHub",
      content: "Implementamos o Blue6 em nosso escritório de 300 colaboradores. A gestão centralizada e os relatórios de uso nos deram controle total da rede corporativa.",
      rating: 5,
      results: "300% mais estabilidade"
    },
    {
      name: "Prof. João Silva",
      role: "Coordenador de TI",
      company: "Universidade Digital",
      content: "O controle de conteúdo e os relatórios acadêmicos do Blue6 são excepcionais. Conseguimos criar políticas específicas para cada área do campus universitário.",
      rating: 5,
      results: "5 mil alunos conectados"
    },
    {
      name: "Amanda Costa",
      role: "Gerente Geral",
      company: "Hotel Inovação",
      content: "Nossos hóspedes elogiam constantemente a qualidade do WiFi. O portal personalizado com nossa marca melhorou nossa imagem e coletamos feedback automaticamente.",
      rating: 5,
      results: "95% satisfação hóspedes"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-legal/5 to-legal-purple/5">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Histórias de Sucesso"
          subtitle="Veja como empresas líderes usam o Blue6 para conectividade excepcional"
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <div className="relative mb-6">
                  <Quote className="absolute top-0 left-0 w-8 h-8 text-legal/20 -translate-x-2 -translate-y-2" />
                  <p className="text-gray-700 italic leading-relaxed pl-6">
                    "{testimonial.content}"
                  </p>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-legal">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm font-semibold text-legal-purple">{testimonial.company}</div>
                  </div>
                  <div className="bg-legal-green/10 text-legal-green px-3 py-1 rounded-full text-sm font-bold">
                    {testimonial.results}
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

export default Blue6Testimonials;
