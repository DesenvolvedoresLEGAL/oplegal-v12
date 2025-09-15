import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, TrendingUp, Clock, Users } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';

const GalaxiaTestimonialsEnhanced = () => {
  const testimonials = [
    {
      name: "Carlos Mendes",
      role: "CTO",
      company: "TechCorp Brasil",
      image: "/lovable-uploads/f021f3b7-83a4-4684-b231-781e217a8261.png",
      rating: 5,
      quote: "GalaxIA transformou nossa operação. A redução de 45% nos custos operacionais e o aumento de 3x na velocidade de processamento foram impressionantes.",
      metrics: {
        costReduction: "45%",
        performanceGain: "3x",
        implementation: "2 semanas"
      }
    },
    {
      name: "Ana Silva",
      role: "Diretora de Inovação", 
      company: "RetailMax",
      image: "/lovable-uploads/ea530ee5-86cf-42fb-994c-a41dbcaafa9f.png",
      rating: 5,
      quote: "O sistema de recomendações em tempo real aumentou nossas conversões em 67%. O ROI foi comprovado já no primeiro mês de operação.",
      metrics: {
        conversionIncrease: "67%",
        roi: "1 mês",
        uptime: "99.98%"
      }
    },
    {
      name: "Dr. Roberto Costa",
      role: "Diretor Médico",
      company: "Hospital Inovare",
      image: "/lovable-uploads/4791a962-75ca-4df1-a2cf-06458c7a50f9.png", 
      rating: 5,
      quote: "A análise de imagens médicas com IA reduziu o tempo de diagnóstico em 60% mantendo 99.5% de precisão. Revolucionou nosso atendimento.",
      metrics: {
        timeReduction: "60%",
        accuracy: "99.5%",
        patientsServed: "10x mais"
      }
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Casos de Sucesso Comprovados"
          subtitle="Resultados mensuráveis e transformação real em diferentes setores"
          center
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8">
                {/* Rating */}
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-gray-700 mb-6 italic text-lg leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                {/* Metrics */}
                <div className="bg-legal/5 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-legal mb-3 text-sm uppercase tracking-wide">Resultados Mensuráveis</h4>
                  <div className="grid grid-cols-3 gap-2 text-center">
                    {Object.entries(testimonial.metrics).map(([key, value], idx) => (
                      <div key={idx}>
                        <div className="text-2xl font-black text-legal">{value}</div>
                        <div className="text-xs text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Customer Info */}
                <div className="flex items-center">
                  <Avatar className="w-12 h-12 mr-4">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm font-medium text-legal">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Success Metrics */}
        <div className="mt-16 bg-gradient-to-r from-legal/10 to-legal-purple/10 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-legal text-center mb-8">Impacto Consolidado</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <TrendingUp className="w-8 h-8 text-legal mx-auto mb-2" />
              <div className="text-3xl font-black text-legal">₢47M</div>
              <div className="text-sm text-gray-600">Economia Total Gerada</div>
            </div>
            <div>
              <Clock className="w-8 h-8 text-legal mx-auto mb-2" />
              <div className="text-3xl font-black text-legal">85%</div>
              <div className="text-sm text-gray-600">Redução Tempo Médio</div>
            </div>
            <div>
              <Users className="w-8 h-8 text-legal mx-auto mb-2" />
              <div className="text-3xl font-black text-legal">150+</div>
              <div className="text-sm text-gray-600">Empresas Atendidas</div>
            </div>
            <div>
              <Star className="w-8 h-8 text-legal mx-auto mb-2" />
              <div className="text-3xl font-black text-legal">98%</div>
              <div className="text-sm text-gray-600">Satisfação NPS</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalaxiaTestimonialsEnhanced;