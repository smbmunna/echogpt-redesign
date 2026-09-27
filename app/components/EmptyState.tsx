"use client";

import React, { useState, useRef, useEffect, useMemo } from "react";
import {
  Paperclip,
  ArrowUp,
  Sparkles,
  Atom,
  Code2,
  FileText,
  Lightbulb,
  X,
  File,
  ChevronDown,
  Search,
  Check,
  Zap,
  Brain,
  Cpu,
  Globe,
  Flame,
  Terminal,
} from "lucide-react";

export interface AIModel {
  id: string;
  name: string;
  subtitle?: string;
  description: string;
  category: "Standard" | "Advanced Models";
  badge?: "Limited" | "Pro" | "Free" | "Fast" | "Reasoning";
  icon: React.ReactNode;
}

export const ALL_MODELS: AIModel[] = [
  // --- Standard Models ---
  {
    id: "echogpt",
    name: "EchoGPT",
    description:
      "Interact with EchoGPT, an AI that reflects your input for quick ideas, summaries, or feedback. Perfect for brainstorming or rapid dialogue.",
    category: "Standard",
    badge: "Free",
    icon: <Sparkles className="size-4 text-[var(--primary)]" />,
  },
  {
    id: "nemotron-3-ultra",
    name: "Nemotron 3 Ultra",
    subtitle: "Llama 3.1 Nemotron 70B Instruct",
    description: "Llama 3.1 Nemotron 70B Instruct.",
    category: "Standard",
    badge: "Reasoning",
    icon: <Cpu className="size-4 text-emerald-500" />,
  },
  {
    id: "longcat-2",
    name: "LongCat 2.0",
    description:
      "LongCat 2.0 from Meituan is free to use, with a 1M token context for long documents and extended chats.",
    category: "Standard",
    badge: "Free",
    icon: <Globe className="size-4 text-blue-500" />,
  },

  // --- Advanced Models ---
  {
    id: "deepseek-v4-pro",
    name: "DeepSeek V4 Pro",
    description:
      "DeepSeek specializes in advanced data exploration, leveraging AI to deliver accurate, insightful, and efficient solutions for complex analysis.",
    category: "Advanced Models",
    badge: "Limited",
    icon: <Brain className="size-4 text-purple-400" />,
  },
  {
    id: "glm-5-2",
    name: "GLM-5.2",
    description:
      "GLM-5.2 offers strong multilingual reasoning and coding across a 1M token context at a low cost per token.",
    category: "Advanced Models",
    badge: "Limited",
    icon: <Terminal className="size-4 text-indigo-400" />,
  },
  {
    id: "deepseek-v4-flash",
    name: "DeepSeek V4 Flash",
    description:
      "DeepSeek V4 Flash answers quickly over a 1M token context, tuned for rapid iteration at very low cost.",
    category: "Advanced Models",
    badge: "Limited",
    icon: <Zap className="size-4 text-amber-400" />,
  },
  {
    id: "tencent-hy3pro",
    name: "Tencent Hy3Pro",
    description:
      "Tencent Hunyuan 3 provides fast, budget-friendly responses for everyday chat, drafting, and summarisation.",
    category: "Advanced Models",
    badge: "Pro",
    icon: <Sparkles className="size-4 text-blue-400" />,
  },
  {
    id: "mimo-v2-5-pro",
    name: "MiMo V2.5 Pro",
    description:
      "MiMo V2.5 Pro adds stronger reasoning to the MiMo line while staying inexpensive over a 1M token context.",
    category: "Advanced Models",
    badge: "Limited",
    icon: <Brain className="size-4 text-cyan-400" />,
  },
  {
    id: "qwen-3-7-plus",
    name: "Qwen 3.7 Plus",
    description:
      "Qwen 3.7 Plus gives near-flagship quality at a fraction of the cost for daily reasoning and drafting.",
    category: "Advanced Models",
    badge: "Limited",
    icon: <Flame className="size-4 text-orange-400" />,
  },
  {
    id: "gpt-5-6-sol",
    name: "GPT-5.6 Sol",
    description:
      "GPT-5.6 Sol delivers OpenAI's flagship reasoning with a 1M token context, ideal for long documents and demanding analysis.",
    category: "Advanced Models",
    badge: "Limited",
    icon: <Brain className="size-4 text-rose-400" />,
  },
  {
    id: "kimi-k2-7-code",
    name: "Kimi K2.7 Code",
    description:
      "Kimi K2.7 Code is built for software work — reading large repositories, writing code, and explaining changes.",
    category: "Advanced Models",
    badge: "Limited",
    icon: <Code2 className="size-4 text-emerald-400" />,
  },
  {
    id: "glm-5-3-flash",
    name: "GLM-5.3 Flash",
    description:
      "GLM-5.3 Flash is the fastest GLM tier, made for high-volume chat where latency matters most.",
    category: "Advanced Models",
    badge: "Limited",
    icon: <Zap className="size-4 text-amber-400" />,
  },
  {
    id: "qwen-3-8-27b",
    name: "Qwen 3.8 27B",
    description:
      "Qwen 3.8 27B balances speed and quality for general assistance, coding help, and structured output.",
    category: "Advanced Models",
    badge: "Limited",
    icon: <Cpu className="size-4 text-orange-400" />,
  },
  {
    id: "qwen-3-7-max",
    name: "Qwen 3.7 Max",
    description:
      "Qwen 3.7 Max is the top Qwen tier for complex reasoning, long-form writing, and detailed technical work.",
    category: "Advanced Models",
    badge: "Limited",
    icon: <Flame className="size-4 text-rose-500" />,
  },
  {
    id: "qwen-3-6-plus",
    name: "Qwen 3.6 Plus",
    description:
      "Qwen 3.6 Plus is a dependable general-purpose model for conversation, summarisation, and analysis.",
    category: "Advanced Models",
    badge: "Limited",
    icon: <Flame className="size-4 text-amber-500" />,
  },
  {
    id: "gemini-3-8-flash",
    name: "Gemini 3.8 Flash",
    description:
      "Gemini 3.8 Flash combines Google's multimodal strengths with fast responses across a 1M token context.",
    category: "Advanced Models",
    badge: "Limited",
    icon: <Sparkles className="size-4 text-blue-400" />,
  },
  {
    id: "kimi-k3",
    name: "Kimi K3",
    description:
      "Kimi K3 is Moonshot's flagship, built for deep reasoning and agentic work across a 1M token context.",
    category: "Advanced Models",
    badge: "Limited",
    icon: <Brain className="size-4 text-teal-400" />,
  },
  {
    id: "minimax-m3",
    name: "MiniMax M3",
    description:
      "MiniMax M3 handles long-context conversation and reasoning with an efficient price-to-quality balance.",
    category: "Advanced Models",
    badge: "Limited",
    icon: <Cpu className="size-4 text-violet-400" />,
  },
  {
    id: "gpt-5-5",
    name: "GPT-5.5",
    description:
      "Preview GPT’s powerful abilities with GPT-5.5, offering precise yet expansive answers in an accessible, versatile format.",
    category: "Advanced Models",
    badge: "Limited",
    icon: <Sparkles className="size-4 text-[var(--primary)]" />,
  },
  {
    id: "gpt-5-6-luna",
    name: "GPT-5.6 Luna",
    description:
      "GPT-5.6 Luna is the lightweight GPT-5.6 tier — quick, inexpensive, and capable across everyday tasks.",
    category: "Advanced Models",
    badge: "Limited",
    icon: <Zap className="size-4 text-sky-400" />,
  },
  {
    id: "grok-4-5",
    name: "Grok 4.5",
    description:
      "Grok 4.5 brings xAI's conversational style and current-events awareness to a 500K token context.",
    category: "Advanced Models",
    badge: "Limited",
    icon: <Globe className="size-4 text-slate-300" />,
  },
  {
    id: "grok-4-6",
    name: "Grok 4.6",
    description:
      "Grok 4.6 is the latest xAI release, improving reasoning and instruction following over Grok 4.5.",
    category: "Advanced Models",
    badge: "Limited",
    icon: <Globe className="size-4 text-slate-100" />,
  },
  {
    id: "gemini-3-7-flash",
    name: "Gemini 3.7 Flash",
    description:
      "Gemini 3.7 Flash pairs fast multimodal responses with prompt caching for repeated long contexts.",
    category: "Advanced Models",
    badge: "Limited",
    icon: <Zap className="size-4 text-blue-400" />,
  },
  {
    id: "gpt-5-4",
    name: "GPT-5.4",
    description:
      "Preview GPT’s powerful abilities with GPT-5.4, offering precise yet expansive answers in an accessible, versatile format.",
    category: "Advanced Models",
    badge: "Limited",
    icon: <Sparkles className="size-4 text-[var(--primary)]" />,
  },
  {
    id: "deepseek-v4-flash-vision",
    name: "DeepSeek V4 Flash Vision",
    description:
      "DeepSeek V4 Flash Vision is an experimental multimodal tier that reads images alongside text.",
    category: "Advanced Models",
    badge: "Limited",
    icon: <FileText className="size-4 text-purple-400" />,
  },
  {
    id: "deepseek-v4-flash-fast",
    name: "DeepSeek V4 Flash Fast",
    description:
      "DeepSeek V4 Flash Fast prioritises latency, returning answers sooner for interactive use.",
    category: "Advanced Models",
    badge: "Limited",
    icon: <Zap className="size-4 text-amber-400" />,
  },
  {
    id: "qwen-3-8-flash",
    name: "Qwen 3.8 Flash",
    description:
      "Qwen 3.8 Flash trades a little depth for speed, ideal for quick answers and high-volume chat.",
    category: "Advanced Models",
    badge: "Limited",
    icon: <Zap className="size-4 text-orange-400" />,
  },
  {
    id: "qwen-3-8-max",
    name: "Qwen 3.8 Max",
    description:
      "Qwen 3.8 Max is the latest Qwen flagship, strong at multi-step reasoning over very long context.",
    category: "Advanced Models",
    badge: "Limited",
    icon: <Flame className="size-4 text-red-500" />,
  },
  {
    id: "qwen-3-8-max-0902",
    name: "Qwen 3.8 Max 0902",
    description:
      "Qwen 3.8 Max 0902 is the dated flagship snapshot, pinned for reproducible results on long reasoning tasks.",
    category: "Advanced Models",
    badge: "Limited",
    icon: <Flame className="size-4 text-rose-600" />,
  },
  {
    id: "muse-spark-1-2",
    name: "Muse Spark 1.2",
    description:
      "Muse Spark 1.2 offers dependable creative and conversational output over a 1M token context.",
    category: "Advanced Models",
    badge: "Limited",
    icon: <Sparkles className="size-4 text-pink-400" />,
  },
  {
    id: "muse-spark-1-3",
    name: "Muse Spark 1.3",
    description:
      "Muse Spark 1.3 is Meta's newest Spark model, tuned for creative writing and open-ended conversation.",
    category: "Advanced Models",
    badge: "Limited",
    icon: <Sparkles className="size-4 text-fuchsia-400" />,
  },
  {
    id: "muse-spark-1-3-contributor",
    name: "Muse Spark 1.3 Contributor",
    description:
      "Muse Spark 1.3 Contributor is the low-cost community tier of Muse Spark 1.3 for everyday drafting.",
    category: "Advanced Models",
    badge: "Limited",
    icon: <Sparkles className="size-4 text-pink-300" />,
  },
  {
    id: "kimi-k2-7-code-highspeed",
    name: "Kimi K2.7 Code HighSpeed",
    description:
      "Kimi K2.7 Code HighSpeed keeps the coding strengths of K2.7 while returning results faster.",
    category: "Advanced Models",
    badge: "Limited",
    icon: <Code2 className="size-4 text-emerald-400" />,
  },
  {
    id: "mimo-v2-5",
    name: "MiMo V2.5",
    description:
      "MiMo V2.5 from Xiaomi delivers efficient everyday assistance with one of the lowest costs per token.",
    category: "Advanced Models",
    badge: "Limited",
    icon: <Cpu className="size-4 text-cyan-400" />,
  },
  {
    id: "glm-5-3",
    name: "GLM-5.3",
    description:
      "GLM-5.3 is the latest full GLM tier, strong at multilingual reasoning and code over a 1M token context.",
    category: "Advanced Models",
    badge: "Limited",
    icon: <Terminal className="size-4 text-indigo-400" />,
  },
  {
    id: "glm-5-2-fast",
    name: "GLM-5.2 Fast",
    description:
      "GLM-5.2 Fast is the low-latency GLM-5.2 variant for interactive sessions that cannot wait.",
    category: "Advanced Models",
    badge: "Limited",
    icon: <Zap className="size-4 text-indigo-300" />,
  },
  {
    id: "step-3-7-flash",
    name: "Step 3.7 Flash",
    description:
      "Step 3.7 Flash from StepFun answers quickly and cheaply, suited to short interactive exchanges.",
    category: "Advanced Models",
    badge: "Limited",
    icon: <Zap className="size-4 text-lime-400" />,
  },
  {
    id: "step-3-5-flash",
    name: "Step 3.5 Flash",
    description:
      "Step 3.5 Flash offers a 1M token context at one of the lowest prices in the catalogue.",
    category: "Advanced Models",
    badge: "Limited",
    icon: <Zap className="size-4 text-lime-500" />,
  },
  {
    id: "tencent-hy4-previewpro",
    name: "Tencent Hy4 PreviewPro",
    description:
      "Tencent Hunyuan 4 Preview is the newest Hunyuan generation, with a 1M token context for long documents.",
    category: "Advanced Models",
    badge: "Pro",
    icon: <Globe className="size-4 text-blue-400" />,
  },
  {
    id: "inkling",
    name: "Inkling",
    description:
      "Inkling from Thinking Machines is tuned for careful, well-structured reasoning and clear explanations.",
    category: "Advanced Models",
    badge: "Limited",
    icon: <Brain className="size-4 text-amber-300" />,
  },
  {
    id: "inkling-small",
    name: "Inkling Small",
    description:
      "Inkling Small is the lighter Inkling tier, keeping the same style at a lower cost per token.",
    category: "Advanced Models",
    badge: "Limited",
    icon: <Brain className="size-4 text-amber-200" />,
  },
];

