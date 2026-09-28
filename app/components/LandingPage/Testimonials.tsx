"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "EchoGPT replaced three separate $20/mo subscriptions for my team. Being able to toggle between DeepSeek for heavy coding and Claude for docs in a single thread is an absolute game changer.",
    author: "Alex Rivera",
    role: "Senior Full-Stack Engineer",
    company: "Veloce Labs",
    avatar: "AR",
    rating: 5,
  },
  {
    quote:
      "I used to lose so much context copying and pasting prompts between different AI tabs. Now I just switch models inline and keep my flow state uninterrupted.",
    author: "Sarah Chen",
    role: "Product Designer & Strategist",
    company: "Studio Next",
    avatar: "SC",
    rating: 5,
  },
  {
    quote:
      "The smart routing alone saved us hundreds in API credits last month. It automatically picks the right model tier for the task so we never overpay for simple queries.",
    author: "Marcus Vance",
    role: "Technical Co-Founder",
    company: "HyperScale AI",
    avatar: "MV",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-20 lg:py-28 px-4 sm:px-6 bg-[var(--surface)]/30 border-t border-[var(--border)] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[250px] bg-[var(--primary)]/5 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--surface-elevated)] border border-[var(--border)] text-xs font-medium text-[var(--primary)]"
          >
            <span>Loved by Builders</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--foreground)]"
          >
            Trusted by developers & creators
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base text-[var(--muted)]"
          >
            Here is how switching to a unified AI workspace transformed their daily workflows.
          </motion.p>
        </div>

        {/* Testimonials 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--primary)]/40 transition-all shadow-sm hover:shadow-lg hover:shadow-[var(--primary)]/5"
            >
              <div className="space-y-4">
                {/* Rating & Quote Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="size-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <Quote className="size-6 text-[var(--muted)]/30" />
                </div>

                {/* Quote Text */}
                <p className="text-sm text-[var(--foreground)] leading-relaxed italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </div>

              {/* Author Details */}
              <div className="flex items-center gap-3 pt-6 mt-6 border-t border-[var(--border)]">
                <div className="size-10 rounded-full bg-gradient-to-br from-[var(--primary)] to-purple-600 flex items-center justify-center text-xs font-bold text-white shrink-0 shadow-sm">
                  {testimonial.avatar}
                </div>
                <div className="text-left overflow-hidden">
                  <div className="text-sm font-bold text-[var(--foreground)] truncate">
                    {testimonial.author}
                  </div>
                  <div className="text-xs text-[var(--muted)] truncate">
                    {testimonial.role} • <span className="text-[var(--foreground)]/80 font-medium">{testimonial.company}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}