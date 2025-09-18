import { ReactNode } from 'react';
import { useAuth } from '@/hooks/useAuth';
import LoginModal from './LoginModal';

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse text-legal font-medium">Carregando...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <LoginModal />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;