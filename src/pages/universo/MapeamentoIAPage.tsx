import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, ChevronRight, CheckCircle, Building, Users, Target, TrendingUp, Zap, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Link } from 'react-router-dom';

interface FormData {
  // Sobre a empresa
  nomeEmpresa: string;
  setorAtuacao: string;
  tamanhoEmpresa: string;
  cargoRespondente: string;
  
  // Maturidade em IA
  conhecimentoIA: string;
  usoAtualIA: string;
  
  // Objetivos com IA
  objetivosIA: string[];
  
  // Implementação de IA
  tecnologiasIA: string[];
  areasIA: string[];
  
  // Desafios
  desafiosIA: string[];
  
  // Futuro & Investimentos
  planosFuturos: string[];
  investimentos: string[];
  
  // Perguntas Abertas
  caseSucesso: string;
  principalImpedimento: string;
  
  // Dados para relatório
  nomeCompleto: string;
  email: string;
  estado: string;
  aceitaRelatorio: string;
}

const MapeamentoIAPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    nomeEmpresa: '',
    setorAtuacao: '',
    tamanhoEmpresa: '',
    cargoRespondente: '',
    conhecimentoIA: '',
    usoAtualIA: '',
    objetivosIA: [],
    tecnologiasIA: [],
    areasIA: [],
    desafiosIA: [],
    planosFuturos: [],
    investimentos: [],
    caseSucesso: '',
    principalImpedimento: '',
    nomeCompleto: '',
    email: '',
    estado: '',
    aceitaRelatorio: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const totalSteps = 8;

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleMultiSelectChange = (field: keyof FormData, value: string, checked: boolean) => {
    setFormData(prev => {
      const currentArray = prev[field] as string[];
      if (checked) {
        return { ...prev, [field]: [...currentArray, value] };
      } else {
        return { ...prev, [field]: currentArray.filter(item => item !== value) };
      }
    });
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    // Aqui você implementaria o envio dos dados
    console.log('Dados da pesquisa:', formData);
    setIsSubmitted(true);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="w-5 h-5 text-legal" />
                Sobre sua empresa
              </CardTitle>
              <CardDescription>
                Conte-nos um pouco sobre sua organização
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="nomeEmpresa">Nome da empresa</Label>
                <Input
                  id="nomeEmpresa"
                  value={formData.nomeEmpresa}
                  onChange={(e) => handleInputChange('nomeEmpresa', e.target.value)}
                  placeholder="Digite o nome da sua empresa"
                />
              </div>
              
              <div>
                <Label>Setor de atuação</Label>
                <Select value={formData.setorAtuacao} onValueChange={(value) => handleInputChange('setorAtuacao', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o setor" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border shadow-lg z-50">
                    <SelectItem value="industria">Indústria</SelectItem>
                    <SelectItem value="servicos">Serviços</SelectItem>
                    <SelectItem value="tecnologia">Tecnologia</SelectItem>
                    <SelectItem value="varejo">Varejo</SelectItem>
                    <SelectItem value="eventos">Eventos</SelectItem>
                    <SelectItem value="outros">Outros</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Tamanho da empresa</Label>
                <Select value={formData.tamanhoEmpresa} onValueChange={(value) => handleInputChange('tamanhoEmpresa', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o tamanho" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border shadow-lg z-50">
                    <SelectItem value="1-10">1–10 funcionários</SelectItem>
                    <SelectItem value="11-50">11–50 funcionários</SelectItem>
                    <SelectItem value="51-200">51–200 funcionários</SelectItem>
                    <SelectItem value="201-500">201–500 funcionários</SelectItem>
                    <SelectItem value="500+">500+ funcionários</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Cargo do respondente</Label>
                <Select value={formData.cargoRespondente} onValueChange={(value) => handleInputChange('cargoRespondente', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione seu cargo" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border shadow-lg z-50">
                    <SelectItem value="c-level">C-Level</SelectItem>
                    <SelectItem value="gestor">Gestor</SelectItem>
                    <SelectItem value="analista">Analista</SelectItem>
                    <SelectItem value="tecnico">Técnico</SelectItem>
                    <SelectItem value="outros">Outros</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        );

      case 2:
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5 text-legal" />
                Maturidade em IA
              </CardTitle>
              <CardDescription>
                Como sua empresa se relaciona com Inteligência Artificial?
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label className="text-base font-medium">Como você avalia o conhecimento sobre IA na sua empresa?</Label>
                <RadioGroup value={formData.conhecimentoIA} onValueChange={(value) => handleInputChange('conhecimentoIA', value)} className="mt-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="baixo" id="conhecimento-baixo" />
                    <Label htmlFor="conhecimento-baixo">Baixo</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="medio" id="conhecimento-medio" />
                    <Label htmlFor="conhecimento-medio">Médio</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="alto" id="conhecimento-alto" />
                    <Label htmlFor="conhecimento-alto">Alto</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label className="text-base font-medium">Hoje, IA já faz parte dos processos da empresa?</Label>
                <RadioGroup value={formData.usoAtualIA} onValueChange={(value) => handleInputChange('usoAtualIA', value)} className="mt-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="nao-utiliza" id="uso-nao" />
                    <Label htmlFor="uso-nao">Não utilizamos ainda</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="testes" id="uso-testes" />
                    <Label htmlFor="uso-testes">Testes/Pilotos</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="areas-especificas" id="uso-especificas" />
                    <Label htmlFor="uso-especificas">Usamos em áreas específicas</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="consistente" id="uso-consistente" />
                    <Label htmlFor="uso-consistente">Usamos de forma consistente em várias áreas</Label>
                  </div>
                </RadioGroup>
              </div>
            </CardContent>
          </Card>
        );

      case 3:
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-legal" />
                Objetivos com IA
              </CardTitle>
              <CardDescription>
                Quais são os principais objetivos da sua empresa ao adotar IA? (Múltipla escolha)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  'Aumentar eficiência',
                  'Melhorar experiência do cliente',
                  'Inovar/Lançar novos produtos',
                  'Reduzir custos',
                  'Novos modelos de negócio',
                  'Outros'
                ].map((objetivo) => (
                  <div key={objetivo} className="flex items-center space-x-2">
                    <Checkbox
                      id={`objetivo-${objetivo}`}
                      checked={formData.objetivosIA.includes(objetivo)}
                      onCheckedChange={(checked) => handleMultiSelectChange('objetivosIA', objetivo, checked as boolean)}
                    />
                    <Label htmlFor={`objetivo-${objetivo}`}>{objetivo}</Label>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        );

      case 4:
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-legal" />
                Implementação de IA
              </CardTitle>
              <CardDescription>
                Como sua empresa implementa soluções de IA?
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label className="text-base font-medium mb-3 block">Quais tecnologias ou soluções de IA sua empresa utiliza?</Label>
                <div className="space-y-3">
                  {[
                    'Soluções próprias',
                    'Ferramentas de mercado',
                    'Serviços em nuvem',
                    'Não utilizamos ainda',
                    'Outros'
                  ].map((tecnologia) => (
                    <div key={tecnologia} className="flex items-center space-x-2">
                      <Checkbox
                        id={`tecnologia-${tecnologia}`}
                        checked={formData.tecnologiasIA.includes(tecnologia)}
                        onCheckedChange={(checked) => handleMultiSelectChange('tecnologiasIA', tecnologia, checked as boolean)}
                      />
                      <Label htmlFor={`tecnologia-${tecnologia}`}>{tecnologia}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Label className="text-base font-medium mb-3 block">Em quais áreas a IA já está presente?</Label>
                <div className="space-y-3">
                  {[
                    'Atendimento ao cliente',
                    'Análise de dados',
                    'Automação de processos',
                    'Marketing/Vendas',
                    'RH',
                    'Operações',
                    'Outros'
                  ].map((area) => (
                    <div key={area} className="flex items-center space-x-2">
                      <Checkbox
                        id={`area-${area}`}
                        checked={formData.areasIA.includes(area)}
                        onCheckedChange={(checked) => handleMultiSelectChange('areasIA', area, checked as boolean)}
                      />
                      <Label htmlFor={`area-${area}`}>{area}</Label>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        );

      case 5:
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-legal" />
                Desafios
              </CardTitle>
              <CardDescription>
                Quais são os principais desafios para expandir o uso de IA? (Múltipla escolha)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  'Falta de conhecimento',
                  'Orçamento',
                  'Integração de sistemas',
                  'Talentos',
                  'Segurança',
                  'Não saber o que resolve',
                  'Dados desorganizados',
                  'Outros'
                ].map((desafio) => (
                  <div key={desafio} className="flex items-center space-x-2">
                    <Checkbox
                      id={`desafio-${desafio}`}
                      checked={formData.desafiosIA.includes(desafio)}
                      onCheckedChange={(checked) => handleMultiSelectChange('desafiosIA', desafio, checked as boolean)}
                    />
                    <Label htmlFor={`desafio-${desafio}`}>{desafio}</Label>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        );

      case 6:
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-legal" />
                Futuro & Investimentos
              </CardTitle>
              <CardDescription>
                Quais são os planos da sua empresa para o futuro com IA?
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label className="text-base font-medium mb-3 block">Planos futuros com IA:</Label>
                <div className="space-y-3">
                  {[
                    'Expandir uso',
                    'Desenvolver soluções próprias',
                    'Investir em parceiros',
                    'Capacitar time',
                    'Não tem plano ainda'
                  ].map((plano) => (
                    <div key={plano} className="flex items-center space-x-2">
                      <Checkbox
                        id={`plano-${plano}`}
                        checked={formData.planosFuturos.includes(plano)}
                        onCheckedChange={(checked) => handleMultiSelectChange('planosFuturos', plano, checked as boolean)}
                      />
                      <Label htmlFor={`plano-${plano}`}>{plano}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Label className="text-base font-medium mb-3 block">Disposto a investir em:</Label>
                <div className="space-y-3">
                  {[
                    'Ferramentas avançadas',
                    'Treinamento/capacitação',
                    'Contratação de especialistas',
                    'Outros'
                  ].map((investimento) => (
                    <div key={investimento} className="flex items-center space-x-2">
                      <Checkbox
                        id={`investimento-${investimento}`}
                        checked={formData.investimentos.includes(investimento)}
                        onCheckedChange={(checked) => handleMultiSelectChange('investimentos', investimento, checked as boolean)}
                      />
                      <Label htmlFor={`investimento-${investimento}`}>{investimento}</Label>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        );

      case 7:
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5 text-legal" />
                Perguntas Abertas
              </CardTitle>
              <CardDescription>
                Compartilhe sua experiência e insights
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="caseSucesso" className="text-base font-medium">
                  Conte o maior case de IA (sucesso ou fracasso) que já viu na sua empresa/setor:
                </Label>
                <Textarea
                  id="caseSucesso"
                  value={formData.caseSucesso}
                  onChange={(e) => handleInputChange('caseSucesso', e.target.value)}
                  placeholder="Descreva o case que mais te marcou..."
                  rows={4}
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="impedimento" className="text-base font-medium">
                  O que mais te impede de colocar IA no centro da estratégia hoje?
                </Label>
                <Textarea
                  id="impedimento"
                  value={formData.principalImpedimento}
                  onChange={(e) => handleInputChange('principalImpedimento', e.target.value)}
                  placeholder="Conte qual é o principal obstáculo..."
                  rows={4}
                  className="mt-2"
                />
              </div>
            </CardContent>
          </Card>
        );

      case 8:
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-legal" />
                Dados para envio do relatório
              </CardTitle>
              <CardDescription>
                Para enviarmos o relatório exclusivo com os resultados
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="nomeCompleto">Nome completo *</Label>
                <Input
                  id="nomeCompleto"
                  value={formData.nomeCompleto}
                  onChange={(e) => handleInputChange('nomeCompleto', e.target.value)}
                  placeholder="Digite seu nome completo"
                  required
                />
              </div>

              <div>
                <Label htmlFor="email">E-mail *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="Digite seu e-mail"
                  required
                />
              </div>

              <div>
                <Label htmlFor="estado">Estado</Label>
                <Input
                  id="estado"
                  value={formData.estado}
                  onChange={(e) => handleInputChange('estado', e.target.value)}
                  placeholder="Digite seu estado"
                />
              </div>

              <div>
                <Label className="text-base font-medium">Aceita receber o relatório completo em primeira mão?</Label>
                <RadioGroup value={formData.aceitaRelatorio} onValueChange={(value) => handleInputChange('aceitaRelatorio', value)} className="mt-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="sim" id="relatorio-sim" />
                    <Label htmlFor="relatorio-sim">Sim</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="nao" id="relatorio-nao" />
                    <Label htmlFor="relatorio-nao">Não</Label>
                  </div>
                </RadioGroup>
              </div>
            </CardContent>
          </Card>
        );

      default:
        return null;
    }
  };

  if (isSubmitted) {
    return (
      <>
        <Helmet>
          <title>Obrigado! | Jornada de IA Brasil | LEGAL</title>
        </Helmet>
        
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center">
          <div className="container mx-auto px-4">
            <Card className="max-w-2xl mx-auto text-center">
              <CardContent className="py-12">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  Obrigado por participar!
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                  Seu feedback ajuda a construir o futuro da IA no Brasil. 
                  Fique de olho no seu e-mail para receber o relatório exclusivo LEGAL.
                </p>
                <div className="space-y-4">
                  <Button asChild className="bg-legal hover:bg-legal-purple">
                    <Link to="/universo/pesquisas">Voltar para Pesquisas</Link>
                  </Button>
                  <div>
                    <Button variant="outline" asChild>
                      <Link to="/">Ir para Home</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Jornada de IA Brasil | Mapeamento Nacional 2025 | LEGAL</title>
        <meta name="description" content="Descubra como as empresas brasileiras estão usando Inteligência Artificial para transformar seus negócios." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Link to="/universo" className="hover:text-legal">Universo</Link>
              <ChevronRight className="w-4 h-4" />
              <Link to="/universo/pesquisas" className="hover:text-legal">Pesquisas</Link>
              <ChevronRight className="w-4 h-4" />
              <Link to="/universo/pesquisas/mercado" className="hover:text-legal">Pesquisas de Mercado</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-gray-900">Mapeamento Nacional 2025</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-legal-purple via-legal to-legal-cyan">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-4 mb-8">
              <Link 
                to="/universo/pesquisas/mercado" 
                className="text-white/80 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-6 h-6" />
              </Link>
              <div className="text-center flex-1">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Jornada de IA Brasil | Mapeamento Nacional 2025
                </h1>
                <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto">
                  Descubra como as empresas brasileiras estão usando Inteligência Artificial 
                  para transformar seus negócios.
                </p>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-4xl mx-auto">
              <p className="text-white/95 text-lg leading-relaxed mb-6">
                A LEGAL está liderando o maior mapeamento sobre a maturidade e adoção de 
                Inteligência Artificial nas empresas do Brasil. Sua resposta vai gerar 
                inteligência de mercado e te garantir acesso exclusivo ao relatório final.
              </p>
              <p className="text-white/95 text-lg leading-relaxed">
                <strong>Participe, contribua com o ecossistema e coloque sua empresa no radar da inovação!</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Progress Bar */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">
                Etapa {currentStep} de {totalSteps}
              </span>
              <span className="text-sm text-gray-500">
                {Math.round((currentStep / totalSteps) * 100)}% concluído
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-legal to-legal-cyan h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Form Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              {renderStep()}
              
              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                <Button
                  variant="outline"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className="flex items-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Anterior
                </Button>
                
                {currentStep === totalSteps ? (
                  <Button
                    onClick={handleSubmit}
                    className="bg-legal hover:bg-legal-purple flex items-center gap-2"
                    disabled={!formData.email || !formData.nomeCompleto}
                  >
                    <CheckCircle className="w-4 h-4" />
                    Finalizar Pesquisa
                  </Button>
                ) : (
                  <Button
                    onClick={nextStep}
                    className="bg-legal hover:bg-legal-purple flex items-center gap-2"
                  >
                    Próximo
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MapeamentoIAPage;