import { useState } from 'react';
import { Copy, Check, Sparkles, ShieldCheck, Zap } from 'lucide-react';
import confetti from 'canvas-confetti';
import { playCoinSound, playSuccessChime } from '../utils/sound';

interface HeroSectionProps {
  onBuyClick: () => void;
}

export default function HeroSection({ onBuyClick }: HeroSectionProps) {
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedCA, setCopiedCA] = useState(false);

  const CONTRACT_ADDRESS = "J1M0THYracC00nN3ckL3ssM3m3C01nPump89X";

  const handleCopyLink = async () => {
    try {
      playSuccessChime();
      const url = window.location.href;
      await navigator.clipboard.writeText(url);
      setCopiedLink(true);
      
      // Fire playful gold and orange confetti
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#f59e0b', '#ff6b00', '#fbbf24', '#ffffff']
      });

      setTimeout(() => setCopiedLink(false), 3000);
    } catch {
      // Fallback
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 3000);
    }
  };

  const handleCopyCA = async () => {
    try {
      playCoinSound();
      await navigator.clipboard.writeText(CONTRACT_ADDRESS);
      setCopiedCA(true);
      setTimeout(() => setCopiedCA(false), 2500);
    } catch {
      setCopiedCA(true);
      setTimeout(() => setCopiedCA(false), 2500);
    }
  };

  return (
    <section className="relative pt-8 pb-16 sm:pt-14 sm:pb-24 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-orange-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Clean kicker (No pill enclosure per anti-slop rules) */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-amber-400 tracking-wide mb-3">
              <span>Meme Coin Presale</span>
              <span aria-hidden="true">·</span>
              <span>Solana & Multi-Chain</span>
              <span aria-hidden="true">·</span>
              <span>100% Community Owned</span>
            </div>

            {/* Big Title */}
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white font-display uppercase leading-[0.95] mb-4">
              <span className="bg-gradient-to-br from-white via-amber-100 to-amber-400 bg-clip-text text-transparent">
                $JIMOTHY
              </span>
            </h1>

            {/* Subtitle */}
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-amber-400 font-display mb-4 tracking-tight">
              The neckless raccoon is here. Praise Jimothy.
            </h2>

            {/* Short description in simple language */}
            <p className="text-base sm:text-lg text-slate-300 max-w-xl mb-8 leading-relaxed">
              Jimothy is a round, happy raccoon who never looks back because he has no neck. 
              Buy $JIMOTHY in just 4 simple taps and join the friendliest raccoon army on the internet.
            </p>

            {/* CTAs: Large Glowing Buy Button + Big Copy Website Link Button */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
              
              {/* Large Glowing Buy Button */}
              <button
                onClick={() => {
                  playCoinSound();
                  onBuyClick();
                }}
                className="group relative px-8 py-4 text-base sm:text-lg font-black text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-orange-400 hover:from-amber-300 hover:to-orange-300 rounded-xl glow-gold hover:glow-orange transition-all duration-300 cursor-pointer shadow-lg transform active:scale-95 flex items-center justify-center gap-3"
              >
                <Sparkles className="w-5 h-5 text-slate-950 group-hover:rotate-12 transition-transform" />
                <span>Buy $JIMOTHY Now</span>
              </button>

              {/* Big Copy Website Link Button */}
              <button
                onClick={handleCopyLink}
                className={`px-6 py-4 text-sm sm:text-base font-bold rounded-xl border transition-all duration-200 cursor-pointer flex items-center justify-center gap-2.5 active:scale-95 ${
                  copiedLink
                    ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300'
                    : 'bg-slate-900/80 border-slate-700/80 hover:border-amber-400/80 text-white hover:bg-slate-800'
                }`}
              >
                {copiedLink ? (
                  <>
                    <Check className="w-5 h-5 text-emerald-400" />
                    <span>Link Copied! Paste in Wallet</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-5 h-5 text-amber-400" />
                    <span>Copy Website Link</span>
                  </>
                )}
              </button>
            </div>

            {/* Simple Contract Address Bar */}
            <div className="w-full max-w-md bg-slate-900/60 border border-slate-800 rounded-xl p-3 flex items-center justify-between gap-3 text-left">
              <div className="min-w-0 flex-1">
                <span className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  Official Contract Address (CA)
                </span>
                <span className="block font-mono text-xs text-amber-300 truncate">
                  {CONTRACT_ADDRESS}
                </span>
              </div>
              <button
                onClick={handleCopyCA}
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors shrink-0 cursor-pointer"
                title="Copy Contract Address"
              >
                {copiedCA ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Reassurance points */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 mt-6 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Zero Buy/Sell Tax
              </span>
              <span className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-amber-400" />
                Instant Delivery to Wallet
              </span>
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-orange-400" />
                100% Neckless Guarantee
              </span>
            </div>

          </div>

          {/* Right Column: Hero Mascot Asset */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[380px] sm:max-w-[440px]">
              
              {/* Glow circle behind image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/25 to-orange-500/20 rounded-3xl blur-2xl -z-10" />

              {/* Mascot Card container */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-amber-500/30 bg-slate-900/90 shadow-2xl p-2 sm:p-3 animate-soft-float">
                <div className="rounded-2xl overflow-hidden aspect-square bg-[#121620] relative">
                  <img
                    src="/assets/aistudio/1793880348515_d3c324ee.jpg"
                    alt="Jimothy the Neckless Raccoon Official Logo"
                    className="w-full h-full object-contain p-2 bg-black"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Floating live tag */}
                  <div className="absolute bottom-3 left-3 right-3 bg-black/75 backdrop-blur-md rounded-xl p-2.5 border border-white/10 flex items-center justify-between">
                    <div>
                      <span className="block text-[11px] text-slate-400 font-medium">Character Status</span>
                      <span className="text-xs font-bold text-amber-300">Jimothy · Neck: 0.00%</span>
                    </div>
                    <div className="text-right">
                      <span className="block text-[11px] text-slate-400 font-medium">Launch Price</span>
                      <span className="text-xs font-mono font-bold text-emerald-400">$0.00042 USD</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
