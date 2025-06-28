
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { Quote } from 'lucide-react';

const ManifestoSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="MANIFESTO LEGAL"
          subtitle="A declaração que define quem somos e como vivemos"
          center
        />
        
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-legal/5 to-legal-purple/5 p-12 rounded-2xl border-l-8 border-legal">
            <Quote size={48} className="text-legal opacity-20 absolute top-4 left-4" />
            <blockquote className="text-xl md:text-2xl leading-relaxed text-gray-800 font-medium relative z-10">
              <p className="mb-6">
                Somos mais que uma empresa de tecnologia.
              </p>
              <p className="mb-6">
                Somos visionários, executores, criadores de valor e cultivadores de alma.
              </p>
              <p className="mb-6">
                Aqui, transformar ideias em realidade é regra.
              </p>
              <p className="mb-6">
                Crescemos com propósito, vibramos em alta frequência e agimos com coragem.
              </p>
              <p className="text-2xl md:text-3xl font-black text-legal">
                <strong>Somos LEGAL, e viemos pra marcar época.</strong>
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManifestoSection;
