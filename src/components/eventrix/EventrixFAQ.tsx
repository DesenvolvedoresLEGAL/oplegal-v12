
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const EventrixFAQ = () => {
  const faqs = [
    {
      question: "Como a IA do Eventrix personaliza a experiência dos participantes?",
      answer: "Nossa IA analisa dados de comportamento, preferências e histórico de participação para criar experiências únicas. Ela recomenda conteúdo relevante, conecta pessoas com interesses similares e personaliza a agenda de cada participante em tempo real,​ resultando em 85% mais engajamento."
    },
    {
      question: "Quanto tempo leva para implementar o Eventrix em um evento?",
      answer: "A implementação é rápida e simples. Para eventos pequenos e médios, o setup completo leva 24-48 horas. Para eventos complexos com múltiplas trilhas, geralmente finalizamos em 3-5 dias. Nossa equipe oferece suporte completo durante todo o processo."
    },
    {
      question: "O Eventrix funciona para eventos presenciais, online e híbridos?",
      answer: "Sim, nossa plataforma é versátil e funciona perfeitamente em todos os formatos. Para eventos presenciais temos check-in inteligente e networking presencial. Para online, oferecemos salas virtuais e interação digital. Eventos híbridos têm funcionalidades integradas para ambos os públicos."
    },
    {
      question: "Como funciona o networking inteligente?",
      answer: "Nossos algoritmos analisam perfis profissionais, interesses, objetivos e comportamento dos participantes para sugerir conexões relevantes. O sistema agenda reuniões, facilita apresentações e acompanha o resultado das conexões, aumentando em 10x a eficiência do networking."
    },
    {
      question: "Quais métricas e relatórios o Eventrix fornece?",
      answer: "Oferecemos análises completas: taxa de engajamento, tempo de permanência, interações, conversões, ROI detalhado, heat maps de interesse, análise de sentimento, previsões para próximos eventos e muito mais. Todos os dados são apresentados em dashboards visuais e relatórios customizáveis."
    },
    {
      question: "É possível integrar o Eventrix com outras ferramentas?",
      answer: "Absolutamente. Temos integrações nativas com CRMs (Salesforce, HubSpot), ferramentas de marketing (Mailchimp, RD Station), sistemas de pagamento, ERPs e mais de 50 outras plataformas. Também oferecemos API robusta para integrações customizadas."
    },
    {
      question: "Como é garantida a segurança dos dados dos participantes?",
      answer: "Segurança é prioridade máxima. Somos 100% LGPD compliant, utilizamos criptografia end-to-end, temos certificações ISO 27001, backup automático, monitoramento 24/7 e infraestrutura em cloud com 99.9% de uptime garantido."
    },
    {
      question: "Qual é o custo do Eventrix comparado a outras soluções?",
      answer: "Nosso modelo de precificação é flexível e baseado no tamanho do evento. O ROI médio é de 300% devido à redução de custos operacionais, aumento de receita por participante e otimização de recursos. Oferecemos trial gratuito para você testar sem compromisso."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Perguntas Frequentes"
          subtitle="Esclareça suas dúvidas sobre nossa plataforma de gestão de eventos com IA"
          center
        />
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg px-6 border-0 shadow-sm">
                <AccordionTrigger className="text-left font-semibold text-legal hover:text-legal-purple">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Não encontrou sua resposta?</p>
            <Button asChild className="bg-legal hover:bg-legal-purple">
              <a href="/contato?produto=eventrix">Entre em Contato</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventrixFAQ;
