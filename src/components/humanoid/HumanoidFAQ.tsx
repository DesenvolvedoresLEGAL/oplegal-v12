
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';

const HumanoidFAQ = () => {
  const faqs = [
    {
      question: "O que é o HUMANOID™?",
      answer: "O HUMANOID é um workspace de Inteligência Artificial que conecta dados, processos e agentes produtivos para que sua empresa entenda, decida e aja automaticamente — com governança, segurança e ROI mensurável."
    },
    {
      question: "Como funciona o sistema de créditos (VOLTS™)?",
      answer: "O HUMANOID opera por créditos de execução chamados VOLTS. Cada VOLT representa uma operação inteligente realizada por seus agentes. Os créditos são consumidos por ações, inferências de IA, voz e automações."
    },
    {
      question: "Quais sistemas o HUMANOID integra?",
      answer: "O HUMANOID se conecta com CRM, ERP, planilhas, WhatsApp, e-mails, Google, Microsoft, Slack e dezenas de outras ferramentas via API. Ele se torna o painel unificado de comando da sua empresa."
    },
    {
      question: "Quanto tempo leva a implantação?",
      answer: "A implantação do HUMANOID acontece em dias, não em meses. Você conecta seus sistemas, ativa seus agentes e vê resultados na primeira semana de uso."
    },
    {
      question: "O HUMANOID é seguro e está em conformidade com a LGPD?",
      answer: "Sim. O HUMANOID possui LGPD by design, controle de acesso RBAC, auditoria total de todas as operações e transparência completa nos custos em tempo real. Sua inteligência é sua, segura e isolada."
    },
    {
      question: "Posso começar gratuitamente?",
      answer: "Sim! O plano Auto oferece 100 créditos diários inclusos para você testar seus primeiros agentes — sem cartão de crédito."
    },
    {
      question: "Quais são os casos de uso do HUMANOID?",
      answer: "O HUMANOID atende diversos casos de uso: eventos (Smart Events com reconhecimento facial), jurídico (geração de petições e cobranças), comercial B2B (SDRs de IA), e muitos outros segmentos que precisam de automação inteligente."
    },
    {
      question: "Como o HUMANOID mede ROI?",
      answer: "Cada ação do HUMANOID é auditada, medida e registrada. Você sabe exatamente quanto tempo economizou, quanto custou cada operação e quanto retornou em receita gerada ou perdas evitadas. IA com responsabilidade financeira."
    }
  ];

  return (
    <section className="py-32 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="font-haas text-3xl md:text-5xl font-black">
            Perguntas <span className="text-legal-cyan">Frequentes</span>
          </h2>
          <p className="text-xl text-white/70">
            Esclareça suas dúvidas sobre o HUMANOID™
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-6 hover:border-legal-cyan/50 transition-all"
              >
                <AccordionTrigger className="text-left font-semibold text-white hover:text-legal-cyan">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/70 pb-4 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="text-center mt-16">
            <p className="text-white/70 mb-6 text-lg">Ainda tem dúvidas sobre o HUMANOID?</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-legal to-legal-purple hover:from-legal-purple hover:to-legal text-white border-2 border-legal-cyan/50"
              >
                Falar com Especialista
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-legal-cyan text-legal-cyan hover:bg-legal-cyan hover:text-gray-900"
              >
                Ver Cases de Sucesso
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HumanoidFAQ;
