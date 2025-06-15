
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const BlueTestimonials = () => {
  const testimonials = [
    {
      name: "Carlos Silva",
      role: "CEO",
      company: "TechVarejo S.A.",
      content: "O Blue transformou completamente nossa capacidade de análise. Em 3 meses, aumentamos 40% a margem de lucro identificando oportunidades que estavam invisíveis nos relatórios tradicionais.",
      rating: 5,
      results: "↑40% margem de lucro"
    },
    {
      name: "Marina Santos",
      role: "Diretora de Operações",
      company: "HealthCorp",
      content: "A previsão de demanda do Blue nos permitiu reduzir 60% o desperdício de medicamentos e melhorar significativamente o atendimento aos pacientes. ROI fantástico!",
      rating: 5,
      results: "↓60% desperdício"
    },
    {
      name: "Roberto Oliveira",
      role: "CFO",
      company: "IndustriaMax",
      content: "Implementamos o Blue para manutenção preditiva e os resultados superaram expectativas. Reduzimos paradas não programadas em 70% e economizamos milhões em manutenção corretiva.",
      rating: 5,
      results: "↓70% paradas não programadas"
    },
    {
      name: "Ana Rodrigues",
      role: "Head of Data",
      company: "EduTech Brasil",
      content: "O Blue democratizou o acesso aos dados na nossa organização. Agora todos os gestores tomam decisões baseadas em insights precisos, não mais em intuição.",
      rating: 5,
      results: "100% decisões data-driven"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-legal/5 to-legal-purple/5">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Histórias de Sucesso"
          subtitle="Veja como empresas líderes usam o Blue para transformar dados em resultados excepcionais"
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

export default BlueTestimonials;
