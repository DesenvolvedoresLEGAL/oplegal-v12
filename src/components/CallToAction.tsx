
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface CallToActionProps {
  title: string;
  subtitle?: string;
  buttonText: string;
  buttonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  background?: "light" | "dark" | "gradient";
  fullWidth?: boolean;
}

const CallToAction = ({
  title,
  subtitle,
  buttonText,
  buttonLink,
  secondaryButtonText,
  secondaryButtonLink,
  background = "light",
  fullWidth = false,
}: CallToActionProps) => {
  let bgClass = "bg-legal-gray";
  let textClass = "text-legal";
  
  if (background === "dark") {
    bgClass = "bg-legal";
    textClass = "text-white";
  } else if (background === "gradient") {
    bgClass = "bg-gradient-legal";
    textClass = "text-white";
  }

  return (
    <section className={`${bgClass} py-16 ${fullWidth ? "w-full" : ""}`}>
      <div className="container mx-auto px-4 text-center">
        <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${textClass}`}>
          {title}
        </h2>
        {subtitle && (
          <p className={`${background !== "light" ? "text-gray-200" : "text-gray-600"} text-lg mb-8 max-w-3xl mx-auto`}>
            {subtitle}
          </p>
        )}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            asChild
            className="bg-legal-purple hover:bg-legal text-white px-8 py-6 text-lg h-auto transition-all duration-300"
          >
            <Link to={buttonLink}>{buttonText}</Link>
          </Button>
          
          {secondaryButtonText && secondaryButtonLink && (
            <Button
              asChild
              variant="outline"
              className="border-legal text-legal hover:bg-legal hover:text-white transition-all duration-300 px-8 py-6 text-lg h-auto"
            >
              <Link to={secondaryButtonLink}>{secondaryButtonText}</Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
