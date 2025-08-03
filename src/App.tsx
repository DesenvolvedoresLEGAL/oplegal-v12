import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import HomePage from "./pages/HomePage";
import PlaceholderPage from "./pages/PlaceholderPage";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SmartEventsPage from "./pages/SmartEventsPage";
import PrecosPage from "./pages/PrecosPage";
import BitsPage from "./pages/BitsPage";
import MissaoVisaoValoresPage from "./pages/MissaoVisaoValoresPage";
import NegociosPage from "./pages/NegociosPage";
import AIPage from "./pages/negocios/AIPage";
import AeroPage from "./pages/negocios/AeroPage";
import AeroWashPage from "./pages/negocios/AeroWashPage";
import AeroDeliveryPage from "./pages/negocios/AeroDeliveryPage";
import EventrixPage from "./pages/negocios/ai/EventrixPage";
import FacePassPage from "./pages/negocios/ai/FacePassPage";
import LinkAIPage from "./pages/negocios/ai/LinkAIPage";
import FitScorePage from "./pages/negocios/ai/FitScorePage";
import AluguelPage from "./pages/negocios/AluguelPage";
import AssinaturaPage from "./pages/negocios/AssinaturaPage";
import TimePage from "./pages/TimePage";
import VagasPage from "./pages/VagasPage";
import ContatoPage from "./pages/ContatoPage";
import CandidaturaPage from "./pages/CandidaturaPage";
import UniversoPage from "./pages/UniversoPage";
import TecTecPage from "./pages/universo/TecTecPage";
import HistoriasPage from "./pages/universo/HistoriasPage";
import ImprensaPage from "./pages/universo/ImprensaPage";
import StatusPage from "./pages/universo/StatusPage";
import FAQPage from "./pages/universo/FAQPage";
import RecursosPage from "./pages/universo/RecursosPage";
import PesquisasPage from "./pages/universo/PesquisasPage";
import PesquisasMercadoPage from "./pages/universo/PesquisasMercadoPage";
import MapeamentoIAPage from "./pages/universo/MapeamentoIAPage";
import WhitepapersPage from "./pages/universo/WhitepapersPage";
import WhatsNextReport2025Page from "./pages/universo/WhatsNextReport2025Page";
import TecTecAdminPage from "./pages/admin/TecTecAdminPage";
import Blue6Page from "./pages/produtos/Blue6Page";
import BrilixPage from "./pages/produtos/BrilixPage";
import EventrixProdutoPage from "./pages/produtos/EventrixPage";
import FacePassProdutoPage from "./pages/produtos/FacePassPage";
import FitScoreProdutoPage from "./pages/produtos/FitScorePage";
import HumanoidPage from "./pages/produtos/HumanoidPage";
import LinkAIProdutoPage from "./pages/produtos/LinkAIPage";
import NuvyoPage from "./pages/produtos/NuvyoPage";
import PingPage from "./pages/produtos/PingPage";
import SonixPage from "./pages/produtos/SonixPage";
import Speedy5GPage from "./pages/produtos/Speedy5GPage";
import PlaudPage from "./pages/produtos/PlaudPage";
import NeuraFitPage from "./pages/produtos/NeuraFitPage";
import SkipLink from "./components/SkipLink";
import { ScrollToTop } from "./components/ScrollToTop";

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
            <Routes>
              <Route path="/" element={<HomePage />} />
              
              {/* Smart Events */}
              <Route path="/smart-events" element={<SmartEventsPage />} />
              
              {/* Preços */}
              <Route path="/precos" element={<PrecosPage />} />
              
              {/* Produtos section */}
              <Route path="/produtos/blue6" element={<Blue6Page />} />
              <Route path="/produtos/brilix" element={<BrilixPage />} />
              <Route path="/produtos/eventrix" element={<EventrixProdutoPage />} />
              <Route path="/produtos/facepass" element={<FacePassProdutoPage />} />
              <Route path="/produtos/fitscore" element={<FitScoreProdutoPage />} />
              <Route path="/produtos/humanoid" element={<HumanoidPage />} />
              <Route path="/produtos/linkai" element={<LinkAIProdutoPage />} />
              <Route path="/produtos/neurafit" element={<NeuraFitPage />} />
              <Route path="/produtos/nuvyo" element={<NuvyoPage />} />
              <Route path="/produtos/ping" element={<PingPage />} />
              <Route path="/produtos/sonix" element={<SonixPage />} />
              <Route path="/produtos/speedy5g" element={<Speedy5GPage />} />
              <Route path="/produtos/plaud" element={<PlaudPage />} />
              
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
              <Route path="/negocios/ai/facepass" element={<FacePassPage />} />
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
              
              {/* Admin section */}
              <Route path="/admin/tectec" element={<TecTecAdminPage />} />
              
              {/* Contact */}
              <Route path="/contato" element={<ContatoPage />} />
              
              {/* Old routes for backward compatibility */}
              <Route path="/produtos" element={<PlaceholderPage />} />
              <Route path="/implantacao" element={<PlaceholderPage />} />
              <Route path="/beneficios" element={<PlaceholderPage />} />
              <Route path="/ofertas" element={<PlaceholderPage />} />
              <Route path="/certificacao" element={<PlaceholderPage />} />
              <Route path="/conteudo" element={<PlaceholderPage />} />
              
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
