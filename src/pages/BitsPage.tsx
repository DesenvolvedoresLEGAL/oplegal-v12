import React from 'react';
import { Helmet } from 'react-helmet-async';
import BitsHeroSection from '@/components/bits/BitsHeroSection';
import WhatIsBitsSection from '@/components/bits/WhatIsBitsSection';
import HowToEarnPointsSection from '@/components/bits/HowToEarnPointsSection';
import GamifiedLevelsSection from '@/components/bits/GamifiedLevelsSection';
import BitsRewardsSection from '@/components/bits/BitsRewardsSection';
import ParticipatingUnitsSection from '@/components/bits/ParticipatingUnitsSection';
import RedeemAndTrackSection from '@/components/bits/RedeemAndTrackSection';
import PointAcceleratorsSection from '@/components/bits/PointAcceleratorsSection';
import WhyBitsIsDifferentSection from '@/components/bits/WhyBitsIsDifferentSection';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';

const BitsPage = () => {
  const regulationPdfUrl = "/placeholder-bits-regulation.pdf";

  return (
    <>
      <Helmet>
        <title>BITS™ - Programa de Fidelidade LEGAL | Recompensas Futuristas</title>
        <meta name="description" content="Descubra o BITS™, o programa de fidelidade da LEGAL. Acumule pontos, suba de nível e ganhe recompensas exclusivas. Ative sua conta!" />
        <meta property="og:title" content="BITS™ - Programa de Fidelidade LEGAL" />
        <meta property="og:description" content="Sua conexão agora vale pontos, upgrades e um lugar entre os melhores do Brasil com o BITS™." />
        <meta property="og:image" content="https://operadora.legal/og-image-bits.png" /> {/* Placeholder OG Image */}
        <meta property="og:url" content="https://operadora.legal/universo/bits" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <div className="bg-bits-darkGray">
        <BitsHeroSection />
        <WhatIsBitsSection />
        <HowToEarnPointsSection />
        <GamifiedLevelsSection />
        <BitsRewardsSection />
        <ParticipatingUnitsSection />
        <RedeemAndTrackSection />
        <PointAcceleratorsSection />
        <WhyBitsIsDifferentSection />

        <footer className="py-12 bg-gray-900 text-gray-400 border-t border-gray-700">
          <div className="container mx-auto px-4 text-center">
            <div className="mb-6">
              <Button variant="outline" className="border-legal-cyan text-legal-cyan hover:bg-legal-cyan hover:text-legal-black" asChild>
                <a href={regulationPdfUrl} target="_blank" rel="noopener noreferrer">
                  <FileText size={18} className="mr-2" />
                  Regulamento Oficial BITS™ (PDF)
                </a>
              </Button>
            </div>
            <div className="mb-4 text-sm">
              <a href="/termos-de-uso" className="hover:text-legal-cyan transition-colors px-2">Termos de Uso</a> | 
              <a href="/politica-de-privacidade" className="hover:text-legal-cyan transition-colors px-2">Política de Privacidade</a>
            </div>
            <p className="text-lg font-semibold text-white">
              LEGAL: Uma operadora, quatro unidades, milhares de conexões — e agora, recompensas para quem está com a gente.
            </p>
            <p className="text-xs mt-4">
              © {new Date().getFullYear()} LEGAL. Todos os direitos reservados. BITS™ é um programa de fidelidade da LEGAL.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default BitsPage;
