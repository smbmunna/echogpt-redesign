"use client";

import { useState } from "react";
import TopHeader from "../sidebar/TopHeader";
import NewChatBtn from "../sidebar/NewChatBtn";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import SidebarFooter from "../sidebar/SidebarFooter";

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
}: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

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

      {/* Footer */}
      <SidebarFooter isCollapsed={isCollapsed} userName={userName} userEmail={userEmail}/>
    </aside>
  );
}
