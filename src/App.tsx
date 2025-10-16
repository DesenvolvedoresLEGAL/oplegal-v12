import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy, useState } from "react";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SkipLink from "./components/SkipLink";
import { ScrollToTop } from "./components/ScrollToTop";

// Lazy load non-critical pages to reduce initial bundle size
const PlaceholderPage = lazy(() => import("./pages/PlaceholderPage"));
const NotFound = lazy(() => import("./pages/NotFound"));
const SmartEventsPage = lazy(() => import("./pages/SmartEventsPage"));
const PrecosPage = lazy(() => import("./pages/PrecosPage"));
const BitsPage = lazy(() => import("./pages/BitsPage"));
const MissaoVisaoValoresPage = lazy(() => import("./pages/MissaoVisaoValoresPage"));
const NegociosPage = lazy(() => import("./pages/NegociosPage"));
const AIPage = lazy(() => import("./pages/negocios/AIPage"));
const AeroPage = lazy(() => import("./pages/negocios/AeroPage"));
const AeroWashPage = lazy(() => import("./pages/negocios/AeroWashPage"));
const AeroDeliveryPage = lazy(() => import("./pages/negocios/AeroDeliveryPage"));
const EventrixPage = lazy(() => import("./pages/negocios/ai/EventrixPage"));
const MagicPassPage = lazy(() => import("./pages/negocios/ai/MagicPassPage"));
const LinkAIPage = lazy(() => import("./pages/negocios/ai/LinkAIPage"));
const FitScorePage = lazy(() => import("./pages/negocios/ai/FitScorePage"));
const AluguelPage = lazy(() => import("./pages/negocios/AluguelPage"));
const AssinaturaPage = lazy(() => import("./pages/negocios/AssinaturaPage"));
const TimePage = lazy(() => import("./pages/TimePage"));
const VagasPage = lazy(() => import("./pages/VagasPage"));
const ContatoPage = lazy(() => import("./pages/ContatoPage"));
const CandidaturaPage = lazy(() => import("./pages/CandidaturaPage"));
const UniversoPage = lazy(() => import("./pages/UniversoPage"));
const TecTecPage = lazy(() => import("./pages/universo/TecTecPage"));
const HistoriasPage = lazy(() => import("./pages/universo/HistoriasPage"));
const ImprensaPage = lazy(() => import("./pages/universo/ImprensaPage"));
const StatusPage = lazy(() => import("./pages/universo/StatusPage"));
const FAQPage = lazy(() => import("./pages/universo/FAQPage"));
const RecursosPage = lazy(() => import("./pages/universo/RecursosPage"));
const PesquisasPage = lazy(() => import("./pages/universo/PesquisasPage"));
const PesquisasMercadoPage = lazy(() => import("./pages/universo/PesquisasMercadoPage"));
const MapeamentoIAPage = lazy(() => import("./pages/universo/MapeamentoIAPage"));
const WhitepapersPage = lazy(() => import("./pages/universo/WhitepapersPage"));
const WhatsNextReport2025Page = lazy(() => import("./pages/universo/WhatsNextReport2025Page"));
const TecTecAdminPage = lazy(() => import("./pages/admin/TecTecAdminPage"));
const Blue6Page = lazy(() => import("./pages/produtos/Blue6Page"));
const BrilixPage = lazy(() => import("./pages/produtos/BrilixPage"));
const EventrixProdutoPage = lazy(() => import("./pages/produtos/EventrixPage"));
const MagicPassProdutoPage = lazy(() => import("./pages/produtos/MagicPassPage"));
const FitScoreProdutoPage = lazy(() => import("./pages/produtos/FitScorePage"));
const HumanoidPage = lazy(() => import("./pages/produtos/HumanoidPage"));
const LinkAIProdutoPage = lazy(() => import("./pages/produtos/LinkAIPage"));
const NuvyoPage = lazy(() => import("./pages/produtos/NuvyoPage"));
const PingPage = lazy(() => import("./pages/produtos/PingPage"));
const SonixPage = lazy(() => import("./pages/produtos/SonixPage"));
const Speedy5GPage = lazy(() => import("./pages/produtos/Speedy5GPage"));
const PlaudPage = lazy(() => import("./pages/produtos/PlaudPage"));
const NeuraFitPage = lazy(() => import("./pages/produtos/NeuraFitPage"));
const TagPulsePage = lazy(() => import("./pages/produtos/TagPulsePage"));
const GalaxiaPage = lazy(() => import("./pages/produtos/GalaxiaPage"));
const SearchPage = lazy(() => import("./pages/SearchPage"));
const SorteioPage = lazy(() => import("./pages/SorteioPage"));
const LabsPage = lazy(() => import("./pages/universo/LabsPage"));
const ExecutiveDashboard = lazy(() => import("./pages/analytics/ExecutiveDashboard"));
const ROIAnalytics = lazy(() => import("./pages/analytics/ROIAnalytics"));
const SEOPerformance = lazy(() => import("./pages/analytics/SEOPerformance"));
const AIAnalyticsDashboard = lazy(() => import("./components/analytics/AIAnalyticsDashboard"));
const UserBehaviorAnalysis = lazy(() => import("./components/analytics/UserBehaviorAnalysis"));
const PerformanceInsights = lazy(() => import("./components/analytics/PerformanceInsights"));
const ConversionFunnelAI = lazy(() => import("./components/analytics/ConversionFunnelAI"));

