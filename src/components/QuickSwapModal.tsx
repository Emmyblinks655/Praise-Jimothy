import { useState, useId } from 'react';
import { X, Sparkles, Check, ArrowRight, Wallet, ShieldCheck, Copy, ExternalLink, RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';
import { playCoinSound, playSuccessChime } from '../utils/sound';

interface QuickSwapModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialWallet?: string | null;
}

export default function QuickSwapModal({ isOpen, onClose, initialWallet }: QuickSwapModalProps) {
  const [selectedCurrency, setSelectedCurrency] = useState<'SOL' | 'ETH' | 'USDT'>('SOL');
  const [inputAmount, setInputAmount] = useState<string>('1.0');
  const [selectedWallet, setSelectedWallet] = useState<string>(initialWallet || 'Phantom');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const payInputId = useId();

  if (!isOpen) return null;

  // Rate exchange table
  const rates = {
    SOL: 350000, // 1 SOL = 350,000 JIMOTHY
    ETH: 5600000, // 1 ETH = 5.6M JIMOTHY
    USDT: 2380, // 1 USDT = 2,380 JIMOTHY
  };

  const parsedAmount = parseFloat(inputAmount) || 0;
  const baseTokens = Math.floor(parsedAmount * rates[selectedCurrency]);
  const bonusTokens = Math.floor(baseTokens * 0.40); // 40% launch discount bonus
  const totalTokens = baseTokens + bonusTokens;

  const handleSimulateBuy = () => {
    if (parsedAmount <= 0) return;
    setIsProcessing(true);
    playCoinSound();

    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      playSuccessChime();

      confetti({
        particleCount: 80,
        spread: 80,
        origin: { y: 0.5 },
        colors: ['#f59e0b', '#ff6b00', '#fbbf24', '#10b981']
      });
    }, 1200);
  };

  const handleCopyWebsite = async () => {
    try {
      playSuccessChime();
      await navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    } catch {
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-[#0e131f] border border-amber-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl text-left overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow corner */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white bg-slate-900/80 hover:bg-slate-800 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <div>
            {/* Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>40% Launch Bonus Active</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white font-display">
                Get $JIMOTHY Instantly
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Enter how much you want to swap. Tokens go directly to your wallet.
              </p>
            </div>

            {/* Currency Selector */}
            <div className="mb-4">
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Pay With
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(['SOL', 'ETH', 'USDT'] as const).map((curr) => (
                  <button
                    key={curr}
                    onClick={() => {
                      playCoinSound();
                      setSelectedCurrency(curr);
                      if (curr === 'SOL') setInputAmount('1.0');
                      if (curr === 'ETH') setInputAmount('0.1');
                      if (curr === 'USDT') setInputAmount('150');
                    }}
                    className={`py-2.5 px-3 rounded-xl border text-sm font-bold transition-all cursor-pointer flex items-center justify-center gap-2 ${
                      selectedCurrency === curr
                        ? 'bg-amber-500/20 border-amber-400 text-amber-300 shadow-sm'
                        : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <span>{curr}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Amount input */}
            <div className="mb-4 bg-slate-900/80 border border-slate-800 rounded-2xl p-4">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-1.5 font-medium">
                <label htmlFor={payInputId} className="cursor-pointer">You Pay</label>
                <span>Estimated Balance: 4.8 {selectedCurrency}</span>
              </div>
              <div className="flex items-center gap-3">
                <input
                  id={payInputId}
                  type="number"
                  step="any"
                  min="0"
                  value={inputAmount}
                  onChange={(e) => setInputAmount(e.target.value)}
                  className="w-full bg-transparent text-2xl sm:text-3xl font-black font-mono text-white outline-none"
                  placeholder="0.0"
                />
                <span className="text-lg font-bold text-amber-400 font-mono shrink-0">
                  {selectedCurrency}
                </span>
              </div>
              
              {/* Preset quick buttons */}
              <div className="flex items-center gap-2 mt-3 pt-3 border-t border-slate-800/80">
                <span className="text-[11px] text-slate-500 font-medium">Quick:</span>
                {(selectedCurrency === 'SOL' ? ['0.5', '1.0', '2.5', '5.0'] : ['50', '100', '250', '500']).map((preset) => (
                  <button
                    key={preset}
                    onClick={() => setInputAmount(preset)}
                    className="px-2 py-0.5 text-xs font-mono font-semibold rounded bg-slate-800 text-slate-300 hover:text-amber-300 hover:bg-slate-700 cursor-pointer"
                  >
                    {preset}
                  </button>
                ))}
              </div>
            </div>

            {/* Output Tokens Box */}
            <div className="mb-6 bg-gradient-to-br from-amber-500/10 via-slate-900/90 to-orange-500/10 border border-amber-500/30 rounded-2xl p-4">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-1 font-medium">
                <span>You Receive ($JIMOTHY)</span>
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> Includes +40% Early Bonus
                </span>
              </div>
              
              <div className="text-3xl sm:text-4xl font-black font-mono tabular-nums text-amber-300 my-1">
                {totalTokens.toLocaleString()}
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-800/60 mt-2">
                <span>Base: {baseTokens.toLocaleString()}</span>
                <span className="text-amber-400 font-semibold">+ Bonus: {bonusTokens.toLocaleString()}</span>
              </div>
            </div>

            {/* Wallet Selection Bar */}
            <div className="mb-6">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-2 font-medium">
                <span>Connect with Wallet</span>
                <span className="text-slate-500">Pick your favorite</span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {['Phantom', 'MetaMask', 'Trust Wallet', 'Solflare'].map((w) => (
                  <button
                    key={w}
                    onClick={() => {
                      playCoinSound();
                      setSelectedWallet(w);
                    }}
                    className={`py-2 px-1 text-[11px] font-bold rounded-lg border text-center transition-all truncate cursor-pointer ${
                      selectedWallet === w
                        ? 'bg-amber-400 text-slate-950 border-amber-300 shadow'
                        : 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    {w}
                  </button>
                ))}
              </div>
            </div>

            {/* Main Action Button */}
            <button
              onClick={handleSimulateBuy}
              disabled={isProcessing || parsedAmount <= 0}
              className="w-full py-4 text-base font-black text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-orange-400 hover:from-amber-300 hover:to-orange-300 disabled:opacity-50 rounded-xl glow-gold transition-all duration-300 cursor-pointer shadow-lg flex items-center justify-center gap-2"
            >
              {isProcessing ? (
                <>
                  <RefreshCw className="w-5 h-5 animate-spin" />
                  <span>Connecting to {selectedWallet}...</span>
                </>
              ) : (
                <>
                  <Wallet className="w-5 h-5" />
                  <span>Buy with {selectedWallet}</span>
                </>
              )}
            </button>

            {/* Copy website fallback reminder */}
            <div className="mt-4 text-center">
              <button
                onClick={handleCopyWebsite}
                className="text-xs text-amber-400 hover:text-amber-300 font-semibold inline-flex items-center gap-1 cursor-pointer"
              >
                {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedLink ? 'Link Copied to Clipboard!' : 'Using mobile? Tap to copy link for wallet browser'}</span>
              </button>
            </div>
          </div>
        ) : (
          /* Success State */
          <div className="text-center py-6">
            <div className="w-16 h-16 bg-emerald-500/20 border-2 border-emerald-400 rounded-2xl flex items-center justify-center mx-auto mb-4 text-emerald-400">
              <Check className="w-8 h-8 stroke-[3]" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-white font-display mb-2">
              Praise Jimothy! You Got Tokens!
            </h3>
            
            <p className="text-sm text-slate-300 mb-6 max-w-sm mx-auto">
              Your transaction was approved. <strong className="text-amber-400">{totalTokens.toLocaleString()} $JIMOTHY</strong> are now secured in your {selectedWallet} wallet!
            </p>

            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 mb-6 text-left space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-slate-400">Amount Paid:</span>
                <span className="text-white font-mono font-bold">{inputAmount} {selectedCurrency}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Tokens Delivered:</span>
                <span className="text-amber-300 font-mono font-bold">{totalTokens.toLocaleString()} $JIMOTHY</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Launch Bonus:</span>
                <span className="text-emerald-400 font-mono font-bold">+40% (Secured)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Status:</span>
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> Confirmed on Blockchain
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  setIsSuccess(false);
                  onClose();
                }}
                className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-amber-400 to-orange-400 text-slate-950 font-black text-sm cursor-pointer hover:from-amber-300 hover:to-orange-300"
              >
                Back to Jimothy
              </button>
              <button
                onClick={handleCopyWebsite}
                className="py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm cursor-pointer flex items-center justify-center gap-1.5"
              >
                <Copy className="w-4 h-4 text-amber-400" />
                <span>{copiedLink ? 'Link Copied!' : 'Share with Friends'}</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
