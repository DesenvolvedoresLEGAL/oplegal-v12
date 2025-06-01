
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import HomePage from "./pages/HomePage";
import PlaceholderPage from "./pages/PlaceholderPage";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SmartEventsPage from "./pages/SmartEventsPage";
import BitsPage from "./pages/BitsPage";
import SomosLegalPage from "./pages/SomosLegalPage";
import NegociosPage from "./pages/NegociosPage";
import AIPage from "./pages/negocios/AIPage";
import AeroPage from "./pages/negocios/AeroPage";
import TimePage from "./pages/TimePage";
import VagasPage from "./pages/VagasPage";
import ContatoPage from "./pages/ContatoPage";

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
            
            {/* Somos LEGAL section */}
            <Route path="/somos-legal" element={<SomosLegalPage />} />
            <Route path="/missao-visao-valores" element={<PlaceholderPage />} />
            <Route path="/time" element={<TimePage />} />
            <Route path="/vagas" element={<VagasPage />} />
            
            {/* Negócios section */}
            <Route path="/negocios" element={<NegociosPage />} />
            <Route path="/negocios/aero" element={<AeroPage />} />
            <Route path="/negocios/ai" element={<AIPage />} />
            <Route path="/negocios/alugue" element={<PlaceholderPage />} />
            <Route path="/negocios/assinatura" element={<PlaceholderPage />} />
            
            {/* Universo section */}
            <Route path="/universo" element={<PlaceholderPage />} />
            <Route path="/universo/tectec" element={<PlaceholderPage />} />
            <Route path="/universo/historias" element={<PlaceholderPage />} />
            <Route path="/universo/historias/:id" element={<PlaceholderPage />} />
            <Route path="/universo/bits" element={<BitsPage />} />
            <Route path="/universo/imprensa" element={<PlaceholderPage />} />
            <Route path="/universo/status" element={<PlaceholderPage />} />
            <Route path="/universo/faq" element={<PlaceholderPage />} />
            
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
