
import React, { ReactNode } from "react";

interface CardProps {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  className?: string;
  children?: ReactNode;
  hoverEffect?: boolean;
}

const Card = ({
  title,
  subtitle,
  icon,
  className = "",
  children,
  hoverEffect = true,
}: CardProps) => {
  return (
    <div 
      className={`bg-white rounded-xl shadow-md p-6 ${
        hoverEffect ? "card-hover" : ""
      } ${className}`}
    >
      {icon && <div className="mb-4 text-legal-green">{icon}</div>}
      <h3 className="text-xl font-bold mb-2 text-legal">{title}</h3>
      {subtitle && <p className="text-gray-600 mb-4">{subtitle}</p>}
      {children}
    </div>
  );
};

export default Card;
