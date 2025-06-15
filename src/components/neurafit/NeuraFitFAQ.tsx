
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const NeuraFitFAQ = () => {
  const faqs = [
    {
      question: "Como NeuraFit se diferencia de outros apps de treinamento cerebral?",
      answer: "NeuraFit integra neurociência com PNL, física quântica e espiritualidade em uma abordagem holística. Nossa gamificação é inspirada no Duolingo, com mentoria de especialistas reconhecidos em suas áreas."
    },
    {
      question: "Qual é a base científica dos exercícios?",
      answer: "Todos os jogos e exercícios são baseados em pesquisas de neurociência e psicologia cognitiva. Trabalhamos com neurocientistas e psicólogos para garantir eficácia comprovada."
    },
    {
      question: "Como funciona o sistema de gamificação?",
      answer: "Sistema de níveis, pontos, conquistas e desafios diários mantém você engajado. Cada exercício concluído gera XP, desbloqueando novos conteúdos e funcionalidades."
    },
    {
      question: "Quem são os mentores da plataforma?",
      answer: "Contamos com especialistas reconhecidos em neurociência, PNL, física quântica e desenvolvimento espiritual, que oferecem conselhos personalizados baseados no seu progresso."
    },
    {
      question: "Quanto tempo preciso dedicar diariamente?",
      answer: "Recomendamos 15-30 minutos diários. A plataforma se adapta à sua rotina, oferecendo exercícios curtos que podem ser feitos em qualquer momento do dia."
    },
    {
      question: "NeuraFit funciona em dispositivos móveis?",
      answer: "Sim, disponível para iOS, Android e web. Sincronização automática permite continuar seu progresso em qualquer dispositivo."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Perguntas Frequentes"
          subtitle="Esclareça suas dúvidas sobre nossa plataforma de desenvolvimento cognitivo"
          center
        />
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold text-legal">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
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

export default NeuraFitFAQ;
