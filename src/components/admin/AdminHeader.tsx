
import React from 'react';
import { Plus, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import PostEditor from '@/components/admin/PostEditor';
import CategoryManager from '@/components/admin/CategoryManager';

interface AdminHeaderProps {
  onCreatePost: () => void;
  isEditorOpen: boolean;
  setIsEditorOpen: (open: boolean) => void;
  isCategoryManagerOpen: boolean;
  setIsCategoryManagerOpen: (open: boolean) => void;
  editingPost: any;
  onSavePost: (post: any) => void;
}

const AdminHeader = ({
  onCreatePost,
  isEditorOpen,
  setIsEditorOpen,
  isCategoryManagerOpen,
  setIsCategoryManagerOpen,
  editingPost,
  onSavePost
}: AdminHeaderProps) => {
  return (
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
                onClick={onCreatePost}
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
                onSave={onSavePost}
                onCancel={() => setIsEditorOpen(false)}
              />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
