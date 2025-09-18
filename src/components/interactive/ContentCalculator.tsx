import React, { useState, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Calculator, TrendingUp, Users, DollarSign } from 'lucide-react';

interface CalculationResult {
  totalCost: number;
  costPerParticipant: number;
  roi: number;
  savings: number;
  recommendations: string[];
  breakdown: CostBreakdown[];
}

interface CostBreakdown {
  category: string;
  cost: number;
  percentage: number;
}

interface ContentCalculatorProps {
  calculatorType?: 'event-cost' | 'roi' | 'attendance';
  onCalculationComplete?: (result: CalculationResult) => void;
}

const ContentCalculator: React.FC<ContentCalculatorProps> = ({
  calculatorType = 'event-cost',
  onCalculationComplete
}) => {
  const [inputs, setInputs] = useState({
    participants: '',
    eventDuration: '',
    eventType: '',
    venue: '',
    catering: '',
    technology: '',
    marketing: '',
    staff: ''
  });

  const [result, setResult] = useState<CalculationResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const eventTypes = [
    { value: 'conference', label: 'Conferência', multiplier: 1.2 },
    { value: 'workshop', label: 'Workshop', multiplier: 0.8 },
    { value: 'seminar', label: 'Seminário', multiplier: 1.0 },
    { value: 'exhibition', label: 'Feira/Exposição', multiplier: 1.5 },
    { value: 'corporate', label: 'Evento Corporativo', multiplier: 1.3 },
    { value: 'webinar', label: 'Webinar', multiplier: 0.3 }
  ];

  const calculateEventCost = useCallback(async () => {
    const participants = parseInt(inputs.participants) || 0;
    const duration = parseInt(inputs.eventDuration) || 1;
    const venue = parseFloat(inputs.venue) || 0;
    const catering = parseFloat(inputs.catering) || 0;
    const technology = parseFloat(inputs.technology) || 0;
    const marketing = parseFloat(inputs.marketing) || 0;
    const staff = parseFloat(inputs.staff) || 0;

    if (participants === 0) return;

    setIsCalculating(true);

    try {
      // Simular cálculo
      await new Promise(resolve => setTimeout(resolve, 1000));

      const eventTypeData = eventTypes.find(type => type.value === inputs.eventType);
      const multiplier = eventTypeData?.multiplier || 1.0;

      const baseCosts = {
        venue: venue * duration * multiplier,
        catering: catering * participants,
        technology: technology + (participants * 15), // R$ 15 por participante para tech
        marketing: marketing || (participants * 25), // R$ 25 por participante se não informado
        staff: staff || (duration * 800 * Math.ceil(participants / 50)) // Staff baseado na duração e participantes
      };

      const totalCost = Object.values(baseCosts).reduce((sum, cost) => sum + cost, 0);
      const costPerParticipant = totalCost / participants;

      // Cálculo de ROI baseado em benchmarks da indústria
      const expectedRevenue = participants * 150 * multiplier; // Revenue médio por participante
      const roi = ((expectedRevenue - totalCost) / totalCost) * 100;

      // Cálculo de economia com Smart Events
      const traditionalCostMultiplier = 1.4; // 40% mais caro sem tecnologia
      const traditionalCost = totalCost * traditionalCostMultiplier;
      const savings = traditionalCost - totalCost;

      const breakdown: CostBreakdown[] = Object.entries(baseCosts).map(([category, cost]) => ({
        category: getCategoryName(category),
        cost,
        percentage: (cost / totalCost) * 100
      }));

      const recommendations = generateRecommendations(participants, totalCost, inputs.eventType);

      const calculationResult: CalculationResult = {
        totalCost,
        costPerParticipant,
        roi,
        savings,
        recommendations,
        breakdown
      };

      setResult(calculationResult);
      onCalculationComplete?.(calculationResult);

    } catch (error) {
      console.error('Erro no cálculo:', error);
    } finally {
      setIsCalculating(false);
    }
  }, [inputs, onCalculationComplete]);

  const getCategoryName = (category: string): string => {
    const names: Record<string, string> = {
      venue: 'Local/Espaço',
      catering: 'Alimentação',
      technology: 'Tecnologia',
      marketing: 'Marketing',
      staff: 'Equipe/Staff'
    };
    return names[category] || category;
  };

  const generateRecommendations = (participants: number, totalCost: number, eventType: string): string[] => {
    const recommendations: string[] = [];

    if (participants > 500) {
      recommendations.push('Para eventos grandes, considere usar a plataforma Smart Events para reduzir custos operacionais');
    }

    if (totalCost / participants > 200) {
      recommendations.push('Custo por participante alto - analise oportunidades de otimização com tecnologia LEGAL');
    }

    if (eventType === 'webinar') {
      recommendations.push('Webinars têm excelente ROI - considere híbrido para maximizar alcance');
    }

    recommendations.push('Use análise de dados em tempo real para otimizar engagement');
    recommendations.push('Implemente sistema de feedback automatizado para melhorar futuras edições');

    return recommendations;
  };

  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calculator className="w-5 h-5 text-primary" />
          Calculadora de Eventos LEGAL
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div>
              <Label htmlFor="participants">Número de Participantes *</Label>
              <Input
                id="participants"
                type="number"
                placeholder="Ex: 250"
                value={inputs.participants}
                onChange={(e) => setInputs(prev => ({ ...prev, participants: e.target.value }))}
              />
            </div>

            <div>
              <Label htmlFor="eventDuration">Duração (dias) *</Label>
              <Input
                id="eventDuration"
                type="number"
                placeholder="Ex: 2"
                value={inputs.eventDuration}
                onChange={(e) => setInputs(prev => ({ ...prev, eventDuration: e.target.value }))}
              />
            </div>

            <div>
              <Label htmlFor="eventType">Tipo de Evento *</Label>
              <Select onValueChange={(value) => setInputs(prev => ({ ...prev, eventType: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o tipo" />
                </SelectTrigger>
                <SelectContent>
                  {eventTypes.map(type => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-3">
            <div>
              <Label htmlFor="venue">Custo do Local (R$/dia)</Label>
              <Input
                id="venue"
                type="number"
                placeholder="Ex: 5000"
                value={inputs.venue}
                onChange={(e) => setInputs(prev => ({ ...prev, venue: e.target.value }))}
              />
            </div>

            <div>
              <Label htmlFor="catering">Alimentação (R$/pessoa)</Label>
              <Input
                id="catering"
                type="number"
                placeholder="Ex: 80"
                value={inputs.catering}
                onChange={(e) => setInputs(prev => ({ ...prev, catering: e.target.value }))}
              />
            </div>

            <div>
              <Label htmlFor="technology">Tecnologia (R$ total)</Label>
              <Input
                id="technology"
                type="number"
                placeholder="Ex: 12000"
                value={inputs.technology}
                onChange={(e) => setInputs(prev => ({ ...prev, technology: e.target.value }))}
              />
            </div>
          </div>
        </div>

        <Button
          onClick={calculateEventCost}
          disabled={isCalculating || !inputs.participants || !inputs.eventDuration || !inputs.eventType}
          className="w-full"
        >
          {isCalculating ? (
            <>
              <Calculator className="w-4 h-4 mr-2 animate-spin" />
              Calculando...
            </>
          ) : (
            <>
              <Calculator className="w-4 h-4 mr-2" />
              Calcular Custos e ROI
            </>
          )}
        </Button>

        {result && (
          <div className="space-y-4">
            <Separator />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center space-y-1">
                <DollarSign className="w-6 h-6 mx-auto text-primary" />
                <div className="text-2xl font-bold text-primary">
                  {formatCurrency(result.totalCost)}
                </div>
                <div className="text-sm text-muted-foreground">Custo Total</div>
              </div>

              <div className="text-center space-y-1">
                <Users className="w-6 h-6 mx-auto text-green-500" />
                <div className="text-2xl font-bold text-green-500">
                  {formatCurrency(result.costPerParticipant)}
                </div>
                <div className="text-sm text-muted-foreground">Por Participante</div>
              </div>

              <div className="text-center space-y-1">
                <TrendingUp className="w-6 h-6 mx-auto text-blue-500" />
                <div className="text-2xl font-bold text-blue-500">
                  {result.roi.toFixed(1)}%
                </div>
                <div className="text-sm text-muted-foreground">ROI Estimado</div>
              </div>

              <div className="text-center space-y-1">
                <Badge className="w-6 h-6 mx-auto text-orange-500 bg-transparent border-0 p-0">
                  💰
                </Badge>
                <div className="text-2xl font-bold text-orange-500">
                  {formatCurrency(result.savings)}
                </div>
                <div className="text-sm text-muted-foreground">Economia Smart Events</div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold">Breakdown de Custos</h4>
              <div className="space-y-2">
                {result.breakdown.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: `hsl(${index * 60}, 70%, 50%)` }}
                      />
                      <span className="text-sm">{item.category}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">{item.percentage.toFixed(1)}%</Badge>
                      <span className="font-medium">{formatCurrency(item.cost)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold">Recomendações LEGAL</h4>
              <div className="space-y-2">
                {result.recommendations.map((recommendation, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Badge variant="secondary" className="mt-0.5 text-xs">
                      {index + 1}
                    </Badge>
                    <p className="text-sm text-muted-foreground">{recommendation}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
              <h5 className="font-semibold text-primary mb-2">💡 Dica LEGAL TechCo</h5>
              <p className="text-sm">
                Com nossa plataforma Smart Events, você pode reduzir custos operacionais em até 40% 
                e aumentar o engagement em 300%. Solicite uma demonstração personalizada!
              </p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ContentCalculator;