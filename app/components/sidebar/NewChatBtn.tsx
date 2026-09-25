import { Plus } from "lucide-react";

interface NewChatBtnProps {
  onNewChat?: () => void;
  isCollapsed?: boolean;
}

export default function NewChatBtn({
  onNewChat,
  isCollapsed,
}: NewChatBtnProps) {
  return (
    <div className="p-3">
      <button
        onClick={onNewChat}
        className={`w-full flex items-center gap-2.5 py-2.5 px-3 rounded-xl bg-(--primary) hover:bg-(--primary-hover) text-white font-medium text-sm transition-all shadow-sm active:scale-[0.98] ${
          isCollapsed ? "justify-center px-0" : ""
        }`}
        title="New Chat"
      >
        <Plus size={18} className="shrink-0" />
        {!isCollapsed && <span className="truncate">New chat</span>}
      </button>
    </div>
  );
}
