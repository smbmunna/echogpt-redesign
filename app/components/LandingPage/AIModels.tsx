"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Brain,
  Terminal,
  Code2,
  Flame,
  Globe,
} from "lucide-react";

const FEATURED_MODELS = [
  {
    id: "deepseek-v4-pro",
    name: "DeepSeek V4 Pro",
    provider: "DeepSeek",
    badge: "Limited",
    icon: <Brain className="size-4 text-purple-400" />,
  },
  {
    id: "gpt-5-6-sol",
    name: "GPT-5.6 Sol",
    provider: "OpenAI",
    badge: "Flagship",
    icon: <Brain className="size-4 text-rose-400" />,
  },
  {
    id: "gemini-3-8-flash",
    name: "Gemini 3.8 Flash",
    provider: "Google",
    badge: "1M Context",
    icon: <Sparkles className="size-4 text-blue-400" />,
  },
  {
    id: "kimi-k3",
    name: "Kimi K3",
    provider: "Moonshot",
    badge: "Agentic",
    icon: <Brain className="size-4 text-teal-400" />,
  },
  {
    id: "qwen-3-8-max",
    name: "Qwen 3.8 Max",
    provider: "Alibaba",
    badge: "Pro",
    icon: <Flame className="size-4 text-red-500" />,
  },
  {
    id: "grok-4-6",
    name: "Grok 4.6",
    provider: "xAI",
    badge: "Real-time",
    icon: <Globe className="size-4 text-slate-100" />,
  },
  {
    id: "kimi-k2-7-code",
    name: "Kimi K2.7 Code",
    provider: "Moonshot",
    badge: "Coding",
    icon: <Code2 className="size-4 text-emerald-400" />,
  },
  {
    id: "glm-5-3",
    name: "GLM-5.3",
    provider: "Zhipu AI",
    badge: "Multilingual",
    icon: <Terminal className="size-4 text-indigo-400" />,
  },
];

export default function ModelLogosStrip() {
  // Combine array twice to allow smooth looping transition
  const marqueeItems = [...FEATURED_MODELS, ...FEATURED_MODELS];

  return (
    <section className="w-full py-10 bg-[var(--surface)]/50 border-y border-[var(--border)] overflow-hidden relative">
      {/* Edge Fading Gradient Mask */}
      <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[var(--background)] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[var(--background)] to-transparent z-10 pointer-events-none" />

      {/* Header Label Fade-in */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 mb-6 text-center"
      >
        <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">
          Powered by 40+ Flagship & Specialized AI Models
        </p>
      </motion.div>

      {/* Framer Motion Infinite Loop Track */}
      <div className="flex w-full overflow-hidden">
        <motion.div
          className="flex gap-4 sm:gap-6 shrink-0 pr-4 sm:pr-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {marqueeItems.map((model, index) => (
            <motion.div
              key={`${model.id}-${index}`}
              whileHover={{ y: -2, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--primary)] transition-colors shadow-sm shrink-0 cursor-default"
            >
              <div className="p-1.5 rounded-lg bg-[var(--surface-elevated)] border border-[var(--border)]">
                {model.icon}
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-[var(--foreground)] flex items-center gap-1.5">
                  <span>{model.name}</span>
                  <span className="text-[10px] font-normal px-1.5 py-0.5 rounded-md bg-[var(--surface-elevated)] border border-[var(--border)] text-[var(--muted)]">
                    {model.badge}
                  </span>
                </div>
                <div className="text-[10px] text-[var(--muted)]">
                  {model.provider}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}