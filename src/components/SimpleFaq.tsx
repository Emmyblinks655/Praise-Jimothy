import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { playCoinSound } from '../utils/sound';

export default function SimpleFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Who is Jimothy?",
      a: "Jimothy is the roundest, friendliest cartoon raccoon on the internet. He loves shiny trash, gold coins, and his community. He has zero neck and zero worries."
    },
    {
      q: "Why does Jimothy have no neck?",
      a: "Because necks are for looking behind you, and Jimothy only looks forward and up to the moon! Praise Jimothy."
    },
    {
      q: "How do I buy on my mobile phone?",
      a: "It's super simple! Tap 'Copy Website Link' above. Open your wallet app (like Phantom or MetaMask), tap the small browser icon at the bottom, paste our link, and hit Buy."
    },
    {
      q: "When do I get my $JIMOTHY coins?",
      a: "Right away! The moment you approve the transaction in your wallet, the coins are sent directly to your wallet address."
    },
    {
      q: "Are there any hidden fees or taxes?",
      a: "No! Buy tax is 0% and sell tax is 0%. You keep 100% of the coins you buy."
    },
    {
      q: "Which wallet is the easiest for beginners?",
      a: "Phantom is the easiest if you are using Solana. If you use Ethereum or multiple chains, MetaMask and Trust Wallet are also great. Any wallet with a built-in browser works perfectly."
    }
  ];

  const toggle = (i: number) => {
    playCoinSound();
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#080b11] border-t border-slate-900 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-2">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-display tracking-tight mb-3">
            Simple Answers for Everyone
          </h2>
          <p className="text-sm text-slate-400">
            Everything you need to know in plain, honest words.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={faq.q}
                className="bg-slate-900/70 border border-slate-800/80 rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-800/50 transition-colors"
                >
                  <span className="text-base sm:text-lg font-bold text-white">
                    {faq.q}
                  </span>
                  <div className={`p-1.5 rounded-lg bg-slate-800 text-amber-400 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-slate-800/40">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
