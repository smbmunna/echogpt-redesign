import { Atom, Code2, FileText, Lightbulb } from "lucide-react";

import { useRef, useState } from "react";
import Greetings from "./EmptyChat/Greetings";
import ModelPicker from "./EmptyChat/ModelPicker";



export interface SuggestedPrompt {
  id: string;
  icon: React.ReactNode;
  label: string;
  description: string;
  promptText: string;
}

interface EmptyChatProps{
  userName: string; 
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


export default function EmptyChat({userName}: EmptyChatProps) {
  const [inputMessage, setInputMessage] = useState("");

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
        <Greetings userName="Munna"/>

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
    </div>
  );
}
