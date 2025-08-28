import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionTitle from "../SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
const WhyLegalSection = () => {
  const [count, setCount] = useState(193000);
  const targetCount = 195338;
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => {
        if (prev >= targetCount) {
          clearInterval(interval);
          return targetCount;
        }
        return prev + Math.floor(Math.random() * 10) + 1;
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);
  return <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle title="Por que a LEGAL?" subtitle="A maior TECHCO do Brasil, acelerando a transformação digital de eventos e negócios desde 2014." center={true} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all">
            <CardContent className="p-8 text-center">
              <Link to="/universo/historias" className="block hover:text-legal-green transition-colors">
                <h3 className="text-5xl font-bold text-legal mb-2">1.000+</h3>
                <p className="text-gray-600">eventos atendidos</p>
              </Link>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all">
            <CardContent className="p-8 text-center">
              <Link to="/universo/pesquisas" className="block hover:text-legal-green transition-colors">
                <h3 className="text-5xl font-bold text-legal mb-2">94</h3>
                <p className="text-gray-600">NPS médio dos clientes</p>
              </Link>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all">
            <CardContent className="p-8 text-center">
              <Link to="/produtos/eventrix" className="block hover:text-legal-green transition-colors">
                <h3 className="text-5xl font-bold text-legal mb-2">7.000+</h3>
                <p className="text-gray-600">assinaturas FWA</p>
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className="bg-legal rounded-xl p-8 text-white text-center max-w-4xl mx-auto">
          <Link to="/missao-visao-valores" className="block hover:bg-legal-cyan/10 rounded-lg p-2 -m-2 transition-colors">
            <h3 className="text-2xl font-bold mb-4">Nossa BHAG (Big Hairy Audacious Goal)</h3>
            <p className="text-xl mb-6">Conectar 1 milhão de pessoas, negócios e coisas até 2030</p>
          </Link>
          
          <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
            <p className="text-sm mb-2">Até hoje já realizamos</p>
            <div className="text-4xl md:text-5xl font-mono font-bold tracking-wider">
              {count.toLocaleString()}
            </div>
            <p className="text-sm mt-2">conexões e estamos contando...</p>
          </div>
        </div>
      </div>
    </section>;
};
export default WhyLegalSection;