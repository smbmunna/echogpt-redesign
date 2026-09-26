"use client";

import { useState } from "react";
import NewChatBtn from "../sidebar/NewChatBtn";
import { PanelLeftClose, PanelLeftOpen, Search } from "lucide-react";
import SidebarFooter from "../sidebar/SidebarFooter";
import Conversation from "../sidebar/Conversation";

// Define the conversation type
export interface Conversation {
  id: string;
  title: string;
  category: "Today" | "Previous 7 Days" | "Older";
}

interface SidebarProps {
  conversations?: Conversation[];
  activeId?: string;
  userName?: string;
  userEmail?: string;
  onNewChat?: () => void;
  onSelectConversation?: (id: string) => void;
  onDeleteConversation?: (id: string) => void;
}

const DEFAULT_CONVERSATIONS: Conversation[] = [
  { id: "1", title: "React Server Actions vs API Routes", category: "Today" },
  { id: "2", title: "Tailwind v4 CSS Variable setup", category: "Today" },
  {
    id: "3",
    title: "Optimizing SQL Stored Procedures",
    category: "Previous 7 Days",
  },
  {
    id: "4",
    title: "Fujifilm X-T2 Super Telephoto Lenses",
    category: "Previous 7 Days",
  },
  { id: "5", title: "Next.js App Router Architecture", category: "Older" },
];

export default function Sidebar({
  onNewChat,
  conversations = DEFAULT_CONVERSATIONS,
  activeId = "1",
  userName = "Munna",
  userEmail = "smbmunna@gmail.com",
  onSelectConversation,
  onDeleteConversation,
}: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");


  return (
    <aside
      className={`relative flex flex-col h-screen transition-all duration-300 ease-in-out select-none border-r border-(--border) bg-(--background) text-(--foreground) ${
        isCollapsed ? "w-20" : "w-72"
      }`}
    >
      {/* Top Header & Collapse Toggle */}
      <div className="flex items-center justify-between p-3.5 border-b border-(--border)">
        {!isCollapsed && (
          <div className="flex items-center gap-2.5 px-1">
            <div className="w-7 h-7 rounded-lg bg-(--primary) flex items-center justify-center text-white font-bold text-sm shadow-sm">
              E
            </div>
            <span className="font-semibold tracking-tight text-base">
              EchoGPT
            </span>
          </div>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          className={`p-2 rounded-lg text-(--muted) hover:text-(--foreground) hover:bg-(--surface-elevated) transition-colors ${
            isCollapsed ? "mx-auto" : ""
          }`}
        >
          {isCollapsed ? (
            <PanelLeftOpen size={18} />
          ) : (
            <PanelLeftClose size={18} />
          )}
        </button>
      </div>

      {/* New Chat Button */}
      <NewChatBtn onNewChat={onNewChat} isCollapsed={isCollapsed} />

      {/* Search / Filter  */}
      {!isCollapsed && (
        <div className="px-3 pb-2">
          <div className="relative flex items-center">
            <Search size={15} className="absolute left-3 text-(--muted)" />
            <input
              type="text"
              placeholder="Search chats..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-(--surface) text-(--foreground) placeholder-(--muted) text-xs rounded-lg pl-9 pr-3 py-2 border border(--border) focus:outline-none focus:border-(--primary) transition-colors"
            />
          </div>
        </div>
      )}

      {/* Conversation History List */}
      <Conversation
        activeId="1"
        isCollapsed={isCollapsed}
        conversations={DEFAULT_CONVERSATIONS}
        onSelectConversation={onSelectConversation}
        onDeleteConversation={onDeleteConversation}
        searchQuery={searchQuery}
      />

      {/* Footer */}
      <SidebarFooter
        isCollapsed={isCollapsed}
        userName={userName}
        userEmail={userEmail}
      />
    </aside>
  );
}