interface SuggestedPrompt {
  id: string;
  icon: React.ReactNode;
  label: string;
  description: string;
  promptText: string;
}

interface EmptyStateProps {
  onSendMessage?: (message: string, attachments: File[], selectedModel: AIModel) => void;
  userName?: string;
}

const SUGGESTED_PROMPTS: SuggestedPrompt[] = [
  {
    id: "quantum",
    icon: <Atom className="size-4 text-[var(--primary)]" />,
    label: "Explain quantum computing",
    description: "In simple terms with real-world analogies",
    promptText: "Explain quantum computing in simple terms, using real-world analogies to describe qubits, superposition, and entanglement.",
  },
  {
    id: "react",
    icon: <Code2 className="size-4 text-[var(--primary)]" />,
    label: "Write a React component",
    description: "Modern TypeScript & Tailwind CSS",
    promptText: "Write a reusable React component with TypeScript and Tailwind CSS for an interactive dropdown menu.",
  },
  {
    id: "document",
    icon: <FileText className="size-4 text-[var(--primary)]" />,
    label: "Analyze this document",
    description: "Summarize key insights and takeaways",
    promptText: "Summarize key insights, action items, and takeaways from the uploaded document.",
  },
  {
    id: "startup",
    icon: <Lightbulb className="size-4 text-[var(--primary)]" />,
    label: "Brainstorm startup ideas",
    description: "Focused on AI and developer tools",
    promptText: "Brainstorm 5 innovative startup ideas focused on modern developer tools and AI workflow automation.",
  },
];

