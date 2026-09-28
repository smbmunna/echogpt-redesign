import { Brain, Cpu, Layers, Shield, Terminal, Zap } from "lucide-react";


export type TabId = "speed" | "reasoning" | "context";

interface FeatureItem {
  id: TabId;
  label: string;
  icon: React.ReactNode;
}

interface FeaturesProps{
    setActiveTab: React.Dispatch<React.SetStateAction<TabId>>; 
    activeTab: TabId; 
}

const TABS_CONFIG: FeatureItem[] = [
  { id: "speed", label: "Ultra-Fast Execution", icon: <Zap size={16} /> },
  { id: "reasoning", label: "Complex Reasoning", icon: <Brain size={16} /> },
  { id: "context", label: "1M Token Context", icon: <Layers size={16} /> },
];


export default function Features({activeTab, setActiveTab}: FeaturesProps){

    return (
        <section id="features" className="py-24 px-4 max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Engineered for Unmatched Productivity</h2>
          <p className="text-sm text-[var(--muted)] max-w-xl mx-auto">Everything you need to prompt, iterate, and build without switching browser tabs.</p>
        </div>

        {/* Tabbed Feature Explorer */}
        <div className="flex justify-center gap-2 sm:gap-4 border-b border-[var(--border)] pb-4">
          {TABS_CONFIG.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === tab.id
                  ? "bg-[var(--primary)] text-white shadow-md"
                  : "text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--surface-elevated)]"
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)] space-y-4 hover:border-[var(--primary)] transition-colors">
            <div className="p-3 rounded-xl bg-[var(--primary)]/10 text-[var(--primary)] w-fit">
              <Cpu size={20} />
            </div>
            <h3 className="text-lg font-bold">40+ AI Models Unified</h3>
            <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
              Access GPT-5.6, Claude, Gemini 3.8, DeepSeek V4, and Qwen in a single unified conversation interface.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)] space-y-4 hover:border-[var(--primary)] transition-colors">
            <div className="p-3 rounded-xl bg-[var(--primary)]/10 text-[var(--primary)] w-fit">
              <Terminal size={20} />
            </div>
            <h3 className="text-lg font-bold">Code Repository Analysis</h3>
            <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
              Upload whole codebases or multi-page documents with support for 1M token context windows.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)] space-y-4 hover:border-[var(--primary)] transition-colors">
            <div className="p-3 rounded-xl bg-[var(--primary)]/10 text-[var(--primary)] w-fit">
              <Shield size={20} />
            </div>
            <h3 className="text-lg font-bold">Private & Encrypted</h3>
            <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
              Your conversations are never trained on. Enterprise-grade security ensures zero data retention.
            </p>
          </div>
        </div>
      </section>
    )
}