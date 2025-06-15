
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const BrilixFAQ = () => {
  const faqs = [
    {
      question: "O Brilix pode operar em qualquer tipo de edifício?",
      answer: "Sim, nossos drones são versáteis e podem trabalhar em edifícios residenciais, comerciais, industriais e estruturas especiais. Fazemos uma análise técnica prévia para definir a melhor estratégia de operação para cada tipo de estrutura e superfície."
    },
    {
      question: "Qual é a altura máxima que os drones conseguem alcançar?",
      answer: "Nossos drones operam com segurança até 200 metros de altura. Para estruturas maiores, utilizamos múltiplos pontos de operação e técnicas avançadas de voo que garantem cobertura completa mantendo todos os protocolos de segurança."
    },
    {
      question: "É necessário certificação ou licença especial?",
      answer: "Sim, operamos com todas as certificações necessárias da ANAC (Agência Nacional de Aviação Civil). Nossa equipe é habilitada e todos os equipamentos possuem certificação para operação comercial urbana, garantindo total conformidade legal."
    },
    {
      question: "Como funciona o processo de limpeza dos drones?",
      answer: "Os drones utilizam sistema de jatos de água pressurizada com controle de pressão variável, detergentes ecológicos específicos para cada tipo de superfície, e escovas rotativas quando necessário. O processo é monitorado por câmeras 4K para garantir resultado perfeito."
    },
    {
      question: "Quanto tempo leva para limpar um edifício completo?",
      answer: "O tempo varia conforme o tamanho e complexidade da estrutura. Em média, um edifício de 20 andares pode ser limpo em 6-8 horas, sendo 5x mais rápido que métodos tradicionais. Fornecemos cronograma detalhado após avaliação técnica."
    },
    {
      question: "O serviço funciona em qualquer condição climática?",
      answer: "Operamos com segurança em condições climáticas normais. Evitamos operação durante chuva forte, ventos acima de 40 km/h ou tempestades. Nossos drones possuem sensores meteorológicos que garantem operação apenas em condições ideais."
    },
    {
      question: "Qual é o custo comparado aos métodos tradicionais?",
      answer: "O Brilix oferece economia média de 70% comparado a métodos tradicionais. Eliminamos custos com andaimes, equipamentos de segurança complexos, seguros de trabalho em altura e reduzimos drasticamente o tempo de execução e mão de obra necessária."
    },
    {
      question: "Vocês oferecem garantia do serviço?",
      answer: "Sim, oferecemos garantia de qualidade de 30 dias para todos os serviços. Se identificarmos qualquer área que não atendeu nossos padrões de qualidade, refazemos o trabalho sem custo adicional. Também fornecemos relatório fotográfico completo como comprovação."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Perguntas Frequentes"
          subtitle="Esclareça suas dúvidas sobre nossa solução de limpeza com drones"
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
              <a href="/contato?produto=brilix">Entre em Contato</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrilixFAQ;
