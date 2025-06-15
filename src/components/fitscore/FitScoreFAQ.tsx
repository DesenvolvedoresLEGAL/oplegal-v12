
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';

const FitScoreFAQ = () => {
  const faqs = [
    {
      question: "Como o FitScore analisa o fit cultural dos candidatos?",
      answer: "O FitScore utiliza algoritmos de processamento de linguagem natural para analisar respostas, histórico profissional e comportamento digital dos candidatos, comparando com o perfil cultural da empresa definido através de questionários estruturados e dados históricos de colaboradores bem-sucedidos."
    },
    {
      question: "Qual é a precisão do matching de candidatos?",
      answer: "Nosso sistema possui 95% de precisão no matching, baseado em análise de milhares de contratações bem-sucedidas. A IA considera mais de 150 variáveis incluindo skills técnicas, soft skills, experiência e compatibilidade cultural."
    },
    {
      question: "O FitScore está em conformidade com a LGPD?",
      answer: "Sim, 100%. Todos os dados são criptografados e processados seguindo rigorosamente as diretrizes da LGPD. Candidatos têm controle total sobre seus dados e podem solicitar exclusão a qualquer momento."
    },
    {
      question: "Como funciona o sourcing inteligente?",
      answer: "Nossa IA busca candidatos em múltiplas plataformas (LinkedIn, GitHub, Stack Overflow, etc.) usando critérios personalizados. O sistema identifica talentos passivos que se alinham perfeitamente com as necessidades da vaga, mesmo quando não estão ativamente procurando emprego."
    },
    {
      question: "Posso integrar com meu ATS atual?",
      answer: "Sim, o FitScore oferece integrações nativas com os principais ATS do mercado (Workday, BambooHR, Greenhouse, etc.) via API REST. A implementação é simples e não interrompe seus processos atuais."
    },
    {
      question: "Como o People Analytics funciona na prática?",
      answer: "Nossos dashboards mostram métricas como tempo de contratação, custo por contratação, taxa de retenção, satisfação dos candidatos e previsões de turnover. Tudo em tempo real com insights acionáveis para otimizar sua estratégia de RH."
    },
    {
      question: "Qual o tempo de implementação?",
      answer: "A implementação completa leva entre 2-4 semanas, incluindo integração com sistemas existentes, treinamento da equipe e configuração personalizada. Oferecemos suporte dedicado durante todo o processo."
    },
    {
      question: "Como funciona o modelo de precificação?",
      answer: "Oferecemos planos flexíveis baseados no volume de contratações e funcionalidades utilizadas. Inclui período de teste gratuito de 30 dias para avaliar o impacto nos seus processos de RH."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Perguntas Frequentes"
          subtitle="Esclareça suas dúvidas sobre o FitScore e nossa tecnologia de RH com IA"
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

export default FitScoreFAQ;
