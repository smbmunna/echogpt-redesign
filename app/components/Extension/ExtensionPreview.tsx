"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ChevronDown,
  Settings,
  MessageSquare,
  History,
  Zap,
  Send,
  Plus,
  ArrowLeft,
  Moon,
  Sun,
  Key,
  LogOut,
  Globe,
  FileText,
  HelpCircle,
  Check,
} from "lucide-react";

type ViewState = "chat" | "history" | "quick-actions" | "settings";

const MODELS = [
  { id: "gpt-5-6", name: "GPT-5.6 Sol", badge: "Flagship" },
  { id: "deepseek-v4", name: "DeepSeek V4 Pro", badge: "Coding" },
  { id: "gemini-3-8", name: "Gemini 3.8 Flash", badge: "1M Context" },
  { id: "kimi-k3", name: "Kimi K3", badge: "Agentic" },
];

const HISTORY_ITEMS = [
  { id: "1", title: "Debugging async Next.js Server Actions", time: "Today, 4:32 PM", model: "DeepSeek V4" },
  { id: "2", title: "Summarize Q3 SaaS Growth Strategy PDF", time: "Today, 11:15 AM", model: "Gemini 3.8" },
  { id: "3", title: "Translate legal terms to Spanish", time: "Yesterday", model: "GPT-5.6" },
  { id: "4", title: "Refactor Tailwind grid layouts", time: "2 days ago", model: "DeepSeek V4" },
];

const QUICK_PROMPTS = ["Summarize", "Translate", "Explain Code", "Fix Bugs"];

