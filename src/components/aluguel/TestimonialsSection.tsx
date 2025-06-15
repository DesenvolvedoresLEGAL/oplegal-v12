
import React from 'react';
import { Card } from '@/components/ui/card';
import SectionTitle from '@/components/SectionTitle';
import { Quote, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Maria Santos',
      position: 'Diretora de Eventos',
      company: 'Grupo Hospitalar Premium',
      content: 'A LEGAL transformou nosso congresso médico. O aluguel de internet para eventos foi impecável, com conectividade estável para mais de 2.000 participantes simultâneos. Suporte técnico excepcional!',
      rating: 5,
      event: 'Congresso Brasileiro de Cardiologia'
    },
    {
      name: 'Carlos Rodrigues',
      position: 'Gerente de TI',
      company: 'TechExpo Brasil',
      content: 'Locação de internet temporária da LEGAL salvou nossa feira de tecnologia. Instalação em 18 horas, Wi-Fi 6 funcionando perfeitamente para demonstrações de IoT e realidade virtual.',
      rating: 5,
      event: 'TechExpo 2024'
    },
    {
      name: 'Ana Oliveira',
      position: 'Coordenadora de Eventos',
      company: 'Federação Industrial',
      content: 'Infraestrutura de TI para feiras nunca foi tão profissional. Equipamentos de ponta, monitoramento 24/7 e equipe técnica sempre disponível. Recomendo para eventos corporativos.',
      rating: 5,
      event: 'Feira Industrial do Sudeste'
    },
    {
      name: 'Roberto Lima',
      position: 'Diretor de Operações',
      company: 'Festival Cultural',
      content: 'Soluções de rede para eventos da LEGAL foram fundamentais para nosso festival. Wi-Fi para 15.000 pessoas, streaming ao vivo e pagamentos digitais sem instabilidade.',
      rating: 5,
      event: 'Festival de Música e Arte'
    }
  ];

  const clientLogos = [
    { name: 'Hospital Sírio-Libanês', logo: '/images/clients/sirio-libanes.png' },
    { name: 'Grupo Fleury', logo: '/images/clients/fleury.png' },
    { name: 'FIESP', logo: '/images/clients/fiesp.png' },
    { name: 'CNI', logo: '/images/clients/cni.png' },
    { name: 'Sebrae', logo: '/images/clients/sebrae.png' },
    { name: 'Google', logo: '/images/clients/google.png' },
    { name: 'Microsoft', logo: '/images/clients/microsoft.png' },
    { name: 'AWS', logo: '/images/clients/aws.png' }
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
          <div className="grid grid-cols-4 md:grid-cols-8 gap-8 items-center opacity-70">
            {clientLogos.map((client, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto bg-white rounded-lg shadow-sm flex items-center justify-center border border-gray-200">
                  <span className="text-xs font-bold text-gray-600">{client.name.split(' ')[0]}</span>
                </div>
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
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-bold text-legal">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                    <p className="text-sm font-medium text-legal-purple">{testimonial.company}</p>
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
