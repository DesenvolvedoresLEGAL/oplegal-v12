import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Download, ExternalLink, Calendar, Clock, FileText, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const WhatsNextReport2025Page: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>🔮 LEGAL WHATS NEXT REPORT 2025 | LEGAL</title>
        <meta name="description" content="O futuro da conectividade FWA 5G no Brasil — insights estratégicos para empresas e eventos que querem liderar a nova era da internet sem fio." />
        <meta name="keywords" content="5G, FWA, conectividade, eventos, empresas, relatório, tendências, LEGAL" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Hero Section */}
        <section className="relative py-16 bg-gradient-to-r from-legal-purple via-legal to-legal-cyan overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/lovable-uploads/498773ad-6c8f-4974-ae6b-8e2542cb81d1.png" 
              alt="5G Future Report Background"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-legal-purple/80 via-legal/80 to-legal-cyan/80"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <Link 
                to="/universo/pesquisas/whitepapers" 
                className="text-white/80 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-6 h-6" />
              </Link>
              <div className="flex-1">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                  🔮 LEGAL WHATS NEXT REPORT 2025
                </h1>
                <p className="text-xl md:text-2xl text-white/90 max-w-4xl mb-6">
                  O futuro da conectividade FWA 5G no Brasil — insights estratégicos para empresas e eventos que querem liderar a nova era da internet sem fio.
                </p>
                <p className="text-lg text-white/80 max-w-3xl mb-8">
                  Descubra os principais dados, tendências, casos reais e recomendações que vão guiar sua empresa ou evento para um 2025 mais conectado, competitivo e inteligente.
                </p>
                
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2 text-white/80">
                    <Calendar className="w-5 h-5" />
                    <span>Publicado: 02/03/2025</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/80">
                    <Clock className="w-5 h-5" />
                    <span>Leitura: 15 min</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/80">
                    <FileText className="w-5 h-5" />
                    <span>9 páginas</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/80">
                    <Download className="w-5 h-5" />
                    <span>166 downloads</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="bg-white text-legal hover:bg-white/90">
                    <Download className="w-5 h-5 mr-2" />
                    📥 Baixar versão em PDF
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    <ExternalLink className="w-5 h-5 mr-2" />
                    🚀 Quero receber atualizações da LEGAL
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            
            {/* Section 1 */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Introdução — Bem-vindo ao futuro da conectividade</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Em 2025, a conectividade deixou de ser suporte e virou estratégia.
                  Empresas que dependem de velocidade, estabilidade e mobilidade já perceberam: o FWA 5G é a espinha dorsal da nova economia digital.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Esse relatório nasce da experiência real da LEGAL ao lado de milhares de empresas, organizadores de eventos e parceiros que vivem os desafios do dia a dia.
                  Aqui, reunimos dados, tendências, projeções, casos de sucesso e recomendações práticas para quem não quer apenas acompanhar o futuro — mas liderá-lo.
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">2. Panorama do Mercado de FWA 5G em 2024</h2>
              
              <h3 className="text-2xl font-semibold text-legal mb-4">O que aconteceu no último ano?</h3>
              <p className="text-gray-700 mb-6">2024 marcou a consolidação do FWA 5G no Brasil:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-legal/5 p-6 rounded-lg border-l-4 border-l-legal">
                  <div className="text-2xl font-bold text-legal mb-2">📊 +45%</div>
                  <p className="text-gray-700">de crescimento em relação a 2023</p>
                </div>
                <div className="bg-legal/5 p-6 rounded-lg border-l-4 border-l-legal">
                  <div className="text-2xl font-bold text-legal mb-2">📡 1,2M</div>
                  <p className="text-gray-700">de assinaturas ativas, com 75% vindas de empresas</p>
                </div>
                <div className="bg-legal/5 p-6 rounded-lg border-l-4 border-l-legal">
                  <div className="text-2xl font-bold text-legal mb-2">🎤 +38.000</div>
                  <p className="text-gray-700">eventos atendidos com internet temporária FWA</p>
                </div>
                <div className="bg-legal/5 p-6 rounded-lg border-l-4 border-l-legal">
                  <div className="text-2xl font-bold text-legal mb-2">🌍 Expansão</div>
                  <p className="text-gray-700">forte em regiões antes desassistidas: Norte, Nordeste e interior</p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-legal mb-4">Quem usou?</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-legal rounded-full mt-2"></div>
                  <span className="text-gray-700">Médias e grandes empresas que buscam redundância de link e agilidade</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-legal rounded-full mt-2"></div>
                  <span className="text-gray-700">Startups e pequenos negócios pela facilidade de instalação</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-legal rounded-full mt-2"></div>
                  <span className="text-gray-700">Organizadores de eventos por conectividade sob demanda e confiável</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-legal rounded-full mt-2"></div>
                  <span className="text-gray-700">Residências premium como alternativa à fibra em locais de difícil acesso</span>
                </li>
              </ul>

              <h3 className="text-2xl font-semibold text-legal mb-4">🔮 Projeções 2025:</h3>
              <div className="bg-legal-cyan/10 p-6 rounded-lg">
                <ul className="space-y-2">
                  <li className="text-gray-700">• 1,6M de assinaturas</li>
                  <li className="text-gray-700">• 60.000 eventos conectados</li>
                  <li className="text-gray-700">• Pequenos negócios = 30% das novas adesões</li>
                </ul>
              </div>
            </div>

            {/* Section 3 */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">3. Principais Tendências para 2025</h2>
              
              <div className="space-y-8">
                <div className="border-l-4 border-l-legal pl-6">
                  <h3 className="text-xl font-semibold text-legal mb-3">🚀 1. WiFi 7 + FWA 5G</h3>
                  <p className="text-gray-700 mb-2">Empresas estão combinando FWA com WiFi 7 para criar redes ultra estáveis e imersivas.</p>
                  <p className="text-sm text-legal bg-legal/5 p-3 rounded">🧪 Case: Feira do Agronegócio usou FWA+WiFi 7 para conectar 15.000 dispositivos simultâneos.</p>
                </div>

                <div className="border-l-4 border-l-legal-purple pl-6">
                  <h3 className="text-xl font-semibold text-legal-purple mb-3">🟦 2. Democratização para Pequenos Negócios</h3>
                  <p className="text-gray-700 mb-2">O FWA ficou mais barato e acessível. Startups, clínicas e salões adotam como conexão principal.</p>
                  <p className="text-sm text-legal-purple bg-legal-purple/5 p-3 rounded">📍 Case: Clínica veterinária no interior do PR adotou FWA 5G e aumentou produtividade em 20%.</p>
                </div>

                <div className="border-l-4 border-l-legal-cyan pl-6">
                  <h3 className="text-xl font-semibold text-legal-cyan mb-3">🛡️ 3. Redundância e Segurança</h3>
                  <p className="text-gray-700 mb-2">Empresas buscam conexão dupla. O FWA virou plano B (ou até plano A) para quem não pode parar.</p>
                  <p className="text-sm text-legal-cyan bg-legal-cyan/5 p-3 rounded">🏥 Case: Hospital em Recife evitou falhas em sistemas críticos com FWA 5G como backup.</p>
                </div>

                <div className="border-l-4 border-l-green-500 pl-6">
                  <h3 className="text-xl font-semibold text-green-700 mb-3">🌱 4. Sustentabilidade na conectividade</h3>
                  <p className="text-gray-700 mb-2">Empresas e eventos valorizam fornecedores com práticas verdes e menor impacto energético.</p>
                  <p className="text-sm text-green-700 bg-green-50 p-3 rounded">🎟️ Case: Festival de música usou FWA sustentável e atraiu patrocínio ESG.</p>
                </div>

                <div className="border-l-4 border-l-legal pl-6">
                  <h3 className="text-xl font-semibold text-legal mb-3">🔁 5. Experiências Phygital</h3>
                  <p className="text-gray-700 mb-2">Eventos híbridos usam o FWA 5G como base para integrar público físico + digital com realidade aumentada e apps.</p>
                  <p className="text-sm text-legal bg-legal/5 p-3 rounded">🎧 Case: Rock in Rio usou FWA para conectar pulseiras interativas com o app oficial.</p>
                </div>

                <div className="border-l-4 border-l-legal-purple pl-6">
                  <h3 className="text-xl font-semibold text-legal-purple mb-3">🤖 6. Transformação Digital & IoT</h3>
                  <p className="text-gray-700 mb-2">Com FWA 5G, empresas conectam sensores, automatizam processos e usam IA em tempo real.</p>
                  <p className="text-sm text-legal-purple bg-legal-purple/5 p-3 rounded">🚚 Case: Empresa de logística no PR rastreia caminhões com IoT + FWA e reduziu atrasos em 30%.</p>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">4. Insights para o Segmento de Eventos</h2>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <h3 className="text-xl font-semibold text-legal mb-3">📶 1. Internet como experiência</h3>
                  <p className="text-gray-700 mb-2">Visitantes exigem WiFi rápido. Eventos estão vendendo conectividade premium para expositores.</p>
                  <p className="text-sm text-legal bg-legal/5 p-3 rounded">🧩 Case: Startup Summit gerou R$ 150 mil vendendo links dedicados para expositores.</p>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <h3 className="text-xl font-semibold text-legal mb-3">🪄 2. Metaverso, AR & interatividade</h3>
                  <p className="text-gray-700 mb-2">Eventos utilizam realidade aumentada, estandes imersivos e avatares 3D.</p>
                  <p className="text-sm text-legal bg-legal/5 p-3 rounded">🌐 Case: Expo Business Tech usou AR + FWA para experiências em tempo real.</p>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <h3 className="text-xl font-semibold text-legal mb-3">🕐 3. Ativação rápida e flexível</h3>
                  <p className="text-gray-700">Internet temporária FWA é instalada em horas e atende eventos de qualquer porte com alta densidade de usuários.</p>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <h3 className="text-xl font-semibold text-legal mb-3">🔒 4. Segurança e operação conectada</h3>
                  <p className="text-gray-700">Staff, câmeras, QR codes e controle de acesso rodam todos conectados com FWA estável.</p>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <h3 className="text-xl font-semibold text-legal mb-3">📊 5. Dados em tempo real</h3>
                  <p className="text-gray-700">Eventos monitoram fluxo de pessoas, engajamento e experiência do público com dashboards conectados.</p>
                </div>
              </div>
            </div>

            {/* Section 5 */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">5. Insights para Empresas</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-legal/5 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-legal mb-2">💰 1. Redução de custos operacionais</h3>
                  <p className="text-gray-700">Sem infraestrutura física, o FWA 5G é instalado em horas, com menor custo fixo.</p>
                </div>

                <div className="bg-legal/5 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-legal mb-2">📈 2. Escalabilidade</h3>
                  <p className="text-gray-700">Empresas expandem filiais, testam MVPs ou montam operações temporárias com internet pronta no mesmo dia.</p>
                </div>

                <div className="bg-legal/5 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-legal mb-2">🔁 3. Redundância como estratégia</h3>
                  <p className="text-gray-700">Empresas que não podem ficar offline adotam FWA como link backup, evitando perdas e inatividade.</p>
                </div>

                <div className="bg-legal/5 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-legal mb-2">⚙️ 4. Digitalização com IoT & IA</h3>
                  <p className="text-gray-700">FWA é o caminho para conectar sensores, plataformas e sistemas inteligentes.</p>
                </div>

                <div className="bg-legal/5 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-legal mb-2">🧑‍💼 5. Experiência do cliente</h3>
                  <p className="text-gray-700">Academias, clínicas e varejos melhoram serviços digitais e fidelizam com internet veloz e confiável.</p>
                </div>

                <div className="bg-legal/5 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-legal mb-2">🗺️ 6. Expansão geográfica</h3>
                  <p className="text-gray-700">Empresas alcançam regiões remotas onde a fibra ainda não chega, ganhando mercado com agilidade.</p>
                </div>
              </div>
            </div>

            {/* Section 6 */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">6. Casos de Sucesso</h2>
              
              <div className="space-y-6">
                <div className="bg-legal-purple/5 p-6 rounded-lg border-l-4 border-l-legal-purple">
                  <h3 className="text-xl font-semibold text-legal-purple mb-3">🟪 Startup Summit 2024</h3>
                  <ul className="space-y-1 text-gray-700">
                    <li>• +150 expositores conectados com links dedicados</li>
                    <li>• +10 mil espectadores online</li>
                    <li>• 20% a mais de engajamento nos estandes</li>
                  </ul>
                </div>

                <div className="bg-red-50 p-6 rounded-lg border-l-4 border-l-red-500">
                  <h3 className="text-xl font-semibold text-red-700 mb-3">🏥 Hospital Recife</h3>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Backup FWA evitou prejuízo de R$ 500 mil</li>
                    <li>• Operações críticas mantidas durante falha na fibra</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-l-green-500">
                  <h3 className="text-xl font-semibold text-green-700 mb-3">🚜 Feira Agro Goiás</h3>
                  <ul className="space-y-1 text-gray-700">
                    <li>• 15.000 dispositivos IoT conectados</li>
                    <li>• 98% de aprovação dos expositores</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-l-blue-500">
                  <h3 className="text-xl font-semibold text-blue-700 mb-3">🏪 Farmácias no Paraná</h3>
                  <ul className="space-y-1 text-gray-700">
                    <li>• 500 atendimentos/dia via autoatendimento</li>
                    <li>• Fila reduzida em 40%</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 7 */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">7. Recomendações Estratégicas</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg border border-legal shadow-sm">
                  <h3 className="text-lg font-semibold text-legal mb-2">📡 1. Combine FWA com WiFi 7</h3>
                  <p className="text-gray-700">Crie redes híbridas de alta performance para ambientes exigentes.</p>
                </div>

                <div className="bg-white p-6 rounded-lg border border-legal shadow-sm">
                  <h3 className="text-lg font-semibold text-legal mb-2">🛑 2. Tenha redundância ativa</h3>
                  <p className="text-gray-700">Evite falhas e prejuízos com plano B automático via FWA.</p>
                </div>

                <div className="bg-white p-6 rounded-lg border border-legal shadow-sm">
                  <h3 className="text-lg font-semibold text-legal mb-2">📦 3. Use pacotes sob medida</h3>
                  <p className="text-gray-700">Personalize conectividade conforme a necessidade do projeto ou operação.</p>
                </div>

                <div className="bg-white p-6 rounded-lg border border-legal shadow-sm">
                  <h3 className="text-lg font-semibold text-legal mb-2">♻️ 4. Adote soluções sustentáveis</h3>
                  <p className="text-gray-700">Clientes e parceiros valorizam práticas ESG.</p>
                </div>

                <div className="bg-white p-6 rounded-lg border border-legal shadow-sm">
                  <h3 className="text-lg font-semibold text-legal mb-2">⚙️ 5. Acelere automação e IoT</h3>
                  <p className="text-gray-700">Use FWA como base para conectar máquinas e dados.</p>
                </div>

                <div className="bg-white p-6 rounded-lg border border-legal shadow-sm">
                  <h3 className="text-lg font-semibold text-legal mb-2">🧠 6. Eduque seu mercado</h3>
                  <p className="text-gray-700">Compartilhe seu avanço. Conectividade estratégica inspira confiança.</p>
                </div>
              </div>
            </div>

            {/* Section 8 */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">8. Conclusão</h2>
              <div className="bg-gradient-to-r from-legal/10 to-legal-cyan/10 p-8 rounded-lg">
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  O FWA 5G não é só uma nova forma de se conectar.
                  É a base da nova economia digital, onde tempo, mobilidade, segurança e escalabilidade são mais valiosos do que nunca.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Empresas e eventos que adotarem agora estarão prontos para liderar o que vem a seguir.
                  O futuro exige agilidade. E a LEGAL já está conectada com ele.
                </p>
                
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-legal mb-4">📞 Vamos conversar?</h3>
                  <p className="text-gray-700 mb-6">Entre em contato e descubra como levar o FWA 5G da LEGAL para seu negócio ou evento.</p>
                  <Button size="lg" className="bg-legal hover:bg-legal-purple" asChild>
                    <Link to="/contato">
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Entrar em Contato
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

          </div>
        </section>
      </div>
    </>
  );
};

export default WhatsNextReport2025Page;