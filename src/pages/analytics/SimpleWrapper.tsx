import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Construction, Zap } from 'lucide-react';

interface SimpleWrapperProps {
  title: string;
  description: string;
  status?: 'beta' | 'experimental' | 'coming-soon';
  children?: React.ReactNode;
}

const SimpleWrapper: React.FC<SimpleWrapperProps> = ({ 
  title, 
  description, 
  status = 'beta',
  children 
}) => {
  const getStatusBadge = () => {
    switch (status) {
      case 'beta':
        return <Badge className="bg-yellow-500 text-white">Beta</Badge>;
      case 'experimental':
        return <Badge className="bg-orange-500 text-white">Experimental</Badge>;
      case 'coming-soon':
        return <Badge variant="outline">Em Breve</Badge>;
      default:
        return <Badge variant="outline">Beta</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-6 space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Button variant="outline" size="sm" asChild>
                <Link to="/universo/labs" className="flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Voltar ao Labs
                </Link>
              </Button>
              {getStatusBadge()}
            </div>
            <h1 className="text-3xl font-bold text-foreground">{title}</h1>
            <p className="text-muted-foreground mt-2">{description}</p>
          </div>
        </div>

        {/* Content */}
        {children || (
          <Card className="p-8 text-center">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-legal-primary to-legal-secondary rounded-full flex items-center justify-center mb-4">
                <Construction className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-legal-primary">
                Em Desenvolvimento
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Esta ferramenta está sendo desenvolvida pela equipe LEGAL. 
                Em breve estará disponível com funcionalidades completas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" asChild>
                  <Link to="/universo/labs">
                    Voltar ao Labs
                  </Link>
                </Button>
                <Button className="bg-legal-primary hover:bg-legal-secondary" asChild>
                  <Link to="/contato">
                    Enviar Feedback
                    <Zap className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default SimpleWrapper;