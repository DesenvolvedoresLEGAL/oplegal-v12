
import React from "react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
  className?: string;
}

const SectionTitle = ({
  title,
  subtitle,
  center = false,
  light = false,
  className = "",
}: SectionTitleProps) => {
  return (
    <div className={`mb-12 ${center ? "text-center" : ""} ${className}`}>
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
          light ? "text-white" : "text-legal"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg md:text-xl max-w-3xl ${
            center ? "mx-auto" : ""
          } ${light ? "text-gray-200" : "text-gray-600"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
