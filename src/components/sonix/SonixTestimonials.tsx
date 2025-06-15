
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const SonixTestimonials = () => {
  const testimonials = [
    {
      name: "Dr. Marina Santos",
      role: "Médica Emergencista",
      company: "Hospital São Lucas",
      content: "O Sonix revolucionou nossa logística de medicamentos. Em emergências, conseguimos medicamentos essenciais em menos de 10 minutos. Salvou vidas literalmente.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=150&h=150"
    },
    {
      name: "Chef Ricardo Oliveira",
      role: "Chef Executivo",
      company: "Restaurante Gourmet Plus",
      content: "A qualidade dos nossos pratos chega intacta aos clientes VIP. O controle de temperatura é perfeito e a velocidade impressiona. Nossos clientes adoram a experiência.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150"
    },
    {
      name: "Ana Carolina Lima",
      role: "CEO",
      company: "Tech Startup Solutions",
      content: "Para documentos urgentes e contratos importantes, o Sonix é nossa primeira escolha. Segurança máxima, rapidez incomparável e um app fantástico.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b332b1eb?auto=format&fit=crop&w=150&h=150"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="O Que Nossos Clientes Dizem"
          subtitle="Experiências reais de quem confia no Sonix para suas entregas mais importantes"
          center
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white shadow-xl border-legal/20 hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <Quote className="w-8 h-8 text-legal-cyan mb-4" />
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-legal">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-legal-cyan font-medium">{testimonial.company}</p>
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

export default SonixTestimonials;
