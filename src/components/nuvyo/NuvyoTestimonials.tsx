
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const NuvyoTestimonials = () => {
  const testimonials = [
    {
      name: "Marina Oliveira",
      role: "Wedding Planner",
      company: "Momentos Especiais",
      content: "O Nuvyo transformou completamente a forma como documentamos nossos casamentos. As imagens aéreas capturam a emoção e a beleza do evento de uma maneira única e cinematográfica.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616c273b61c?auto=format&fit=crop&w=150&h=150"
    },
    {
      name: "Carlos Mendes",
      role: "Diretor de Marketing",
      company: "Construtora Horizonte",
      content: "As filmagens aéreas dos nossos empreendimentos aumentaram significativamente o interesse dos compradores. A qualidade e profissionalismo da equipe são excepcionais.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150"
    },
    {
      name: "Ana Paula Santos",
      role: "Produtora Audiovisual",
      company: "Criativa Filmes",
      content: "Trabalhamos com o Nuvyo em várias produções comerciais. A agilidade na execução e a qualidade do material final superam nossas expectativas a cada projeto.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150"
    },
    {
      name: "Roberto Silva",
      role: "Gerente de Eventos",
      company: "Expo Center",
      content: "Para nossos eventos corporativos, o Nuvyo oferece uma perspectiva única que valoriza nossos espaços e cria conteúdo impactante para nossas campanhas de marketing.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150"
    },
    {
      name: "Juliana Costa",
      role: "Proprietária",
      company: "Pousada Vista Mar",
      content: "As imagens aéreas da nossa pousada feitas pelo Nuvyo revolucionaram nossa estratégia de marketing digital. O número de reservas aumentou 40% após a campanha.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150"
    },
    {
      name: "Marcos Ferreira",
      role: "Engenheiro Civil",
      company: "Estrutural Engenharia",
      content: "Para inspeção de estruturas, o Nuvyo oferece precisão e segurança incomparáveis. Os relatórios fotográficos são detalhados e de altíssima qualidade técnica.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&h=150"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="O Que Nossos Clientes Dizem"
          subtitle="Depoimentos reais de profissionais que confiam no Nuvyo para seus projetos mais importantes"
          center
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gradient-to-br from-legal/5 to-legal-purple/5 border-legal/20 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-legal-cyan mr-3" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-legal">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-legal-purple font-semibold">{testimonial.company}</p>
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

export default NuvyoTestimonials;
