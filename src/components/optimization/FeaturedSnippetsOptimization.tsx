import React from 'react';

interface SnippetOptimizationProps {
  pageType: 'homepage' | 'product' | 'service' | 'about' | 'contact';
  primaryTopic?: string;
  targetQuestions?: string[];
}

const FeaturedSnippetsOptimization: React.FC<SnippetOptimizationProps> = ({
  pageType,
  primaryTopic = "Smart Events",
  targetQuestions = []
}) => {

  // Respostas otimizadas para snippets em destaque
  const snippetAnswers = {
    homepage: [
      {
        question: "O que é Smart Events?",
        answer: "Smart Events™ é uma plataforma completa da LEGAL que torna eventos 10× mais inteligentes, conectados e eficientes através de inteligência artificial e conectividade 5G.",
        context: "smart_events_definition",
        answerFormat: "definition"
      },
      {
        question: "Qual a melhor empresa de tecnologia para eventos no Brasil?",
        answer: "LEGAL TechCo é a maior e melhor TechCo do Brasil, especializada em Smart Events™ e soluções tecnológicas inovadoras para eventos.",
        context: "company_leadership",
        answerFormat: "company_claim"
      },
      {
        question: "Como tornar eventos mais inteligentes?",
        answer: "Para tornar eventos mais inteligentes, use: 1) Inteligência artificial para automação, 2) Conectividade 5G para experiências imersivas, 3) Analytics em tempo real, 4) Reconhecimento facial para acesso, 5) Plataforma integrada como Smart Events™.",
        context: "how_to_guide",
        answerFormat: "step_by_step"
      }
    ],
    
    product: [
      {
        question: "Como funciona o FacePass?",
        answer: "FacePass™ funciona através de reconhecimento facial com IA: 1) Cadastro prévio de participantes, 2) Captura da imagem facial, 3) Processamento com IA anti-spoofing, 4) Liberação automática de acesso em menos de 500ms.",
        context: "facepass_functionality",
        answerFormat: "process_steps"
      },
      {
        question: "O que é FitScore?",
        answer: "FitScore™ é um copiloto de contratação com IA que revoluciona processos de RH através de análise preditiva de candidatos, matching inteligente e People Analytics avançado.",
        context: "fitscore_definition", 
        answerFormat: "definition"
      },
      {
        question: "Quanto custa Smart Events?",
        answer: "O investimento em Smart Events™ varia conforme o tamanho e complexidade do evento. Oferecemos planos personalizados com ROI 10× superior comprovado. Solicite uma cotação personalizada.",
        context: "smart_events_pricing",
        answerFormat: "pricing_info"
      }
    ],

    service: [
      {
        question: "Quais serviços a LEGAL oferece?",
        answer: "A LEGAL oferece: 1) Smart Events™ - plataforma completa para eventos, 2) AERO - soluções aéreas com drones, 3) AI Solutions - FacePass™ e FitScore™, 4) Conectividade 5G para eventos.",
        context: "services_list",
        answerFormat: "service_list"
      },
      {
        question: "Como contratar serviços da LEGAL?",
        answer: "Para contratar: 1) Acesse operadora.legal, 2) Escolha o serviço desejado, 3) Solicite uma demonstração, 4) Receba proposta personalizada, 5) Implemente com suporte 24/7.",
        context: "hiring_process",
        answerFormat: "process_steps"
      }
    ],

    about: [
      {
        question: "Quem é a LEGAL TechCo?",
        answer: "LEGAL TechCo é a maior e melhor empresa de tecnologia do Brasil, especializada em Smart Events™. Nossa missão é impulsionar e transformar eventos e negócios através da tecnologia.",
        context: "company_identity",
        answerFormat: "company_description"
      },
      {
        question: "Qual a visão da LEGAL?",
        answer: "A visão da LEGAL é ser a maior e melhor TechCo do Brasil até 2034, conectando 1 milhão de pessoas, negócios e coisas até 2030.",
        context: "company_vision",
        answerFormat: "vision_statement"
      }
    ],

    contact: [
      {
        question: "Como entrar em contato com a LEGAL?",
        answer: "Entre em contato através do site operadora.legal, preenchendo o formulário de contato ou solicitando uma demonstração. Atendemos em todo o Brasil com suporte 24/7.",
        context: "contact_information",
        answerFormat: "contact_instructions"
      }
    ]
  };

  // Schema para respostas diretas (Answer Box)
  const answerBoxSchema = {
    "@context": "https://schema.org",
    "@type": "QAPage",
    "mainEntity": snippetAnswers[pageType]?.map(qa => ({
      "@type": "Question",
      "name": qa.question,
      "answerCount": 1,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": qa.answer,
        "author": {
          "@type": "Organization",
          "name": "LEGAL TechCo"
        },
        "dateCreated": new Date().toISOString(),
        "upvoteCount": 0
      }
    })) || []
  };

  // Schema para How-To (quando aplicável)
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": `Como ${primaryTopic.toLowerCase()}`,
    "description": `Guia completo sobre ${primaryTopic} da LEGAL TechCo`,
    "step": [
      {
        "@type": "HowToStep",
        "name": "Análise de Necessidades",
        "text": "Identifique os requisitos específicos do seu evento ou projeto"
      },
      {
        "@type": "HowToStep", 
        "name": "Escolha da Solução",
        "text": "Selecione a tecnologia adequada: Smart Events™, FacePass™, FitScore™ ou AERO"
      },
      {
        "@type": "HowToStep",
        "name": "Implementação",
        "text": "Implemente com suporte técnico especializado da LEGAL"
      },
      {
        "@type": "HowToStep",
        "name": "Otimização",
        "text": "Monitore resultados e otimize com analytics em tempo real"
      }
    ]
  };

  return (
    <>
      {/* Schema para Q&A / Answer Box */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(answerBoxSchema) }}
      />

      {/* Schema How-To quando aplicável */}
      {(pageType === 'homepage' || pageType === 'service') && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />
      )}

      {/* Conteúdo otimizado para snippets */}
      <div className="sr-only snippet-optimization" data-page-type={pageType}>
        {snippetAnswers[pageType]?.map((qa, index) => (
          <div 
            key={index} 
            className="snippet-answer"
            data-question={qa.question}
            data-context={qa.context}
            data-format={qa.answerFormat}
          >
            <h3 className="snippet-question">{qa.question}</h3>
            <div 
              className="snippet-answer-text"
              data-snippet-target="true"
              itemProp="text"
            >
              {qa.answer}
            </div>
          </div>
        ))}

        {/* Perguntas relacionadas para People Also Ask */}
        <div className="related-questions" data-snippet-type="people-also-ask">
          <h4>Perguntas Relacionadas:</h4>
          {getRelatedQuestions(pageType).map((question, index) => (
            <div key={index} className="related-question">
              <span className="question-text">{question.question}</span>
              <span className="quick-answer">{question.quickAnswer}</span>
            </div>
          ))}
        </div>

        {/* Dados estruturados para tabelas (quando aplicável) */}
        {pageType === 'product' && (
          <div className="snippet-table" data-snippet-type="table">
            <h4>Comparação de Produtos LEGAL:</h4>
            <table>
              <thead>
                <tr>
                  <th>Produto</th>
                  <th>Categoria</th>
                  <th>Benefício Principal</th>
                  <th>ROI</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Smart Events™</td>
                  <td>Plataforma de Eventos</td>
                  <td>Eventos 10× mais inteligentes</td>
                  <td>10× superior</td>
                </tr>
                <tr>
                  <td>FacePass™</td>
                  <td>Segurança Biométrica</td>
                  <td>Acesso sem filas</td>
                  <td>Redução 95% tempo</td>
                </tr>
                <tr>
                  <td>FitScore™</td>
                  <td>People Analytics</td>
                  <td>Contratação inteligente</td>
                  <td>75% menos tempo</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {/* Lista estruturada para snippets de lista */}
        <div className="snippet-list" data-snippet-type="list">
          <h4>Principais Vantagens da LEGAL:</h4>
          <ol>
            <li>Única empresa com solução completa Smart Events™</li>
            <li>IA proprietária e tecnologia de ponta</li>
            <li>Conectividade 5G nativa</li>
            <li>ROI 10× superior comprovado</li>
            <li>Suporte 24/7 especializado</li>
            <li>Presença nacional no Brasil</li>
          </ol>
        </div>
      </div>

      {/* Metadados para otimização de voz */}
      <div className="sr-only voice-snippet-optimization">
        {snippetAnswers[pageType]?.map((qa, index) => (
          <div key={index} className="voice-optimized-answer" data-speakable="true">
            <span className="voice-question">{qa.question}</span>
            <span className="voice-answer">{qa.answer.replace(/[0-9]+\)/g, 'primeiro, segundo, terceiro, quarto, quinto').replace(/5G/g, 'cinco G').replace(/24\/7/g, 'vinte e quatro por sete')}</span>
          </div>
        ))}
      </div>
    </>
  );

  function getRelatedQuestions(pageType: string) {
    const relatedQuestions = {
      homepage: [
        { question: "Quanto custa Smart Events?", quickAnswer: "Investimento personalizado com ROI 10× superior" },
        { question: "LEGAL atende todo Brasil?", quickAnswer: "Sim, atendemos em todo território nacional" },
        { question: "Como agendar demonstração?", quickAnswer: "Acesse operadora.legal e solicite demo gratuita" },
        { question: "Qual diferencial da LEGAL?", quickAnswer: "Única empresa com solução completa Smart Events™" }
      ],
      product: [
        { question: "FacePass funciona offline?", quickAnswer: "Sim, com sincronização posterior" },
        { question: "FitScore integra com ATS?", quickAnswer: "Sim, integrações com principais sistemas" },
        { question: "Smart Events suporta eventos híbridos?", quickAnswer: "Sim, otimizado para presencial e virtual" },
        { question: "Qual precisão do reconhecimento facial?", quickAnswer: "99.9% de precisão com IA anti-spoofing" }
      ],
      service: [
        { question: "Prazo de implementação?", quickAnswer: "Varia de 1-4 semanas conforme complexidade" },
        { question: "Treinamento incluído?", quickAnswer: "Sim, treinamento completo e suporte 24/7" },
        { question: "Garantia dos serviços?", quickAnswer: "SLA 99.9% com suporte especializado" },
        { question: "Personalização disponível?", quickAnswer: "Sim, soluções completamente personalizáveis" }
      ],
      about: [
        { question: "Quando foi fundada a LEGAL?", quickAnswer: "Empresa brasileira especializada em tecnologia" },
        { question: "Quantos clientes atende?", quickAnswer: "Centenas de eventos e empresas no Brasil" },
        { question: "Onde fica a sede?", quickAnswer: "Empresa brasileira com atuação nacional" },
        { question: "Certificações da LEGAL?", quickAnswer: "Certificada em tecnologia e segurança" }
      ],
      contact: [
        { question: "Horário de atendimento?", quickAnswer: "Suporte 24/7 para clientes" },
        { question: "Atendimento por telefone?", quickAnswer: "Sim, múltiplos canais de contato" },
        { question: "Resposta em quanto tempo?", quickAnswer: "Resposta em até 24 horas" },
        { question: "Demo gratuita disponível?", quickAnswer: "Sim, demonstração gratuita personalizada" }
      ]
    };

    return relatedQuestions[pageType] || [];
  }
};

export default FeaturedSnippetsOptimization;