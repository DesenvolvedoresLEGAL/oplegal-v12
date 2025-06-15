
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const BlueFAQ = () => {
  const faqs = [
    {
      question: "Quanto tempo leva para implementar o Blue na minha empresa?",
      answer: "A implementação completa do Blue leva entre 2-4 semanas, dependendo da complexidade das integrações. O setup básico com primeiros dashboards fica pronto em 24-48 horas. Nossa equipe técnica acompanha todo o processo para garantir transição suave."
    },
    {
      question: "Quais sistemas o Blue consegue integrar?",
      answer: "O Blue integra com mais de 100 fontes de dados, incluindo ERPs (SAP, Oracle, Totvs), CRMs (Salesforce, HubSpot), bancos de dados (MySQL, PostgreSQL, MongoDB), planilhas Excel/Google Sheets, APIs REST, e-commerce, redes sociais e muito mais."
    },
    {
      question: "Como funciona a segurança dos meus dados no Blue?",
      answer: "Utilizamos criptografia AES-256 para dados em trânsito e em repouso, compliance total com LGPD/GDPR, autenticação multi-fator obrigatória, logs de auditoria completos e data centers no Brasil certificados ISO 27001. Seus dados nunca são compartilhados com terceiros."
    },
    {
      question: "Preciso ter conhecimento técnico para usar o Blue?)",
      answer: "Não! O Blue foi desenvolvido para usuários de negócio. Interface drag-and-drop intuitiva, templates pré-configurados por setor, assistente de IA para criação de relatórios e suporte completo da nossa equipe. Analistas conseguem criar dashboards complexos em minutos."
    },
    {
      question: "Qual é o investimento necessário para usar o Blue?",
      answer: "O investimento varia conforme número de usuários e volume de dados. Planos a partir de R$ 297/mês para pequenas empresas, com ROI médio de 300% em 6 meses. Oferecemos trial gratuito de 30 dias e consultoria sem compromisso para dimensionar sua necessidade."
    },
    {
      question: "O Blue funciona no celular e tablet?",
      answer: "Sim! Temos aplicativo nativo para iOS e Android com todas as funcionalidades principais, sincronização offline, notificações push inteligentes e dashboards otimizados para telas menores. Também funciona perfeitamente no navegador mobile."
    },
    {
      question: "Como é o suporte técnico do Blue?",
      answer: "Suporte 24/7 via chat, email e telefone em português. SLA de 2h para questões críticas, base de conhecimento completa, treinamentos regulares, webinars mensais e Customer Success Manager dedicado para contas enterprise."
    },
    {
      question: "Posso personalizar a interface do Blue com minha marca?",
      answer: "Totalmente! Interface white-label completa com suas cores, logo, domínio personalizado. Possibilidade de desenvolvimento de módulos específicos via APIs abertas. Ideal para empresas que querem oferecer analytics como serviço para seus clientes."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Perguntas Frequentes"
          subtitle="Tire todas suas dúvidas sobre o Blue e como ele pode transformar sua análise de dados"
          center
        />
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg border-0 shadow-md">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline font-semibold text-legal">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
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

export default BlueFAQ;
