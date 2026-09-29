"use client";

import { useState } from "react";
import Sidebar, { Conversation } from "../components/shared/sidebar";
import EmptyChat, { AIModel } from "../components/EmptyChat";

export default function Page() {
  const [conversations, setConversations] = useState<Conversation[]>([
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
  ]);
  const [activeId, setActiveId] = useState("1");

  const handleNewChat = () => {
    const newId = Date.now().toString();
    const newConv: Conversation = {
      id: newId,
      title: "New Conversation",
      category: "Today",
    };
    setConversations([newConv, ...conversations]);
    setActiveId(newId);
  };

  const handleSendMessage = (
    message: string,
    attachments: File[],
    selectedModel: AIModel,
  ) => {
    const newId = Date.now().toString();
    const newConv: Conversation = {
      id: newId,
      title: message.slice(0, 30) || "New Chat",
      category: "Today",
    };

    setConversations((prev) => [newConv, ...prev]);
    setActiveId(newId);

    console.log("Message sent:", message);
    console.log("Attachments:", attachments);
    console.log("Selected Model:", selectedModel.name, selectedModel.id);
  };

  return (
    <main className="flex h-screen w-screen overflow-hidden bg-(--background)">
      <Sidebar
        conversations={conversations}
        activeId={activeId}
        userName="Munna"
        userEmail="smbmunna@gmail.com"
        onNewChat={handleNewChat}
      />
      
      <section className="flex-1 h-full overflow-hidden flex flex-col">
        <EmptyChat userName="Munna" onSendMessage={handleSendMessage} />
      </section>
    </main>
  );
}
