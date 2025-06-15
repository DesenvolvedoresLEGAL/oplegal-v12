
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
import AluguelPage from "./pages/negocios/AluguelPage";
import AssinaturaPage from "./pages/negocios/AssinaturaPage";
import TimePage from "./pages/TimePage";
import VagasPage from "./pages/VagasPage";
import ContatoPage from "./pages/ContatoPage";
import UniversoPage from "./pages/UniversoPage";
import TecTecPage from "./pages/universo/TecTecPage";
import ImprensaPage from "./pages/universo/ImprensaPage";
import StatusPage from "./pages/universo/StatusPage";
import FAQPage from "./pages/universo/FAQPage";
import TecTecAdminPage from "./pages/admin/TecTecAdminPage";
import FitScorePage from "./pages/negocios/ai/FitScorePage";
import HistoriasPage from "./pages/universo/HistoriasPage";
import BluePage from "./pages/produtos/BluePage";
import Blue6Page from "./pages/produtos/Blue6Page";
import BrilixPage from "./pages/produtos/BrilixPage";
import EventrixProdutoPage from "./pages/produtos/EventrixPage";

const App = () => {
  const [queryClient] = useState(() => new QueryClient());
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            
            {/* Smart Events */}
            <Route path="/smart-events" element={<SmartEventsPage />} />
            
            {/* Produtos section */}
            <Route path="/produtos/blue" element={<BluePage />} />
            <Route path="/produtos/blue6" element={<Blue6Page />} />
            <Route path="/produtos/brilix" element={<BrilixPage />} />
            <Route path="/produtos/eventrix" element={<EventrixProdutoPage />} />
            
            {/* Somos LEGAL section - Redirect old route to new consolidated page */}
            <Route path="/somos-legal" element={<Navigate to="/missao-visao-valores" replace />} />
            <Route path="/missao-visao-valores" element={<MissaoVisaoValoresPage />} />
            <Route path="/time" element={<TimePage />} />
            <Route path="/vagas" element={<VagasPage />} />
            
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
          <Footer />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
