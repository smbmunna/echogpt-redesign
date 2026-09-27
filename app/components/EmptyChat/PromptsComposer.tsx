import { ArrowUp, File, Paperclip, X } from "lucide-react";
import { useEffect, useRef } from "react";
import { AIModel } from "./ModelPicker";

interface PromptComposerProps {
  attachments: File[];
  setAttachments: React.Dispatch<React.SetStateAction<File[]>>;
  setInputMessage: React.Dispatch<React.SetStateAction<string>>;
  inputMessage: string; 
  onSendMessage?: (message: string, attachments: File[], selectedModel: AIModel)=> void; 
  selectedModel: AIModel
}

export default function PromptComopser({
  attachments,
  setAttachments,
  inputMessage,
  setInputMessage, 
  onSendMessage,
  selectedModel
  
}: PromptComposerProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const removeAttachment = (index: number) => {
    setAttachments((prev) => prev.filter((_, i) => i !== index));
  };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
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

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      setAttachments((prev) => [...prev, ...selectedFiles]);
    }
    e.target.value = "";
  };

  // 1. AUTO-RESIZE LOGIC
  useEffect(() => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    // Reset height to compute actual scrollHeight properly when deleting text
    textarea.style.height = "auto";
    // Set height capped at max height (e.g., 180px)
    textarea.style.height = `${Math.min(textarea.scrollHeight, 180)}px`;
  }, [inputMessage]); // Triggers every time inputMessage changes

  return (
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
          Active Model:{" "}
          <strong className="text-[var(--foreground)] font-medium">
            {selectedModel.name}
          </strong>
        </span>
        <span className="hidden sm:inline-block">
          Press{" "}
          <kbd className="px-1.5 py-0.5 rounded bg-[var(--surface)] border border-[var(--border)] text-[10px] font-mono">
            Enter ↵
          </kbd>{" "}
          to send
        </span>
      </div>
    </div>
  );
}