export default function EmptyState({ onSendMessage, userName }: EmptyStateProps) {
  const [inputMessage, setInputMessage] = useState("");
  const [attachments, setAttachments] = useState<File[]>([]);
  const [selectedModel, setSelectedModel] = useState<AIModel>(ALL_MODELS[0]);
  const [isModelDropdownOpen, setIsModelDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Filtered models based on search query
  const filteredModels = useMemo(() => {
    if (!searchQuery.trim()) return ALL_MODELS;
    const query = searchQuery.toLowerCase();
    return ALL_MODELS.filter(
      (m) =>
        m.name.toLowerCase().includes(query) ||
        m.description.toLowerCase().includes(query) ||
        (m.subtitle && m.subtitle.toLowerCase().includes(query))
    );
  }, [searchQuery]);

  // Group models by category
  const groupedModels = useMemo(() => {
    const standard = filteredModels.filter((m) => m.category === "Standard");
    const advanced = filteredModels.filter((m) => m.category === "Advanced Models");
    return { Standard: standard, "Advanced Models": advanced };
  }, [filteredModels]);

  // Auto-resize textarea height as user types
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${Math.min(
        textareaRef.current.scrollHeight,
        180
      )}px`;
    }
  }, [inputMessage]);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsModelDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handlePromptClick = (promptText: string) => {
    setInputMessage(promptText);
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      setAttachments((prev) => [...prev, ...selectedFiles]);
    }
    e.target.value = "";
  };

  const removeAttachment = (index: number) => {
    setAttachments((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    if (!inputMessage.trim() && attachments.length === 0) return;
    onSendMessage?.(inputMessage, attachments, selectedModel);
    setInputMessage("");
    setAttachments([]);
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }
  };

  return (
    <div className="flex flex-col items-center justify-between flex-1 h-full w-full max-w-4xl mx-auto px-4 py-8 select-none">
      {/* Upper Content: Model Picker Header + Greeting + Prompt Cards */}
      <div className="flex-1 flex flex-col items-center justify-center w-full space-y-8 my-auto">

        {/* Model Selector Dropdown Header */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsModelDropdownOpen(!isModelDropdownOpen)}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--surface-elevated)] hover:bg-[var(--surface)] border border-[var(--border)] text-xs font-medium text-[var(--foreground)] transition-all shadow-sm active:scale-95 cursor-pointer"
          >
            {selectedModel.icon}
            <span className="font-semibold">{selectedModel.name}</span>
            {selectedModel.badge && (
              <span className={`text-[10px] px-1.5 py-0.2 rounded-md font-medium border ${
                selectedModel.badge === "Limited"
                  ? "bg-amber-500/10 text-amber-400 border-amber-500/20"
                  : selectedModel.badge === "Pro"
                  ? "bg-purple-500/10 text-purple-400 border-purple-500/20"
                  : "bg-[var(--surface)] text-[var(--muted)] border-[var(--border)]"
              }`}>
                {selectedModel.badge}
              </span>
            )}
            <ChevronDown size={14} className="text-[var(--muted)]" />
          </button>

          {/* Expanded Dropdown Menu */}
          {isModelDropdownOpen && (
            <div className="absolute left-1/2 -translate-x-1/2 top-10 z-50 w-80 sm:w-96 max-h-[420px] bg-[var(--surface-elevated)] border border-[var(--border)] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-150">

              {/* Search Header */}
              <div className="p-2.5 border-b border-[var(--border)] bg-[var(--surface-elevated)] sticky top-0 z-10">
                <div className="relative flex items-center">
                  <Search size={14} className="absolute left-3 text-[var(--muted)]" />
                  <input
                    type="text"
                    placeholder="Search 40+ models..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-[var(--surface)] text-[var(--foreground)] placeholder-[var(--muted)] text-xs rounded-xl pl-8 pr-3 py-1.5 border border-[var(--border)] focus:outline-none focus:border-[var(--primary)] transition-colors"
                  />
                </div>
              </div>

              {/* Scrollable Model Items */}
              <div className="flex-1 overflow-y-auto p-1.5 space-y-3 custom-scrollbar">
                {groupedModels["Standard"].length === 0 && groupedModels["Advanced Models"].length === 0 ? (
                  <div className="p-4 text-center text-xs text-[var(--muted)]">
                    No models found matching "{searchQuery}"
                  </div>
                ) : (
                  <>
                    {/* Standard Models Group */}
                    {groupedModels["Standard"].length > 0 && (
                      <div className="space-y-1">
                        <div className="px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[var(--muted)]">
                          Standard Models
                        </div>
                        {groupedModels["Standard"].map((model) => {
                          const isSelected = model.id === selectedModel.id;
                          return (
                            <button
                              key={model.id}
                              onClick={() => {
                                setSelectedModel(model);
                                setIsModelDropdownOpen(false);
                              }}
                              className={`w-full text-left flex items-start gap-3 p-2.5 rounded-xl transition-colors ${
                                isSelected
                                  ? "bg-[var(--surface)] text-[var(--foreground)] border border-[var(--border)]"
                                  : "text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--surface)]"
                              }`}
                            >
                              <div className="p-1.5 rounded-lg bg-[var(--background)] border border-[var(--border)] shrink-0 mt-0.5">
                                {model.icon}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between gap-1">
                                  <span className="text-xs font-semibold text-[var(--foreground)] truncate">
                                    {model.name}
                                  </span>
                                  {model.badge && (
                                    <span className="text-[9px] px-1.5 py-0.2 rounded bg-[var(--background)] border border-[var(--border)] text-[var(--muted)] shrink-0">
                                      {model.badge}
                                    </span>
                                  )}
                                </div>
                                <p className="text-[11px] text-[var(--muted)] leading-relaxed mt-1 line-clamp-2">
                                  {model.description}
                                </p>
                              </div>
                              {isSelected && <Check size={14} className="text-[var(--primary)] shrink-0 mt-1" />}
                            </button>
                          );
                        })}
                      </div>
                    )}

                    {/* Advanced Models Group */}
                    {groupedModels["Advanced Models"].length > 0 && (
                      <div className="space-y-1">
                        <div className="px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[var(--muted)]">
                          Advanced Models
                        </div>
                        {groupedModels["Advanced Models"].map((model) => {
                          const isSelected = model.id === selectedModel.id;
                          return (
                            <button
                              key={model.id}
                              onClick={() => {
                                setSelectedModel(model);
                                setIsModelDropdownOpen(false);
                              }}
                              className={`w-full text-left flex items-start gap-3 p-2.5 rounded-xl transition-colors ${
                                isSelected
                                  ? "bg-[var(--surface)] text-[var(--foreground)] border border-[var(--border)]"
                                  : "text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--surface)]"
                              }`}
                            >
                              <div className="p-1.5 rounded-lg bg-[var(--background)] border border-[var(--border)] shrink-0 mt-0.5">
                                {model.icon}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between gap-1">
                                  <span className="text-xs font-semibold text-[var(--foreground)] truncate">
                                    {model.name}
                                  </span>
                                  {model.badge && (
                                    <span className={`text-[9px] px-1.5 py-0.2 rounded font-medium border shrink-0 ${
                                      model.badge === "Limited"
                                        ? "bg-amber-500/10 text-amber-400 border-amber-500/20"
                                        : model.badge === "Pro"
                                        ? "bg-purple-500/10 text-purple-400 border-purple-500/20"
                                        : "bg-[var(--background)] text-[var(--muted)] border-[var(--border)]"
                                    }`}>
                                      {model.badge}
                                    </span>
                                  )}
                                </div>
                                <p className="text-[11px] text-[var(--muted)] leading-relaxed mt-1 line-clamp-2">
                                  {model.description}
                                </p>
                              </div>
                              {isSelected && <Check size={14} className="text-[var(--primary)] shrink-0 mt-1" />}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Greeting */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--foreground)]">
            {userName ? `How can I help you, ${userName}?` : "How can I help you today?"}
          </h1>
          <p className="text-sm text-[var(--muted)] max-w-md mx-auto">
            Ask a question, analyze code, upload documents, or explore ideas to kickstart your workflow.
          </p>
        </div>

        {/* Suggested Prompts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-2xl">
          {SUGGESTED_PROMPTS.map((item) => (
            <button
              key={item.id}
              onClick={() => handlePromptClick(item.promptText)}
              className="group flex items-start gap-3 p-3.5 text-left rounded-xl bg-[var(--surface)] hover:bg-[var(--surface-elevated)] border border-[var(--border)] hover:border-[var(--primary)] transition-all duration-200 shadow-sm active:scale-[0.99]"
            >
              <div className="p-2 rounded-lg bg-[var(--surface-elevated)] group-hover:bg-[var(--background)] border border-[var(--border)] transition-colors shrink-0">
                {item.icon}
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-xs font-semibold text-[var(--foreground)] truncate">
                  {item.label}
                </span>
                <span className="text-[11px] text-[var(--muted)] line-clamp-1">
                  {item.description}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Prompt Composer */}
      <div className="w-full max-w-2xl space-y-2">
        <div className="relative rounded-2xl bg-[var(--surface)] border border-[var(--border)] focus-within:border-[var(--primary)] focus-within:ring-1 focus-within:ring-[var(--primary)] transition-all shadow-md overflow-hidden">
          {/* File Attachments Preview */}
          {attachments.length > 0 && (
            <div className="flex flex-wrap gap-2 p-3 pb-0">
              {attachments.map((file, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 px-2.5 py-1 rounded-lg bg-[var(--surface-elevated)] border border-[var(--border)] text-xs text-[var(--foreground)]"
                >
                  <File className="size-3.5 text-[var(--primary)]" />
                  <span className="truncate max-w-[120px]">{file.name}</span>
                  <button
                    onClick={() => removeAttachment(idx)}
                    className="p-0.5 rounded-full hover:bg-[var(--border)] text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
                  >
                    <X className="size-3" />
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Text Area Input */}
          <textarea
            ref={textareaRef}
            rows={1}
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={`Ask anything with ${selectedModel.name}...`}
            className="w-full bg-transparent text-sm text-[var(--foreground)] placeholder-[var(--muted)] px-4 pt-3.5 pb-2 resize-none focus:outline-none min-h-[48px] max-h-[180px] leading-relaxed custom-scrollbar"
          />

          {/* Toolbar / Action Buttons */}
          <div className="flex items-center justify-between px-3 pb-3 pt-1">
            <div className="flex items-center gap-1">
              <input
                ref={fileInputRef}
                type="file"
                multiple
                className="hidden"
                onChange={handleFileChange}
              />
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                title="Attach file"
                className="p-2 rounded-xl text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--surface-elevated)] transition-colors"
              >
                <Paperclip className="size-4" />
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleSubmit}
                disabled={!inputMessage.trim() && attachments.length === 0}
                className={`p-2 rounded-xl text-white transition-all shadow-sm flex items-center justify-center ${
                  inputMessage.trim() || attachments.length > 0
                    ? "bg-[var(--primary)] hover:bg-[var(--primary-hover)] active:scale-95 cursor-pointer"
                    : "bg-[var(--border)] text-[var(--muted)] cursor-not-allowed opacity-60"
                }`}
                title="Send message"
              >
                <ArrowUp className="size-4 stroke-[2.5]" />
              </button>
            </div>
          </div>
        </div>

        {/* Keyboard Shortcut & Model Info */}
        <div className="flex items-center justify-between px-2 text-[11px] text-[var(--muted)]">
          <span>
            Active Model: <strong className="text-[var(--foreground)] font-medium">{selectedModel.name}</strong>
          </span>
          <span className="hidden sm:inline-block">
            Press <kbd className="px-1.5 py-0.5 rounded bg-[var(--surface)] border border-[var(--border)] text-[10px] font-mono">Enter ↵</kbd> to send
          </span>
        </div>
      </div>
    </div>
  );
}
