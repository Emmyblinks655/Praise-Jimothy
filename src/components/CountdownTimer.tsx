import { useState, useEffect } from 'react';
import { Flame, Clock, Sparkles } from 'lucide-react';

interface CountdownTimerProps {
  onBuyClick: () => void;
}

export default function CountdownTimer({ onBuyClick }: CountdownTimerProps) {
  // Launch discount timer: 6 hours, 28 minutes, 42 seconds from initial mount
  const [timeLeft, setTimeLeft] = useState<{
    hours: number;
    minutes: number;
    seconds: number;
  }>({
    hours: 6,
    minutes: 28,
    seconds: 42,
  });

  useEffect(() => {
    // Persistent initial target in localStorage so refreshing maintains countdown realism
    const STORAGE_KEY = 'jimothy_launch_deadline';
    let targetTime = 0;
    const stored = localStorage.getItem(STORAGE_KEY);
    
    if (stored) {
      targetTime = parseInt(stored, 10);
      // If expired, reset to fresh 8-hour window
      if (targetTime < Date.now()) {
        targetTime = Date.now() + (8 * 3600 + 45 * 60) * 1000;
        localStorage.setItem(STORAGE_KEY, targetTime.toString());
      }
    } else {
      targetTime = Date.now() + (6 * 3600 + 28 * 60 + 42) * 1000;
      localStorage.setItem(STORAGE_KEY, targetTime.toString());
    }

    const interval = setInterval(() => {
      const diff = targetTime - Date.now();
      if (diff <= 0) {
        // Roll over to new mini-extension
        const nextTime = Date.now() + (4 * 3600 + 15 * 60) * 1000;
        localStorage.setItem(STORAGE_KEY, nextTime.toString());
      } else {
        const h = Math.floor(diff / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diff % (1000 * 60)) / 1000);
        setTimeLeft({ hours: h, minutes: m, seconds: s });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const pad = (n: number) => n.toString().padStart(2, '0');

  return (
    <div className="relative z-30 bg-gradient-to-r from-amber-600/20 via-orange-500/25 to-amber-600/20 border-b border-amber-500/30 backdrop-blur-md px-4 py-3 sm:py-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 text-center md:text-left">
        
        {/* Left message & urgency badge */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-semibold uppercase tracking-wider">
            <Flame className="w-4 h-4 text-orange-400 animate-pulse" />
            <span>Launch Event</span>
          </div>
          <div>
            <span className="text-sm sm:text-base font-bold text-white tracking-tight">
              Special Launch Discount ends in:
            </span>
            <p className="text-xs text-amber-200/80 hidden sm:block">
              Get <span className="text-amber-300 font-bold">40% Bonus $JIMOTHY</span> before the timer hits zero!
            </p>
          </div>
        </div>

        {/* Center / Right: Big Bold Digits and Quick Action */}
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="flex items-center gap-1.5 sm:gap-2 font-mono tabular-nums text-white">
            {/* Hours */}
            <div className="flex flex-col items-center">
              <div className="bg-slate-900/90 border border-amber-500/40 px-2.5 sm:px-3 py-1.5 rounded-lg shadow-inner shadow-black/60 min-w-[46px] sm:min-w-[54px] text-center">
                <span className="text-xl sm:text-2xl font-black text-amber-400">
                  {pad(timeLeft.hours)}
                </span>
              </div>
              <span className="text-[10px] text-slate-400 uppercase tracking-wider font-sans mt-0.5 font-medium">Hours</span>
            </div>

            <span className="text-xl sm:text-2xl font-bold text-amber-400/80 -mt-3.5">:</span>

            {/* Minutes */}
            <div className="flex flex-col items-center">
              <div className="bg-slate-900/90 border border-amber-500/40 px-2.5 sm:px-3 py-1.5 rounded-lg shadow-inner shadow-black/60 min-w-[46px] sm:min-w-[54px] text-center">
                <span className="text-xl sm:text-2xl font-black text-amber-400">
                  {pad(timeLeft.minutes)}
                </span>
              </div>
              <span className="text-[10px] text-slate-400 uppercase tracking-wider font-sans mt-0.5 font-medium">Mins</span>
            </div>

            <span className="text-xl sm:text-2xl font-bold text-amber-400/80 -mt-3.5">:</span>

            {/* Seconds */}
            <div className="flex flex-col items-center">
              <div className="bg-slate-900/90 border border-amber-500/40 px-2.5 sm:px-3 py-1.5 rounded-lg shadow-inner shadow-black/60 min-w-[46px] sm:min-w-[54px] text-center ring-1 ring-orange-500/30">
                <span className="text-xl sm:text-2xl font-black text-orange-400">
                  {pad(timeLeft.seconds)}
                </span>
              </div>
              <span className="text-[10px] text-slate-400 uppercase tracking-wider font-sans mt-0.5 font-medium">Secs</span>
            </div>
          </div>

          {/* Quick claim button */}
          <button
            onClick={onBuyClick}
            className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-300 hover:to-orange-300 rounded-lg shadow-sm hover:shadow-amber-500/30 transition-all cursor-pointer whitespace-nowrap"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Claim 40% Bonus
          </button>
        </div>

      </div>

      {/* Subtle live urgency progress bar */}
      <div className="max-w-6xl mx-auto mt-2.5 sm:mt-2">
        <div className="flex items-center justify-between text-[11px] text-amber-200/90 mb-1">
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3 text-amber-400" />
            Stage 1 Discount Allocation
          </span>
          <span className="font-mono font-bold text-amber-300">89.4% Claimed</span>
        </div>
        <div className="w-full h-1.5 bg-slate-900/80 rounded-full overflow-hidden border border-amber-500/20">
          <div 
            className="h-full bg-gradient-to-r from-amber-500 via-orange-500 to-amber-300 rounded-full transition-all duration-1000"
            style={{ width: '89.4%' }}
          />
        </div>
      </div>
    </div>
  );
}
