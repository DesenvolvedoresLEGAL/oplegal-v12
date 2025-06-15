
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const PingFAQ = () => {
  const faqs = [
    {
      question: "Como o Ping consegue prever falhas antes que aconteçam?",
      answer: "O Ping utiliza algoritmos avançados de Machine Learning que analisam padrões históricos, comportamento de sistema e métricas de performance para identificar anomalias que precedem falhas. A IA aprende continuamente com cada evento, refinando suas predições."
    },
    {
      question: "Qual é o tempo de setup e configuração inicial?",
      answer: "O setup básico do Ping leva menos de 1 hora. Nossa IA faz descoberta automática da infraestrutura e configura monitoramento baseado em best practices. Personalizações avançadas podem ser feitas gradualmente conforme necessário."
    },
    {
      question: "O Ping funciona com infraestrutura híbrida e multi-cloud?",
      answer: "Sim! O Ping monitora ambientes on-premise, cloud (AWS, Azure, GCP) e híbridos. Nossa plataforma oferece visibilidade unificada independente da localização dos seus recursos."
    },
    {
      question: "Como são configurados os alertas para evitar spam?",
      answer: "O Ping usa IA para filtrar alertas por relevância e contexto. Configuramos thresholds dinâmicos, correlação de eventos e priorização inteligente para garantir que você receba apenas alertas críticos e acionáveis."
    },
    {
      question: "Quais métricas e KPIs são monitorados?",
      answer: "Monitoramos CPU, memória, disco, rede, aplicações, banco de dados, disponibilidade, latência, throughput e métricas customizadas. Dashboards podem ser personalizados para diferentes perfis e necessidades."
    },
    {
      question: "Como funciona a integração com ferramentas existentes?",
      answer: "O Ping integra com mais de 200 ferramentas via APIs, webhooks e conectores nativos. Suportamos ITSM, ticketing, ChatOps, DevOps e outras soluções já utilizadas na sua organização."
    },
    {
      question: "Qual é o modelo de pricing do Ping?",
      answer: "Oferecemos planos flexíveis baseados no número de recursos monitorados e funcionalidades. Inclui teste gratuito de 30 dias, suporte técnico e treinamento da equipe. Entre em contato para proposta personalizada."
    },
    {
      question: "Como são tratados os dados de monitoramento e privacidade?",
      answer: "Todos os dados são criptografados em trânsito e em repouso. Seguimos rigorosamente LGPD, SOC 2 e ISO 27001. Você mantém controle total sobre seus dados com opções de retenção personalizáveis."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Perguntas Frequentes"
          subtitle="Tire suas dúvidas sobre o Ping e como ele pode transformar seu monitoramento"
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
