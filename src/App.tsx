
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PlaceholderPage from "./pages/PlaceholderPage";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SmartEventsPage from "./pages/SmartEventsPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/smart-events" element={<SmartEventsPage />} />
          <Route path="/produtos" element={<PlaceholderPage />} />
          <Route path="/implantacao" element={<PlaceholderPage />} />
          <Route path="/beneficios" element={<PlaceholderPage />} />
          <Route path="/ofertas" element={<PlaceholderPage />} />
          <Route path="/certificacao" element={<PlaceholderPage />} />
          <Route path="/conteudo" element={<PlaceholderPage />} />
          <Route path="/contato" element={<PlaceholderPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
