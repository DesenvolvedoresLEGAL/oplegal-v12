import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MessageSquare, User, Clock, TrendingUp } from 'lucide-react';

interface UserProfile {
  id: string;
  segment: 'enterprise' | 'startup' | 'government' | 'education';
  interests: string[];
  previousInteractions: InteractionHistory[];
  preferences: {
    communicationStyle: 'formal' | 'casual' | 'technical';
    responseLength: 'brief' | 'detailed' | 'comprehensive';
    preferredTopics: string[];
  };
}

interface InteractionHistory {
  timestamp: Date;
  query: string;
  response: string;
  satisfaction: number;
  context: string;
}

interface ResponseTemplate {
  id: string;
  pattern: RegExp;
  intent: string;
  templates: {
    formal: string;
    casual: string; 
    technical: string;
  };
  confidence: number;
  products: string[];
}

interface PersonalizedResponseEngineProps {
  userProfile: UserProfile;
  currentQuery: string;
  context: string;
  onResponseGenerated?: (response: any) => void;
}

const PersonalizedResponseEngine: React.FC<PersonalizedResponseEngineProps> = ({
  userProfile,
  currentQuery,
  context,
  onResponseGenerated
}) => {
  const [generatedResponse, setGeneratedResponse] = useState<any>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [responseMetrics, setResponseMetrics] = useState({
    confidence: 0,
    personalizationScore: 0,
    predictedSatisfaction: 0
  });

  // Templates de resposta para produtos LEGAL
  const responseTemplates: ResponseTemplate[] = useMemo(() => [
    {
      id: 'smart-events-inquiry',
      pattern: /smart events|evento|gestão de evento/i,
      intent: 'product_inquiry',
      templates: {
        formal: 'Smart Events™ é nossa plataforma empresarial de gestão de eventos que utiliza inteligência artificial para otimizar cada aspecto do seu evento. Oferecemos soluções completas desde o planejamento até a análise pós-evento.',
        casual: 'O Smart Events™ é incrível! É nossa plataforma de IA que torna seus eventos muito mais inteligentes e eficientes. Quer ver como funciona?',
        technical: 'Smart Events™ implementa algoritmos de machine learning para análise preditiva de participação, otimização de recursos em tempo real e personalização automática da experiência do usuário através de APIs RESTful e integração via WebSocket.'
      },
      confidence: 0.95,
      products: ['Smart Events', 'Eventrix', 'MAGICPASS']
    },
    {
      id: 'magicpass-security',
      pattern: /magicpass|reconhecimento facial|segurança|acesso/i,
      intent: 'security_inquiry', 
      templates: {
        formal: 'MAGICPASS™ é nossa solução de controle de acesso por reconhecimento facial, desenvolvida com as mais avançadas tecnologias de biometria e IA. Oferece segurança máxima com conveniência incomparável.',
        casual: 'MAGICPASS™ é tipo mágica mesmo! Você só olha para a câmera e pronto, acesso liberado. Seguro, rápido e super prático.',
        technical: 'MAGICPASS™ utiliza redes neurais convolucionais (CNN) com accuracy > 99.7%, processamento edge computing para latência < 200ms e criptografia AES-256 para proteção de dados biométricos.'
      },
      confidence: 0.92,
      products: ['MAGICPASS', 'Security AI', 'Access Control']
    },
    {
      id: 'fitscore-hr',
      pattern: /fitscore|rh|recursos humanos|contratação|hiring/i,
      intent: 'hr_solution',
      templates: {
        formal: 'FitScore™ revoluciona processos de RH através de análise preditiva e matching inteligente. Nossa IA analisa compatibilidade cultural e técnica para identificar os melhores candidatos.',
        casual: 'FitScore™ é seu RH turbinado com IA! Encontra os candidatos perfeitos para sua empresa de forma super rápida e assertiva.',
        technical: 'FitScore™ implementa algoritmos de natural language processing (NLP) e sentiment analysis para scoring de compatibilidade, com modelos ensemble que processam 500+ variáveis comportamentais e técnicas.'
      },
      confidence: 0.90,
      products: ['FitScore', 'NeuraFit', 'Humanoid']
    }
  ], []);

  // Análise da intenção do usuário
  const analyzeIntent = useCallback((query: string) => {
    const matchedTemplate = responseTemplates.find(template => 
      template.pattern.test(query.toLowerCase())
    );

    if (matchedTemplate) {
      return {
        template: matchedTemplate,
        confidence: matchedTemplate.confidence,
        intent: matchedTemplate.intent
      };
    }

    // Fallback para queries não reconhecidas
    return {
      template: {
        id: 'general_inquiry',
        intent: 'general',
        templates: {
          formal: 'Agradecemos seu interesse em nossas soluções LEGAL. Nosso time de especialistas pode apresentar as melhores opções para suas necessidades específicas.',
          casual: 'Oi! Temos várias soluções incríveis que podem te ajudar. Que tal conversarmos para entender melhor o que você precisa?',
          technical: 'Nossa stack inclui mais de 15 produtos de IA especializados em diferentes verticais. Podemos agendar uma demo técnica para apresentar as arquiteturas mais adequadas.'
        }
      },
      confidence: 0.7,
      intent: 'general'
    };
  }, [responseTemplates]);

  // Personalização baseada no perfil do usuário
  const personalizeResponse = useCallback((template: any, userProfile: UserProfile) => {
    let baseResponse = template.templates[userProfile.preferences.communicationStyle];
    
    // Adicionar contexto baseado no segmento
    const segmentContext = {
      enterprise: 'Para organizações corporativas, oferecemos implementação enterprise com SLA garantido e suporte 24/7.',
      startup: 'Temos planos especiais para startups com pricing flexível e mentoria técnica incluída.',
      government: 'Nossas soluções atendem todos os requisitos de segurança e compliance governamental (LGPD, SOC2).',
      education: 'Oferecemos condições especiais para instituições de ensino com programas de capacitação inclusos.'
    };

    const contextAddition = segmentContext[userProfile.segment];
    
    // Personalizar baseado em interações anteriores
    const hasHistory = userProfile.previousInteractions.length > 0;
    const avgSatisfaction = hasHistory 
      ? userProfile.previousInteractions.reduce((acc, int) => acc + int.satisfaction, 0) / userProfile.previousInteractions.length 
      : 0;

    let personalizedResponse = baseResponse;
    
    if (hasHistory && avgSatisfaction > 4) {
      personalizedResponse += ' Notamos que você tem interesse em nossas soluções. Gostaria de agendar uma demonstração personalizada?';
    }

    personalizedResponse += ` ${contextAddition}`;

    return personalizedResponse;
  }, []);

  // Geração de resposta personalizada
  const generateResponse = useCallback(async () => {
    if (!currentQuery.trim()) return;

    setIsProcessing(true);
    
    // Simular processamento de IA
    await new Promise(resolve => setTimeout(resolve, 1200));

    const analysis = analyzeIntent(currentQuery);
    const personalizedContent = personalizeResponse(analysis.template, userProfile);
    
    // Calcular métricas de confiança
    const personalizationScore = (
      (userProfile.previousInteractions.length * 10) + 
      (userProfile.interests.length * 5) + 
      (userProfile.preferences.preferredTopics.length * 3)
    );

    const predictedSatisfaction = Math.min(5.0, 
      analysis.confidence * 5 + 
      (personalizationScore / 20) * 1.5
    );

    const response = {
      id: `response_${Date.now()}`,
      query: currentQuery,
      content: personalizedContent,
      intent: analysis.intent,
      confidence: analysis.confidence,
      personalizationScore: Math.min(100, personalizationScore),
      predictedSatisfaction: Math.round(predictedSatisfaction * 10) / 10,
      suggestedActions: generateSuggestedActions(analysis.template, userProfile),
      metadata: {
        generatedAt: new Date(),
        userSegment: userProfile.segment,
        communicationStyle: userProfile.preferences.communicationStyle,
        context: context
      }
    };

    setGeneratedResponse(response);
    setResponseMetrics({
      confidence: Math.round(analysis.confidence * 100),
      personalizationScore: Math.min(100, personalizationScore),
      predictedSatisfaction: Math.round(predictedSatisfaction * 20)
    });

    onResponseGenerated?.(response);
    setIsProcessing(false);
  }, [currentQuery, userProfile, context, analyzeIntent, personalizeResponse, onResponseGenerated]);

  // Geração de ações sugeridas
  const generateSuggestedActions = (template: any, profile: UserProfile) => {
    const baseActions = [
      { label: 'Agendar Demo', type: 'demo', priority: 1 },
      { label: 'Falar com Especialista', type: 'contact', priority: 2 },
      { label: 'Ver Casos de Uso', type: 'case_studies', priority: 3 }
    ];

    // Personalizar ações baseadas no perfil
    if (profile.segment === 'enterprise') {
      baseActions.unshift({ label: 'Solicitar Proposta Enterprise', type: 'enterprise_proposal', priority: 0 });
    }

    if (profile.segment === 'startup') {
      baseActions.push({ label: 'Conhecer Programa Startup', type: 'startup_program', priority: 4 });
    }

    return baseActions.slice(0, 3);
  };

  useEffect(() => {
    if (currentQuery.trim()) {
      generateResponse();
    }
  }, [currentQuery, generateResponse]);

  return (
    <div className="space-y-6">
      {/* Métricas do Engine */}
      <Card className="p-6 bg-gradient-to-r from-legal-purple/5 to-legal-cyan/5 border-legal-purple/20">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-legal-purple">Personalized Response Engine</h3>
          <div className="flex items-center space-x-2">
            <MessageSquare className="w-5 h-5 text-legal-cyan" />
            <span className="text-sm text-legal-cyan font-medium">Processando</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <TrendingUp className="w-4 h-4 text-legal mr-2" />
              <span className="text-sm font-medium">Confiança</span>
            </div>
            <div className="text-2xl font-bold text-legal">{responseMetrics.confidence}%</div>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <User className="w-4 h-4 text-legal-purple mr-2" />
              <span className="text-sm font-medium">Personalização</span>
            </div>
            <div className="text-2xl font-bold text-legal-purple">{responseMetrics.personalizationScore}%</div>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Clock className="w-4 h-4 text-legal-cyan mr-2" />
              <span className="text-sm font-medium">Satisfação Prev.</span>
            </div>
            <div className="text-2xl font-bold text-legal-cyan">{responseMetrics.predictedSatisfaction}%</div>
          </div>
        </div>
      </Card>

      {/* Query Atual */}
      {currentQuery && (
        <Card className="p-4 bg-muted/30">
          <div className="flex items-start space-x-3">
            <User className="w-5 h-5 text-legal mt-1" />
            <div className="flex-1">
              <p className="font-medium text-legal mb-1">Pergunta do Usuário:</p>
              <p className="text-muted-foreground">{currentQuery}</p>
            </div>
          </div>
        </Card>
      )}

      {/* Resposta Gerada */}
      {isProcessing ? (
        <Card className="p-8 text-center">
          <div className="loading-animation">
            <MessageSquare className="w-8 h-8 text-legal-purple mx-auto mb-4" />
            <p className="text-legal-purple">Gerando resposta personalizada...</p>
          </div>
        </Card>
      ) : generatedResponse && (
        <Card className="p-6 border-legal-purple/30">
          <div className="mb-4">
            <div className="flex items-center justify-between mb-3">
              <Badge variant="outline" className="border-legal-purple text-legal-purple">
                {generatedResponse.intent}
              </Badge>
              <div className="flex items-center space-x-2">
                <Badge variant="secondary">
                  Confiança: {Math.round(generatedResponse.confidence * 100)}%
                </Badge>
                <Badge variant="secondary">
                  {userProfile.preferences.communicationStyle}
                </Badge>
              </div>
            </div>
            <p className="text-lg leading-relaxed text-foreground">{generatedResponse.content}</p>
          </div>

          {/* Ações Sugeridas */}
          {generatedResponse.suggestedActions && (
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-legal-purple">Próximos Passos:</h4>
              <div className="flex flex-wrap gap-2">
                {generatedResponse.suggestedActions.map((action: any, index: number) => (
                  <Button 
                    key={index}
                    variant={index === 0 ? "default" : "outline"}
                    size="sm"
                    className={index === 0 ? "bg-legal-purple hover:bg-legal text-white" : "border-legal-purple text-legal-purple hover:bg-legal-purple hover:text-white"}
                  >
                    {action.label}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </Card>
      )}
    </div>
  );
};

export default PersonalizedResponseEngine;