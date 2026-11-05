import { useState } from 'react';
import { Copy, Check, ExternalLink, ArrowRight, Wallet, Compass, Coins, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { playCoinSound, playSuccessChime } from '../utils/sound';

interface SimpleStepsProps {
  onBuyClick: () => void;
}

export default function SimpleSteps({ onBuyClick }: SimpleStepsProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    try {
      playSuccessChime();
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      
      confetti({
        particleCount: 45,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#f59e0b', '#ff6b00', '#fbbf24']
      });

      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const steps = [
    {
      number: '01',
      title: 'Copy this website link',
      description: 'Tap the button below to copy this page URL to your clipboard.',
      icon: Copy,
      accent: 'border-amber-500/40 text-amber-400',
      action: (
        <button
          onClick={handleCopyLink}
          className={`w-full mt-3 py-2.5 px-3 text-xs sm:text-sm font-bold rounded-lg border transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 ${
            copied
              ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300'
              : 'bg-amber-500/10 border-amber-500/40 text-amber-300 hover:bg-amber-500/20'
          }`}
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-emerald-400" />
              <span>Link Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              <span>Copy Website Link Now</span>
            </>
          )}
        </button>
      )
    },
    {
      number: '02',
      title: 'Open your preferred wallet',
      description: 'Open your Phantom, MetaMask, Trust Wallet, or Solflare app on your phone or computer.',
      icon: Wallet,
      accent: 'border-orange-500/40 text-orange-400',
      action: (
        <div className="mt-3 text-[11px] text-slate-400 font-medium bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
          💡 Any crypto wallet with an in-app browser works seamlessly.
        </div>
      )
    },
    {
      number: '03',
      title: 'Paste the link in your wallet’s browser',
      description: 'Look for the Browser or Discover tab (globe or 4 squares icon) inside your wallet app and paste the link.',
      icon: Compass,
      accent: 'border-amber-400/40 text-amber-300',
      action: (
        <div className="mt-3 text-[11px] text-slate-400 font-medium bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
          🔍 In Phantom / MetaMask: Tap the browser icon at the bottom.
        </div>
      )
    },
    {
      number: '04',
      title: 'Connect wallet and buy $JIMOTHY',
      description: 'Hit the Buy button, approve the connection, and enter how much you want. Done in seconds!',
      icon: Coins,
      accent: 'border-emerald-500/40 text-emerald-400',
      action: (
        <button
          onClick={() => {
            playCoinSound();
            onBuyClick();
          }}
          className="w-full mt-3 py-2.5 px-3 text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-300 hover:to-orange-300 rounded-lg shadow-sm transition-all cursor-pointer flex items-center justify-center gap-1.5"
        >
          <Sparkles className="w-4 h-4" />
          <span>Launch Buy Window</span>
        </button>
      )
    }
  ];

  return (
    <section id="how-to-buy" className="py-16 sm:py-24 bg-slate-950/60 border-y border-slate-900 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-2">
            Super Simple Process
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display tracking-tight mb-3">
            How to Buy $JIMOTHY in 4 Easy Steps
          </h2>
          <p className="text-base text-slate-300">
            No confusing tech terms. Even if this is your very first meme coin, you can complete this in under 2 minutes.
          </p>
        </div>

        {/* 4 Big Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative bg-slate-900/90 rounded-2xl p-6 border border-slate-800 hover:border-amber-500/50 transition-all duration-300 flex flex-col justify-between group shadow-lg"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl sm:text-4xl font-black font-display text-slate-600 group-hover:text-amber-400 transition-colors">
                      {step.number}
                    </span>
                    <div className={`p-2.5 rounded-xl bg-slate-800/80 border ${step.accent}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Step Title */}
                  <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Step Action / Helper */}
                <div className="mt-4 pt-4 border-t border-slate-800/80">
                  {step.action}
                </div>
              </div>
            );
          })}
        </div>

        {/* Big Sticky or Bottom Callout */}
        <div className="mt-12 bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/10 border border-amber-500/30 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h4 className="text-xl font-bold text-white font-display mb-1">
              Ready to meet Jimothy?
            </h4>
            <p className="text-sm text-slate-300">
              The 40% launch discount bonus is only available for the current stage.
            </p>
          </div>
          <button
            onClick={() => {
              playCoinSound();
              onBuyClick();
            }}
            className="px-6 py-3.5 text-sm sm:text-base font-black text-slate-950 bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-300 hover:to-orange-300 rounded-xl shadow-md glow-gold transition-all cursor-pointer whitespace-nowrap flex items-center gap-2"
          >
            <span>Buy $JIMOTHY Right Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
