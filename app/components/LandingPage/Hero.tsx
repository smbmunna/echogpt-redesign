"use client";

import React from "react";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  Star,
  MessageSquare,
  Bot,
  Zap,
  Code2,
  Terminal,
  Cpu,
  Layers,
  Paperclip,
  ArrowUp,
  Sliders,
  CheckCircle2,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-16 pb-20 lg:pt-28 lg:pb-32 px-4 sm:px-6">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[var(--primary)]/15 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-purple-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto space-y-12 lg:space-y-16 relative z-10">
        
        {/* --- TOP: HEADLINE & CTAS --- */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--surface-elevated)] border border-[var(--border)] text-xs font-medium text-[var(--foreground)] shadow-sm">
            <Sparkles className="size-3.5 text-[var(--primary)]" />
            <span>Next-Gen Multi-Model AI Interface</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[var(--foreground)] leading-[1.1]">
            Think faster. <br className="hidden sm:inline" />
            Build smarter with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] via-purple-400 to-indigo-400">
              EchoGPT
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-[var(--muted)] max-w-2xl mx-auto leading-relaxed">
            Unify 40+ leading AI models — from DeepSeek V4 and GPT-5 to Qwen 3.8
            and Gemini — inside one clean, lightning-fast workspace.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              href="/chat"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white font-semibold text-sm transition-all shadow-lg shadow-[var(--primary)]/25 active:scale-95 flex items-center justify-center gap-2"
            >
              <span>Start Free Trial</span>
              <ArrowRight size={16} />
            </Link>

            <a
              href="#demo"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[var(--surface-elevated)] hover:bg-[var(--surface)] text-[var(--foreground)] border border-[var(--border)] font-semibold text-sm transition-all flex items-center justify-center gap-2"
            >
              <span>View Interactive Demo</span>
            </a>
          </div>

          {/* Social Proof */}
          <div className="pt-4 flex items-center justify-center gap-4 sm:gap-6 text-xs text-[var(--muted)]">
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="fill-amber-400" />
              ))}
            </div>
            <span>Trusted by 15,000+ developers & creators worldwide</span>
          </div>
        </div>

       
        

      </div>
    </section>
  );
}