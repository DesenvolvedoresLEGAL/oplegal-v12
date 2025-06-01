
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Plus, 
  Edit, 
  Trash2, 
  Search, 
  Filter,
  Eye,
  Calendar,
  User,
  FileText,
  Settings
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import PostEditor from '@/components/admin/PostEditor';
import CategoryManager from '@/components/admin/CategoryManager';

// Mock data - será substituído por dados reais
const mockPosts = [
  {
    id: 1,
    title: 'O Futuro da Conectividade 5G no Brasil: Transformando Negócios',
    author: 'Maria Silva',
    category: 'Tecnologia',
    status: 'published',
    publishDate: '2024-05-28',
    views: 2340,
    excerpt: 'Descubra como a tecnologia 5G está revolucionando o cenário empresarial brasileiro...'
  },
  {
    id: 2,
    title: 'Inteligência Artificial na Gestão de Eventos: Cases de Sucesso',
    author: 'João Santos',
    category: 'IA',
    status: 'draft',
    publishDate: '2024-05-25',
    views: 1890,
    excerpt: 'Como a IA está otimizando processos e melhorando a experiência em eventos...'
  },
  {
    id: 3,
    title: 'Tendências de Conectividade para 2024: O que Esperar',
    author: 'Ana Costa',
    category: 'Tendências',
    status: 'published',
    publishDate: '2024-05-20',
    views: 1245,
    excerpt: 'Uma análise completa das principais tendências tecnológicas...'
  }
];

const TecTecAdminPage = () => {
  const [posts, setPosts] = useState(mockPosts);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [isCategoryManagerOpen, setIsCategoryManagerOpen] = useState(false);
  const [editingPost, setEditingPost] = useState(null);

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleCreatePost = () => {
    setEditingPost(null);
    setIsEditorOpen(true);
  };

  const handleEditPost = (post) => {
    setEditingPost(post);
    setIsEditorOpen(true);
  };

  const handleDeletePost = (postId) => {
    if (window.confirm('Tem certeza que deseja excluir este post?')) {
      setPosts(posts.filter(post => post.id !== postId));
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'published':
        return 'bg-green-100 text-green-800';
      case 'draft':
        return 'bg-yellow-100 text-yellow-800';
      case 'archived':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'published':
        return 'Publicado';
      case 'draft':
        return 'Rascunho';
      case 'archived':
        return 'Arquivado';
      default:
        return status;
    }
  };

  return (
    <>
      <Helmet>
        <title>TecTec Admin | Painel Administrativo</title>
        <meta name="description" content="Painel administrativo para gerenciar posts do blog TecTec" />
      </Helmet>

      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-legal mb-2 font-unica">
                  TecTec Admin
                </h1>
                <p className="text-gray-600">
                  Gerencie posts, categorias e conteúdo do blog
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Dialog open={isCategoryManagerOpen} onOpenChange={setIsCategoryManagerOpen}>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="border-legal text-legal hover:bg-legal hover:text-white">
                      <Settings className="w-4 h-4 mr-2" />
                      Categorias
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>Gerenciar Categorias</DialogTitle>
                    </DialogHeader>
                    <CategoryManager />
                  </DialogContent>
                </Dialog>
                
                <Dialog open={isEditorOpen} onOpenChange={setIsEditorOpen}>
                  <DialogTrigger asChild>
                    <Button 
                      onClick={handleCreatePost}
                      className="bg-legal text-white hover:bg-legal-purple"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Novo Post
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>
                        {editingPost ? 'Editar Post' : 'Criar Novo Post'}
                      </DialogTitle>
                    </DialogHeader>
                    <PostEditor 
                      post={editingPost} 
                      onSave={(post) => {
                        if (editingPost) {
                          setPosts(posts.map(p => p.id === post.id ? post : p));
                        } else {
                          setPosts([...posts, { ...post, id: Date.now() }]);
                        }
                        setIsEditorOpen(false);
                      }}
                      onCancel={() => setIsEditorOpen(false)}
                    />
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <FileText className="h-8 w-8 text-legal" />
                  <div className="ml-4">
                    <p className="text-sm text-gray-600">Total de Posts</p>
                    <p className="text-2xl font-bold text-legal">{posts.length}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <Eye className="h-8 w-8 text-legal-green" />
                  <div className="ml-4">
                    <p className="text-sm text-gray-600">Visualizações</p>
                    <p className="text-2xl font-bold text-legal-green">
                      {posts.reduce((sum, post) => sum + post.views, 0).toLocaleString()}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <FileText className="h-8 w-8 text-legal-purple" />
                  <div className="ml-4">
                    <p className="text-sm text-gray-600">Publicados</p>
                    <p className="text-2xl font-bold text-legal-purple">
                      {posts.filter(post => post.status === 'published').length}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <Edit className="h-8 w-8 text-yellow-600" />
                  <div className="ml-4">
                    <p className="text-sm text-gray-600">Rascunhos</p>
                    <p className="text-2xl font-bold text-yellow-600">
                      {posts.filter(post => post.status === 'draft').length}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Filters and Search */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-legal font-unica">Posts do Blog</CardTitle>
            </CardHeader>
            <CardContent>
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
                    <option value="Tecnologia">Tecnologia</option>
                    <option value="IA">IA</option>
                    <option value="Tendências">Tendências</option>
                    <option value="IoT">IoT</option>
                    <option value="Segurança">Segurança</option>
                    <option value="Automação">Automação</option>
                  </select>
                </div>
              </div>

              {/* Posts Table */}
              <div className="rounded-lg border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Título</TableHead>
                      <TableHead>Autor</TableHead>
                      <TableHead>Categoria</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Data</TableHead>
                      <TableHead>Visualizações</TableHead>
                      <TableHead className="text-right">Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredPosts.map((post) => (
                      <TableRow key={post.id}>
                        <TableCell>
                          <div>
                            <p className="font-medium text-legal">{post.title}</p>
                            <p className="text-sm text-gray-500">{post.excerpt}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <User className="w-4 h-4 mr-2 text-gray-400" />
                            {post.author}
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className="border-legal text-legal">
                            {post.category}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(post.status)}>
                            {getStatusText(post.status)}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center text-sm text-gray-500">
                            <Calendar className="w-4 h-4 mr-1" />
                            {new Date(post.publishDate).toLocaleDateString('pt-BR')}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center text-sm text-gray-500">
                            <Eye className="w-4 h-4 mr-1" />
                            {post.views.toLocaleString()}
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex items-center justify-end space-x-2">
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => handleEditPost(post)}
                              className="hover:bg-legal hover:text-white"
                            >
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => handleDeletePost(post.id)}
                              className="hover:bg-red-500 hover:text-white"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              {filteredPosts.length === 0 && (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                    <Search className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">
                    Nenhum post encontrado
                  </h3>
                  <p className="text-gray-500">
                    Tente ajustar sua busca ou categoria selecionada.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default TecTecAdminPage;
