"use client";

import { useState } from "react";
import Sidebar,{Conversation} from "../components/shared/sidebar"; 

export default function Page() {
  const [conversations, setConversations] = useState<Conversation[]>([
    { id: "1", title: "React Server Actions vs API Routes", category: "Today" },
    { id: "2", title: "Tailwind v4 CSS Variable setup", category: "Today" },
    { id: "3", title: "Optimizing SQL Stored Procedures", category: "Previous 7 Days" },
  ]);
  const [activeId, setActiveId] = useState("1");

  
  return (
    <main className="flex h-screen w-screen overflow-hidden bg-(--background)">
      <Sidebar
        conversations={conversations}
        activeId={activeId}
        userName="Munna"
        userEmail="smbmunna@gmail.com"
      />
      <section className="flex-1 flex flex-col items-center justify-center p-6 text-center text-(--foreground)">
        <div className="max-w-md space-y-3">
          <h1 className="text-2xl font-bold tracking-tight">Whats on your mind today?</h1>
          <p className="text-sm text-(--muted)">
            Your conversation goes here
          </p>
        </div>
      </section>
    </main>
  );
}