import { Check } from "lucide-react";
import Link from "next/link";

type billing = "monthly" | "yearly";

interface PricingProps {
  billingCycle: billing;
  setBillingCycle: React.Dispatch<React.SetStateAction<billing>>;
}

export default function Pricing({
  billingCycle,
  setBillingCycle,
}: PricingProps) {
  return (
    <section
      id="pricing"
      className="py-24 px-4 bg-[var(--surface)]/30 border-t border-[var(--border)]"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Flexible Plans for Every Creator
          </h2>
          <p className="text-sm text-[var(--muted)]">
            Choose the plan that fits your workflow. Cancel anytime.
          </p>

          {/* Monthly / Yearly Toggle */}
          <div className="flex items-center justify-center gap-3 pt-2">
            <span
              className={`text-xs font-semibold ${billingCycle === "monthly" ? "text-[var(--foreground)]" : "text-[var(--muted)]"}`}
            >
              Monthly
            </span>
            <button
              onClick={() =>
                setBillingCycle(
                  billingCycle === "monthly" ? "yearly" : "monthly",
                )
              }
              className="w-12 h-6 rounded-full bg-[var(--surface-elevated)] border border-[var(--border)] p-1 flex items-center transition-colors"
            >
              <div
                className={`w-4 h-4 rounded-full bg-[var(--primary)] transition-transform ${billingCycle === "yearly" ? "translate-x-6" : "translate-x-0"}`}
              />
            </button>
            <span
              className={`text-xs font-semibold flex items-center gap-1.5 ${billingCycle === "yearly" ? "text-[var(--foreground)]" : "text-[var(--muted)]"}`}
            >
              Yearly{" "}
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-[var(--primary)]/20 text-[var(--primary)] font-bold">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Free Tier */}
          <div className="p-8 rounded-2xl bg-[var(--surface)] border border-[var(--border)] space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Starter</h3>
              <div className="text-3xl font-extrabold">
                $0{" "}
                <span className="text-xs font-normal text-[var(--muted)]">
                  / forever
                </span>
              </div>
              <p className="text-xs text-[var(--muted)]">
                Ideal for casual queries and exploring EchoGPT.
              </p>
              <ul className="space-y-2.5 text-xs text-[var(--muted)] pt-4">
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-[var(--primary)]" /> Access
                  to EchoGPT Standard
                </li>
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-[var(--primary)]" /> 50
                  messages / day
                </li>
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-[var(--primary)]" /> Basic
                  document attachments
                </li>
              </ul>
            </div>
            <Link
              href="/chat"
              className="w-full py-2.5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border)] hover:bg-[var(--border)] text-xs font-semibold text-center transition-colors"
            >
              Get Started Free
            </Link>
          </div>

          {/* Pro Tier (Featured) */}
          <div className="p-8 rounded-2xl bg-[var(--surface-elevated)] border-2 border-[var(--primary)] space-y-6 flex flex-col justify-between shadow-xl relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-[var(--primary)] text-white text-[10px] font-bold uppercase tracking-wider">
              Most Popular
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Pro Developer</h3>
              <div className="text-3xl font-extrabold">
                {billingCycle === "yearly" ? "$16" : "$20"}{" "}
                <span className="text-xs font-normal text-[var(--muted)]">
                  / month
                </span>
              </div>
              <p className="text-xs text-[var(--muted)]">
                For developers and power users requiring flagship models.
              </p>
              <ul className="space-y-2.5 text-xs text-[var(--foreground)] pt-4">
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-[var(--primary)]" />{" "}
                  Unlimited access to 40+ models
                </li>
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-[var(--primary)]" /> DeepSeek
                  V4 & GPT-5.6 Sol
                </li>
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-[var(--primary)]" /> 1M Token
                  Context Window
                </li>
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-[var(--primary)]" /> Priority
                  processing speed
                </li>
              </ul>
            </div>
            <Link
              href="/chat"
              className="w-full py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white text-xs font-semibold text-center transition-colors shadow-md"
            >
              Upgrade to Pro
            </Link>
          </div>

          {/* Team Tier */}
          <div className="p-8 rounded-2xl bg-[var(--surface)] border border-[var(--border)] space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Team / Agency</h3>
              <div className="text-3xl font-extrabold">
                {billingCycle === "yearly" ? "$40" : "$48"}{" "}
                <span className="text-xs font-normal text-[var(--muted)]">
                  / user / month
                </span>
              </div>
              <p className="text-xs text-[var(--muted)]">
                Collaborative AI workspace for high-performing engineering
                teams.
              </p>
              <ul className="space-y-2.5 text-xs text-[var(--muted)] pt-4">
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-[var(--primary)]" />{" "}
                  Everything in Pro
                </li>
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-[var(--primary)]" /> Shared
                  prompt library
                </li>
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-[var(--primary)]" />{" "}
                  Dedicated SSO & Admin controls
                </li>
              </ul>
            </div>
            <Link
              href="/chat"
              className="w-full py-2.5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border)] hover:bg-[var(--border)] text-xs font-semibold text-center transition-colors"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
