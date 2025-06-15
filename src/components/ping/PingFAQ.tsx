
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const PingFAQ = () => {
  const faqs = [
    {
      question: "Como funciona a integração com WhatsApp Business via META?",
      answer: "O Ping utiliza a API oficial do WhatsApp Business através da certificação META. Isso garante recursos avançados como mensagens em massa, chatbots, integração com CRM e compliance total com as políticas do WhatsApp."
    },
    {
      question: "Posso usar meu número de WhatsApp atual no Ping?",
      answer: "Sim! Migramos seu número atual para WhatsApp Business API sem perder conversas ou contatos. O processo é guiado e leva apenas algumas horas para ser concluído."
    },
    {
      question: "Como a IA sabe quando transferir para um atendente humano?",
      answer: "Nossa IA analisa contexto, sentimento e complexidade da conversa. Ela transfere automaticamente quando detecta frustração, pedidos complexos ou quando o cliente solicita explicitamente falar com humano."
    },
    {
      question: "Qual é a integração com o Blue para dashboard e KPIs?",
      answer: "O Ping envia automaticamente dados de atendimento para o Blue Analytics, gerando dashboards com métricas como tempo de resposta, satisfação, resolução, conversão e muito mais em tempo real."
    },
    {
      question: "Quais redes sociais posso integrar além do WhatsApp?",
      answer: "Instagram Direct, Facebook Messenger, Telegram, SMS, e-mail, chat do site e mais. Todos os canais ficam unificados em uma única interface de atendimento."
    },
    {
      question: "Como funciona o aplicativo mobile para agentes?",
      answer: "Agentes podem atender clientes pelo app nativo iOS/Android, com todas as funcionalidades: histórico completo, IA assistente, transferências e notificações push em tempo real."
    },
    {
      question: "Quanto tempo leva para implementar o Ping?",
      answer: "Setup básico em 1 hora, treinamento da IA em 24h e operação completa em até 1 semana. Nosso time de sucesso acompanha todo o processo de implementação."
    },
    {
      question: "Como são tratados os dados e privacidade dos clientes?",
      answer: "Todos os dados são criptografados ponta-a-ponta, armazenados no Brasil seguindo LGPD rigorosamente. Backup automático, histórico completo e exportação de dados disponíveis."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Perguntas Frequentes"
          subtitle="Tire suas dúvidas sobre o Ping e como ele pode revolucionar seu atendimento ao cliente"
          center
        />
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold text-legal">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-2">
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

export default PingFAQ;
