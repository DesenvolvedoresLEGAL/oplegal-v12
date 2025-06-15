
import React from 'react';
import { Globe, Users, Shield } from 'lucide-react';
import Card from '@/components/Card';
import SectionTitle from '@/components/SectionTitle';

const ESGSection = () => {
  return (
    <section className="py-20 bg-white" id="esg">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="ESG e Acessibilidade"
          subtitle="Smart Events™ seguem princípios ESG e promovem inclusão e eficiência ambiental."
          center
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <Card
            title="Ambiental"
            icon={<Globe size={36} />}
            className="h-full"
          >
            <ul className="styled-list mt-4">
              <li>Credenciais 100% digitais eliminam plástico e impressões</li>
              <li>Sensores de consumo otimizam uso de energia e água</li>
              <li>Logística inteligente reduz emissões de carbono</li>
              <li>Relatórios digitais eliminam uso de papel</li>
            </ul>
          </Card>

          <Card
            title="Social"
            icon={<Users size={36} />}
            className="h-full"
          >
            <ul className="styled-list mt-4">
              <li>Acessibilidade digital para todos os públicos</li>
              <li>Suporte a LIBRAS via realidade aumentada</li>
              <li>Audiodescrição integrada para conteúdos</li>
              <li>Inclusão e diversidade em todas as ações</li>
            </ul>
          </Card>

          <Card
            title="Governança"
            icon={<Shield size={36} />}
            className="h-full"
          >
            <ul className="styled-list mt-4">
              <li>Dados protegidos com criptografia avançada</li>
              <li>Conformidade total com LGPD</li>
              <li>Métricas transparentes e auditáveis</li>
              <li>Rastreabilidade completa de processos</li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ESGSection;
