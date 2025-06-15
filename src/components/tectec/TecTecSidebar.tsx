
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, ChevronRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { categories } from '@/data/TecTecData';

interface Post {
  id: number;
  title: string;
  views: number;
  readTime: string;
}

interface TecTecSidebarProps {
  popularPosts: Post[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  email: string;
  setEmail: (email: string) => void;
}

const TecTecSidebar: React.FC<TecTecSidebarProps> = ({
  popularPosts,
  selectedCategory,
  setSelectedCategory,
  email,
  setEmail
}) => {
  return (
    <aside className="space-y-8">
      {/* Popular Posts */}
      <Card className="p-6">
        <header className="mb-6">
          <h3 className="text-xl font-bold text-legal font-unica">Mais Populares</h3>
        </header>
        <div className="space-y-4">
          {popularPosts.map((post, index) => (
            <article key={post.id} className="flex items-start space-x-3 group">
              <div className="text-2xl font-bold text-legal-green">
                {index + 1}
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-legal group-hover:text-legal-purple transition-colors leading-tight mb-1">
                  <Link to={`/universo/tectec/${post.id}`}>
                    {post.title}
                  </Link>
                </h4>
                <div className="flex items-center text-xs text-gray-500 space-x-2">
                  <span>{post.views.toLocaleString()} visualizações</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Card>

      {/* Newsletter Signup */}
      <Card className="p-6 bg-gradient-to-br from-legal to-legal-purple text-white">
        <div className="text-center">
          <Mail className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2 font-unica">Newsletter TecTec</h3>
          <p className="text-sm opacity-90 mb-4">
            Receba semanalmente insights exclusivos sobre tecnologia, 
            inovação e tendências para eventos corporativos.
          </p>
          <form className="space-y-3" onSubmit={(e) => {
            e.preventDefault();
            console.log('Newsletter signup:', email);
            setEmail('');
          }}>
            <Input
              type="email"
              placeholder="Seu melhor e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white text-legal border-0"
              required
              aria-label="Digite seu e-mail para newsletter"
            />
            <Button 
              type="submit"
              className="w-full bg-legal-green hover:bg-legal-green/90 text-white"
            >
              Assinar Newsletter Gratuita
            </Button>
          </form>
        </div>
      </Card>

      {/* Categories Widget */}
      <Card className="p-6">
        <header className="mb-6">
          <h3 className="text-xl font-bold text-legal font-unica">Categorias</h3>
        </header>
        <nav className="space-y-2">
          {categories.slice(1).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className="flex items-center justify-between w-full text-left p-2 rounded hover:bg-gray-50 transition-colors"
              aria-pressed={selectedCategory === category}
            >
              <span className={`${selectedCategory === category ? 'text-legal font-medium' : 'text-gray-600'}`}>
                {category}
              </span>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </button>
          ))}
        </nav>
      </Card>

      {/* Links úteis */}
      <Card className="p-6">
        <header className="mb-6">
          <h3 className="text-xl font-bold text-legal font-unica">Links Úteis</h3>
        </header>
        <nav className="space-y-3">
          <Link 
            to="/negocios/ai" 
            className="flex items-center text-gray-600 hover:text-legal transition-colors"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Soluções de IA da LEGAL
          </Link>
          <Link 
            to="/smart-events" 
            className="flex items-center text-gray-600 hover:text-legal transition-colors"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Smart Events™
          </Link>
          <Link 
            to="/contato" 
            className="flex items-center text-gray-600 hover:text-legal transition-colors"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Fale com Especialistas
          </Link>
        </nav>
      </Card>
    </aside>
  );
};

export default TecTecSidebar;
