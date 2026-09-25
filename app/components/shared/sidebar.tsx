"use client";

import { useState } from "react";
import TopHeader from "../sidebar/TopHeader";

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
      <TopHeader />
    </aside>
  );
}
