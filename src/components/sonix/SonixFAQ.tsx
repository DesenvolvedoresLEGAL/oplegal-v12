
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const SonixFAQ = () => {
  const faqs = [
    {
      question: "Como funciona o sistema de entrega do Sonix?",
      answer: "O Sonix utiliza drones autônomos equipados com IA avançada. Você faz o pedido pelo app, nosso sistema otimiza a rota automaticamente, o drone decola e entrega seu pedido em até 15 minutos com precisão GPS centimétrica."
    },
    {
      question: "Qual é o peso máximo que o drone pode carregar?",
      answer: "Nossos drones Sonix podem transportar até 3kg com segurança total. Isso inclui a maioria dos medicamentos, documentos, alimentos e produtos do dia a dia."
    },
    {
      question: "O serviço funciona em condições climáticas adversas?",
      answer: "Nossos drones são resistentes à chuva leve e ventos de até 40km/h. Em condições extremas, o sistema automaticamente reagenda a entrega para garantir segurança total."
    },
    {
      question: "Como é garantida a segurança das entregas?",
      answer: "Utilizamos protocolos de segurança militares, certificação ANAC, seguros completos, criptografia de dados e confirmação biométrica para máxima segurança em todas as entregas."
    },
    {
      question: "Posso rastrear minha entrega em tempo real?",
      answer: "Sim! Nosso app premium permite acompanhar sua entrega em tempo real com GPS de alta precisão, receber notificações automáticas e ter acesso ao ETA dinâmico atualizado constantemente."
    },
    {
      question: "Qual é a área de cobertura do Sonix?",
      answer: "Atualmente cobrimos as principais regiões metropolitanas do Brasil com raio de até 20km. Estamos expandindo rapidamente para cobrir todo o território nacional."
    },
    {
      question: "Como funciona o controle de temperatura para produtos sensíveis?",
      answer: "Nossos drones possuem compartimentos climatizados que mantêm temperatura controlada entre 2°C e 25°C, ideal para medicamentos, alimentos e produtos sensíveis."
    },
    {
      question: "Quanto custa o serviço Sonix?",
      answer: "Nosso preço inicia em R$ 35/km com valor fixo transparente. Para clientes frequentes, oferecemos planos de assinatura com descontos progressivos e benefícios exclusivos."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Perguntas Frequentes"
          subtitle="Tire todas suas dúvidas sobre o serviço premium de delivery com drones Sonix"
          center
        />
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-legal/20">
                <AccordionTrigger className="text-left font-bold text-legal hover:text-legal-purple">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default SonixFAQ;
