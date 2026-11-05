import { useState } from 'react';
import { Volume2, VolumeX, ArrowRight } from 'lucide-react';
import { toggleSound, isSoundEnabled, playCoinSound } from '../utils/sound';

interface NavbarProps {
  onBuyClick: () => void;
}

export default function Navbar({ onBuyClick }: NavbarProps) {
  const [soundOn, setSoundOn] = useState(isSoundEnabled());

  const handleSoundToggle = () => {
    const next = toggleSound();
    setSoundOn(next);
    if (next) playCoinSound();
  };

  return (
    <header className="sticky top-0 z-40 bg-[#080b11]/90 backdrop-blur-md border-b border-slate-800/80 px-4 sm:px-8 py-3.5 transition-all">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-8">
        
        {/* Zone 1: Wordmark */}
        <a 
          href="#" 
          className="flex items-center gap-2.5 text-xl sm:text-2xl font-black tracking-tight text-white whitespace-nowrap shrink-0 group"
          onClick={() => playCoinSound()}
        >
          <div className="w-9 h-9 rounded-full overflow-hidden border border-amber-400/60 bg-black/40 shrink-0 p-0.5 shadow-sm">
            <img 
              src="/assets/aistudio/1793880348515_d3c324ee.jpg" 
              alt="Jimothy the Raccoon Logo" 
              className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="font-display bg-gradient-to-r from-amber-400 via-amber-200 to-orange-400 bg-clip-text text-transparent">
            $JIMOTHY
          </span>
        </a>

        {/* Zone 2: 4 single-line nav links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-slate-300">
          <a href="#how-to-buy" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
            How to Buy
          </a>
          <a href="#wallets" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
            Recommended Wallets
          </a>
          <a href="#tokenomics" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
            Tokenomics
          </a>
          <a href="#faq" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
            FAQ
          </a>
        </nav>

        {/* Zone 3: 1 primary action + audio toggle */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            onClick={handleSoundToggle}
            aria-label={soundOn ? 'Mute sound effects' : 'Enable sound effects'}
            className="p-2 text-slate-400 hover:text-amber-400 rounded-lg hover:bg-slate-800/80 transition-colors cursor-pointer"
            title={soundOn ? 'Sound is ON' : 'Sound is MUTED'}
          >
            {soundOn ? <Volume2 className="w-4 h-4 text-amber-400" /> : <VolumeX className="w-4 h-4" />}
          </button>

          <button
            onClick={() => {
              playCoinSound();
              onBuyClick();
            }}
            className="px-4 py-2 text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 rounded-lg shadow-sm hover:shadow-amber-500/30 transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5"
          >
            <span>Buy $JIMOTHY</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </header>
  );
}
