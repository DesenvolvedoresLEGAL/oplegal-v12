
import React from 'react';
import { 
  Edit, 
  Trash2, 
  Search, 
  Calendar,
  User,
  Eye
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

interface PostsTableProps {
  posts: any[];
  onEditPost: (post: any) => void;
  onDeletePost: (postId: number) => void;
}

const PostsTable = ({ posts, onEditPost, onDeletePost }: PostsTableProps) => {
  const getStatusColor = (status: string) => {
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

  const getStatusText = (status: string) => {
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

  if (posts.length === 0) {
    return (
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
    );
  }

  return (
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
          {posts.map((post) => (
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
                    onClick={() => onEditPost(post)}
                    className="hover:bg-legal hover:text-white"
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => onDeletePost(post.id)}
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
  );
};

export default PostsTable;
