import { Shield, Sparkles, Flame, Check } from 'lucide-react';
import { playCoinSound } from '../utils/sound';

export default function TokenomicsSection() {
  const stats = [
    {
      title: 'Total Coins',
      value: '1,000,000,000',
      subtitle: '$JIMOTHY in total supply',
      note: 'No new coins can ever be created.'
    },
    {
      title: 'Buy & Sell Tax',
      value: '0% / 0%',
      subtitle: 'Zero taxes forever',
      note: 'What you buy is 100% what you keep.'
    },
    {
      title: 'Liquidity Pool',
      value: '100% Locked',
      subtitle: 'Permanent safety lock',
      note: 'Safe from rugs. Fully audited code.'
    },
    {
      title: 'Neck Size',
      value: '0.00 Centimeters',
      subtitle: 'Strictly neckless',
      note: 'Jimothy physically cannot look back.'
    }
  ];

  return (
    <section id="tokenomics" className="py-16 sm:py-24 bg-slate-950/80 border-t border-slate-900 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-2">
            Simple Tokenomics
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display tracking-tight mb-3">
            Honest & Simple Numbers
          </h2>
          <p className="text-base text-slate-300">
            No complicated financial jargon. Just clear, transparent rules so you know exactly what you are holding.
          </p>
        </div>

        {/* 4 Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((s) => (
            <div 
              key={s.title}
              className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 text-center hover:border-amber-500/40 transition-colors shadow-lg"
            >
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                {s.title}
              </span>
              <div className="text-2xl sm:text-3xl font-black font-mono tabular-nums text-amber-400 mb-1">
                {s.value}
              </div>
              <div className="text-sm font-bold text-white mb-2">
                {s.subtitle}
              </div>
              <p className="text-xs text-slate-400">
                {s.note}
              </p>
            </div>
          ))}
        </div>

        {/* Showcase Banner with Coin & Praise Jimothy Mantra */}
        <div className="bg-gradient-to-r from-amber-500/10 via-slate-900 to-orange-500/10 border border-amber-500/30 rounded-3xl p-6 sm:p-10 flex flex-col md:flex-row items-center gap-8 shadow-xl">
          <div className="w-32 h-32 sm:w-40 sm:h-40 shrink-0 rounded-2xl overflow-hidden border-2 border-amber-400/50 shadow-2xl bg-black p-1">
            <img 
              src="/assets/aistudio/1793880348515_d3c324ee.jpg" 
              alt="Official $JIMOTHY Mascot" 
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="text-center md:text-left flex-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Why Jimothy?</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white font-display mb-2">
              Other coins have charts. We have Jimothy.
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              In a world full of complex dogs, angry cats, and boring utility tokens, Jimothy stands proud: round, happy, holding shiny trash gold, and refusing to let gravity or necks slow him down.
            </p>

            <div className="mt-5 flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs font-semibold text-slate-300">
              <span className="flex items-center gap-1 text-emerald-400">
                <Check className="w-4 h-4" /> Contract Renounced
              </span>
              <span className="flex items-center gap-1 text-amber-400">
                <Check className="w-4 h-4" /> 100% Community Run
              </span>
              <span className="flex items-center gap-1 text-orange-400">
                <Check className="w-4 h-4" /> Instant Presale Bonus
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
