
import React, { useState } from 'react';
import { 
  Plus, 
  Edit, 
  Trash2, 
  Tag,
  Save,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Mock data - será substituído por dados reais
const initialCategories = [
  { id: 1, name: 'Drones', slug: 'drones', count: 5, color: '#020cbc' },
  { id: 2, name: 'Educação', slug: 'educacao', count: 3, color: '#4d2bfb' },
  { id: 3, name: 'Eventos', slug: 'eventos', count: 12, color: '#03f9ff' },
  { id: 4, name: 'Inovação', slug: 'inovacao', count: 6, color: '#020cbc' },
  { id: 5, name: 'IA', slug: 'ia', count: 9, color: '#4d2bfb' },
  { id: 6, name: 'Tecnologia', slug: 'tecnologia', count: 15, color: '#03f9ff' },
  { id: 7, name: 'Telecom', slug: 'telecom', count: 8, color: '#020cbc' },
  { id: 8, name: 'Trendings', slug: 'trendings', count: 7, color: '#4d2bfb' }
];

const CategoryManager = () => {
  const [categories, setCategories] = useState(initialCategories);
  const [isCreating, setIsCreating] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [newCategory, setNewCategory] = useState({ name: '', color: '#020cbc' });

  const generateSlug = (name) => {
    return name
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  const handleCreateCategory = () => {
    if (!newCategory.name.trim()) return;

    const category = {
      id: Date.now(),
      name: newCategory.name.trim(),
      slug: generateSlug(newCategory.name),
      count: 0,
      color: newCategory.color
    };

    setCategories([...categories, category]);
    setNewCategory({ name: '', color: '#020cbc' });
    setIsCreating(false);
  };

  const handleEditCategory = (id, updatedData) => {
    setCategories(categories.map(cat => 
      cat.id === id 
        ? { ...cat, ...updatedData, slug: generateSlug(updatedData.name) }
        : cat
    ));
    setEditingId(null);
  };

  const handleDeleteCategory = (id) => {
    if (window.confirm('Tem certeza que deseja excluir esta categoria? Posts associados ficarão sem categoria.')) {
      setCategories(categories.filter(cat => cat.id !== id));
    }
  };

  const EditingForm = ({ category, onSave, onCancel }) => {
    const [name, setName] = useState(category.name);
    const [color, setColor] = useState(category.color);

    const handleSubmit = (e) => {
      e.preventDefault();
      if (name.trim()) {
        onSave(category.id, { name: name.trim(), color });
      }
    };

    return (
      <form onSubmit={handleSubmit} className="flex items-center space-x-2">
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="flex-1"
          autoFocus
        />
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="w-10 h-10 border border-gray-300 rounded-md cursor-pointer"
        />
        <Button
          type="submit"
          size="sm"
          className="bg-legal text-white hover:bg-legal-purple"
        >
          <Save className="w-4 h-4" />
        </Button>
        <Button
          type="button"
          size="sm"
          variant="outline"
          onClick={onCancel}
        >
          <X className="w-4 h-4" />
        </Button>
      </form>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold text-legal font-unica">
            Gerenciar Categorias
          </h3>
          <p className="text-gray-600">
            Organize e gerencie as categorias do blog
          </p>
        </div>
        {!isCreating && (
          <Button 
            onClick={() => setIsCreating(true)}
            className="bg-legal text-white hover:bg-legal-purple"
          >
            <Plus className="w-4 h-4 mr-2" />
            Nova Categoria
          </Button>
        )}
      </div>

      {/* Create New Category */}
      {isCreating && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-legal">
              <Tag className="w-5 h-5 mr-2" />
              Nova Categoria
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-3">
              <Input
                placeholder="Nome da categoria"
                value={newCategory.name}
                onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
                className="flex-1"
                autoFocus
              />
              <input
                type="color"
                value={newCategory.color}
                onChange={(e) => setNewCategory({ ...newCategory, color: e.target.value })}
                className="w-12 h-10 border border-gray-300 rounded-md cursor-pointer"
              />
              <Button
                onClick={handleCreateCategory}
                className="bg-legal text-white hover:bg-legal-purple"
              >
                <Save className="w-4 h-4 mr-2" />
                Criar
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  setIsCreating(false);
                  setNewCategory({ name: '', color: '#020cbc' });
                }}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Categories List */}
      <Card>
        <CardHeader>
          <CardTitle className="text-legal">Categorias Existentes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {categories.map((category) => (
              <div 
                key={category.id} 
                className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                {editingId === category.id ? (
                  <EditingForm
                    category={category}
                    onSave={handleEditCategory}
                    onCancel={() => setEditingId(null)}
                  />
                ) : (
                  <>
                    <div className="flex items-center space-x-3">
                      <div 
                        className="w-4 h-4 rounded-full border-2 border-gray-300"
                        style={{ backgroundColor: category.color }}
                      />
                      <div>
                        <h4 className="font-medium text-legal">{category.name}</h4>
                        <p className="text-sm text-gray-500">
                          Slug: {category.slug} • {category.count} posts
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Badge 
                        variant="outline" 
                        style={{ 
                          borderColor: category.color,
                          color: category.color 
                        }}
                      >
                        {category.count} posts
                      </Badge>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => setEditingId(category.id)}
                        className="hover:bg-legal hover:text-white"
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleDeleteCategory(category.id)}
                        className="hover:bg-red-500 hover:text-white"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>

          {categories.length === 0 && (
            <div className="text-center py-8">
              <Tag className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-700 mb-2">
                Nenhuma categoria encontrada
              </h3>
              <p className="text-gray-500">
                Crie sua primeira categoria para organizar os posts.
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-legal">{categories.length}</p>
            <p className="text-sm text-gray-600">Total de Categorias</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-legal-green">
              {categories.reduce((sum, cat) => sum + cat.count, 0)}
            </p>
            <p className="text-sm text-gray-600">Posts Categorizados</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-legal-purple">
              {categories.length > 0 ? Math.round(categories.reduce((sum, cat) => sum + cat.count, 0) / categories.length) : 0}
            </p>
            <p className="text-sm text-gray-600">Média por Categoria</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CategoryManager;
