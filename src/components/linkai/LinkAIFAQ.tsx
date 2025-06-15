
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const LinkAIFAQ = () => {
  const faqs = [
    {
      question: "Como o LinkAI garante a precisão dos matches?",
      answer: "Nossa IA utiliza algoritmos de machine learning avançados que analisam mais de 50 pontos de dados por participante, incluindo objetivos profissionais, setor de atuação, interesses específicos, disponibilidade e histórico de networking. A precisão de 95% é resultado de constante aprendizado e refinamento dos algoritmos."
    },
    {
      question: "LinkAI funciona com eventos de qualquer tamanho?",
      answer: "Sim! LinkAI é escalável e funciona desde eventos intimistas com 50 participantes até grandes conferências com mais de 10.000 pessoas. A IA se adapta automaticamente ao volume de dados e mantém a qualidade das sugestões independente do tamanho do evento."
    },
    {
      question: "Como é feita a integração com outros sistemas de evento?",
      answer: "LinkAI possui APIs robustas que se integram facilmente com as principais plataformas de gestão de eventos, CRMs e sistemas de credenciamento. Nossa equipe técnica oferece suporte completo durante todo o processo de integração."
    },
    {
      question: "Os dados dos participantes ficam seguros?",
      answer: "Absolutamente. LinkAI é 100% compatível com LGPD e utiliza criptografia de ponta a ponta. Todos os dados são processados em servidores seguros no Brasil, e os participantes têm controle total sobre suas informações e conexões."
    },
    {
      question: "Qual o tempo de implementação do LinkAI?",
      answer: "A implementação padrão leva entre 2-4 semanas, incluindo configuração, treinamento da IA com dados específicos do evento, integração com sistemas existentes e treinamento da equipe. Para eventos urgentes, oferecemos implementação expressa em até 1 semana."
    },
    {
      question: "LinkAI oferece suporte durante o evento?",
      answer: "Sim! Nossa equipe oferece suporte técnico 24/7 durante todo o evento, monitoramento em tempo real da performance da IA, e ajustes imediatos se necessário. Também fornecemos analytics ao vivo para os organizadores acompanharem o sucesso do networking."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Perguntas Frequentes"
          subtitle="Esclareça suas dúvidas sobre LinkAI e como revolucionar o networking dos seus eventos"
          center
        />
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg border shadow-sm">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                  <span className="font-semibold text-legal">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default LinkAIFAQ;
