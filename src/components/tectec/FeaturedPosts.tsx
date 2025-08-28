
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import OptimizedImage from '@/components/OptimizedImage';
import BlogArticleSchema from '@/components/BlogArticleSchema';
import { featuredPosts } from '@/data/TecTecData';

const FeaturedPosts: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <header className="mb-8">
          <h2 className="text-3xl font-bold text-legal mb-4 font-unica">Artigos em Destaque</h2>
          <p className="text-gray-600">Conteúdos especiais selecionados pela nossa equipe de especialistas</p>
        </header>
        <div className="grid md:grid-cols-2 gap-8">
          {featuredPosts.map((post) => (
            <React.Fragment key={post.id}>
              <BlogArticleSchema article={post} />
              <article className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-0">
                <Card className="h-full">
                  <Link to={`/universo/tectec/${post.id}`} className="block">
                    <div className="relative">
                      <OptimizedImage
                        src={post.image}
                        alt={`Imagem ilustrativa do artigo: ${post.title}`}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                        width={800}
                        height={400}
                        priority={true}
                      />
                      <Badge className="absolute top-4 left-4 bg-legal text-white">
                        <Link to={`/universo/tectec?categoria=${post.category.toLowerCase()}`} className="hover:text-legal-cyan">
                          {post.category}
                        </Link>
                      </Badge>
                    </div>
                  </Link>
                  <CardContent className="p-6">
                    <header className="mb-4">
                      <Link to={`/universo/tectec/${post.id}`}>
                        <h3 className="text-2xl font-bold text-legal mb-3 group-hover:text-legal-purple transition-colors leading-tight">
                          {post.title}
                        </h3>
                      </Link>
                      <p className="text-gray-600 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </header>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags?.map((tag) => (
                        <Link key={tag} to={`/universo/tectec?tag=${tag.toLowerCase()}`}>
                          <Badge variant="outline" className="text-xs hover:bg-legal hover:text-white transition-colors">
                            {tag}
                          </Badge>
                        </Link>
                      ))}
                    </div>
                    
                    <footer className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          <Link to={`/universo/tectec?autor=${post.author.toLowerCase()}`} className="hover:text-legal transition-colors">
                            {post.author}
                          </Link>
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
                    </footer>
                    
                    <Button 
                      asChild 
                      className="w-full bg-legal text-white hover:bg-legal-purple"
                    >
                      <Link to={`/universo/tectec/${post.id}`} className="flex items-center justify-center">
                        Ler Artigo Completo
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </article>
            </React.Fragment>
          ))}
        </div>
        
        <div className="text-center mt-12 space-x-4">
          <Button asChild className="bg-legal text-white hover:bg-legal-purple">
            <Link to="/universo/tectec">
              Ver todos os artigos <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" className="border-legal text-legal hover:bg-legal hover:text-white">
            <Link to="/universo/whitepapers">
              Ler whitepapers técnicos <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;
