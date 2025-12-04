"use client";

import { useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Chain } from "viem";
import { getChainUI } from "@/config/chains";

interface HeroSectionProps {
  selectedChain: Chain;
}

export function HeroSection({ selectedChain }: HeroSectionProps) {
  const [isHovering, setIsHovering] = useState(false);
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
  
  // Calculate luminance to determine if we need dark text
  const getLuminance = (r: number, g: number, b: number) => {
    const [rs, gs, bs] = [r, g, b].map(c => {
      c = c / 255;
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
  };
  
  const luminance = getLuminance(rgb.r, rgb.g, rgb.b);
  const textColor = luminance > 0.5 ? '#000000' : '#ffffff';

  return (
    <div className="w-full">
      {/* Header with ConnectButton */}
      <div className="w-full max-w-6xl mx-auto px-4 py-4 flex justify-end">
        <ConnectButton.Custom>
          {({ account, chain, openAccountModal, openConnectModal, mounted }) => {
            const ready = mounted;
            const connected = ready && account && chain;

            return (
              <div
                {...(!ready && {
                  'aria-hidden': true,
                  style: {
                    opacity: 0,
                    pointerEvents: 'none',
                    userSelect: 'none',
                  },
                })}
              >
                {(() => {
                  if (!connected) {
                    return (
                      <button
                        onClick={openConnectModal}
                        type="button"
                        className="px-4 py-2 rounded-lg font-bold text-sm transition-all duration-200 border tracking-wide"
                        style={{
                          backgroundColor: ui.accentColor,
                          color: textColor,
                          borderColor: ui.accentColor,
                          boxShadow: `0 2px 10px ${ui.accentColor}20`
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateY(-1px)';
                          e.currentTarget.style.boxShadow = `0 4px 15px ${ui.accentColor}30`;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateY(0px)';
                          e.currentTarget.style.boxShadow = `0 2px 10px ${ui.accentColor}20`;
                        }}
                      >
                        CONNECT WALLET
                      </button>
                    );
                  }

                  return (
                    <div className="flex items-center gap-2">
                      <button
                        onClick={openAccountModal}
                        type="button"
                        className="flex items-center gap-2 px-3 py-2 rounded-lg font-medium text-sm transition-all duration-200 bg-zinc-800 border border-zinc-700 text-white hover:bg-zinc-700"
                      >
                        {account.displayName}
                      </button>
                    </div>
                  );
                })()}
              </div>
            );
          }}
        </ConnectButton.Custom>
      </div>

      <div className="flex flex-col items-center justify-center gap-4 pt-2 pb-4">
        {/* Ethereum icon with glow effects */}
        <div
          className="relative group"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div
            className={`absolute inset-0 blur-3xl rounded-full transition-all duration-700 ${
              isHovering ? "scale-150 opacity-100" : "scale-100 opacity-60"
            }`}
            style={{ backgroundColor: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.15)` }}
          />
          <div
            className={`hidden md:block absolute inset-0 blur-2xl rounded-full transition-all duration-500 ${
              isHovering ? "scale-125 opacity-80" : "scale-100 opacity-40"
            }`}
            style={{ backgroundColor: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.25)` }}
          />
          <div
            className={`hidden lg:block absolute inset-0 blur-xl rounded-full transition-all duration-300 ${
              isHovering ? "scale-110 opacity-70" : "scale-100 opacity-30"
            }`}
            style={{ backgroundColor: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.35)` }}
          />

          {/* Ethereum diamond icon */}
          <div className="relative p-2">
            <svg
              width="80"
              height="80"
              viewBox="0 0 256 417"
              xmlns="http://www.w3.org/2000/svg"
              className={`relative z-10 transition-all duration-500 ${
                isHovering
                  ? "scale-110"
                  : "scale-100"
              }`}
              style={{
                filter: isHovering 
                  ? `drop-shadow(0 0 20px rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.6))` 
                  : undefined
              }}
            >
              <g>
                <polygon
                  fill={ui.accentColor}
                  points="127.9611 0 125.1661 9.5 125.1661 285.168 127.9611 287.958 255.9231 212.32"
                />
                <polygon
                  fill={ui.accentColor}
                  fillOpacity="0.8"
                  points="127.962 0 0 212.32 127.962 287.959 127.962 154.158"
                />
                <polygon
                  fill={ui.accentColor}
                  fillOpacity="0.6"
                  points="127.9611 312.1866 126.3861 314.1066 126.3861 412.3056 127.9611 416.9066 255.9991 236.5866"
                />
                <polygon
                  fill={ui.accentColor}
                  fillOpacity="0.8"
                  points="127.962 416.9052 127.962 312.1852 0 236.5852"
                />
                <polygon
                  fill={ui.accentColor}
                  fillOpacity="0.4"
                  points="127.9611 287.9577 255.9211 212.3207 127.9611 154.1587"
                />
                <polygon
                  fill={ui.accentColor}
                  points="0.0009 212.3208 127.9609 287.9578 127.9609 154.1588"
                />
              </g>
            </svg>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-black text-center bg-gradient-to-b from-white via-white to-zinc-400 bg-clip-text text-transparent leading-tight retro-glow tracking-wider">
          BLOCKCHAIN SPEED TESTER
        </h1>

        {/* Subtitle */}
        <p className="text-sm md:text-base text-zinc-400 text-center max-w-2xl px-4 leading-snug font-mono tracking-wide">
          MEASURE AND COMPARE TRANSACTION SPEEDS ACROSS DIFFERENT BLOCKCHAIN NETWORKS
        </p>
      </div>
    </div>
  );
}
