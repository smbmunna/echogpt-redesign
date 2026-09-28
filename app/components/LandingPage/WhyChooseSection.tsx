"use client";
import { motion } from "framer-motion";
import {
  Wallet,
  Zap,
  Layers,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const BENEFITS = [
  {
    icon: <Wallet className="size-6 text-[var(--primary)]" />,
    badge: "Cost Efficiency",
    title: "Cut your monthly AI bill by up to 80%",
    description:
      "Stop paying $20/month across OpenAI, Claude, Gemini, and DeepSeek individually. Access every flagship and specialized model in one unified, flat-rate workspace.",
    highlights: ["Single affordable subscription", "No hidden API token markups", "Free tier available"],
  },
  {
    icon: <Zap className="size-6 text-amber-400" />,
    badge: "Zero Context Switching",
    title: "Never re-type your prompt into another tab",
    description:
      "Switch models instantly inside the same conversation thread. Test how DeepSeek V4 handles code, compare it with GPT-5's logic, and let Gemini summarize—all in one place.",
    highlights: ["Instant model toggling", "Unified chat memory", "Side-by-side comparison"],
  },
  {
    icon: <Layers className="size-6 text-purple-400" />,
    badge: "Smart Task Routing",
    title: "Always get the right model for the exact job",
    description:
      "Don't waste heavyweight models on simple edits or budget models on architecture. EchoGPT automatically pairs your request with the absolute best engine for speed and depth.",
    highlights: ["Coding-optimized engines", "1M+ token document reading", "Sub-second fast tiers"],
  },
  {
    icon: <ShieldCheck className="size-6 text-emerald-400" />,
    badge: "Privacy & Control",
    title: "Your data stays yours — zero training on chats",
    description:
      "Enjoy enterprise-grade data privacy with end-to-end transport encryption. Your code, documents, and creative ideas are never fed back into public LLM training datasets.",
    highlights: ["Zero data retention policies", "Encrypted transport", "SOC-2 level standards"],
  },
];

export default function WhyChooseSection() {
  return (
    <section className="relative py-20 lg:py-32 px-4 sm:px-6 overflow-hidden bg-[var(--background)]">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[var(--primary)]/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--surface-elevated)] border border-[var(--border)] text-xs font-medium text-[var(--primary)]"
          >
            <span>Why EchoGPT</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--foreground)]"
          >
            Designed for outcomes, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] via-purple-400 to-indigo-400">
              built to accelerate your workflow
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-[var(--muted)] leading-relaxed"
          >
            Stop wrestling with fragmented tools and redundant bills. Experience a workspace engineered around your productivity.
          </motion.p>
        </div>

        {/* 2x2 Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {BENEFITS.map((benefit, index) => (
            <motion.div
              key={benefit.badge}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="group relative rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8 flex flex-col justify-between hover:border-[var(--primary)]/50 transition-all shadow-sm hover:shadow-xl hover:shadow-[var(--primary)]/5"
            >
              <div className="space-y-4">
                {/* Top Icon & Badge */}
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border)] group-hover:scale-105 transition-transform">
                    {benefit.icon}
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[var(--surface-elevated)] border border-[var(--border)] text-[var(--muted)]">
                    {benefit.badge}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors leading-snug">
                  {benefit.title}
                </h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              {/* Checklist Highlights */}
              <div className="pt-6 mt-6 border-t border-[var(--border)] space-y-2">
                {benefit.highlights.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs text-[var(--foreground)] font-medium">
                    <CheckCircle2 size={14} className="text-[var(--primary)] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Callout Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="rounded-2xl border border-[var(--border)] bg-[var(--surface-elevated)] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left"
        >
          <div className="space-y-1">
            <h4 className="text-lg font-bold text-[var(--foreground)]">
              Ready to simplify your AI toolstack?
            </h4>
            <p className="text-sm text-[var(--muted)]">
              Join over 15,000 developers and creators getting more done in less time.
            </p>
          </div>

          <a
            href="/chat"
            className="px-6 py-3 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white font-semibold text-sm transition-all shadow-md shadow-[var(--primary)]/20 shrink-0 flex items-center gap-2 group"
          >
            <span>Start Building for Free</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}