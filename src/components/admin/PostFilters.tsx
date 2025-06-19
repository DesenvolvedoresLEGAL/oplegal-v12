
import React from 'react';
import { Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface PostFiltersProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const PostFilters = ({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory
}: PostFiltersProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <Input
          type="text"
          placeholder="Buscar posts..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>
      <div className="flex items-center space-x-2">
        <Filter className="w-4 h-4 text-gray-400" />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-legal"
        >
          <option value="all">Todas as categorias</option>
          <option value="Drones">Drones</option>
          <option value="Empreendedorismo">Empreendedorismo</option>
          <option value="Eventos">Eventos</option>
          <option value="Inovação">Inovação</option>
          <option value="Inteligência Artificial">Inteligência Artificial</option>
          <option value="Internet">Internet</option>
          <option value="Tecnologia">Tecnologia</option>
          <option value="Trendings">Trendings</option>
        </select>
      </div>
    </div>
  );
};

export default PostFilters;
