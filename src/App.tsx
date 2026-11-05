import { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import CountdownTimer from './components/CountdownTimer';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import BannerSection from './components/BannerSection';
import SimpleSteps from './components/SimpleSteps';
import WalletRecommendations from './components/WalletRecommendations';
import TokenomicsSection from './components/TokenomicsSection';
import SimpleFaq from './components/SimpleFaq';
import Footer from './components/Footer';
import QuickSwapModal from './components/QuickSwapModal';

export default function App() {
  const [isBuyModalOpen, setIsBuyModalOpen] = useState(false);
  const [selectedWalletForModal, setSelectedWalletForModal] = useState<string | null>(null);

  const handleOpenBuy = (walletName?: string) => {
    if (walletName) {
      setSelectedWalletForModal(walletName);
    }
    setIsBuyModalOpen(true);
  };

  const handleCloseBuy = () => {
    setIsBuyModalOpen(false);
    setSelectedWalletForModal(null);
  };

  return (
    <div className="min-h-screen bg-[#080b11] text-slate-100 flex flex-col font-sans selection:bg-amber-500 selection:text-black">
      {/* 1. Big Countdown Timer at top */}
      <CountdownTimer onBuyClick={() => handleOpenBuy()} />

      {/* 2. Top Navigation */}
      <Navbar onBuyClick={() => handleOpenBuy()} />

      {/* 3. Main Landing Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection onBuyClick={() => handleOpenBuy()} />

        {/* Panoramic Banner Section */}
        <BannerSection onBuyClick={() => handleOpenBuy()} />

        {/* Very Simple 4-Step Buy Guide */}
        <SimpleSteps onBuyClick={() => handleOpenBuy()} />

        {/* Recommended Wallets */}
        <WalletRecommendations onSelectWallet={(w) => handleOpenBuy(w)} />

        {/* Honest Tokenomics & Neckless Jimothy Lore */}
        <TokenomicsSection />

        {/* Beginner-friendly FAQ */}
        <SimpleFaq />
      </main>

      {/* 4. Footer */}
      <Footer />

      {/* 5. Interactive Buy / Swap Modal */}
      <QuickSwapModal
        isOpen={isBuyModalOpen}
        onClose={handleCloseBuy}
        initialWallet={selectedWalletForModal}
      />

      {/* Vercel Web Analytics */}
      <Analytics />
    </div>
  );
}
