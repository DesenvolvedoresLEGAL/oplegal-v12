
import React from 'react';

const SkipLink = () => {
  return (
    <a 
      href="#main-content" 
      className="skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-legal text-white px-4 py-2 rounded-md z-50 font-medium"
      aria-label="Pular para o conteúdo principal"
    >
      Pular para o conteúdo principal
    </a>
  );
};

export default SkipLink;
