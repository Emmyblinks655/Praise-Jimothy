import { ExternalLink, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { playCoinSound } from '../utils/sound';

interface WalletRecommendationsProps {
  onSelectWallet: (walletName: string) => void;
}

export default function WalletRecommendations({ onSelectWallet }: WalletRecommendationsProps) {
  const wallets = [
    {
      name: 'Phantom',
      badge: 'Most Popular',
      tagline: 'Best for beginners & Solana',
      bgColor: 'bg-[#AB9FF2]/10',
      borderColor: 'border-[#AB9FF2]/40',
      textColor: 'text-[#AB9FF2]',
      downloadUrl: 'https://phantom.app/',
      icon: (
        <svg viewBox="0 0 128 128" className="w-8 h-8 fill-current text-[#AB9FF2]">
          <path d="M110.8 62.5C108.6 37.8 88.5 18 64 18S19.4 37.8 17.2 62.5c-.3 3.6 2.6 6.6 6.2 6.6h7.5c3.2 0 5.9-2.5 6.2-5.7 1.4-15.5 14.5-27.7 30.5-27.7s29.1 12.2 30.5 27.7c.3 3.2 3 5.7 6.2 5.7h7.5c3.6 0 6.5-3 6.2-6.6z"/>
          <path d="M37.8 88.5c0 11.9 9.6 21.5 21.5 21.5 8.8 0 16.3-5.3 19.5-12.8 1.8 3.5 5.4 5.9 9.6 5.9 5.9 0 10.7-4.8 10.7-10.7V75.6c0-3.3-2.7-6-6-6s-6 2.7-6 6v16.8c0 1.5-1.2 2.7-2.7 2.7s-2.7-1.2-2.7-2.7V75.6c0-3.3-2.7-6-6-6s-6 2.7-6 6v16.8c0 6.3-5.1 11.5-11.5 11.5S47.8 98.8 47.8 92.5V75.6c0-3.3-2.7-6-6-6s-6 2.7-6 6v12.9z"/>
        </svg>
      )
    },
    {
      name: 'MetaMask',
      badge: 'Multi-Chain',
      tagline: 'World favorite Ethereum & EVM wallet',
      bgColor: 'bg-[#F6851B]/10',
      borderColor: 'border-[#F6851B]/40',
      textColor: 'text-[#F6851B]',
      downloadUrl: 'https://metamask.io/',
      icon: (
        <svg viewBox="0 0 32 32" className="w-8 h-8 fill-current text-[#F6851B]">
          <path d="M28.6 4.2L17.7 12.3l2 4.7L28.6 4.2zM3.4 4.2l10.9 8.1-2-4.7L3.4 4.2zM24.7 21.2l-2.8-4.2-2.2 3.1 3.9 3.5 1.1-2.4zm-17.4 0l1.1 2.4 3.9-3.5-2.2-3.1-2.8 4.2zM12.3 15.6l-2 4.7 4.2-1.9-.3-5.2-1.9 2.4zm7.4 0l-1.9-2.4-.3 5.2 4.2 1.9-2-4.7z"/>
          <path d="M10.3 20.3l3.9 3.5 1.8-2.5-4.2-1.9-1.5.9zm11.4 0l-1.5-.9-4.2 1.9 1.8 2.5 3.9-3.5z"/>
        </svg>
      )
    },
    {
      name: 'Trust Wallet',
      badge: 'Mobile First',
      tagline: 'Simple, secure & ultra clean',
      bgColor: 'bg-[#0500FF]/15',
      borderColor: 'border-[#3375BB]/40',
      textColor: 'text-[#3375BB]',
      downloadUrl: 'https://trustwallet.com/',
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-none stroke-[#3375BB] stroke-2 stroke-linecap-round stroke-linejoin-round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="m9 12 2 2 4-4"/>
        </svg>
      )
    },
    {
      name: 'Solflare',
      badge: 'Fast & Sleek',
      tagline: 'Built specifically for Solana ecosystem',
      bgColor: 'bg-[#FC9927]/10',
      borderColor: 'border-[#FC9927]/40',
      textColor: 'text-[#FC9927]',
      downloadUrl: 'https://solflare.com/',
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-none stroke-[#FC9927] stroke-2 stroke-linecap-round stroke-linejoin-round">
          <circle cx="12" cy="12" r="4"/>
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
        </svg>
      )
    }
  ];

  return (
    <section id="wallets" className="py-16 sm:py-24 bg-[#080b11] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-2">
            Wallet Compatibility
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display tracking-tight mb-3">
            Recommended Wallets
          </h2>
          <p className="text-lg text-amber-300 font-semibold mb-2">
            Use any of these wallets to buy easily.
          </p>
          <p className="text-sm text-slate-400">
            If you already have one installed, simply open its in-app browser and paste our link.
          </p>
        </div>

        {/* Wallets Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {wallets.map((w) => (
            <div
              key={w.name}
              className={`rounded-2xl p-6 border ${w.borderColor} bg-slate-900/60 hover:bg-slate-900 transition-all duration-300 flex flex-col justify-between group shadow-lg`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl ${w.bgColor} border border-white/5`}>
                    {w.icon}
                  </div>
                  <span className={`text-[11px] font-bold uppercase tracking-wider ${w.textColor} bg-white/5 px-2.5 py-1 rounded-md border border-white/10`}>
                    {w.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-amber-300 transition-colors">
                  {w.name}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  {w.tagline}
                </p>
              </div>

              <div className="space-y-2 pt-4 border-t border-slate-800">
                <button
                  onClick={() => {
                    playCoinSound();
                    onSelectWallet(w.name);
                  }}
                  className="w-full py-2.5 px-3 text-xs font-bold text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <span>Connect with {w.name}</span>
                </button>
                <a
                  href={w.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-1.5 text-[11px] font-medium text-slate-400 hover:text-slate-200 text-center block transition-colors flex items-center justify-center gap-1"
                >
                  <span>Install / Official Site</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Helpful Tip Box */}
        <div className="mt-10 max-w-2xl mx-auto bg-slate-900/80 border border-slate-800 rounded-xl p-4 sm:p-5 flex items-start gap-3.5">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            <strong className="text-white">Already on your phone?</strong> Just copy our link, open any of these wallet apps, tap the Browser icon at the bottom, and paste. You will be connected in 1 tap!
          </div>
        </div>

      </div>
    </section>
  );
}