export default function ExtensionPreview() {
  const [currentView, setCurrentView] = useState<ViewState>("chat");
  const [selectedModel, setSelectedModel] = useState(MODELS[0]);
  const [isModelDropdownOpen, setIsModelDropdownOpen] = useState(false);
  const [promptText, setPromptText] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [messages, setMessages] = useState([
    { role: "assistant", text: "Hello! I'm EchoGPT. What are we working on right now?" },
  ]);

  const handleSend = () => {
    if (!promptText.trim()) return;
    const userMsg = promptText;
    setMessages((prev) => [...prev, { role: "user", text: userMsg }]);
    setPromptText("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: `Processed with ${selectedModel.name}: I can help you draft, code, or summarize that instantly.` },
      ]);
    }, 600);
  };

  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 bg-[var(--background)]">
      <div className="text-center mb-6 space-y-1">
        <h3 className="text-lg font-bold text-[var(--foreground)]">Chrome Extension Concept Preview</h3>
        <p className="text-xs text-[var(--muted)]">Rendered at strict browser extension dimensions (380px × 600px)</p>
      </div>

      {/* Extension Popup Shell */}
      <div className="w-[380px] h-[600px] rounded-3xl border border-[var(--border)] bg-[var(--surface)] shadow-2xl flex flex-col overflow-hidden relative font-sans text-[var(--foreground)] select-none">
        
        {/* Header / Nav */}
        <div className="h-14 px-4 border-b border-[var(--border)] bg-[var(--surface-elevated)] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <div className="size-8 rounded-xl bg-[var(--primary)] flex items-center justify-center text-white shadow-sm">
              <Sparkles size={16} />
            </div>
            {currentView === "chat" ? (
              <div className="relative">
                <button
                  onClick={() => setIsModelDropdownOpen(!isModelDropdownOpen)}
                  className="flex items-center gap-1.5 text-xs font-bold text-[var(--foreground)] hover:text-[var(--primary)] transition-colors px-2 py-1 rounded-lg bg-[var(--surface)] border border-[var(--border)]"
                >
                  <span className="truncate max-w-[110px]">{selectedModel.name}</span>
                  <ChevronDown size={12} className="text-[var(--muted)]" />
                </button>

                {/* Model Dropdown Menu */}
                {isModelDropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 w-48 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border)] shadow-xl p-1 z-30">
                    {MODELS.map((m) => (
                      <button
                        key={m.id}
                        onClick={() => {
                          setSelectedModel(m);
                          setIsModelDropdownOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 rounded-lg text-xs flex items-center justify-between transition-colors ${
                          selectedModel.id === m.id ? "bg-[var(--primary)]/10 text-[var(--primary)] font-bold" : "hover:bg-[var(--surface)] text-[var(--foreground)]"
                        }`}
                      >
                        <span>{m.name}</span>
                        {selectedModel.id === m.id && <Check size={12} />}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <span className="text-xs font-bold capitalize">{currentView.replace("-", " ")}</span>
            )}
          </div>

          {/* Nav Icons */}
          <div className="flex items-center gap-1">
            {currentView !== "chat" ? (
              <button
                onClick={() => setCurrentView("chat")}
                className="p-2 rounded-lg hover:bg-[var(--surface)] text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
                title="Back to Chat"
              >
                <ArrowLeft size={16} />
              </button>
            ) : (
              <>
                <button
                  onClick={() => setCurrentView("quick-actions")}
                  className="p-2 rounded-lg hover:bg-[var(--surface)] text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
                  title="Quick Actions"
                >
                  <Zap size={15} />
                </button>
                <button
                  onClick={() => setCurrentView("history")}
                  className="p-2 rounded-lg hover:bg-[var(--surface)] text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
                  title="Conversation History"
                >
                  <History size={15} />
                </button>
                <button
                  onClick={() => setCurrentView("settings")}
                  className="p-2 rounded-lg hover:bg-[var(--surface)] text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
                  title="Settings"
                >
                  <Settings size={15} />
                </button>
              </>
            )}
          </div>
        </div>

        {/* Dynamic View Body */}
        <div className="flex-1 overflow-y-auto relative flex flex-col">
          <AnimatePresence mode="wait">
            
            {/* VIEW 1: CHAT */}
            {currentView === "chat" && (
              <motion.div
                key="chat"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex-1 flex flex-col justify-between p-4 space-y-4"
              >
                {/* Messages Feed */}
                <div className="space-y-3 flex-1 overflow-y-auto pr-1">
                  {messages.map((m, i) => (
                    <div
                      key={i}
                      className={`flex flex-col ${m.role === "user" ? "items-end" : "items-start"}`}
                    >
                      <div
                        className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed ${
                          m.role === "user"
                            ? "bg-[var(--primary)] text-white rounded-br-none"
                            : "bg-[var(--surface-elevated)] border border-[var(--border)] text-[var(--foreground)] rounded-bl-none"
                        }`}
                      >
                        {m.text}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quick Prompt Chips */}
                <div className="space-y-2">
                  <div className="flex gap-1.5 overflow-x-auto no-scrollbar pb-1">
                    {QUICK_PROMPTS.map((chip) => (
                      <button
                        key={chip}
                        onClick={() => setPromptText(`${chip} this page: `)}
                        className="px-2.5 py-1 rounded-full bg-[var(--surface-elevated)] border border-[var(--border)] text-[11px] font-medium text-[var(--muted)] hover:text-[var(--foreground)] hover:border-[var(--primary)] transition-all shrink-0"
                      >
                        {chip}
                      </button>
                    ))}
                  </div>

                  {/* Prompt Input Box */}
                  <div className="relative rounded-2xl bg-[var(--surface-elevated)] border border-[var(--border)] focus-within:border-[var(--primary)] transition-colors p-2 flex items-end gap-2">
                    <textarea
                      rows={2}
                      value={promptText}
                      onChange={(e) => setPromptText(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                          e.preventDefault();
                          handleSend();
                        }
                      }}
                      placeholder={`Ask ${selectedModel.name} or type /commands...`}
                      className="w-full bg-transparent text-xs text-[var(--foreground)] placeholder-[var(--muted)] resize-none focus:outline-none"
                    />
                    <button
                      onClick={handleSend}
                      disabled={!promptText.trim()}
                      className="size-7 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-hover)] disabled:opacity-40 text-white flex items-center justify-center transition-all shrink-0 shadow-sm"
                    >
                      <Send size={12} />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* VIEW 2: HISTORY */}
            {currentView === "history" && (
              <motion.div
                key="history"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="p-4 space-y-3"
              >
                <div className="text-[11px] font-semibold text-[var(--muted)] uppercase tracking-wider mb-1">
                  Recent Conversations
                </div>
                {HISTORY_ITEMS.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setCurrentView("chat")}
                    className="p-3 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border)] hover:border-[var(--primary)] transition-all cursor-pointer space-y-1"
                  >
                    <div className="text-xs font-bold text-[var(--foreground)] truncate">
                      {item.title}
                    </div>
                    <div className="flex items-center justify-between text-[10px] text-[var(--muted)]">
                      <span>{item.time}</span>
                      <span className="px-1.5 py-0.5 rounded bg-[var(--surface)] border border-[var(--border)] text-[var(--primary)] font-medium">
                        {item.model}
                      </span>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* VIEW 3: QUICK ACTIONS */}
            {currentView === "quick-actions" && (
              <motion.div
                key="quick-actions"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="p-4 space-y-3"
              >
                <div className="text-[11px] font-semibold text-[var(--muted)] uppercase tracking-wider mb-1">
                  One-Click Page Utilities
                </div>
                
                {[
                  { title: "Summarize This Page", desc: "Instantly distill current tab into bullet points", icon: <FileText size={16} className="text-blue-400" /> },
                  { title: "Translate Page Content", desc: "Convert text on screen to your native language", icon: <Globe size={16} className="text-emerald-400" /> },
                  { title: "Explain Selected Text", desc: "Break down highlighted jargon or code", icon: <HelpCircle size={16} className="text-amber-400" /> },
                ].map((action, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentView("chat")}
                    className="w-full text-left p-3 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border)] hover:border-[var(--primary)] transition-all flex items-start gap-3 group"
                  >
                    <div className="p-2 rounded-lg bg-[var(--surface)] border border-[var(--border)] shrink-0 group-hover:scale-105 transition-transform">
                      {action.icon}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[var(--foreground)]">{action.title}</div>
                      <div className="text-[11px] text-[var(--muted)] leading-relaxed">{action.desc}</div>
                    </div>
                  </button>
                ))}
              </motion.div>
            )}

            {/* VIEW 4: SETTINGS */}
            {currentView === "settings" && (
              <motion.div
                key="settings"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="p-4 space-y-4"
              >
                <div className="text-[11px] font-semibold text-[var(--muted)] uppercase tracking-wider">
                  Extension Preferences
                </div>

                <div className="space-y-3">
                  {/* Theme Toggle */}
                  <div className="flex items-center justify-between p-3 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border)]">
                    <div className="flex items-center gap-2.5 text-xs font-medium">
                      {isDarkMode ? <Moon size={14} className="text-indigo-400" /> : <Sun size={14} className="text-amber-400" />}
                      <span>Dark Appearance</span>
                    </div>
                    <button
                      onClick={() => setIsDarkMode(!isDarkMode)}
                      className={`w-9 h-5 rounded-full transition-colors p-0.5 flex items-center ${isDarkMode ? "bg-[var(--primary)] justify-end" : "bg-slate-300 justify-start"}`}
                    >
                      <div className="size-4 rounded-full bg-white shadow-sm" />
                    </button>
                  </div>

                  {/* Default Model */}
                  <div className="p-3 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border)] space-y-1.5">
                    <div className="text-xs font-medium">Default Launch Model</div>
                    <select
                      value={selectedModel.id}
                      onChange={(e) => {
                        const found = MODELS.find((m) => m.id === e.target.value);
                        if (found) setSelectedModel(found);
                      }}
                      className="w-full bg-[var(--surface)] border border-[var(--border)] rounded-lg p-2 text-xs text-[var(--foreground)] focus:outline-none"
                    >
                      {MODELS.map((m) => (
                        <option key={m.id} value={m.id}>{m.name}</option>
                      ))}
                    </select>
                  </div>

                  {/* API Key Management */}
                  <div className="p-3 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border)] space-y-2">
                    <div className="flex items-center gap-2 text-xs font-medium">
                      <Key size={14} className="text-amber-400" />
                      <span>API Key / Subscription Status</span>
                    </div>
                    <div className="text-[11px] text-emerald-500 font-medium">Active Plan: Unlimited Pro ($15/mo)</div>
                  </div>

                  {/* Sign Out */}
                  <button className="w-full py-2.5 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-500 text-xs font-bold transition-colors flex items-center justify-center gap-2">
                    <LogOut size={14} />
                    <span>Sign Out of Account</span>
                  </button>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

        {/* Footer Status Bar */}
        <div className="h-8 px-4 border-t border-[var(--border)] bg-[var(--surface-elevated)] flex items-center justify-between text-[10px] text-[var(--muted)] shrink-0">
          <span>v2.4.0 Production</span>
          <span className="flex items-center gap-1">
            <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Connected</span>
          </span>
        </div>

      </div>
    </div>
  );
}