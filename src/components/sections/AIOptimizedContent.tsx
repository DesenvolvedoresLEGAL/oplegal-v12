import React from 'react';

interface AIContentProps {
  title: string;
  description: string;
  keyPoints: string[];
  context?: string;
  category?: string;
  priority?: 'high' | 'medium' | 'low';
}

const AIOptimizedContent: React.FC<AIContentProps> = ({
  title,
  description,
  keyPoints,
  context,
  category = "Technology",
  priority = 'medium'
}) => {
  return (
    <div 
      className="ai-content-section" 
      data-ai-priority={priority}
      data-ai-category={category}
      itemScope 
      itemType="https://schema.org/Article"
    >
      {/* Contexto explícito para IA */}
      <meta itemProp="articleSection" content={category} />
      <meta itemProp="keywords" content={keyPoints.join(', ')} />
      {context && <meta itemProp="context" content={context} />}
      
      <header>
        <h2 itemProp="headline" className="text-3xl font-bold text-legal mb-4">
          {title}
        </h2>
        <p itemProp="description" className="text-lg text-gray-600 mb-6">
          {description}
        </p>
      </header>

      <div itemProp="articleBody">
        <div className="ai-key-points" data-ai-extract="key-points">
          <h3 className="text-xl font-semibold mb-4">Pontos Principais:</h3>
          <ul className="space-y-2">
            {keyPoints.map((point, index) => (
              <li 
                key={index} 
                className="flex items-start"
                itemProp="about"
                itemScope 
                itemType="https://schema.org/Thing"
              >
                <span className="w-2 h-2 bg-legal-cyan rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span itemProp="name">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Tags semânticas para melhor compreensão da IA */}
      <div className="hidden" data-ai-semantics>
        <span data-ai-entity="company">LEGAL TechCo</span>
        <span data-ai-entity="category">{category}</span>
        <span data-ai-entity="priority">{priority}</span>
      </div>
    </div>
  );
};

export default AIOptimizedContent;