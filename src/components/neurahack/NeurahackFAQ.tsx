
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const NeurahackFAQ = () => {
  const faqs = [
    {
      question: "Como o Neurahack se diferencia de outras ferramentas de segurança?",
      answer: "Neurahack utiliza IA avançada para análise preditiva de ameaças, execução automatizada de pentests e resposta em tempo real. Enquanto outras ferramentas são reativas, somos proativos na identificação e prevenção de vulnerabilidades."
    },
    {
      question: "Quanto tempo leva para implementar o Neurahack?",
      answer: "A implementação inicial leva de 2-5 dias dependendo do tamanho da infraestrutura. Nossa equipe especializada garante integração seamless sem interrupção dos seus sistemas críticos."
    },
    {
      question: "O Neurahack atende aos requisitos de compliance?",
      answer: "Sim, Neurahack foi desenvolvido para atender LGPD, ISO 27001, PCI-DSS, SOX e outras regulamentações. Geramos automaticamente a documentação necessária para auditorias."
    },
    {
      question: "Como funciona o monitoramento 24/7?",
      answer: "Nossa IA monitora continuamente sua infraestrutura, analisando tráfego, comportamentos anômalos e novas vulnerabilidades. Alertas automáticos são enviados com classificação de criticidade e sugestões de remediação."
    },
    {
      question: "Qual o ROI esperado com o Neurahack?",
      answer: "Clientes reportam ROI de 300-500% no primeiro ano através da redução de incidentes de segurança, economia em consultorias e ferramentas, além da prevenção de custos com vazamentos de dados."
    },
    {
      question: "O Neurahack funciona em ambientes cloud e on-premise?",
      answer: "Sim, nossa solução é híbrida e funciona em AWS, Azure, GCP, ambientes on-premise e infraestruturas mistas. Oferecemos total flexibilidade de deployment."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Perguntas Frequentes"
          subtitle="Esclareça suas dúvidas sobre nossa plataforma de ethical hacking com IA"
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

export default NeurahackFAQ;
