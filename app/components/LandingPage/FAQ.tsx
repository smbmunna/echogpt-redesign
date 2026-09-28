import { Minus, Plus } from "lucide-react";

interface FAQProps {
  openFaq: number | null;
  isOpen: number | null;
  setOpenFaq: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function FAQ({ openFaq, setOpenFaq }: FAQProps) {
  return (
    <section id="faq" className="py-24 px-4 max-w-4xl mx-auto space-y-12">
      <div className="text-center space-y-3">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Frequently Asked Questions
        </h2>
        <p className="text-sm text-[var(--muted)]">
          Everything you need to know about models, security, and billing.
        </p>
      </div>

      <div className="space-y-3">
        {[
          {
            q: "Which models are included in EchoGPT?",
            a: "EchoGPT unifies over 40 top-tier models including DeepSeek V4 Pro, GPT-5.6 Sol, Qwen 3.8 Max, Kimi K3, Gemini 3.8 Flash, and GLM-5.3.",
          },
          {
            q: "Is my chat data private and secure?",
            a: "Yes. EchoGPT uses zero-retention data policies. Your queries are never used to train third-party public models.",
          },
          {
            q: "Can I upload large files and code repositories?",
            a: "Yes! Models with up to 1M token context windows allow you to attach multi-page documents, codebases, and data spreadsheets directly in the composer.",
          },
          {
            q: "Can I switch plans or cancel anytime?",
            a: "Absolutely. You can upgrade, downgrade, or cancel your subscription at any time directly from your user profile settings.",
          },
        ].map((item, idx) => {
          const isOpen = openFaq === idx;
          return (
            <div
              key={idx}
              className="rounded-2xl bg-[var(--surface)] border border-[var(--border)] overflow-hidden transition-colors"
            >
              <button
                onClick={() => setOpenFaq(isOpen ? null : idx)}
                className="w-full text-left p-5 flex items-center justify-between text-sm font-semibold text-[var(--foreground)]"
              >
                <span>{item.q}</span>
                {isOpen ? (
                  <Minus size={16} className="text-[var(--primary)] shrink-0" />
                ) : (
                  <Plus size={16} className="text-[var(--muted)] shrink-0" />
                )}
              </button>
              {isOpen && (
                <div className="px-5 pb-5 text-xs sm:text-sm text-[var(--muted)] leading-relaxed border-t border-[var(--border)]/50 pt-3">
                  {item.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
