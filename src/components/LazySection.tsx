
import React, { Suspense } from 'react';

interface LazySectionProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  className?: string;
}

const DefaultFallback = () => (
  <div className="py-16 flex justify-center items-center">
    <div className="w-8 h-8 border-2 border-legal border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const LazySection: React.FC<LazySectionProps> = ({ 
  children, 
  fallback = <DefaultFallback />, 
  className = '' 
}) => {
  return (
    <div className={className}>
      <Suspense fallback={fallback}>
        {children}
      </Suspense>
    </div>
  );
};

export default LazySection;
