import Image from "next/image";
import { Chain } from "viem";
import { getChainUI } from "@/config/chains";

interface BackgroundEffectsProps {
  selectedChain: Chain;
}

export function BackgroundEffects({ selectedChain }: BackgroundEffectsProps) {
  const ui = getChainUI(selectedChain.id);
  
  // Convert hex color to RGB for CSS custom properties
  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : { r: 16, g: 185, b: 129 }; // fallback to emerald
  };
  
  const rgb = hexToRgb(ui.accentColor);
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Dark base */}
      <div className="absolute inset-0 bg-black" />

      {/* Enhanced Aurora gradient orbs - spread out across the entire viewport */}
      {/* Responsive: fewer and dimmer on mobile, full effect on desktop */}

      {/* Top left corner */}
      <div 
        className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full blur-3xl animate-pulse-slow" 
        style={{ backgroundColor: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.05)` }}
      />

      {/* Top right corner */}
      <div 
        className="absolute -top-32 -right-40 w-[800px] h-[800px] rounded-full blur-3xl animate-pulse-slow" 
        style={{ backgroundColor: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.08)` }}
      />

      {/* Top center - hidden on mobile and tablet */}
      <div 
        className="hidden lg:block absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-[120px] animate-pulse-slower" 
        style={{ backgroundColor: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.15)` }}
      />

      {/* Middle right edge - hidden on small/medium, visible on large */}
      <div 
        className="hidden lg:block absolute top-1/2 -right-48 w-[650px] h-[650px] rounded-full blur-[100px] animate-pulse-slower" 
        style={{ backgroundColor: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.12)` }}
      />

      {/* Middle left edge - hidden on small/medium, visible on large */}
      <div 
        className="hidden lg:block absolute top-1/2 -left-48 w-[650px] h-[650px] rounded-full blur-3xl animate-pulse-slower" 
        style={{ backgroundColor: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.12)` }}
      />

      {/* Bottom left corner */}
      <div 
        className="absolute -bottom-40 -left-40 w-[750px] h-[750px] rounded-full blur-3xl animate-pulse-slower" 
        style={{ backgroundColor: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.08)` }}
      />

      {/* Bottom right corner */}
      <div 
        className="absolute -bottom-40 -right-40 w-[750px] h-[750px] rounded-full blur-[120px] animate-pulse-slow" 
        style={{ backgroundColor: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.08)` }}
      />

      {/* Bottom center - hidden on mobile and tablet */}
      <div 
        className="hidden lg:block absolute bottom-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-[110px] animate-pulse-slower" 
        style={{ backgroundColor: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.12)` }}
      />

      {/* Scattered accent - upper middle left - hidden on mobile and tablet */}
      <div 
        className="hidden lg:block absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full blur-[100px] animate-pulse-slow" 
        style={{ backgroundColor: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.1)` }}
      />

      {/* Scattered accent - lower middle right - hidden on mobile and tablet */}
      <div 
        className="hidden lg:block absolute bottom-1/3 right-1/4 w-[550px] h-[550px] rounded-full blur-[110px] animate-pulse-slower" 
        style={{ backgroundColor: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.1)` }}
      />


      {/* 3D Lines overlay - positioned at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[600px] opacity-45 mix-blend-screen pointer-events-none">
        <Image
          src="/3d-lines.svg"
          alt=""
          fill
          className="object-cover object-bottom"
          loading="eager"
        />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />

      {/* Starry effect */}
      <div className="absolute inset-0 bg-stars opacity-30" />

      {/* Radial gradient flares */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px]" 
        style={{ 
          background: `linear-gradient(to bottom, rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.1), transparent, transparent)` 
        }} 
      />

      {/* Subtle gradient overlay for depth - much lighter */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/20 to-black/60" />

      {/* Very subtle vignette effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,transparent_60%,black_100%)] opacity-30" />
    </div>
  );
}
