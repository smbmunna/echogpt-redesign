import { MessageSquare, MoreHorizontal, Trash2 } from "lucide-react";
import { useMemo, useState } from "react";

export interface Conversation {
  id: string;
  title: string;
  category: "Today" | "Previous 7 Days" | "Older";
}

interface ConversationProps {
  isCollapsed: boolean;
  conversations: Conversation[];
  activeId?: string;
  onSelectConversation?: (id: string) => void;
  onDeleteConversation?: (id: string) => void;
  searchQuery: string; 
}

const DEFAULT_CONVERSATIONS: Conversation[] = [
  { id: "1", title: "React Server Actions vs API Routes", category: "Today" },
  { id: "2", title: "Tailwind v4 CSS Variable setup", category: "Today" },
  { id: "3", title: "Optimizing SQL Stored Procedures", category: "Previous 7 Days" },
  { id: "4", title: "Fujifilm X-T2 Super Telephoto Lenses", category: "Previous 7 Days" },
  { id: "5", title: "Next.js App Router Architecture", category: "Older" },
];


export default function Conversation({
  activeId = "1",
  isCollapsed,
  conversations= DEFAULT_CONVERSATIONS,
  onSelectConversation,
  onDeleteConversation,
  searchQuery
}: ConversationProps) {

    //const [searchQuery, setSearchQuery] = useState("");
      const [activeMenuId, setActiveMenuId] = useState<string | null>(null);


    // Filter conversations based on search query
  const filteredConversations = useMemo(() => {
    return conversations.filter((c) =>
      c.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [conversations, searchQuery]);

  // Group conversations by category for organized rendering
  const groupedConversations = useMemo(() => {
    const groups: { [key: string]: Conversation[] } = {
      Today: [],
      "Previous 7 Days": [],
      Older: [],
    };
    filteredConversations.forEach((c) => {
      if (groups[c.category]) {
        groups[c.category].push(c);
      }
    });
    return groups;
  }, [filteredConversations]);

  return (
    <div className="flex-1 overflow-y-auto px-3 py-2 space-y-4 custom-scrollbar">
      {isCollapsed ? (
        /* Collapsed View: Just icons for recent items */
        <div className="space-y-1">
          {conversations.slice(0, 8).map((conv) => (
            <button
              key={conv.id}
              onClick={() => onSelectConversation?.(conv.id)}
              title={conv.title}
              className={`w-full aspect-square rounded-xl flex items-center justify-center transition-colors ${
                activeId === conv.id
                  ? "bg-(--surface-elevated) text-(--foreground) border border-(--border)"
                  : "text-(--muted) hover:text-(--foreground) hover:bg-(--surface)"
              }`}
            >
              <MessageSquare size={16} />
            </button>
          ))}
        </div>
      ) : (
        /* Expanded View: Categorized lists */
        Object.entries(groupedConversations).map(([category, items]) => {
          if (items.length === 0) return null;
          return (
            <div key={category} className="space-y-1">
              <div className="px-2 py-1 text-[11px] font-semibold uppercase tracking-wider text-(--muted)">
                {category}
              </div>
              {items.map((conv) => {
                const isActive = activeId === conv.id;
                const isMenuOpen = activeMenuId === conv.id;

                return (
                  <div key={conv.id} className="relative group">
                    <button
                      onClick={() => onSelectConversation?.(conv.id)}
                      className={`w-full text-left flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs transition-colors pr-9 ${
                        isActive
                          ? "bg-[var(--surface-elevated)] text-[var(--foreground)] font-medium border border-[var(--border)]"
                          : "text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--surface)]"
                      }`}
                    >
                      <MessageSquare
                        size={14}
                        className="shrink-0 opacity-70"
                      />
                      <span className="truncate">{conv.title}</span>
                    </button>

                    {/* Action Menu Toggle Button */}
                    <div className="absolute right-1.5 top-1/2 -translate-y-1/2 flex items-center">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveMenuId(isMenuOpen ? null : conv.id);
                        }}
                        className={`p-1 rounded-md text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--surface-elevated)] opacity-0 group-hover:opacity-100 transition-opacity ${
                          isMenuOpen
                            ? "opacity-100 bg-[var(--surface-elevated)]"
                            : ""
                        }`}
                      >
                        <MoreHorizontal size={14} />
                      </button>

                      {/* Dropdown Menu */}
                      {isMenuOpen && (
                        <>
                          <div
                            className="fixed inset-0 z-20"
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveMenuId(null);
                            }}
                          />
                          <div className="absolute right-0 top-7 z-30 w-32 bg-[var(--surface-elevated)] border border-[var(--border)] rounded-lg shadow-lg py-1">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                onDeleteConversation?.(conv.id);
                                setActiveMenuId(null);
                              }}
                              className="w-full text-left px-3 py-1.5 text-xs text-[var(--danger)] hover:bg-[var(--surface)] flex items-center gap-2"
                            >
                              <Trash2 size={13} />
                              Delete
                            </button>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })
      )}
    </div>
  );
}
