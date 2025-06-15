
import React from 'react';
import { Card } from '@/components/ui/card';
import SectionTitle from '@/components/SectionTitle';
import OptimizedImage from '@/components/OptimizedImage';
import { Quote, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Maria Santos',
      position: 'Diretora de Eventos',
      company: 'Grupo Hospitalar Premium',
      content: 'A LEGAL transformou nosso congresso médico. O aluguel de internet para eventos foi impecável, com conectividade estável para mais de 2.000 participantes simultâneos. Suporte técnico excepcional!',
      rating: 5,
      event: 'Congresso Brasileiro de Cardiologia',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=80&h=80&fit=crop&crop=face'
    },
    {
      name: 'Carlos Rodrigues',
      position: 'Gerente de TI',
      company: 'TechExpo Brasil',
      content: 'Locação de internet temporária da LEGAL salvou nossa feira de tecnologia. Instalação em 18 horas, Wi-Fi 6 funcionando perfeitamente para demonstrações de IoT e realidade virtual.',
      rating: 5,
      event: 'TechExpo 2024',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face'
    },
    {
      name: 'Ana Oliveira',
      position: 'Coordenadora de Eventos',
      company: 'Federação Industrial',
      content: 'Infraestrutura de TI para feiras nunca foi tão profissional. Equipamentos de ponta, monitoramento 24/7 e equipe técnica sempre disponível. Recomendo para eventos corporativos.',
      rating: 5,
      event: 'Feira Industrial do Sudeste',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face'
    },
    {
      name: 'Roberto Lima',
      position: 'Diretor de Operações',
      company: 'Festival Cultural',
      content: 'Soluções de rede para eventos da LEGAL foram fundamentais para nosso festival. Wi-Fi para 15.000 pessoas, streaming ao vivo e pagamentos digitais sem instabilidade.',
      rating: 5,
      event: 'Festival de Música e Arte',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face'
    }
  ];

  const clientLogos = [
    { 
      name: 'Hospital Sírio-Libanês', 
      logo: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=120&h=60&fit=crop',
      alt: 'Logo do Hospital Sírio-Libanês - Cliente LEGAL para eventos médicos'
    },
    { 
      name: 'Grupo Fleury', 
      logo: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=120&h=60&fit=crop',
      alt: 'Logo do Grupo Fleury - Soluções de conectividade para laboratórios'
    },
    { 
      name: 'FIESP', 
      logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=120&h=60&fit=crop',
      alt: 'Logo da FIESP - Infraestrutura de TI para feiras industriais'
    },
    { 
      name: 'CNI', 
      logo: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=120&h=60&fit=crop',
      alt: 'Logo da CNI - Eventos corporativos com conectividade premium'
    },
    { 
      name: 'Sebrae', 
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop',
      alt: 'Logo do Sebrae - Soluções de rede para eventos empresariais'
    },
    { 
      name: 'Google', 
      logo: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=120&h=60&fit=crop',
      alt: 'Logo do Google - Parceiro em soluções tecnológicas'
    },
    { 
      name: 'Microsoft', 
      logo: 'https://images.unsplash.com/photo-1633114128174-2f8aa49759b0?w=120&h=60&fit=crop',
      alt: 'Logo da Microsoft - Integração com plataformas empresariais'
    },
    { 
      name: 'AWS', 
      logo: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=120&h=60&fit=crop',
      alt: 'Logo da AWS - Infraestrutura cloud para eventos'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Clientes que Confiam na LEGAL"
          subtitle="Mais de 5.000 eventos realizados com sucesso. Veja o que nossos clientes falam sobre nossas soluções de locação de equipamentos para eventos."
          center
        />
        
        {/* Client Logos */}
        <div className="mb-16">
          <h3 className="text-center text-lg font-bold text-legal mb-8">Empresas que já utilizaram nossos serviços:</h3>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-8 items-center">
            {clientLogos.map((client, index) => (
              <div key={index} className="text-center opacity-70 hover:opacity-100 transition-opacity duration-300">
                <OptimizedImage
                  src={client.logo}
                  alt={client.alt}
                  width={120}
                  height={60}
                  className="w-full h-12 object-contain bg-white rounded-lg shadow-sm border border-gray-200 p-2"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-2 mb-4">
                <Quote className="w-6 h-6 text-legal" />
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              
              <blockquote className="text-gray-700 mb-6 italic leading-relaxed">
                "{testimonial.content}"
              </blockquote>
              
              <div className="border-t pt-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <OptimizedImage
                      src={testimonial.avatar}
                      alt={`Foto de ${testimonial.name}, ${testimonial.position} na ${testimonial.company}`}
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-bold text-legal">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.position}</p>
                      <p className="text-sm font-medium text-legal-purple">{testimonial.company}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500 font-medium">Evento:</p>
                    <p className="text-xs text-legal">{testimonial.event}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Case Study CTA */}
        <div className="text-center mt-12 p-8 bg-legal/5 rounded-xl">
          <h3 className="text-2xl font-bold text-legal mb-4">Quer ver mais casos de sucesso?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Acesse nossos estudos de caso detalhados e descubra como a LEGAL transformou eventos de diferentes segmentos com soluções de conectividade personalizadas.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-legal hover:bg-legal/90 text-white px-6 py-3 rounded-lg font-bold transition-colors">
              Ver Estudos de Caso
            </button>
            <button className="border border-legal text-legal hover:bg-legal hover:text-white px-6 py-3 rounded-lg font-bold transition-colors">
              Solicitar Referências
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
