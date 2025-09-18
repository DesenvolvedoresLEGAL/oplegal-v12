import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calculator, BarChart3, Users, Zap } from 'lucide-react';
import ContentCalculator from './ContentCalculator';
import ComparisonTool from './ComparisonTool';

interface Widget {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: 'calculators' | 'tools' | 'analytics';
  component: React.ReactNode;
}

interface InteractiveWidgetHubProps {
  defaultWidget?: string;
  onWidgetChange?: (widgetId: string) => void;
}

const InteractiveWidgetHub: React.FC<InteractiveWidgetHubProps> = ({
  defaultWidget = 'event-calculator',
  onWidgetChange
}) => {
  const [activeWidget, setActiveWidget] = useState(defaultWidget);

  const widgets: Widget[] = [
    {
      id: 'event-calculator',
      title: 'Calculadora de Eventos',
      description: 'Calcule custos, ROI e economia com Smart Events',
      icon: <Calculator className="w-4 h-4" />,
      category: 'calculators',
      component: <ContentCalculator calculatorType="event-cost" />
    },
    {
      id: 'roi-calculator',
      title: 'Calculadora de ROI',
      description: 'Analise o retorno do investimento em tecnologia',
      icon: <BarChart3 className="w-4 h-4" />,
      category: 'calculators',
      component: <ContentCalculator calculatorType="roi" />
    },
    {
      id: 'attendance-predictor',
      title: 'Preditor de Comparecimento',
      description: 'Preveja a taxa de comparecimento do seu evento',
      icon: <Users className="w-4 h-4" />,
      category: 'analytics',
      component: <ContentCalculator calculatorType="attendance" />
    },
    {
      id: 'comparison-tool',
      title: 'Comparativo de Soluções',
      description: 'Compare eventos tradicionais vs Smart Events',
      icon: <Zap className="w-4 h-4" />,
      category: 'tools',
      component: <ComparisonTool comparisonType="traditional-vs-smart" />
    }
  ];

  const categories = [
    { id: 'all', label: 'Todos', count: widgets.length },
    { id: 'calculators', label: 'Calculadoras', count: widgets.filter(w => w.category === 'calculators').length },
    { id: 'tools', label: 'Ferramentas', count: widgets.filter(w => w.category === 'tools').length },
    { id: 'analytics', label: 'Analytics', count: widgets.filter(w => w.category === 'analytics').length }
  ];

  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredWidgets = selectedCategory === 'all' 
    ? widgets 
    : widgets.filter(widget => widget.category === selectedCategory);

  const activeWidgetData = widgets.find(w => w.id === activeWidget);

  const handleWidgetSelect = (widgetId: string) => {
    setActiveWidget(widgetId);
    onWidgetChange?.(widgetId);
  };

  return (
    <div className="w-full space-y-6">
      {/* Hub Header */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-primary" />
            Hub de Ferramentas Interativas LEGAL
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            Explore nossas ferramentas interativas para calcular custos, comparar soluções e otimizar seus eventos.
          </p>
          
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-4">
            {categories.map(category => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.label}
                <Badge variant="secondary" className="ml-2 text-xs">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>

          {/* Widget Selection Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredWidgets.map(widget => (
              <div
                key={widget.id}
                className={`border rounded-lg p-4 cursor-pointer transition-all hover:shadow-md ${
                  activeWidget === widget.id 
                    ? 'border-primary bg-primary/5' 
                    : 'border-muted hover:border-primary/50'
                }`}
                onClick={() => handleWidgetSelect(widget.id)}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className={`p-2 rounded ${
                    activeWidget === widget.id 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-muted'
                  }`}>
                    {widget.icon}
                  </div>
                  <Badge variant={widget.category === 'calculators' ? 'default' : widget.category === 'tools' ? 'secondary' : 'outline'} className="text-xs">
                    {widget.category}
                  </Badge>
                </div>
                <h4 className="font-medium text-sm mb-1">{widget.title}</h4>
                <p className="text-xs text-muted-foreground">{widget.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Active Widget Display */}
      {activeWidgetData && (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-primary rounded text-primary-foreground">
              {activeWidgetData.icon}
            </div>
            <div>
              <h3 className="font-semibold">{activeWidgetData.title}</h3>
              <p className="text-sm text-muted-foreground">
                {activeWidgetData.description}
              </p>
            </div>
          </div>
          
          {activeWidgetData.component}
        </div>
      )}

      {/* Additional Features Teaser */}
      <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
        <CardContent className="p-6">
          <div className="text-center space-y-3">
            <h4 className="font-semibold text-primary">Mais Ferramentas em Breve!</h4>
            <p className="text-sm text-muted-foreground">
              Estamos desenvolvendo mais ferramentas interativas para otimizar seus eventos:
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              <Badge variant="outline">Gerador de Timeline</Badge>
              <Badge variant="outline">Simulador de Networking</Badge>
              <Badge variant="outline">Otimizador de Layout</Badge>
              <Badge variant="outline">Calculadora de Carbon Footprint</Badge>
            </div>
            <Button variant="outline" size="sm">
              Solicitar Acesso Antecipado
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InteractiveWidgetHub;