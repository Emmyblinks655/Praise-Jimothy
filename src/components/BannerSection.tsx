import { Sparkles, ArrowRight, Heart } from 'lucide-react';
import { playCoinSound } from '../utils/sound';

interface BannerSectionProps {
  onBuyClick: () => void;
}

export default function BannerSection({ onBuyClick }: BannerSectionProps) {
  return (
    <section className="py-6 sm:py-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative rounded-3xl overflow-hidden border border-amber-500/30 shadow-2xl bg-slate-900 group">
        
        {/* The Banner Image */}
        <div className="relative aspect-[21/9] sm:aspect-[24/9] md:aspect-[3/1] w-full min-h-[220px] max-h-[380px] overflow-hidden">
          <img
            src="/assets/aistudio/1793880492943_017ac080.jpg"
            alt="Official Jimothy the Raccoon Panoramic Banner"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            referrerPolicy="no-referrer"
          />

          {/* Measured gradient scrim for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-transparent to-slate-950/60" />

          {/* Content overlay */}
          <div className="absolute inset-0 p-6 sm:p-8 md:p-10 flex flex-col justify-end items-start">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-500/30 text-amber-300 border border-amber-400/40 text-xs font-bold uppercase tracking-wider mb-2 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Official Banner</span>
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white font-display tracking-tight leading-tight max-w-xl">
              No neck. No looking back. Just running straight to the moon.
            </h3>

            <p className="text-xs sm:text-sm text-slate-200 mt-2 max-w-lg hidden sm:block">
              Jimothy is already on the move. Don&apos;t miss your chance to secure $JIMOTHY at the special launch discount rate.
            </p>

            <div className="mt-4 flex items-center gap-3">
              <button
                onClick={() => {
                  playCoinSound();
                  onBuyClick();
                }}
                className="px-5 py-2.5 text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-300 hover:to-orange-300 rounded-xl shadow-lg glow-gold transition-all cursor-pointer flex items-center gap-2 active:scale-95"
              >
                <span>Join the Run · Buy Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
