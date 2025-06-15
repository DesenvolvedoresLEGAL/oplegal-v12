
import React from 'react';
import { TrendingUp, Search, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { categories } from '@/data/TecTecData';

interface TecTecHeroProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const TecTecHero: React.FC<TecTecHeroProps> = ({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory
}) => {
  return (
    <>
      {/* Hero Section otimizado */}
      <section className="pb-16 px-4">
        <div className="container mx-auto">
          <header className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-legal-green bg-opacity-10 text-legal-green rounded-full text-sm font-medium mb-4">
              <TrendingUp className="w-4 h-4 mr-2" />
              Blog TecTec
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-legal mb-6 font-unica">
              Tecnologia que
              <span className="text-legal-green block">Transforma Eventos</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 font-unica">
              Insights exclusivos, análises aprofundadas e tendências sobre conectividade, 
              inteligência artificial e inovação para eventos corporativos. 
              O futuro dos negócios começa aqui.
            </p>
          </header>

          {/* Search otimizado */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Buscar por tecnologia, IA, 5G, IoT..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-12 text-lg border-legal focus:ring-legal"
                  aria-label="Buscar artigos do blog TecTec"
                />
              </div>
              <Button variant="outline" className="h-12 border-legal text-legal hover:bg-legal hover:text-white">
                <Filter className="w-4 h-4 mr-2" />
                Filtros
              </Button>
            </div>

            {/* Categories com melhor semântica */}
            <nav aria-label="Categorias do blog" className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={`${
                    selectedCategory === category 
                      ? 'bg-legal text-white' 
                      : 'border-legal text-legal hover:bg-legal hover:text-white'
                  }`}
                  aria-pressed={selectedCategory === category}
                >
                  {category}
                </Button>
              ))}
            </nav>
          </div>
        </div>
      </section>
    </>
  );
};

export default TecTecHero;
