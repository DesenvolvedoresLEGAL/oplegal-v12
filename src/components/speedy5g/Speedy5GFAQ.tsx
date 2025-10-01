
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import SectionTitle from '@/components/SectionTitle';

const Speedy5GFAQ = () => {
  const faqs = [
    {
      question: "Qual é a velocidade real do Speedy?",
      answer: "O Speedy oferece velocidades de download de até 10Gbps e upload de até 2Gbps, com latência ultra-baixa de apenas 1ms. As velocidades reais dependem da localização e condições da rede, mas garantimos pelo menos 80% da velocidade contratada."
    },
    {
      question: "Em quanto tempo é feita a instalação?",
      answer: "A instalação completa é realizada em até 2 horas por nossa equipe especializada. Inclui análise do local, configuração dos equipamentos, testes de performance e treinamento básico da equipe."
    },
    {
      question: "Preciso de equipamentos especiais?",
      answer: "Fornecemos todos os equipamentos necessários: modem 5G empresarial, antenas otimizadas e roteadores de alta performance. Seus dispositivos existentes são compatíveis, apenas precisam suportar 5G."
    },
    {
      question: "Qual é a cobertura disponível?",
      answer: "Temos cobertura 5G em todas as capitais e principais cidades do Brasil. Para áreas específicas, fazemos análise prévia de cobertura sem custo. Também oferecemos backup automático 4G/LTE."
    },
    {
      question: "Como funciona o suporte técnico?",
      answer: "Oferecemos suporte técnico 24/7 com monitoramento proativo da rede. Nossa equipe detecta e resolve problemas antes mesmo que afetem sua operação. Tempo de resposta: máximo 15 minutos."
    },
    {
      question: "Posso cancelar quando quiser?",
      answer: "Sim, oferecemos contratos flexíveis sem fidelidade forçada. Para empresas, recomendamos planos anuais com desconto, mas você pode cancelar com 30 dias de antecedência sem multas."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Perguntas Frequentes"
          subtitle="Tire suas dúvidas sobre o Speedy e nossa conectividade ultra-rápida"
          center
        />
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-legal font-semibold">
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

export default Speedy5GFAQ;
