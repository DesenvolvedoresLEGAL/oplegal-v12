
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';

const HumanoidFAQ = () => {
  const faqs = [
    {
      question: "Como o Humanoid consegue interagir de forma tão natural?",
      answer: "O Humanoid utiliza IA avançada com processamento de linguagem natural, reconhecimento facial e gestual, além de algoritmos de machine learning que permitem conversação fluida e movimentos naturais, criando uma experiência de interação autêntica e humanizada."
    },
    {
      question: "Qual é a autonomia e capacidade operacional do Humanoid?",
      answer: "Nosso Humanoid opera por até 8 horas contínuas, pode interagir com múltiplas pessoas simultaneamente, suporta mais de 15 idiomas e processa milhares de interações por dia mantendo performance consistente."
    },
    {
      question: "É seguro ter um robô humanóide no evento?",
      answer: "Absolutamente. O Humanoid possui certificações internacionais de segurança robótica, sensores de proximidade avançados, protocolos de segurança redundantes e supervisão técnica contínua durante toda operação."
    },
    {
      question: "Como é feita a personalização para cada evento?",
      answer: "Configuramos a personalidade, conhecimento específico, aparência visual, tom de voz e funções do Humanoid de acordo com seu evento. Incluímos informações sobre sua marca, produtos e objetivos específicos na programação da IA."
    },
    {
      question: "O Humanoid pode substituir funcionários humanos?",
      answer: "O Humanoid é um complemento, não um substituto. Ele potencializa sua equipe humana assumindo tarefas repetitivas e fornecendo suporte 24/7, permitindo que seus colaboradores foquem em interações mais complexas e estratégicas."
    },
    {
      question: "Que tipo de dados o Humanoid coleta?",
      answer: "Coletamos apenas dados necessários para interação (preferências expressas, perguntas frequentes, feedback). Todos os dados são processados conforme LGPD, com criptografia total e opção de exclusão a qualquer momento."
    },
    {
      question: "Qual o tempo de setup e configuração?",
      answer: "O setup completo leva 2-3 dias incluindo instalação, configuração personalizada, treinamento da IA e testes. Para eventos recorrentes, o tempo de setup é reduzido para algumas horas."
    },
    {
      question: "Como funciona o suporte técnico durante o evento?",
      answer: "Oferecemos suporte técnico dedicado 24/7 durante todo o evento, monitoramento remoto em tempo real, backup de sistemas e técnicos especializados no local para eventos de grande porte."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Perguntas Frequentes"
          subtitle="Esclareça suas dúvidas sobre o Humanoid e nossa tecnologia robótica"
          center
        />
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-legal hover:text-legal-purple">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">Não encontrou sua resposta?</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-legal hover:bg-legal/90">
                Falar com Especialista
              </Button>
              <Button size="lg" variant="outline" className="border-legal text-legal hover:bg-legal hover:text-white">
                Central de Ajuda
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HumanoidFAQ;
