
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const NuvyoFAQ = () => {
  const faqs = [
    {
      question: "Quais são os tipos de drones utilizados?",
      answer: "Utilizamos drones profissionais como DJI Inspire 2, DJI Mavic 3 Pro e DJI Air 2S, todos equipados com câmeras de alta resolução e sistemas de estabilização avançados para garantir a melhor qualidade de imagem."
    },
    {
      question: "É necessária autorização para voos urbanos?",
      answer: "Sim, todos os nossos pilotos são certificados pela ANAC e obtemos todas as autorizações necessárias junto ao DECEA antes de cada voo. Trabalhamos sempre dentro da legalidade e com total segurança."
    },
    {
      question: "Qual é o prazo de entrega dos materiais?",
      answer: "O prazo padrão é de até 5 dias úteis para entrega do material editado. Oferecemos também serviço expresso com entrega em 24h mediante taxa adicional. Preview das imagens é disponibilizado em até 2 dias."
    },
    {
      question: "Vocês trabalham em qualquer localização?",
      answer: "Atendemos em todo o território nacional. Para localizações em zonas de restrição de voo, verificamos previamente a viabilidade e obtemos as autorizações específicas necessárias."
    },
    {
      question: "Quais formatos de arquivo são entregues?",
      answer: "Entregamos vídeos em 4K/8K nos formatos MP4 e MOV, e fotos em alta resolução nos formatos JPEG e RAW. Todo material é disponibilizado através de plataforma segura com download ilimitado."
    },
    {
      question: "É possível acompanhar o voo em tempo real?",
      answer: "Sim, oferecemos transmissão ao vivo durante o voo através de dispositivos móveis ou monitores dedicados, permitindo que você acompanhe a captação em tempo real e faça ajustes se necessário."
    },
    {
      question: "Vocês possuem seguro para os equipamentos?",
      answer: "Sim, todos os nossos equipamentos possuem seguro completo contra danos e roubo. Também temos seguro de responsabilidade civil contra terceiros, garantindo total tranquilidade durante a operação."
    },
    {
      question: "Como funciona o processo de briefing?",
      answer: "Realizamos uma reunião detalhada para entender seus objetivos, estilo desejado, locações, horários preferenciais e requisitos específicos. Este briefing é fundamental para garantir que o resultado atenda suas expectativas."
    },
    {
      question: "Vocês trabalham em eventos noturnos?",
      answer: "Sim, nossos drones estão equipados com sistemas de iluminação LED e câmeras com excelente performance em baixa luminosidade, permitindo captações noturnas de alta qualidade."
    },
    {
      question: "É possível fazer alterações após a primeira edição?",
      answer: "Sim, incluímos até 2 rodadas de revisão no valor do serviço. Revisões adicionais podem ser solicitadas mediante orçamento específico, dependendo da complexidade das alterações."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Perguntas Frequentes"
          subtitle="Tire suas dúvidas sobre nossos serviços de filmagem e fotografia com drones"
          center
        />
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-lg shadow-md border-legal/20 overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-legal hover:text-legal-purple hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
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

export default NuvyoFAQ;
