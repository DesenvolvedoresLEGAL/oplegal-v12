
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, Bookmark, Share2, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import OptimizedImage from '@/components/OptimizedImage';
import BlogArticleSchema from '@/components/BlogArticleSchema';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface Post {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags?: string[];
  image: string;
  views: number;
  seoKeywords: string;
}

interface PostsListProps {
  posts: Post[];
}

const PostsList: React.FC<PostsListProps> = ({ posts }) => {
  return (
    <main className="lg:col-span-2">
      <header className="mb-8">
        <h2 className="text-3xl font-bold text-legal mb-4 font-unica">Últimos Artigos</h2>
        <p className="text-gray-600">Mantenha-se atualizado com as últimas tendências e insights do mercado</p>
      </header>
      
      {posts.length === 0 ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
            <Search className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            Nenhum artigo encontrado
          </h3>
          <p className="text-gray-500">
            Tente ajustar sua busca ou categoria selecionada.
          </p>
        </div>
      ) : (
        <>
          <div className="space-y-8">
            {posts.map((post) => (
              <React.Fragment key={post.id}>
                <BlogArticleSchema article={post} />
                <article className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <Card>
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <OptimizedImage
                          src={post.image}
                          alt={`Imagem do artigo: ${post.title}`}
                          className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          width={400}
                          height={250}
                        />
                      </div>
                      <div className="md:w-2/3 p-6">
                        <header className="mb-4">
                          <div className="flex items-center justify-between mb-3">
                            <Badge variant="outline" className="border-legal text-legal">
                              {post.category}
                            </Badge>
                            <div className="flex items-center space-x-2">
                              <Button variant="ghost" size="sm" aria-label="Salvar artigo">
                                <Bookmark className="w-4 h-4" />
                              </Button>
                              <Button variant="ghost" size="sm" aria-label="Compartilhar artigo">
                                <Share2 className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                          <h3 className="text-xl font-bold text-legal mb-2 group-hover:text-legal-purple transition-colors">
                            {post.title}
                          </h3>
                          <p className="text-gray-600 mb-4 leading-relaxed">
                            {post.excerpt}
                          </p>
                        </header>
                        
                        <footer className="flex items-center justify-between text-sm text-gray-500">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center">
                              <User className="w-4 h-4 mr-1" />
                              {post.author}
                            </div>
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              <time dateTime={post.date}>
                                {new Date(post.date).toLocaleDateString('pt-BR')}
                              </time>
                            </div>
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              {post.readTime}
                            </div>
                          </div>
                          <Button 
                            asChild 
                            variant="outline" 
                            size="sm"
                            className="border-legal text-legal hover:bg-legal hover:text-white"
                          >
                            <Link to={`/universo/tectec/${post.id}`}>
                              Ler Mais
                            </Link>
                          </Button>
                        </footer>
                      </div>
                    </div>
                  </Card>
                </article>
              </React.Fragment>
            ))}
          </div>

          {/* Pagination */}
          <nav aria-label="Navegação de páginas" className="mt-12">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </nav>
        </>
      )}
    </main>
  );
};

export default PostsList;