// Loading fallback component
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-[50vh]">
    <div className="animate-pulse text-legal font-medium">Carregando...</div>
  </div>
);

const App = () => {
  const [queryClient] = useState(() => new QueryClient());
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <SkipLink />
          <Navbar />
          <main id="main-content" role="main" tabIndex={-1}>
            <ScrollToTop />
            <Suspense fallback={<LoadingFallback />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                
                {/* Smart Events */}
                <Route path="/smart-events" element={<SmartEventsPage />} />
                
                {/* Preços */}
                <Route path="/precos" element={<PrecosPage />} />
                
                {/* Busca */}
                <Route path="/busca" element={<SearchPage />} />
                
                {/* Produtos section */}
                <Route path="/produtos/blue6" element={<Blue6Page />} />
                <Route path="/produtos/galaxia" element={<GalaxiaPage />} />
                <Route path="/produtos/brilix" element={<BrilixPage />} />
                <Route path="/produtos/eventrix" element={<EventrixProdutoPage />} />
                <Route path="/produtos/magicpass" element={<MagicPassProdutoPage />} />
                <Route path="/produtos/fitscore" element={<FitScoreProdutoPage />} />
                <Route path="/produtos/humanoid" element={<HumanoidPage />} />
                <Route path="/humanoid" element={<Navigate to="/produtos/humanoid" replace />} />
                <Route path="/produtos/linkai" element={<LinkAIProdutoPage />} />
                <Route path="/produtos/neurafit" element={<NeuraFitPage />} />
                <Route path="/produtos/nuvyo" element={<NuvyoPage />} />
                <Route path="/produtos/ping" element={<PingPage />} />
                <Route path="/produtos/sonix" element={<SonixPage />} />
                <Route path="/produtos/speedy5g" element={<Speedy5GPage />} />
                <Route path="/produtos/plaud" element={<PlaudPage />} />
                
                {/* AI & Inovação - TagPulse */}
                <Route path="/solucoes/tagpulse" element={<TagPulsePage />} />
                
                {/* Somos LEGAL section - Redirect old route to new consolidated page */}
                <Route path="/somos-legal" element={<Navigate to="/missao-visao-valores" replace />} />
                <Route path="/missao-visao-valores" element={<MissaoVisaoValoresPage />} />
                <Route path="/time" element={<TimePage />} />
                <Route path="/vagas" element={<VagasPage />} />
                <Route path="/candidatura" element={<CandidaturaPage />} />
                
                {/* Negócios section */}
                <Route path="/negocios" element={<NegociosPage />} />
                <Route path="/negocios/aero" element={<AeroPage />} />
                <Route path="/negocios/aero/wash" element={<AeroWashPage />} />
                <Route path="/negocios/aero/delivery" element={<AeroDeliveryPage />} />
                <Route path="/negocios/ai" element={<AIPage />} />
                <Route path="/negocios/ai/eventrix" element={<EventrixPage />} />
                <Route path="/negocios/ai/magicpass" element={<MagicPassPage />} />
                <Route path="/negocios/ai/linkai" element={<LinkAIPage />} />
                <Route path="/negocios/ai/fitscore" element={<FitScorePage />} />
                <Route path="/negocios/alugue" element={<AluguelPage />} />
                <Route path="/negocios/assinatura" element={<AssinaturaPage />} />
                
                {/* Universo section */}
                <Route path="/universo" element={<UniversoPage />} />
                <Route path="/universo/tectec" element={<TecTecPage />} />
                <Route path="/universo/tectec/:id" element={<PlaceholderPage />} />
                <Route path="/universo/historias" element={<HistoriasPage />} />
                <Route path="/universo/historias/:id" element={<PlaceholderPage />} />
                <Route path="/universo/bits" element={<BitsPage />} />
                <Route path="/universo/recursos" element={<RecursosPage />} />
                <Route path="/universo/pesquisas" element={<PesquisasPage />} />
                <Route path="/universo/pesquisas/mercado" element={<PesquisasMercadoPage />} />
                <Route path="/universo/pesquisas/mercado/mapeamento-ia-2025" element={<MapeamentoIAPage />} />
                <Route path="/universo/pesquisas/whitepapers" element={<WhitepapersPage />} />
                <Route path="/universo/pesquisas/whitepapers/whats-next-report-2025" element={<WhatsNextReport2025Page />} />
                <Route path="/universo/imprensa" element={<ImprensaPage />} />
                <Route path="/universo/status" element={<StatusPage />} />
                <Route path="/universo/faq" element={<FAQPage />} />
                
                
                {/* Contact */}
                <Route path="/contato" element={<ContatoPage />} />
                
                {/* Sorteio */}
                <Route path="/sorteio" element={<SorteioPage />} />
                
                {/* Old routes for backward compatibility */}
                <Route path="/produtos" element={<PlaceholderPage />} />
                <Route path="/implantacao" element={<PlaceholderPage />} />
                <Route path="/beneficios" element={<PlaceholderPage />} />
                <Route path="/ofertas" element={<PlaceholderPage />} />
                <Route path="/certificacao" element={<PlaceholderPage />} />
                <Route path="/conteudo" element={<PlaceholderPage />} />
                
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
