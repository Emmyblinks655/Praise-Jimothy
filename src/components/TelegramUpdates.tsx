import { useState } from 'react';
import { Send, Check, Copy, ExternalLink, ShieldCheck, Users, MessageSquareText, Sparkles, Pin } from 'lucide-react';
import { playCoinSound, playSuccessChime } from '../utils/sound';

export default function TelegramUpdates() {
  const TELEGRAM_URL = "https://t.me/+-2moIDW3-6k1MjU0";
  const [copiedTg, setCopiedTg] = useState(false);
  const [reactions, setReactions] = useState<{ [key: string]: number }>({
    'post1_fire': 384,
    'post1_rocket': 512,
    'post1_raccoon': 679,
    'post2_fire': 247,
    'post2_rocket': 418,
    'post3_fire': 195,
    'post3_heart': 310
  });

  const handleCopyTgLink = async () => {
    try {
      playSuccessChime();
      await navigator.clipboard.writeText(TELEGRAM_URL);
      setCopiedTg(true);
      setTimeout(() => setCopiedTg(false), 2500);
    } catch {
      setCopiedTg(true);
      setTimeout(() => setCopiedTg(false), 2500);
    }
  };

  const handleAddReaction = (key: string) => {
    playCoinSound();
    setReactions((prev) => ({
      ...prev,
      [key]: prev[key] + 1
    }));
  };

  const telegramPosts = [
    {
      id: 'post1',
      isPinned: true,
      sender: 'Jimothy Admin',
      time: 'Pinned Announcement',
      content: '🚨 OFFICIAL $JIMOTHY LAUNCH IS LIVE! Liquidity is permanently locked, mint authority is renounced, and buy/sell tax is strictly 0%. The neckless revolution has officially begun!',
      reactions: [
        { key: 'post1_raccoon', emoji: '🦝', countKey: 'post1_raccoon' },
        { key: 'post1_rocket', emoji: '🚀', countKey: 'post1_rocket' },
        { key: 'post1_fire', emoji: '🔥', countKey: 'post1_fire' },
      ]
    },
    {
      id: 'post2',
      isPinned: false,
      sender: 'Jimothy Bot',
      time: '18 minutes ago',
      content: '⚡ PRESALE STAGE 1 ALERT: 89.4% of the discount allocation has been claimed! The 40% extra bonus tokens will automatically expire when this round finishes.',
      reactions: [
        { key: 'post2_fire', emoji: '🔥', countKey: 'post2_fire' },
        { key: 'post2_rocket', emoji: '🚀', countKey: 'post2_rocket' },
      ]
    },
    {
      id: 'post3',
      isPinned: false,
      sender: 'Community Voice',
      time: '1 hour ago',
      content: '🎉 DexScreener fast-track banner & CoinGecko listing review have been submitted! Join the voice chat to celebrate with fellow neckless holders.',
      reactions: [
        { key: 'post3_fire', emoji: '🔥', countKey: 'post3_fire' },
        { key: 'post3_heart', emoji: '❤️', countKey: 'post3_heart' },
      ]
    }
  ];

  return (
    <div className="w-full mb-12 bg-slate-900/80 border border-sky-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
      {/* Background ambient telegram blue glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-sky-500/20 border border-sky-400/40 flex items-center justify-center text-sky-400 shrink-0 shadow-inner">
            {/* Telegram Airplane SVG */}
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-sky-400">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.52 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .32z"/>
            </svg>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl sm:text-2xl font-black text-white font-display">
                Telegram Live Community Updates
              </h3>
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-md">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
              Real-time announcements and verified developer chat from the official $JIMOTHY channel.
            </p>
          </div>
        </div>

        {/* Member proof & Quick Join Actions */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex flex-col text-right">
            <span className="text-xs font-mono font-bold text-white flex items-center justify-end gap-1">
              <Users className="w-3.5 h-3.5 text-sky-400" /> 5,280+ Raccoons
            </span>
            <span className="text-[11px] text-slate-400">1,410 currently online</span>
          </div>

          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playCoinSound()}
            className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold text-xs sm:text-sm transition-all shadow-lg hover:shadow-sky-500/25 flex items-center gap-2 cursor-pointer whitespace-nowrap"
          >
            <span>Open Channel</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={handleCopyTgLink}
            className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
            title="Copy Telegram Link"
          >
            {copiedTg ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Live Telegram Message Stream */}
      <div className="mt-6 space-y-3.5">
        {telegramPosts.map((post) => (
          <div
            key={post.id}
            className={`rounded-2xl p-4 sm:p-5 border transition-all ${
              post.isPinned
                ? 'bg-gradient-to-r from-sky-950/40 to-slate-900/90 border-sky-500/40'
                : 'bg-slate-900/90 border-slate-800/80 hover:border-slate-700'
            }`}
          >
            {/* Post Header */}
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-sky-500/30 text-sky-300 flex items-center justify-center text-xs font-bold font-mono">
                  J
                </div>
                <span className="text-xs font-bold text-white">
                  {post.sender}
                </span>
                {post.isPinned && (
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-amber-300 bg-amber-500/20 px-2 py-0.5 rounded-md border border-amber-500/30">
                    <Pin className="w-3 h-3" /> Pinned
                  </span>
                )}
              </div>
              <span className="text-[11px] text-slate-400 font-mono">
                {post.time}
              </span>
            </div>

            {/* Post Body */}
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans mb-3.5">
              {post.content}
            </p>

            {/* Interactive Reactions */}
            <div className="flex flex-wrap items-center gap-2">
              {post.reactions.map((r) => (
                <button
                  key={r.key}
                  onClick={() => handleAddReaction(r.countKey)}
                  className="px-2.5 py-1 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/60 text-xs font-mono text-slate-300 hover:text-white transition-all cursor-pointer flex items-center gap-1.5 active:scale-95"
                >
                  <span>{r.emoji}</span>
                  <span className="font-bold">{reactions[r.countKey]}</span>
                </button>
              ))}

              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto text-xs text-sky-400 hover:text-sky-300 font-semibold flex items-center gap-1"
              >
                <span>View on Telegram</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Trust reassurance banner */}
      <div className="mt-6 pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
        <div className="flex items-center gap-2 text-emerald-400 font-medium">
          <ShieldCheck className="w-4 h-4" />
          <span>Official Link Verified: t.me/+-2moIDW3-6k1MjU0</span>
        </div>
        <span className="text-slate-400">
          Admins will never DM you first. Always verify official links.
        </span>
      </div>
    </div>
  );
}
