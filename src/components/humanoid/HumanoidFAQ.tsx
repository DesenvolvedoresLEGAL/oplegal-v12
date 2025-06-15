
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';

const HumanoidFAQ = () => {
  const faqs = [
    {
      question: "Como o Humanoid identifica leads qualificados na internet?",
      answer: "O Humanoid utiliza IA avançada para rastrear sinais de intenção de compra em múltiplas fontes: redes sociais, fóruns, sites de review, job boards e outras plataformas. Analisa comportamentos, menções de problemas e necessidades específicas do seu segmento."
    },
    {
      question: "Quais CRMs são compatíveis com a integração automática?",
      answer: "Integramos com os principais CRMs do mercado: Salesforce, HubSpot, Pipedrive, RD Station, Agendor, e muitos outros. Também oferecemos APIs para CRMs customizados e sistemas proprietários."
    },
    {
      question: "Como funciona a qualificação via WhatsApp e ligações?",
      answer: "Após captar o lead, nossa IA inicia conversas via WhatsApp (integração com Ping) com abordagem personalizada. Para leads de maior valor, realiza ligações com IA conversacional natural que qualifica budget, autoridade, necessidade e timing (BANT)."
    },
    {
      question: "A IA conversacional nas ligações é detectada pelos prospects?",
      answer: "Nossa IA conversacional é extremamente natural e humanizada. Utiliza tecnologia de última geração com entonação, pausas e respostas contextuais. A taxa de detecção é inferior a 5%, e quando detectada, é vista positivamente pela eficiência."
    },
    {
      question: "Como garanto que os leads são do meu segmento ideal?",
      answer: "Durante o setup, mapeamos seu ICP (Ideal Customer Profile) com critérios específicos: segmento, tamanho da empresa, localização, tecnologias usadas, comportamentos digitais e sinais de intenção. A IA aprende continuamente com seus melhores clientes."
    },
    {
      question: "Qual o volume de leads que posso esperar?",
      answer: "O volume varia por segmento e ICP, mas clientes típicos veem aumento de 200-400% na captação qualificada. Em média, geramos 50-200 leads qualificados por mês, dependendo do nicho e configurações."
    },
    {
      question: "Como protegem os dados dos leads captados?",
      answer: "Seguimos rigorosamente a LGPD e melhores práticas de segurança. Todos os dados são criptografados, armazenados em servidores seguros no Brasil, e temos políticas claras de retenção e exclusão de dados."
    },
    {
      question: "Posso personalizar as mensagens e abordagens da IA?",
      answer: "Totalmente personalizável. Definimos tom de voz, scripts base, objeções comuns, proposta de valor e abordagem específica para seu negócio. A IA mantém consistência da marca em todas as interações."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Perguntas Frequentes"
          subtitle="Esclareça suas dúvidas sobre captação de leads e SDR com inteligência artificial"
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
            <p className="text-gray-600 mb-6">Ainda tem dúvidas sobre captação automatizada?</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-legal hover:bg-legal/90">
                Falar com Especialista
              </Button>
              <Button size="lg" variant="outline" className="border-legal text-legal hover:bg-legal hover:text-white">
                Ver Mais Cases
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HumanoidFAQ;
