
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { Star, Quote } from 'lucide-react';

const BrilixTestimonials = () => {
  const testimonials = [
    {
      name: "Carlos Mendes",
      position: "Gerente de Facilities",
      company: "Torres Corporate Center",
      image: "/api/placeholder/80/80",
      rating: 5,
      content: "O Brilix revolucionou nossa manutenção predial. Reduzimos custos em 65% e eliminamos totalmente os riscos de trabalho em altura. A qualidade da limpeza é excepcional e o prazo de execução impressiona nossos inquilinos."
    },
    {
      name: "Ana Paula Silva",
      position: "Diretora de Operações",
      company: "SolarTech Energia",
      image: "/api/placeholder/80/80",
      rating: 5,
      content: "Nossos painéis solares nunca estiveram tão limpos e eficientes. O Brilix aumentou nossa geração de energia em 28% e a manutenção preventiva identificou problemas que passariam despercebidos. Investimento que se paga sozinho."
    },
    {
      name: "Roberto Oliveira",
      position: "Coordenador de Manutenção",
      company: "Shopping Metrópole",
      image: "/api/placeholder/80/80",
      rating: 5,
      content: "Conseguimos fazer a limpeza completa da cobertura do shopping sem interromper o funcionamento. Os drones trabalham com precisão cirúrgica e o resultado é impecável. Nossa equipe agora se dedica a atividades mais estratégicas."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-legal-purple/5 to-legal-cyan/5">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Histórias de Sucesso"
          subtitle="Veja como empresas líderes transformaram suas operações com o Brilix"
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <div className="relative mb-6">
                <Quote className="w-8 h-8 text-legal-cyan/20 absolute -top-2 -left-2" />
                <p className="text-gray-700 leading-relaxed italic pl-6">
                  "{testimonial.content}"
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-legal">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                  <p className="text-sm font-medium text-legal-purple">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-legal font-bold">4.9/5</span>
            <span className="text-gray-600">• 150+ clientes satisfeitos</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrilixTestimonials;
