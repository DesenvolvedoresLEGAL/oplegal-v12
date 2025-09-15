import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';

const GalaxiaFAQ = () => {
  const faqs = [
    {
      question: "O que diferencia GalaxIA de outras soluções de IA?",
      answer: "GalaxIA oferece infraestrutura dedicada com clusters GPU NVIDIA A100/H100, APIs REST/GraphQL personalizadas, modelos LLM (GPT, BERT), Computer Vision (YOLO, ResNet) e fine-tuning proprietário. Diferente de soluções genéricas, cada implementação é arquitetada especificamente para suas necessidades de negócio."
    },
    {
      question: "Qual o tempo de implementação?",
      answer: "O tempo varia conforme a complexidade do projeto, mas tipicamente entre 4-12 semanas. Isso inclui análise de requisitos, configuração da infraestrutura, desenvolvimento de APIs personalizadas e treinamento dos modelos."
    },
    {
      question: "Como funciona a escalabilidade automática?",
      answer: "Nossa infraestrutura monitora constantemente a demanda e ajusta recursos automaticamente. Isso garante performance otimizada durante picos de uso e redução de custos durante períodos de baixa demanda."
    },
    {
      question: "GalaxIA é compatível com sistemas existentes?",
      answer: "Sim, desenvolvemos APIs e conectores personalizados para integração com ERP, CRM, sistemas legados e qualquer outra plataforma que sua empresa utilize. A integração é transparente e não interfere nas operações existentes."
    },
    {
      question: "Como é garantida a segurança dos dados?",
      answer: "Utilizamos criptografia AES-256 de ponta a ponta, certificações ISO 27001 e SOC 2 Type II, conformidade total com LGPD/GDPR/HIPAA, isolamento de dados por cliente (tenant isolation), zero-trust architecture e controles de acesso granulares. Todos os dados permanecem sob controle total do cliente."
    },
    {
      question: "Qual o modelo de precificação?",
      answer: "Oferecemos modelos flexíveis: Pay-per-use (R$ 0,50/hora GPU), Mensal/Anual (R$ 15k-50k/mês) ou Enterprise personalizado. O preço é calculado com base em recursos computacionais (GPU/CPU/RAM), tempo de uso e nível de suporte. Inclui calculadora de orçamento transparente."
    },
    {
      question: "Que tipo de suporte é oferecido?",
      answer: "Suporte 24/7 com equipe técnica especializada, monitoramento proativo, SLA de 99.9% de uptime e gerente de conta dedicado para empresas enterprise."
    },
    {
      question: "É possível migrar de outras plataformas para GalaxIA?",
      answer: "Sim, oferecemos serviço completo de migração incluindo análise da arquitetura atual, plano de migração personalizado e suporte durante todo o processo para garantir zero downtime."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Perguntas Frequentes"
          subtitle="Esclareça suas dúvidas sobre GalaxIA e nossa infraestrutura de IA personalizada"
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
          
          <div className="text-center mt-12 bg-gradient-to-r from-legal/5 to-legal-purple/5 rounded-xl p-8">
            <h3 className="text-xl font-bold text-legal mb-2">Dúvidas Técnicas Complexas?</h3>
            <p className="text-gray-600 mb-6">
              Converse diretamente com nossos Arquitetos de Soluções para esclarecer questões específicas sobre 
              integração, performance, segurança e arquitetura personalizada para seu ambiente.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-legal hover:bg-legal/90">
                Falar com Arquiteto de Soluções
              </Button>
              <Button size="lg" variant="outline" className="border-legal text-legal hover:bg-legal hover:text-white">
                Acessar Documentação Técnica
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalaxiaFAQ;