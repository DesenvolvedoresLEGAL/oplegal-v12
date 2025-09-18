interface CRMCredentials {
  provider: 'hubspot' | 'salesforce' | 'pipedrive' | 'zoho' | 'custom';
  api_key: string;
  api_secret?: string;
  instance_url?: string;
  refresh_token?: string;
  access_token?: string;
}

interface Lead {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  company: string;
  job_title: string;
  phone?: string;
  source: string;
  status: 'new' | 'contacted' | 'qualified' | 'proposal' | 'negotiation' | 'closed_won' | 'closed_lost';
  score: number;
  created_at: string;
  last_activity: string;
  estimated_value: number;
  tags: string[];
  custom_fields: Record<string, any>;
  ai_insights: {
    conversion_probability: number;
    recommended_actions: string[];
    optimal_contact_time: string;
    interest_level: 'high' | 'medium' | 'low';
    next_best_action: string;
  };
}

interface Deal {
  id: string;
  title: string;
  lead_id: string;
  stage: string;
  value: number;
  probability: number;
  expected_close_date: string;
  created_at: string;
  last_modified: string;
  owner: string;
  source: string;
  products: string[];
  ai_analysis: {
    risk_factors: string[];
    success_indicators: string[];
    recommended_actions: string[];
    forecasted_close_date: string;
    confidence_score: number;
  };
}

interface CRMMetrics {
  total_leads: number;
  qualified_leads: number;
  conversion_rate: number;
  average_deal_size: number;
  sales_cycle_length: number;
  pipeline_value: number;
  closed_won_rate: number;
  lead_sources: { source: string; count: number; conversion_rate: number }[];
  monthly_growth: number;
  forecast: {
    next_month: number;
    next_quarter: number;
    confidence: number;
  };
}

interface CRMIntegrationConfig {
  lead_scoring: {
    email_engagement_weight: number;
    website_behavior_weight: number;
    demographic_weight: number;
    company_size_weight: number;
  };
  automation_rules: {
    auto_assign_leads: boolean;
    auto_follow_up: boolean;
    lead_nurturing: boolean;
    deal_alerts: boolean;
  };
  sync_settings: {
    sync_frequency: 'realtime' | 'hourly' | 'daily';
    bidirectional_sync: boolean;
    conflict_resolution: 'crm_wins' | 'website_wins' | 'manual';
  };
}

class CRMIntegration {
  private credentials: CRMCredentials | null = null;
  private config: CRMIntegrationConfig;
  private isConnected: boolean = false;

  constructor() {
    this.config = {
      lead_scoring: {
        email_engagement_weight: 0.3,
        website_behavior_weight: 0.4,
        demographic_weight: 0.2,
        company_size_weight: 0.1
      },
      automation_rules: {
        auto_assign_leads: true,
        auto_follow_up: true,
        lead_nurturing: true,
        deal_alerts: true
      },
      sync_settings: {
        sync_frequency: 'hourly',
        bidirectional_sync: true,
        conflict_resolution: 'crm_wins'
      }
    };
  }

  /**
   * Conecta com o CRM
   */
  async connect(credentials: CRMCredentials): Promise<void> {
    try {
      const isValid = await this.validateConnection(credentials);
      if (!isValid) {
        throw new Error(`Failed to connect to ${credentials.provider}`);
      }

      this.credentials = credentials;
      this.isConnected = true;
      
      console.log(`Successfully connected to ${credentials.provider}`);
      
      // Iniciar sincronização automática
      if (this.config.sync_settings.sync_frequency !== 'realtime') {
        this.startPeriodicSync();
      }
    } catch (error) {
      console.error('CRM connection failed:', error);
      throw error;
    }
  }

  /**
   * Valida conexão com o CRM
   */
  private async validateConnection(credentials: CRMCredentials): Promise<boolean> {
    try {
      switch (credentials.provider) {
        case 'hubspot':
          return await this.validateHubSpot(credentials);
        case 'salesforce':
          return await this.validateSalesforce(credentials);
        case 'pipedrive':
          return await this.validatePipedrive(credentials);
        case 'zoho':
          return await this.validateZoho(credentials);
        default:
          return true; // Para CRM customizado, assumir válido
      }
    } catch (error) {
      console.error('Validation error:', error);
      return false;
    }
  }

  /**
   * Valida HubSpot
   */
  private async validateHubSpot(credentials: CRMCredentials): Promise<boolean> {
    try {
      const response = await fetch('https://api.hubapi.com/crm/v3/owners', {
        headers: {
          'Authorization': `Bearer ${credentials.access_token}`,
          'Content-Type': 'application/json'
        }
      });
      return response.ok;
    } catch {
      return false;
    }
  }

  /**
   * Valida Salesforce
   */
  private async validateSalesforce(credentials: CRMCredentials): Promise<boolean> {
    try {
      const response = await fetch(`${credentials.instance_url}/services/data/v58.0/`, {
        headers: {
          'Authorization': `Bearer ${credentials.access_token}`,
          'Content-Type': 'application/json'
        }
      });
      return response.ok;
    } catch {
      return false;
    }
  }

  /**
   * Valida Pipedrive
   */
  private async validatePipedrive(credentials: CRMCredentials): Promise<boolean> {
    try {
      const response = await fetch(`https://api.pipedrive.com/v1/users/me?api_token=${credentials.api_key}`);
      return response.ok;
    } catch {
      return false;
    }
  }

  /**
   * Valida Zoho
   */
  private async validateZoho(credentials: CRMCredentials): Promise<boolean> {
    try {
      const response = await fetch('https://www.zohoapis.com/crm/v2/users', {
        headers: {
          'Authorization': `Zoho-oauthtoken ${credentials.access_token}`,
          'Content-Type': 'application/json'
        }
      });
      return response.ok;
    } catch {
      return false;
    }
  }

  /**
   * Sincroniza lead do site para o CRM
   */
  async syncLeadToCRM(leadData: Partial<Lead>): Promise<string> {
    if (!this.isConnected) {
      throw new Error('CRM not connected');
    }

    try {
      // Enriquecer lead com IA
      const enrichedLead = await this.enrichLeadWithAI(leadData);
      
      // Sincronizar com CRM
      const crmLeadId = await this.createLeadInCRM(enrichedLead);
      
      // Aplicar automações
      await this.applyAutomationRules(crmLeadId, enrichedLead);
      
      console.log(`Lead synced to CRM with ID: ${crmLeadId}`);
      return crmLeadId;
    } catch (error) {
      console.error('Failed to sync lead to CRM:', error);
      throw error;
    }
  }

