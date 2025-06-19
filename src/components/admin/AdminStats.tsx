
import React from 'react';
import { FileText, Eye, Edit } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface AdminStatsProps {
  posts: any[];
}

const AdminStats = ({ posts }: AdminStatsProps) => {
  const totalViews = posts.reduce((sum, post) => sum + post.views, 0);
  const publishedCount = posts.filter(post => post.status === 'published').length;
  const draftCount = posts.filter(post => post.status === 'draft').length;

  return (
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
                {totalViews.toLocaleString()}
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
                {publishedCount}
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
                {draftCount}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminStats;
