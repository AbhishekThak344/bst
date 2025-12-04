"use client";

import { BackgroundEffects } from "@/components/BackgroundEffects";
import { HeroSection } from "@/components/HeroSection";
import { TransactionBenchmark } from "@/components/TransactionBenchmark";
import { useState } from "react";
import { DEFAULT_CHAIN } from "@/config/chains";
import { Chain } from "viem";

export default function Home() {
  const [selectedChain, setSelectedChain] = useState<Chain>(DEFAULT_CHAIN);

  return (
     <div className="min-h-screen relative scanlines">
      <BackgroundEffects selectedChain={selectedChain} />

      <main className="relative z-10 flex flex-col items-center">
        <HeroSection selectedChain={selectedChain} />
        <TransactionBenchmark onChainChange={setSelectedChain} />
      </main>
    </div>
  );
}
