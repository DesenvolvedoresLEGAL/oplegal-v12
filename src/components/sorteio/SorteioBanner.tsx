import React, { useRef } from "react";
import { Button } from "@/components/ui/button";

interface SorteioBannerProps {
  title: string;
  subtitle?: string;
  logoSrc?: string | null;
  onLogoChange?: (file: File) => void;
}

export default function SorteioBanner({ title, subtitle, logoSrc, onLogoChange }: SorteioBannerProps) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleSelectLogo = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && onLogoChange) onLogoChange(file);
  };

  return (
    <header className="relative overflow-hidden rounded-2xl border border-legal/20 shadow-xl bg-gradient-to-r from-legal/10 via-legal-purple/10 to-legal-cyan/10 p-6 md:p-10">
      <div className="flex flex-col items-center text-center gap-5">
        {logoSrc ? (
          <img
            src={logoSrc}
            alt="Logomarca do cliente"
            className="h-16 md:h-20 object-contain drop-shadow"
            loading="lazy"
          />
        ) : (
          <div className="h-16 md:h-20 w-16 md:w-20 rounded-xl border border-legal/30 flex items-center justify-center bg-background/60">
            <span className="text-xs md:text-sm text-legal-black/60 font-haas">Logo do cliente</span>
          </div>
        )}

        <div className="space-y-3">
          <h1 className="text-4xl md:text-6xl font-haas font-bold bg-gradient-to-r from-legal via-legal-purple to-legal-cyan bg-clip-text text-transparent">
            {title}
          </h1>
          {subtitle && (
            <p className="text-legal-black/70 text-base md:text-xl font-haas max-w-2xl">
              {subtitle}
            </p>
          )}
        </div>

        <div className="flex items-center gap-3">
          <Button onClick={handleSelectLogo} variant="outline" className="border-legal text-legal hover:bg-legal hover:text-white font-haas font-bold">
            Personalizar banner (logomarca)
          </Button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-legal/5 via-transparent to-legal-cyan/10" />
    </header>
  );
}
