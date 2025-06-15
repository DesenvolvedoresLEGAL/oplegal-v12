
import React from 'react';
import { Link } from 'react-router-dom';
import { LinkIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Card from '@/components/Card';
import SectionTitle from '@/components/SectionTitle';

const IntegrationsSection = () => {
  const integrations = [
    {
      name: "CRMs",
      systems: ["Salesforce", "HubSpot", "Pipedrive"],
      benefits: ["Leads em tempo real", "Automação de follow-up", "Qualificação inteligente"]
    },
    {
      name: "ERPs",
      systems: ["SAP", "Oracle", "Microsoft Dynamics"],
      benefits: ["Faturamento automático", "Controle de estoque", "Gestão de contratos"]
    },
    {
      name: "Marketing Automation",
      systems: ["Marketo", "Pardot", "RD Station"],
      benefits: ["Jornadas personalizadas", "Nurturing automático", "Scoring de leads"]
    },
    {
      name: "Analytics",
      systems: ["PowerBI", "Tableau", "Google Data Studio"],
      benefits: ["Dashboards personalizados", "Insights em tempo real", "Relatórios automatizados"]
    }
  ];

  return (
    <section className="py-20 bg-legal-gray" id="integracoes">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Integrações com CRMs e ERPs"
          subtitle="Relatórios e leads direto no seu CRM, sem fricção."
          center
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {integrations.map((integration, index) => (
            <Card
              key={index}
              title={integration.name}
              icon={<LinkIcon size={36} />}
              className="h-full"
            >
              <div className="mt-4 mb-4">
                <div className="flex flex-wrap gap-2 mb-4">
                  {integration.systems.map((system, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-legal-gray rounded-full text-sm font-medium"
                    >
                      {system}
                    </span>
                  ))}
                </div>
                
                <ul className="styled-list">
                  {integration.benefits.map((benefit, i) => (
                    <li key={i}>{benefit}</li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg mb-6">
            Precisa de uma integração específica? Nosso time de especialistas pode desenvolver soluções personalizadas.
          </p>
          <Button 
            asChild
            className="bg-legal hover:bg-legal/90 text-white"
          >
            <Link to="/contato">
              Fale com nossos especialistas
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
