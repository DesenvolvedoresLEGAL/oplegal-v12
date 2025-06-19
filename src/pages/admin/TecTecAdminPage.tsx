import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AdminHeader from '@/components/admin/AdminHeader';
import AdminStats from '@/components/admin/AdminStats';
import PostFilters from '@/components/admin/PostFilters';
import PostsTable from '@/components/admin/PostsTable';

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

  const handleSavePost = (post) => {
    if (editingPost) {
      setPosts(posts.map(p => p.id === post.id ? post : p));
    } else {
      setPosts([...posts, { ...post, id: Date.now() }]);
    }
    setIsEditorOpen(false);
  };

  return (
    <>
      <Helmet>
        <title>TecTec Admin | Painel Administrativo</title>
        <meta name="description" content="Painel administrativo para gerenciar posts do blog TecTec" />
      </Helmet>

      <div className="min-h-screen bg-gray-50 pt-24 p-6">
        <div className="max-w-7xl mx-auto">
          <AdminHeader
            onCreatePost={handleCreatePost}
            isEditorOpen={isEditorOpen}
            setIsEditorOpen={setIsEditorOpen}
            isCategoryManagerOpen={isCategoryManagerOpen}
            setIsCategoryManagerOpen={setIsCategoryManagerOpen}
            editingPost={editingPost}
            onSavePost={handleSavePost}
          />

          <AdminStats posts={posts} />

          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-legal font-unica">Posts do Blog</CardTitle>
            </CardHeader>
            <CardContent>
              <PostFilters
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />

              <PostsTable
                posts={filteredPosts}
                onEditPost={handleEditPost}
                onDeletePost={handleDeletePost}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default TecTecAdminPage;
