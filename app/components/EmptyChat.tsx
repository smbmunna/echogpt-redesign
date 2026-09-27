import {
  Atom,
  Code2,
  FileText,
  Lightbulb,
  Paperclip,
  ArrowUp,
  Sparkles,
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

import { useRef, useState } from "react";
import Greetings from "./EmptyChat/Greetings";
import ModelPicker from "./EmptyChat/ModelPicker";
import PromptComopser from "./EmptyChat/PromptsComposer";

export interface SuggestedPrompt {
  id: string;
  icon: React.ReactNode;
  label: string;
  description: string;
  promptText: string;
}

export interface AIModel {
  id: string;
  name: string;
  subtitle?: string;
  description: string;
  category: "Standard" | "Advanced Models";
  badge?: "Limited" | "Pro" | "Free" | "Fast" | "Reasoning";
  icon: React.ReactNode;
}

interface EmptyChatProps {
  userName: string;
  onSendMessage?: (
    message: string,
    attachments: File[],
    selectedModel: AIModel,
  ) => void;
}

const SUGGESTED_PROMPTS: SuggestedPrompt[] = [
  {
    id: "quantum",
    icon: <Atom className="size-4 text-[var(--primary)]" />,
    label: "Explain quantum computing",
    description: "In simple terms with real-world analogies",
    promptText:
      "Explain quantum computing in simple terms, using real-world analogies to describe qubits, superposition, and entanglement.",
  },
  {
    id: "react",
    icon: <Code2 className="size-4 text-[var(--primary)]" />,
    label: "Write a React component",
    description: "Modern TypeScript & Tailwind CSS",
    promptText:
      "Write a reusable React component with TypeScript and Tailwind CSS for an interactive dropdown menu.",
  },
  {
    id: "document",
    icon: <FileText className="size-4 text-[var(--primary)]" />,
    label: "Analyze this document",
    description: "Summarize key insights and takeaways",
    promptText:
      "Summarize key insights, action items, and takeaways from the uploaded document.",
  },
  {
    id: "startup",
    icon: <Lightbulb className="size-4 text-[var(--primary)]" />,
    label: "Brainstorm startup ideas",
    description: "Focused on AI and developer tools",
    promptText:
      "Brainstorm 5 innovative startup ideas focused on modern developer tools and AI workflow automation.",
  },
];

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

export default function EmptyChat({ userName, onSendMessage }: EmptyChatProps) {
  const [inputMessage, setInputMessage] = useState("");
  const [attachments, setAttachments] = useState<File[]>([]);
  const [selectedModel, setSelectedModel] = useState<AIModel>(ALL_MODELS[0]);

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handlePromptClick = (promptText: string) => {
    setInputMessage(promptText);
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  };
  return (
    <div className="flex flex-col items-center justify-between flex-1 h-full w-full max-w-4xl mx-auto px-4 py-8 select-none">
      {/* Upper Content: Model Picker Header + Greeting + Prompt Cards */}
      <div className="flex-1 flex flex-col items-center justify-center w-full space-y-8 my-auto">
        {/* Model Selector Dropdown Header */}
        <ModelPicker />

        {/* Greetings */}
        <Greetings userName="Munna" />

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
      <PromptComopser
        attachments={attachments}
        setAttachments={setAttachments}
        inputMessage={inputMessage}
        setInputMessage={setInputMessage}
        onSendMessage={onSendMessage}
        selectedModel={selectedModel}
      />
    </div>
  );
}
