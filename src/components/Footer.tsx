import { Copy, Check, Heart } from 'lucide-react';
import { useState } from 'react';
import confetti from 'canvas-confetti';
import { playSuccessChime } from '../utils/sound';
import TelegramUpdates from './TelegramUpdates';

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    try {
      playSuccessChime();
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      confetti({
        particleCount: 30,
        spread: 50,
        origin: { y: 0.9 },
        colors: ['#f59e0b', '#ff6b00']
      });
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <footer className="border-t border-slate-900 bg-[#05070b] pt-14 pb-12 px-4 sm:px-6 lg:px-8 text-slate-400 text-xs">
      <div className="max-w-6xl mx-auto">
        {/* Telegram Live Social Updates Component */}
        <TelegramUpdates />

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-4">
        
        {/* Brand & Tagline */}
        <div className="flex flex-col items-center md:items-start gap-1 text-center md:text-left">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full overflow-hidden border border-amber-400/50 bg-black shrink-0">
              <img 
                src="/assets/aistudio/1793880348515_d3c324ee.jpg" 
                alt="Jimothy Logo" 
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="font-display font-black text-xl text-white tracking-tight">
              $JIMOTHY
            </span>
            <span className="text-amber-400 font-bold">· Praise Jimothy</span>
          </div>
          <p className="text-slate-400">
            The neckless raccoon is here to bring joy to the blockchain.
          </p>
        </div>

        {/* Quick Nav Links */}
        <div className="flex items-center gap-6 font-semibold text-slate-300">
          <a href="#how-to-buy" className="hover:text-amber-400 transition-colors">How to Buy</a>
          <a href="#wallets" className="hover:text-amber-400 transition-colors">Wallets</a>
          <a href="#tokenomics" className="hover:text-amber-400 transition-colors">Tokenomics</a>
          <a href="#faq" className="hover:text-amber-400 transition-colors">FAQ</a>
        </div>

        {/* Copy Link Button */}
        <div>
          <button
            onClick={handleCopyLink}
            className="px-3.5 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-amber-500/50 text-slate-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 font-bold"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-300">Link Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-amber-400" />
                <span>Copy Page Link</span>
              </>
            )}
          </button>
        </div>

        </div>

        {/* Honest Simple Disclaimer */}
        <div className="mt-8 pt-6 border-t border-slate-900 text-center text-slate-400 text-[11px] leading-relaxed">
          $JIMOTHY is a fun meme coin created for community entertainment and celebrating Jimothy the neckless raccoon. Cryptocurrency prices can go up or down. Never spend money you cannot afford to lose. Have fun and praise Jimothy.
        </div>
      </div>
    </footer>
  );
}
