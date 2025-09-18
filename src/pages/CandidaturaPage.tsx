import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from '@/hooks/use-toast';
import { ArrowLeft, Upload, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';
import WebPageSchema from '@/components/seo/WebPageSchema';
import BreadcrumbsSchema from '@/components/seo/BreadcrumbsSchema';
import AIKnowledgeProvider from '@/components/seo/AIKnowledgeProvider';
import VoiceSearchOptimization from '@/components/optimization/VoiceSearchOptimization';
import GEOAdvancedOptimization from '@/components/seo/GEOAdvancedOptimization';
import RealUserMonitoring from '@/components/seo/RealUserMonitoring';
import CoreWebVitalsMonitor from '@/components/seo/CoreWebVitalsMonitor';
import AIFeedbackSystem from '@/components/optimization/AIFeedbackSystem';
import AdvancedFeaturedSnippets from '@/components/seo/AdvancedFeaturedSnippets';
import SEOCrawlerOptimization from '@/components/optimization/SEOCrawlerOptimization';

const CandidaturaPage = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    whatsapp: '',
    vaga: '',
    experiencia: '',
    linkedin: '',
    motivacao: '',
    curriculo: null as File | null,
    termos: false
  });

  const vagas = [
    "Consultor(a) de Tecnologia - Comercial",
    "Gerente de Customer Success - Pleno", 
    "Desenvolvedor(a) Full Stack - Pleno",
    "Desenvolvedor(a) Full Stack - Sênior",
    "Analista Financeiro",
    "Assistente Administrativo"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.termos) {
      toast({
        title: "Erro",
        description: "É necessário aceitar os termos e condições.",
        variant: "destructive"
      });
      return;
    }

    // Simular envio
    toast({
      title: "Candidatura Enviada!",
      description: "Recebemos sua candidatura e entraremos em contato em breve.",
    });
    
    // Reset form
    setFormData({
      nome: '',
      email: '',
      whatsapp: '',
      vaga: '',
      experiencia: '',
      linkedin: '',
      motivacao: '',
      curriculo: null,
      termos: false
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({ ...prev, curriculo: file }));
    }
  };

  return (
    <>
      <SEOHead
        title="Candidatar-se | LEGAL"
        description="Envie sua candidatura para trabalhar na LEGAL. Faça parte da equipe que está transformando o futuro dos eventos inteligentes."
        keywords="candidatura LEGAL, enviar currículo, aplicar vaga, trabalhar LEGAL"
        url="https://operadora.legal/candidatura"
        type="website"
      />
      <WebPageSchema
        name="Candidatar-se | LEGAL"
        description="Envie sua candidatura para trabalhar na LEGAL. Faça parte da equipe que está transformando o futuro dos eventos inteligentes."
        url="https://operadora.legal/candidatura"
        breadcrumb={[
          { name: "Vagas", url: "https://operadora.legal/vagas" },
          { name: "Candidatura", url: "https://operadora.legal/candidatura" }
        ]}
      />
      <AIKnowledgeProvider />
      <VoiceSearchOptimization />
      <GEOAdvancedOptimization 
        contentDomain="business"
        entityType="company"
        optimizationLevel="advanced"
      />
      <RealUserMonitoring />
      <CoreWebVitalsMonitor enableReporting={true} />
      <AIFeedbackSystem enableRealTimeOptimization={true} />
      <AdvancedFeaturedSnippets 
        pageType="about"
        focusKeyword="LEGAL candidatura vagas"
      />
      <SEOCrawlerOptimization />
      
      <BreadcrumbsSchema />

      <div className="bg-background text-foreground font-unica min-h-screen">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-legal to-legal-purple text-white">
        <div className="container mx-auto px-4 text-center">
          <Link 
            to="/vagas" 
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para Vagas
          </Link>
          
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-wider mb-4">
            CANDIDATURA
          </h1>
          <p className="text-lg md:text-xl font-light max-w-2xl mx-auto">
            Faça parte do time que está conectando 1 milhão de pessoas, negócios e coisas no Brasil até 2030.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-black text-legal text-center">
                Envie sua Candidatura
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Dados Pessoais */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-legal">Dados Pessoais</h3>
                  
                  <div>
                    <Label htmlFor="nome">Nome Completo *</Label>
                    <Input
                      id="nome"
                      value={formData.nome}
                      onChange={(e) => setFormData(prev => ({ ...prev, nome: e.target.value }))}
                      required
                      className="mt-1"
                    />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">E-mail *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="whatsapp">WhatsApp *</Label>
                      <Input
                        id="whatsapp"
                        value={formData.whatsapp}
                        onChange={(e) => setFormData(prev => ({ ...prev, whatsapp: e.target.value }))}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>
                </div>

                {/* Vaga de Interesse */}
                <div>
                  <Label htmlFor="vaga">Vaga de Interesse *</Label>
                  <Select value={formData.vaga} onValueChange={(value) => setFormData(prev => ({ ...prev, vaga: value }))}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Selecione a vaga" />
                    </SelectTrigger>
                    <SelectContent>
                      {vagas.map((vaga) => (
                        <SelectItem key={vaga} value={vaga}>
                          {vaga}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Experiência */}
                <div>
                  <Label htmlFor="experiencia">Experiência Profissional *</Label>
                  <Textarea
                    id="experiencia"
                    value={formData.experiencia}
                    onChange={(e) => setFormData(prev => ({ ...prev, experiencia: e.target.value }))}
                    placeholder="Conte sobre sua experiência profissional relevante para a vaga..."
                    required
                    className="mt-1 min-h-[100px]"
                  />
                </div>

                {/* Motivação */}
                <div>
                  <Label htmlFor="motivacao">Por que quer fazer parte da LEGAL? *</Label>
                  <Textarea
                    id="motivacao"
                    value={formData.motivacao}
                    onChange={(e) => setFormData(prev => ({ ...prev, motivacao: e.target.value }))}
                    placeholder="Conte sobre sua motivação para trabalhar na LEGAL..."
                    required
                    className="mt-1 min-h-[100px]"
                  />
                </div>

                {/* LinkedIn */}
                <div>
                  <Label htmlFor="linkedin">Perfil do LinkedIn</Label>
                  <Input
                    id="linkedin"
                    value={formData.linkedin}
                    onChange={(e) => setFormData(prev => ({ ...prev, linkedin: e.target.value }))}
                    placeholder="https://linkedin.com/in/seu-perfil"
                    className="mt-1"
                  />
                </div>

                {/* Upload Currículo */}
                <div>
                  <Label htmlFor="curriculo">Currículo (PDF) *</Label>
                  <div className="mt-1 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-legal transition-colors">
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <div className="text-sm text-gray-600">
                      {formData.curriculo ? (
                        <span className="text-legal font-medium">{formData.curriculo.name}</span>
                      ) : (
                        <>
                          <span className="font-medium">Clique para fazer upload</span> ou arraste seu arquivo aqui
                        </>
                      )}
                    </div>
                    <input
                      id="curriculo"
                      type="file"
                      accept=".pdf"
                      onChange={handleFileChange}
                      className="hidden"
                      required
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      className="mt-2"
                      onClick={() => document.getElementById('curriculo')?.click()}
                    >
                      Selecionar Arquivo
                    </Button>
                  </div>
                </div>

                {/* Termos */}
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="termos"
                    checked={formData.termos}
                    onCheckedChange={(checked) => setFormData(prev => ({ ...prev, termos: checked as boolean }))}
                  />
                  <div className="grid gap-1.5 leading-none">
                    <Label
                      htmlFor="termos"
                      className="text-sm text-gray-600 leading-relaxed"
                    >
                      Declaro que as informações fornecidas são verdadeiras e autorizo o uso dos meus dados pessoais 
                      para o processo seletivo, conforme a LGPD. *
                    </Label>
                  </div>
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  className="w-full bg-legal hover:bg-legal/90 text-white py-3"
                  size="lg"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Enviar Candidatura
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
    </>
  );
};

export default CandidaturaPage;