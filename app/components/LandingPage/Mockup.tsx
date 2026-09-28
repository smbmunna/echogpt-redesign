import {
  ArrowUp,
  Bot,
  Cpu,
  MessageSquare,
  Paperclip,
  Sliders,
  Zap,
} from "lucide-react";

export default function () {
  return (
    <div className="relative mx-auto max-w-5xl rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-2 sm:p-3 shadow-2xl shadow-black/20 backdrop-blur-xl">
      {/* Window Chrome Header */}
      <div className="flex items-center justify-between px-3 py-2 border-b border-[var(--border)] bg-[var(--surface-elevated)]/50 rounded-t-xl">
        <div className="flex items-center gap-2">
          <span className="size-3 rounded-full bg-red-500/80 inline-block" />
          <span className="size-3 rounded-full bg-amber-500/80 inline-block" />
          <span className="size-3 rounded-full bg-green-500/80 inline-block" />
        </div>

        <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-[var(--background)] border border-[var(--border)] text-[11px] text-[var(--muted)] font-mono">
          <Zap size={12} className="text-[var(--primary)]" />
          <span>echogpt.app/workspace</span>
        </div>

        <div className="hidden sm:flex items-center gap-2 text-[11px] text-[var(--muted)]">
          <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>DeepSeek V4 Active</span>
        </div>
      </div>

      {/* Inner UI Window Content */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-0 rounded-b-xl overflow-hidden bg-[var(--background)] min-h-[380px] sm:min-h-[440px]">
        {/* Sidebar Mock (Hidden on small mobile) */}
        <div className="hidden md:flex md:col-span-3 border-r border-[var(--border)] bg-[var(--surface)]/30 p-3 flex-col justify-between text-xs">
          <div className="space-y-3">
            <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg bg-[var(--surface-elevated)] border border-[var(--border)] font-medium text-[var(--foreground)]">
              <MessageSquare size={14} className="text-[var(--primary)]" />
              <span className="truncate">New Conversation</span>
            </div>

            <div className="space-y-1 text-[var(--muted)]">
              <div className="px-2 py-1 text-[10px] uppercase font-bold tracking-wider text-[var(--muted)]/70">
                Recent
              </div>
              <div className="px-2 py-1.5 rounded hover:bg-[var(--surface-elevated)] text-[var(--foreground)] truncate cursor-pointer font-medium">
                Optimize SQL Stored Proc
              </div>
              <div className="px-2 py-1.5 rounded hover:bg-[var(--surface-elevated)] truncate cursor-pointer">
                GSAP Hero Section Animation
              </div>
              <div className="px-2 py-1.5 rounded hover:bg-[var(--surface-elevated)] truncate cursor-pointer">
                React Hook Form vs Zod
              </div>
            </div>
          </div>

          {/* Model Selector badge */}
          <div className="p-2.5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border)] space-y-1.5">
            <div className="flex items-center justify-between text-[11px] text-[var(--muted)]">
              <span>Selected Model</span>
              <Sliders size={12} />
            </div>
            <div className="font-semibold text-[var(--foreground)] flex items-center gap-1.5 text-xs">
              <Cpu size={13} className="text-[var(--primary)]" />
              <span>DeepSeek V4 Pro</span>
            </div>
          </div>
        </div>

        {/* Main Chat Area */}
        <div className="col-span-1 md:col-span-9 p-4 sm:p-6 flex flex-col justify-between space-y-4">
          {/* Messages Thread */}
          <div className="space-y-4 text-xs sm:text-sm">
            {/* User Message */}
            <div className="flex items-start gap-3 justify-end">
              <div className="bg-[var(--primary)] text-white px-4 py-2.5 rounded-2xl rounded-tr-none max-w-[85%] sm:max-w-[75%] shadow-sm">
                Write a performant React hook for auto-resizing textareas and
                handling attachment uploads.
              </div>
            </div>

            {/* AI Assistant Message */}
            <div className="flex items-start gap-3">
              <div className="size-7 rounded-lg bg-[var(--primary)]/15 border border-[var(--primary)]/30 flex items-center justify-center text-[var(--primary)] shrink-0">
                <Bot size={16} />
              </div>
              <div className="bg-[var(--surface)] border border-[var(--border)] text-[var(--foreground)] p-4 rounded-2xl rounded-tl-none max-w-[90%] sm:max-w-[85%] space-y-2 shadow-sm">
                <div className="flex items-center gap-2 text-[11px] text-[var(--muted)] pb-1 border-b border-[var(--border)]">
                  <span className="font-semibold text-[var(--primary)]">
                    DeepSeek V4 Pro
                  </span>
                  <span>•</span>
                  <span>0.12s response time</span>
                </div>
                <p className="leading-relaxed">
                  Here is an optimized hook using{" "}
                  <code className="px-1 py-0.5 rounded bg-[var(--surface-elevated)] font-mono text-xs">
                    useRef
                  </code>{" "}
                  and{" "}
                  <code className="px-1 py-0.5 rounded bg-[var(--surface-elevated)] font-mono text-xs">
                    useEffect
                  </code>{" "}
                  that calculates{" "}
                  <code className="px-1 py-0.5 rounded bg-[var(--surface-elevated)] font-mono text-xs">
                    scrollHeight
                  </code>{" "}
                  dynamically:
                </p>

                <div className="bg-[var(--background)] p-3 rounded-xl border border-[var(--border)] font-mono text-[11px] sm:text-xs text-purple-300 overflow-x-auto">
                  <div className="text-[var(--muted)]">
                    // Recalculate height on value change
                  </div>
                  <div>useEffect(() =&gt; &#123;</div>
                  <div className="pl-4">if (ref.current) &#123;</div>
                  <div className="pl-8">ref.current.style.height = 'auto';</div>
                  <div className="pl-8">
                    ref.current.style.height =
                    `$&#123;ref.current.scrollHeight&#125;px`;
                  </div>
                  <div className="pl-4">&#125;</div>
                  <div>&#125;, [value]);</div>
                </div>
              </div>
            </div>
          </div>

          {/* Composer Preview Bar */}
          <div className="rounded-xl bg-[var(--surface)] border border-[var(--border)] p-2.5 sm:p-3 flex items-center gap-3 shadow-inner">
            <Paperclip
              size={16}
              className="text-[var(--muted)] cursor-pointer hover:text-[var(--foreground)]"
            />
            <input
              type="text"
              readOnly
              value="Can you refactor this hook to support maximum height limits?"
              className="bg-transparent border-none text-xs sm:text-sm text-[var(--foreground)] focus:outline-none flex-1 cursor-default"
            />
            <button className="p-1.5 rounded-lg bg-[var(--primary)] text-white shadow-sm">
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
