# Blockchain Speed Tester

A real-time blockchain transaction speed benchmarking tool with dynamic chain-themed UI. Measure and compare transaction confirmation times across different blockchain networks with a retro pixel aesthetic.

**100% open-source and unbiased.**

🚀 **[Live Demo](https://transaction-simulator-beta.vercel.app/)**

## ✨ Features

- **🎨 Dynamic Chain Theming**: UI automatically adapts colors and styling based on selected blockchain
- **⚡ Real Transaction Testing**: Send actual transactions to measure true confirmation latency
- **🌐 Multi-Chain Support**: Test on 500+ EVM chains including Base, Ethereum, Abstract, Optimism, and more
- **📊 RPC Call Breakdown**: Detailed timing for each RPC call with live updates
- **🎮 Retro Pixel Theme**: Cyberpunk aesthetic with scanlines and futuristic fonts
- **🔗 Universal Wallet Support**: Connect any wallet via RainbowKit

## 🎯 Chain-Specific Themes

Each blockchain network features its own unique color scheme:

- **Base**: Official blue theme (`#0052FF`)
- **Ethereum**: Classic purple (`#627EEA`)  
- **Abstract**: Bright green (`#00ff88`)
- **Optimism**: Bold red (`#ff0420`)
- **Monad**: Deep purple (`#9333ea`)
- **MegaETH**: Vibrant orange (`#ff6b00`)

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/AbhishekThak344/bst.git
cd bst

# Install dependencies
pnpm install

# Run the development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

## 🔧 How It Works

1. **Connect Wallet**: Link any compatible wallet
2. **Choose Chain**: Select from featured chains or search 500+ networks
3. **Send Transaction**: Confirm a 0-value self-transfer in your wallet
4. **Watch & Measure**: Real-time timing from submission to confirmation

The tool sends a zero-value transaction to your own address and precisely measures blockchain performance.

## 🛠 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) with App Router
- **Blockchain**: [viem](https://viem.sh/) + [wagmi](https://wagmi.sh/)
- **Wallet Connection**: [RainbowKit](https://www.rainbowkit.com/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Fonts**: Orbitron (headings) + JetBrains Mono (code)

## 📁 Project Structure

```
├── app/                        # Next.js app router
├── components/                 # React components
│   ├── BackgroundEffects.tsx   # Dynamic chain-themed backgrounds
│   ├── HeroSection.tsx         # Main header with theming
│   ├── SettingsControlPanel.tsx # Chain selector & controls
│   ├── ResultCard.tsx          # Transaction results display
│   └── TransactionBenchmark.tsx # Core benchmark logic
├── config/
│   └── chains.ts              # Chain configurations & themes
├── hooks/                     # Custom React hooks
├── lib/                       # Core utilities
│   ├── benchmark-runner.ts    # Transaction execution
│   ├── benchmark-clients.ts   # Viem client setup
│   └── instrumented-transport.ts # RPC timing capture
└── types/                     # TypeScript definitions
```

## ⚙️ Adding Custom Chains

Add new featured chains in `config/chains.ts`:

```typescript
export const FEATURED_CHAINS: Chain[] = [
  baseSepolia,
  sepolia,
  // Add your chain here
];

// Add theme colors
const CHAIN_UI_MAP: Record<number, ChainUI> = {
  [yourChain.id]: { 
    logo: "/your-logo.svg", 
    accentColor: "#your-color", 
    shortName: "Your Chain" 
  },
};
```

## 🎨 Customizing Themes

The app uses dynamic theming based on chain selection. Key styling features:

- **Smart Contrast**: Automatically adjusts text color based on background luminance
- **Dynamic Backgrounds**: Gradient orbs adapt to chain accent colors
- **Retro Effects**: Scanlines, glow effects, and pixel-perfect rendering
- **Consistent Branding**: Each chain maintains visual identity

## 🤝 Contributing

Contributions are welcome! Areas for improvement:

- Adding new chain integrations
- UI/UX enhancements
- Performance optimizations
- Additional blockchain networks

## 📄 License

MIT License - feel free to use this project for any purpose.