  /**
   * Enriquece lead com IA
   */
  private async enrichLeadWithAI(leadData: Partial<Lead>): Promise<Lead> {
    // Calcular score do lead usando IA
    const score = await this.calculateLeadScore(leadData);
    
    // Gerar insights de IA
    const aiInsights = await this.generateAIInsights(leadData);

    // Determinar source se não especificado
    const source = leadData.source || await this.detectLeadSource(leadData);

    const enrichedLead: Lead = {
      id: leadData.id || `lead_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      email: leadData.email || '',
      first_name: leadData.first_name || '',
      last_name: leadData.last_name || '',
      company: leadData.company || '',
      job_title: leadData.job_title || '',
      phone: leadData.phone,
      source,
      status: leadData.status || 'new',
      score,
      created_at: leadData.created_at || new Date().toISOString(),
      last_activity: new Date().toISOString(),
      estimated_value: leadData.estimated_value || await this.estimateLeadValue(leadData),
      tags: leadData.tags || [],
      custom_fields: leadData.custom_fields || {},
      ai_insights: aiInsights
    };

    return enrichedLead;
  }

  /**
   * Calcula score do lead usando IA
   */
  private async calculateLeadScore(leadData: Partial<Lead>): Promise<number> {
    let score = 0;

    // Score baseado em dados demográficos
    if (leadData.job_title) {
      const executiveTitles = ['ceo', 'cto', 'diretor', 'gerente', 'coordenador'];
      if (executiveTitles.some(title => leadData.job_title!.toLowerCase().includes(title))) {
        score += 25;
      }
    }

    // Score baseado na empresa
    if (leadData.company) {
      // Empresas conhecidas ou de setores relevantes
      const techKeywords = ['tech', 'software', 'digital', 'inovação', 'tecnologia'];
      if (techKeywords.some(keyword => leadData.company!.toLowerCase().includes(keyword))) {
        score += 20;
      }
    }

    // Score baseado no source
    const sourceScores = {
      'organic': 30,
      'direct': 25,
      'referral': 35,
      'social': 15,
      'paid': 20,
      'email': 25
    };

    if (leadData.source && sourceScores[leadData.source as keyof typeof sourceScores]) {
      score += sourceScores[leadData.source as keyof typeof sourceScores];
    }

    // Score baseado em engagement (simulado)
    score += Math.random() * 20; // Simular engagement score

    return Math.min(Math.round(score), 100);
  }

  /**
   * Gera insights de IA para o lead
   */
  private async generateAIInsights(leadData: Partial<Lead>): Promise<Lead['ai_insights']> {
    const score = await this.calculateLeadScore(leadData);
    
    // Calcular probabilidade de conversão
    const conversionProbability = Math.min(score / 100 * 0.8 + Math.random() * 0.2, 0.95);

    // Determinar nível de interesse baseado no score
    let interestLevel: 'high' | 'medium' | 'low' = 'low';
    if (score >= 70) interestLevel = 'high';
    else if (score >= 40) interestLevel = 'medium';

    // Gerar recomendações
    const recommendations = this.generateRecommendations(leadData, score);

    // Determinar horário ótimo de contato
    const optimalContactTime = this.predictOptimalContactTime(leadData);

    // Próxima melhor ação
    const nextBestAction = this.determineNextBestAction(leadData, score);

    return {
      conversion_probability: Math.round(conversionProbability * 100) / 100,
      recommended_actions: recommendations,
      optimal_contact_time: optimalContactTime,
      interest_level: interestLevel,
      next_best_action: nextBestAction
    };
  }

  /**
   * Gera recomendações personalizadas
   */
  private generateRecommendations(leadData: Partial<Lead>, score: number): string[] {
    const recommendations: string[] = [];

    if (score >= 70) {
      recommendations.push('Contato direto prioritário - lead quente');
      recommendations.push('Agendar demonstração personalizada');
      recommendations.push('Enviar proposta comercial');
    } else if (score >= 40) {
      recommendations.push('Nutrição com conteúdo educativo');
      recommendations.push('Convidar para webinar ou evento');
      recommendations.push('Follow-up em 3-5 dias');
    } else {
      recommendations.push('Incluir em campanha de nutrição');
      recommendations.push('Enviar conteúdo de awareness');
      recommendations.push('Monitorar engajamento por 30 dias');
    }

    // Recomendações baseadas no job title
    if (leadData.job_title?.toLowerCase().includes('tech') || 
        leadData.job_title?.toLowerCase().includes('ti')) {
      recommendations.push('Focar em benefícios técnicos e integração');
    }

    return recommendations;
  }

  /**
   * Prediz horário ótimo de contato
   */
  private predictOptimalContactTime(leadData: Partial<Lead>): string {
    // Baseado no job title e setor
    if (leadData.job_title?.toLowerCase().includes('ceo') ||
        leadData.job_title?.toLowerCase().includes('diretor')) {
      return '08:00-09:00'; // Executivos preferem manhã cedo
    }

    if (leadData.job_title?.toLowerCase().includes('tech') ||
        leadData.job_title?.toLowerCase().includes('dev')) {
      return '14:00-15:00'; // Técnicos preferem início da tarde
    }

    return '10:00-11:00'; // Horário padrão para outros perfis
  }

  /**
   * Determina próxima melhor ação
   */
  private determineNextBestAction(leadData: Partial<Lead>, score: number): string {
    if (score >= 80) return 'Ligar em até 1 hora';
    if (score >= 60) return 'Enviar email personalizado hoje';
    if (score >= 40) return 'Adicionar à sequência de nutrição';
    return 'Monitorar atividade no site';
  }

  /**
   * Detecta source do lead
   */
  private async detectLeadSource(leadData: Partial<Lead>): Promise<string> {
    // Em produção, isso viria dos parâmetros UTM ou referrer
    const sources = ['organic', 'direct', 'social', 'referral', 'email'];
    return sources[Math.floor(Math.random() * sources.length)];
  }

  /**
   * Estima valor do lead
   */
  private async estimateLeadValue(leadData: Partial<Lead>): Promise<number> {
    let baseValue = 5000; // Valor base

    // Ajustar por job title
    if (leadData.job_title?.toLowerCase().includes('ceo') ||
        leadData.job_title?.toLowerCase().includes('diretor')) {
      baseValue *= 2;
    }

    // Ajustar por empresa
    if (leadData.company && leadData.company.length > 20) {
      baseValue *= 1.5; // Empresas maiores
    }

    return Math.round(baseValue + (Math.random() * baseValue * 0.5));
  }

  /**
   * Cria lead no CRM
   */
  private async createLeadInCRM(lead: Lead): Promise<string> {
    if (!this.credentials) {
      throw new Error('CRM credentials not set');
    }

    try {
      // Simular criação no CRM (em produção faria chamada real)
      const crmLeadId = `crm_${this.credentials.provider}_${Date.now()}`;
      
      console.log(`Creating lead in ${this.credentials.provider}:`, {
        id: crmLeadId,
        email: lead.email,
        score: lead.score,
        estimated_value: lead.estimated_value
      });

      return crmLeadId;
    } catch (error) {
      console.error('Failed to create lead in CRM:', error);
      throw error;
    }
  }

  /**
   * Aplica regras de automação
   */
  private async applyAutomationRules(leadId: string, lead: Lead): Promise<void> {
    if (!this.config.automation_rules) return;

    try {
      // Auto-assign leads
      if (this.config.automation_rules.auto_assign_leads) {
        await this.autoAssignLead(leadId, lead);
      }

      // Auto follow-up
      if (this.config.automation_rules.auto_follow_up) {
        await this.scheduleAutoFollowUp(leadId, lead);
      }

      // Lead nurturing
      if (this.config.automation_rules.lead_nurturing) {
        await this.startLeadNurturing(leadId, lead);
      }

      // Deal alerts
      if (this.config.automation_rules.deal_alerts && lead.score >= 70) {
        await this.sendDealAlert(leadId, lead);
      }
    } catch (error) {
      console.error('Failed to apply automation rules:', error);
    }
  }

  /**
   * Auto-assign lead para vendedor
   */
  private async autoAssignLead(leadId: string, lead: Lead): Promise<void> {
    const salesReps = ['João Silva', 'Maria Santos', 'Pedro Oliveira'];
    const assignedTo = salesReps[Math.floor(Math.random() * salesReps.length)];
    
    console.log(`Auto-assigned lead ${leadId} to ${assignedTo}`);
  }

  /**
   * Agenda follow-up automático
   */
  private async scheduleAutoFollowUp(leadId: string, lead: Lead): Promise<void> {
    const followUpTime = new Date();
    
    if (lead.score >= 70) {
      followUpTime.setHours(followUpTime.getHours() + 1); // 1 hora para leads quentes
    } else if (lead.score >= 40) {
      followUpTime.setDate(followUpTime.getDate() + 1); // 1 dia para leads médios
    } else {
      followUpTime.setDate(followUpTime.getDate() + 3); // 3 dias para leads frios
    }

    console.log(`Scheduled follow-up for lead ${leadId} at ${followUpTime.toISOString()}`);
  }

  /**
   * Inicia nutrição de leads
   */
  private async startLeadNurturing(leadId: string, lead: Lead): Promise<void> {
    const nurtureSequence = lead.score >= 50 ? 'high-intent' : 'awareness';
    console.log(`Started ${nurtureSequence} nurture sequence for lead ${leadId}`);
  }

  /**
   * Envia alerta de deal
   */
  private async sendDealAlert(leadId: string, lead: Lead): Promise<void> {
    console.log(`🔥 High-value lead alert: ${lead.first_name} ${lead.last_name} (Score: ${lead.score})`);
  }

  /**
   * Obtém métricas do CRM
   */
  async getCRMMetrics(): Promise<CRMMetrics> {
    // Simular dados do CRM
    return {
      total_leads: 2847,
      qualified_leads: 1234,
      conversion_rate: 23.5,
      average_deal_size: 15600,
      sales_cycle_length: 45,
      pipeline_value: 890000,
      closed_won_rate: 32.1,
      lead_sources: [
        { source: 'Organic', count: 1234, conversion_rate: 28.5 },
        { source: 'Direct', count: 890, conversion_rate: 35.2 },
        { source: 'Social', count: 456, conversion_rate: 18.9 },
        { source: 'Referral', count: 267, conversion_rate: 42.1 }
      ],
      monthly_growth: 12.8,
      forecast: {
        next_month: 125000,
        next_quarter: 340000,
        confidence: 87
      }
    };
  }

  /**
   * Obtém leads com análise de IA
   */
  async getLeadsWithAI(filters?: { status?: string; score_min?: number; limit?: number }): Promise<Lead[]> {
    // Simular dados de leads
    const mockLeads: Lead[] = [
      {
        id: 'lead_1',
        email: 'joao.silva@techcorp.com.br',
        first_name: 'João',
        last_name: 'Silva',
        company: 'TechCorp Brasil',
        job_title: 'CTO',
        source: 'organic',
        status: 'qualified',
        score: 85,
        created_at: '2024-01-15T10:30:00Z',
        last_activity: '2024-01-15T14:20:00Z',
        estimated_value: 25000,
        tags: ['enterprise', 'tech'],
        custom_fields: {},
        ai_insights: {
          conversion_probability: 0.78,
          recommended_actions: ['Agendar demo técnica', 'Enviar case study relevante'],
          optimal_contact_time: '08:00-09:00',
          interest_level: 'high',
          next_best_action: 'Ligar em até 1 hora'
        }
      }
      // ... mais leads mock
    ];

    // Aplicar filtros
    let filteredLeads = mockLeads;
    if (filters?.status) {
      filteredLeads = filteredLeads.filter(lead => lead.status === filters.status);
    }
    if (filters?.score_min) {
      filteredLeads = filteredLeads.filter(lead => lead.score >= filters.score_min!);
    }
    if (filters?.limit) {
      filteredLeads = filteredLeads.slice(0, filters.limit);
    }

    return filteredLeads;
  }

  /**
   * Atualiza configurações
   */
  updateConfig(newConfig: Partial<CRMIntegrationConfig>): void {
    this.config = { ...this.config, ...newConfig };
    console.log('CRM configuration updated');
  }

  /**
   * Inicia sincronização periódica
   */
  private startPeriodicSync(): void {
    const intervals = {
      hourly: 60 * 60 * 1000,
      daily: 24 * 60 * 60 * 1000
    };

    const interval = intervals[this.config.sync_settings.sync_frequency as keyof typeof intervals];
    if (interval) {
      setInterval(() => {
        this.performSync();
      }, interval);
    }
  }

  /**
   * Executa sincronização
   */
  private async performSync(): Promise<void> {
    console.log('Performing CRM sync...');
    // Implementar lógica de sincronização
  }

  /**
   * Desconecta do CRM
   */
  disconnect(): void {
    this.credentials = null;
    this.isConnected = false;
    console.log('CRM disconnected');
  }

  /**
   * Verifica se está conectado
   */
  isConnectedToCRM(): boolean {
    return this.isConnected;
  }
}

// Exportar instância singleton
export const crmIntegration = new CRMIntegration();

// Exportar tipos
export type { 
  CRMCredentials, 
  Lead, 
  Deal, 
  CRMMetrics, 
  CRMIntegrationConfig 
};

export default CRMIntegration;