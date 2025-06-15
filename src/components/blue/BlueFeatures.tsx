
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { Card, CardContent } from '@/components/ui/card';
import { 
  BarChart3, 
  Brain, 
  Database, 
  Zap, 
  Shield, 
  Smartphone,
  LineChart,
  Users,
  Settings
} from 'lucide-react';

const BlueFeatures = () => {
  const features = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Dashboards Interativos",
      description: "Visualize seus dados com gráficos dinâmicos, filtros inteligentes e drill-down automático para análises profundas."
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Análise Preditiva com IA",
      description: "Algoritmos de machine learning identificam tendências e fazem previsões precisas para suporte à decisão estratégica."
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Integração Multi-fonte",
      description: "Conecte facilmente com ERPs, CRMs, planilhas, APIs e mais de 100 fontes de dados diferentes."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Processamento em Tempo Real",
      description: "Dados atualizados instantaneamente com processamento de alta performance para decisões ágeis."
    },
    {
      icon: <LineChart className="w-8 h-8" />,
      title: "Relatórios Automatizados",
      description: "Geração automática de relatórios personalizados com distribuição por email, WhatsApp e outros canais."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Colaboração Inteligente",
      description: "Compartilhe insights, crie anotações colaborativas e defina permissões granulares por usuário."
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Acesso Mobile",
      description: "Aplicativo nativo para iOS e Android com sincronização offline e notificações push inteligentes."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Segurança Avançada",
      description: "Criptografia end-to-end, compliance LGPD/GDPR e auditoria completa de acessos e modificações."
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Customização Total",
      description: "Interface white-label, APIs abertas e possibilidade de desenvolvimento de módulos específicos."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Funcionalidades Avançadas"
          subtitle="Descubra como o Blue revoluciona a análise de dados na sua empresa com tecnologia de ponta"
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="text-legal mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-legal mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlueFeatures;
